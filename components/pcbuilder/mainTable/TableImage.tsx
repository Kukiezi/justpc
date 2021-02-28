import { useEffect } from "react";
import styles from '../../styles/TableHeadCell.module.css'

export default function TableImage({url}: any)
{

    return(
        <div className={"w-auto h-full"}>
            <img className="object-contain h-24" src={url}/>
        </div>
    );
}