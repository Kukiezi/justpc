import { useEffect, useState } from "react";
import { getServerSideProps } from "../../../pages/build";
import EmptyTableColumn from "./EmptyTableColumn";
import Product from "./Product";
import TableCell from "./TableCell";
import TableHeadCell from "./TableHeadCell";

type BuildProps = {
    processors: any
}

function RenderProduct({component, product, removeProduct}: any ) {
    if (product) {
        return <Product removeProduct={removeProduct} component={component} props={product}/>
    }
    return <EmptyTableColumn component={component}/>
}

export default function Table({items}: any) {

    const [products, setProducts] = useState({...items})

    const removeProduct = (component: any) => {
        switch(component) {
            case "Procesor":
                setProducts({
                    ...products, 
                    ["processor"]: null
                })
                break;
            case "Płyta Główna":
                setProducts({
                    ...products, 
                    ["motherboard"]: null
                })
                break;
            case "Karta Graficzna":
                setProducts({
                    ...products, 
                    ["gpu"]: null
                })
                break;
            case "Chłodzenie":
                setProducts({
                    ...products,
                    ["cpuCooler"]: null
                })
            default:
                console.log("do nothing");
        }
    }

    useEffect(() => {
        setProducts(items)
    }, [items])

    return (
        <>
            <div className="flex">
                <TableHeadCell leftRadius={true} text="Komponent" />
                <TableHeadCell bigCell={true} text="Produkt" />
                <TableHeadCell text="Cena" />
                <TableHeadCell text="Najlepsza oferta" />
                <TableHeadCell rightRadius={true} text="Kup" />
            </div>
            <RenderProduct removeProduct={removeProduct} component="Procesor" product={products.processor}/>
            <hr/>
            <RenderProduct removeProduct={removeProduct} component="Płyta Główna" product={products.motherboard}/>
            <hr/>
            <RenderProduct removeProduct={removeProduct} component="Karta Graficzna" product={products.gpu}/>
            <hr/>
            <RenderProduct removeProduct={removeProduct} component="Chłodzenie" product={products.cpuCooler}/>
            <hr/>
            <RenderProduct removeProduct={removeProduct} component="Obudowa" product={products.obudowa}/>
            <hr/>
            <RenderProduct removeProduct={removeProduct} component="Ram" product={products.ram}/>
        </>
    );
}