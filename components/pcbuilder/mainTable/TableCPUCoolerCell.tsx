import { useEffect } from "react";
import styles from '../../../styles/TableHeadCell.module.css'

type TextProps = {
    text?: string,
    cpuCooler?: any
}

export default function TableCPUCoolerCell({text, cpuCooler}: TextProps)
{
    return(
        <div className={"w-5/6 h-12 flex flex-wrap"}>
            <div className="w-full">
                <p className={styles.textName + " p-1"}> {cpuCooler ? cpuCooler.name : text} </p>
            </div>
            <div className="w-3/6">
                <p className={styles.textSpecName + " inline-block p-1"}>RPM:</p>
                <p className={styles.textSpecValue + " inline-block"}> {cpuCooler.rpm}</p>
            </div>
            <div className="w-3/6">
                <p className={styles.textSpecName + " inline-block p-1"}>Hałas:</p>
                <p className={styles.textSpecValue + " inline-block"}> {cpuCooler.noise}</p>
            </div>
        </div>
    );
}