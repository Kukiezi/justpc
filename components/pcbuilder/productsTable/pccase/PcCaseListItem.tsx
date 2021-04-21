import ProductTableCell from "../ProductTableCell";
import TableButton from "../../../reusable/TableButton";
import TableImage from "../../mainTable/TableImage";
import ProductTableImageCell from "../ProductTableImageCell";
import { useRouter } from "next/router";
import TablePcCaseCell from "../../mainTable/TablePcCaseCell";


export default function PcCaseListItem(pcCase: any) {
    const router = useRouter();

    const addToList = async () => {
        const res = await fetch("http://localhost:3000/list/add/pcCase",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ pcCase })
            })
            .then(() => {
                router.push("/build");
            });
    }

    return (
        <div className="flex">
            <div className="flex w-3/6">
                <TableImage url={pcCase.pcCase.image} />
                <TablePcCaseCell pcCase={pcCase.pcCase} />
            </div>
            <ProductTableCell text={pcCase.pcCase.offers[0]["current_price"] + " zł"} />
            <ProductTableImageCell text={pcCase.pcCase.offers[0]["shop"]} />
            <TableButton func={addToList} text="Dodaj" />
        </div>
    );
}