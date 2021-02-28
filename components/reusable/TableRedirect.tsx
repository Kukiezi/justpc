import { useEffect } from "react";
import Link from "next/link";
import styles from '../../styles/TableHeadCell.module.css'


export default function TableRedirect({ href, text }: any) {

    return (
        <div className="w-1/6 h-24 flex items-center">
            <Link href={href}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {text}
                </button>
            </Link>
        </div >
    );
}