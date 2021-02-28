import { useEffect } from "react";
import TableLink from "../../reusable/TableLink";
import ProductTableImageCell from "../productsTable/ProductTableImageCell";
import TableCell from "./TableCell";
import TableImage from "./TableImage";
import TableProcessorCell from "./TableProcessorCell";
import ProductCellFactory from "../ProductCellFactory"



export default function Product({ component, props, removeProduct }: any) {
    
    return (
        <div className="flex">
            <TableCell text={component} />
            <div className="flex w-3/6">
                <TableImage url={props.image} />
                <ProductCellFactory text="xd" component={component} product={props}/>
            </div>
            <TableCell text={props.offers[0]["current_price"] + " zł"} />
            <ProductTableImageCell text={props.offers[0]["shop"]} />
            <TableLink removeProduct={removeProduct} link={props.offers[0]["link"]} text="Kup" component={component}/>
        </div>
    );
}