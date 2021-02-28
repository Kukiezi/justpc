import { useEffect } from "react";
import ProductTableCell from "../ProductTableCell";
import TableButton from "../../../reusable/TableButton";
import TableImage from "../../mainTable/TableImage";
import TableProcessorCell from "../../mainTable/TableProcessorCell";
import ProductTableImageCell from "../ProductTableImageCell";
import TableMotherboardCell from "../../mainTable/TableMotherboardCell";
import { useRouter } from "next/router";

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

export default function MotherboardListItem(motherboard: any) {

    const router = useRouter();

    const addToList = async () => {
        const res = await fetch("http://localhost:3000/list/add/motherboard",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ motherboard })
            })
            .then(() => {
                router.push("/build");
            });
    }

    return (
        <div className="flex">
            <div className="flex w-3/6">
                <TableImage url={motherboard.motherboard.image} />
                <TableMotherboardCell motherboard={motherboard.motherboard} />
            </div>
            <ProductTableCell text={motherboard.motherboard.offers[0]["current_price"] + " zł"} />
            <ProductTableImageCell text={motherboard.motherboard.offers[0]["shop"]} />
            <TableButton func={addToList} text="Dodaj" />
        </div>
    );
}