import { useEffect } from "react";
import ProcessorListItem from "../processor/ProcessorListItem";
import TableHeadCell from "../../mainTable/TableHeadCell";
import MotherboardListItem from "./MotherboardListItem";

export default function MotherboardList({ motherboards }: any) {
    return (
        <div className="shadow-md">
            <div className="flex">
                <TableHeadCell leftRadius={true} bigCell={true} text="Produkt" />
                <TableHeadCell text="Cena" />
                <TableHeadCell text="Najlepsza Oferta" />
                <TableHeadCell rightRadius={true} text="Dodaj"/>
            </div>
            {Object.values(motherboards).map((motherboard: any) => {
                return (<><MotherboardListItem key={motherboard.id} motherboard={motherboard} /> <hr/></>)
            })}
        </div>
    );
}