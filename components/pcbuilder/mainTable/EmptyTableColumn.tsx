import TableButton from "../../reusable/TableButton";
import TableRedirect from "../../reusable/TableRedirect";
import LinkFactory from "../LinkFactory";
import TableCell from "./TableCell";

export default function EmptyTableColumn({component}: any)
{
    return (
        <div className="flex">
            <TableCell text={component} />
            <TableRedirect href={LinkFactory(component)}  text="Wybierz komponent"/>
        </div>
    )
}