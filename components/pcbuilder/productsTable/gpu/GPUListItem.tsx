import { useEffect } from "react";
import ProductTableCell from "../ProductTableCell";
import TableButton from "../../../reusable/TableButton";
import TableImage from "../../mainTable/TableImage";
import TableProcessorCell from "../../mainTable/TableProcessorCell";
import ProductTableImageCell from "../ProductTableImageCell";
import TableMotherboardCell from "../../mainTable/TableMotherboardCell";
import { useRouter } from "next/router";
import TableGPUCell from "../../mainTable/TableGPUCell";


export default function GPUListItem(gpu: any) {
    const router = useRouter();

    const addToList = async () => {
        const res = await fetch("http://localhost:3000/list/add/gpu",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ gpu })
            })
            .then(() => {
                router.push("/build");
            });
    }

    return (
        <div className="flex">
            <div className="flex w-3/6">
                <TableImage url={gpu.gpu.image} />
                <TableGPUCell gpu={gpu.gpu} />
            </div>
            <ProductTableCell text={gpu.gpu.offers[0]["current_price"] + " zł"} />
            <ProductTableImageCell text={gpu.gpu.offers[0]["shop"]} />
            <TableButton func={addToList} text="Dodaj" />
        </div>
    );
}