import { useEffect } from "react";
import styles from '../../../styles/TableHeadCell.module.css'

type TextProps = {
    text?: string,
    processor?: any
}

export default function TableProcessorCell({text, processor}: TextProps)
{
    return(
        <div className={"w-full h-12 flex flex-wrap"}>
            <div className="w-full">
                <p className={styles.textName + " p-1"}> {processor ? processor.name : text} </p>
            </div>
            <div className="w-2/6">
                <p className={styles.textSpecName + " inline-block p-1"}>Seria:</p>
                <p className={styles.textSpecValue + " inline-block"}> {processor.series}</p>
            </div>
            <div className="w-2/6">
                <p className={styles.textSpecName + " inline-block p-1"}>Ilość rdzeni:</p>
                <p className={styles.textSpecValue + " inline-block"}> {processor.cores}</p>
            </div>
            <div className="w-2/6">
                <p className={styles.textSpecName + " inline-block p-1"}>Socket:</p>
                <p className={styles.textSpecValue + " inline-block"}> {processor.socket}</p>
            </div>
            <div className="w-2/6">
                <p className={styles.textSpecName + " inline-block p-1"}>Taktowanie:</p>
                <p className={styles.textSpecValue + " inline-block"}> {processor.core_clock}</p>
            </div>
            <div className="w-2/6">
                <p className={styles.textSpecName + " inline-block p-1"}>Boost:</p>
                <p className={styles.textSpecValue + " inline-block"}> {processor.boost_clock}</p>
            </div>
            <div className="w-2/6">
                <p className={styles.textSpecName + " inline-block p-1"}>Pamięć:</p>
                <p className={styles.textSpecValue + " inline-block"}> {processor.cache_memory}</p>
            </div>
        </div>
    );
}