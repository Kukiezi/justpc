import { useEffect } from "react";

function getLink(component: string) {
    switch(component) {
        case "Procesor":
            return "/produkty/procesor";
        case "Płyta Główna":
            return "/produkty/motherboard"
        case "Karta Graficzna":
            return "/produkty/gpu"
        case "Chłodzenie":
            return "/produkty/cpu-cooler"
        default:
            return ""
    }
}

export default function LinkFactory(component: string) {

    return getLink(component);
}