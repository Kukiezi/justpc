import { useEffect } from "react";
import styles from '../../../styles/TableHeadCell.module.css'

type TextProps = {
    text?: string,
    motherboard?: any
}

export default function TableMotherboardCell({text, motherboard}: TextProps)
{
    return(
        <div className={"w-full h-12 flex flex-wrap"}>
            <div className="w-full">
                <p className={styles.textName + " p-1"}> {motherboard ? motherboard.name : text} </p>
            </div>
            <div className="w-3/6">
                <p className={styles.textSpecName + " inline-block p-1"}>Chipset:</p>
                <p className={styles.textSpecValue + " inline-block"}> {motherboard.chipset}</p>
            </div>
            <div className="w-3/6">
                <p className={styles.textSpecName + " inline-block p-1"}>Socket:</p>
                <p className={styles.textSpecValue + " inline-block"}> {motherboard.socket}</p>
            </div>
            <div className="w-3/6">
                <p className={styles.textSpecName + " inline-block p-1"}>Format:</p>
                <p className={styles.textSpecValue + " inline-block"}> {motherboard.format}</p>
            </div>
            <div className="w-3/6">
                <p className={styles.textSpecName + " inline-block p-1"}>Maksymalna pamięć:</p>
                <p className={styles.textSpecValue + " inline-block"}> {motherboard.memory_max}</p>
            </div>
        </div>
    );
}