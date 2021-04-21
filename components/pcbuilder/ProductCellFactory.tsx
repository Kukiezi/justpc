import TableGPUCell from "./mainTable/TableGPUCell";
import TableMotherboardCell from "./mainTable/TableMotherboardCell";
import TableProcessorCell from "./mainTable/TableProcessorCell";
import TableCPUCoolerCell from "./mainTable/TableCPUCoolerCell";
import TablePcCaseCell from "./mainTable/TablePcCaseCell";

function getProductCell(component: any, product: any) {
    switch(component) {
        case "Procesor":
            return <TableProcessorCell processor={product}/>;
        case "Płyta Główna":
            return <TableMotherboardCell motherboard={product}/>
        case "Karta Graficzna":
            return <TableGPUCell gpu={product}/>
        case "Chłodzenie":
            return <TableCPUCoolerCell cpuCooler={product}/>
        case "Obudowa":
            return <TablePcCaseCell pcCase={product}/>
        default:
            return null
    }
}

export default function ProductCellFactory({component, product}: any) {
    return getProductCell(component, product);
}