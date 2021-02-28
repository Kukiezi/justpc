import { useEffect } from "react";
import styles from '../../../styles/TableHeadCell.module.css'

type TextProps = {
    text?: string,
    gpu?: any
}

export default function TableGPUCell({text, gpu}: TextProps)
{
    return(
        <div className={"w-full h-12 flex flex-wrap"}>
            <div className="w-full">
                <p className={styles.textName + " p-1"}> {gpu ? gpu.name : text} </p>
            </div>
            <div className="w-3/6">
                <p className={styles.textSpecName + " inline-block p-1"}>Chipset:</p>
                <p className={styles.textSpecValue + " inline-block"}> {gpu.chipset}</p>
            </div>
            <div className="w-3/6">
                <p className={styles.textSpecName + " inline-block p-1"}>Pamięć:</p>
                <p className={styles.textSpecValue + " inline-block"}> {gpu.memory}</p>
            </div>
            <div className="w-3/6">
                <p className={styles.textSpecName + " inline-block p-1"}>Taktowanie:</p>
                <p className={styles.textSpecValue + " inline-block"}> {gpu.core_clock}</p>
            </div>
            <div className="w-3/6">
                <p className={styles.textSpecName + " inline-block p-1"}>Boost:</p>
                <p className={styles.textSpecValue + " inline-block"}> {gpu.boost_clock}</p>
            </div>
        </div>
    );
}