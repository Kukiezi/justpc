import { useEffect } from "react";
import styles from '../../../styles/TableHeadCell.module.css'

type TextProps = {
    text?: string,
    pcCase?: any
}

export default function TablePcCaseCell({text, pcCase}: TextProps)
{
    return(
        <div className={"w-5/6 h-12 flex flex-wrap"}>
            <div className="w-full">
                <p className={styles.textName + " p-1"}> {pcCase ? pcCase.name : text} </p>
            </div>
            <div className="w-3/6">
                <p className={styles.textSpecName + " inline-block p-1"}>typ kabiny:</p>
                <p className={styles.textSpecValue + " inline-block"}> {pcCase.cabinet_type}</p>
            </div>
            <div className="w-3/6">
                <p className={styles.textSpecName + " inline-block p-1"}>panel boczny:</p>
                <p className={styles.textSpecValue + " inline-block"}> {pcCase.side_panel}</p>
            </div>
        </div>
    );
}