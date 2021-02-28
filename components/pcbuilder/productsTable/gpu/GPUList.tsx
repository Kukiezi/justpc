import { useEffect, useState } from "react";
import TableHeadCell from "../../mainTable/TableHeadCell";
import GPUListItem from "./GPUListItem";

export default function GPUList({ gpus }: any) {

    return (
        <div className="shadow-md">
            <div className="flex">
                <TableHeadCell leftRadius={true} bigCell={true} text="Produkt" />
                <TableHeadCell text="Cena" />
                <TableHeadCell text="Najlepsza Oferta" />
                <TableHeadCell rightRadius={true} text="Dodaj"/>
            </div>
            {Object.values(gpus).map((gpu: any) => {
                return (<><GPUListItem key={gpu.id} gpu={gpu} /> <hr/></>)
            })}
        </div>
    );
}