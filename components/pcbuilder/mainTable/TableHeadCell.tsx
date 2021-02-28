import { useEffect } from "react";
import styles from '../../../styles/TableHeadCell.module.css'

type TextProps = {
    text: string,
    rightRadius?: boolean,
    leftRadius?: boolean,
    bigCell?: boolean
}

export default function TableHeadCell({text, rightRadius, leftRadius, bigCell}: TextProps)
{
    return(
        <div className={styles.headcontainer + (bigCell ? " w-3/6 " : " w-1/6") + " h-8 flex " + (rightRadius ? "rounded-tr-lg " : "") + (leftRadius ? "rounded-tl-lg" : "")}>
            <p className={styles.headtext + " p-2"}>{text}</p>
        </div>
    );
}