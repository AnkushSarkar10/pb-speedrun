import PocketBase, { UnsubscribeFunc } from "pocketbase";
import { Suspense, useEffect, useState } from "react";
const pb = new PocketBase("http://127.0.0.1:8090");
pb.autoCancellation(false);

export const getServerSideProps = async () => {
    const resultList = await pb.collection("manz").getList(1, 50);
    return { props: { data: JSON.parse(JSON.stringify(resultList.items)) } };
};

export default function Home({ data }) {
    const [dynamicData, setDynamicData] = useState(data);

    useEffect(() => {
        let unsubscribe: UnsubscribeFunc;
        const subscribe = async () => {
            unsubscribe = await pb.collection("manz").subscribe("*", (e) => {
              pb.collection("manz").getList(1, 50).then((resultList) => {
                setDynamicData(JSON.parse(JSON.stringify(resultList.items)));
                console.log(e)
              })
            });
        };
        subscribe();

        return () => {
            unsubscribe?.();
        };
    }, []);
    return (
        <main className="flex flex-col items-center">
            <h1 className="text-5xl font-bold pb-10">Data From Pocket Base</h1>
            <h2 className="text-2xl font-light pb-5">
                This text is from the server
            </h2>

            <Suspense fallback={<p>...</p>}>
                {Object.values(dynamicData).map((value, index) => {
                    return (
                        <li
                            key={index}
                            className="underline font-semibold text-xl"
                        >
                            {value.name}
                        </li>
                    );
                })}
            </Suspense>
        </main>
    );
}
