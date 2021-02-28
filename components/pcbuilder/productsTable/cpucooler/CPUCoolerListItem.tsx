import ProductTableCell from "../ProductTableCell";
import TableButton from "../../../reusable/TableButton";
import TableImage from "../../mainTable/TableImage";
import ProductTableImageCell from "../ProductTableImageCell";
import { useRouter } from "next/router";
import TableCPUCoolerCell from "../../mainTable/TableCPUCoolerCell";


export default function GPUListItem(cpuCooler: any) {
    const router = useRouter();

    const addToList = async () => {
        const res = await fetch("http://localhost:3000/list/add/cpuCooler",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ cpuCooler })
            })
            .then(() => {
                router.push("/build");
            });
    }

    return (
        <div className="flex">
            <div className="flex w-3/6">
                <TableImage url={cpuCooler.cpuCooler.image} />
                <TableCPUCoolerCell cpuCooler={cpuCooler.cpuCooler} />
            </div>
            <ProductTableCell text={cpuCooler.cpuCooler.offers[0]["current_price"] + " zł"} />
            <ProductTableImageCell text={cpuCooler.cpuCooler.offers[0]["shop"]} />
            <TableButton func={addToList} text="Dodaj" />
        </div>
    );
}