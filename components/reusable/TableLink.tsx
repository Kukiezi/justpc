import { useEffect } from "react";
import styles from '../../styles/TableLink.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'



const deleteProduct = async (component: string, removeProduct: any) => {
    switch(component) {
        case "Procesor":
            await fetch("http://localhost:3000/api/v1/processor", {
                method: "DELETE"
            });
            break;
        case "Płyta Główna":
            await fetch("http://localhost:3000/api/v1/motherboard", {
                method: "DELETE"
            });
            break;
        case "Karta Graficzna":
            await fetch("http://localhost:3000/api/v1/gpu", {
                method: "DELETE"
            });
        case "Chłodzenie":
            await fetch("http://localhost:3000/api/v1/cpuCooler", {
                method: "DELETE"
            });
            break;
        case "Obudowa":
            await fetch("http://localhost:3000/api/v1/pcCase", {
                method: "DELETE"
            });
            break;
        default:
            console.log("do nothing");
    }
    removeProduct(component)

}

export default function TableLink({ link, text, component, removeProduct }: any) {
    return (
        <div className="w-1/6 h-24 flex items-center">
            <div className="w-4/6 h-24 flex items-center">
                <a target="_blank" href={link} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {text}
                </a>
            </div>
            <div className="w-2/6 h-24 flex items-center">
                <FontAwesomeIcon className={styles.deleteicon} icon={faTimes} cursor="pointer" onClick={() => deleteProduct(component, removeProduct)} />
            </div>
        </div>
    );
}