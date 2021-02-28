import { useEffect, useState } from "react";
import TableHeadCell from "../../mainTable/TableHeadCell";
import CPUCoolerListItem from "./CPUCoolerListItem";

export default function GPUList({ cpuCoolers }: any) {

    return (
        <div className="shadow-md">
            <div className="flex">
                <TableHeadCell leftRadius={true} bigCell={true} text="Produkt" />
                <TableHeadCell text="Cena" />
                <TableHeadCell text="Najlepsza Oferta" />
                <TableHeadCell rightRadius={true} text="Dodaj"/>
            </div>
            {Object.values(cpuCoolers).map((cpuCooler: any) => {
                return (<><CPUCoolerListItem key={cpuCooler.id} cpuCooler={cpuCooler} /> <hr/></>)
            })}
        </div>
    );
}