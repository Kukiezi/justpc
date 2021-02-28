import { useEffect } from "react";
import ProcessorListItem from "./ProcessorListItem";
import TableHeadCell from "../../mainTable/TableHeadCell";

type ProcessorProps = {
    processors: [
        name: string,
        series: string,
        socket: string,
        boost_clock: string,
        core_clock: string,
        cache_memory: string,
        includes_cooler: string,
        integrated_graphics: string
    ]
}

export default function ProcessorList({ processors }: any) {

    return (
        <div className="shadow-md">
            <div className="flex">
                <TableHeadCell leftRadius={true} bigCell={true} text="Produkt" />
                <TableHeadCell text="Cena" />
                <TableHeadCell text="Najlepsza Oferta" />
                <TableHeadCell rightRadius={true} text="Dodaj"/>
            </div>
            {Object.values(processors).map((processor: any) => {
                return (<><ProcessorListItem key={processor.id} processor={processor} /> <hr/></>)
            })}
        </div>
    );
}