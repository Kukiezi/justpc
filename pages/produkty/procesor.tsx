import { GetServerSideProps } from "next";
import { useEffect } from "react";
import ProcessorList from "../../components/pcbuilder/productsTable/processor/ProcessorList";

type ProcessorProps = {
    processor: {
        name: string,
        series: string,
        socket: string,
        boost_clock: string,
        core_clock: string,
        cache_memory: string,
        includes_cooler: string,
        integrated_graphics: string
    }
}


export default function Procesor(props: any) {

    return (
        <div className="">
            <div className="grid grid-cols-12">
                <div className="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 border-b border-solid md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start ">
                    <p>test</p>
                </div>
                <div className="col-span-12 md:border-solid px-3 py-6 md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10">
                    <ProcessorList processors={props} />
                </div>
            </div>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
    const res = await fetch("http://localhost:3000/api/v1/procesory", {
        method: "get",
    })
    .then((res) => res.json())
    .catch((error) => error)

    return { props: {...res} };
}