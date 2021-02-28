import { useEffect } from "react";
import { useRouter } from 'next/router';
import ProductTableCell from "../ProductTableCell";
import TableButton from "../../../reusable/TableButton";
import TableImage from "../../mainTable/TableImage";
import TableProcessorCell from "../../mainTable/TableProcessorCell";
import ProductTableImageCell from "../ProductTableImageCell";

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

export default function ProcessorListItem(processor: any) {

    const router = useRouter();

    const addToList = async () => {
        const res = await fetch("http://localhost:3000/list/add/processor",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ processor })
            })
            .then(() => {
                router.push("/build")
            });
        
    }

    return (
        <div className="flex">
            <div className="flex w-3/6">
                <TableImage url={processor.processor.image} />
                <TableProcessorCell processor={processor.processor} />
            </div>
            <ProductTableCell text={processor.processor.offers[0]["current_price"] + " zł"} />
            <ProductTableImageCell text={processor.processor.offers[0]["shop"]} />
            <TableButton func={addToList} text="Dodaj" />
        </div>
    );
}