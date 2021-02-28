import { useEffect } from "react";
import styles from '../../../styles/TableHeadCell.module.css'

type TextProps = {
    text: string,
    bigCell?: boolean,
}

export default function TableCell({bigCell, text}: TextProps)
{
    return(
        <div className={(bigCell ? "w-2/6 " : "w-1/6 flex flex-wrap items-center") + " h-24"}>
            <p className={styles.text + " p-2"}> {text} </p>
        </div>
    );
}