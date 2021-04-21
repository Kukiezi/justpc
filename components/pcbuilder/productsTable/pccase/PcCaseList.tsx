import { useEffect, useState } from "react";
import TableHeadCell from "../../mainTable/TableHeadCell";
import PcCaseListItem from "./PcCaseListItem";

export default function PcCaseList({ pcCases }: any) {

    return (
        <div className="shadow-md">
            <div className="flex">
                <TableHeadCell leftRadius={true} bigCell={true} text="Produkt" />
                <TableHeadCell text="Cena" />
                <TableHeadCell text="Najlepsza Oferta" />
                <TableHeadCell rightRadius={true} text="Dodaj"/>
            </div>
            {Object.values(pcCases).map((pcCase: any) => {
                return (<><PcCaseListItem key={pcCase.id} pcCase={pcCase} /> <hr/></>)
            })}
        </div>
    );
}