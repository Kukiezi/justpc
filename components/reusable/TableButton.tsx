import { useEffect } from "react";
import styles from '../../styles/TableHeadCell.module.css'


export default function TableButton({func, text}: any) {

    return (
        <div className="w-1/6 h-24 flex items-center">
            <button onClick={() => func()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {text}
            </button>
        </div>
    );
}