import { useEffect } from "react";
import ShopImageFactory from "../ShopImageFactory";

type TextProps = {
    text: string,
    bigCell?: boolean
}

export default function ProductTableImageCell({bigCell, text}: TextProps)
{

    return(
        <div className={(bigCell ? "w-2/6 " : "w-1/6 flex items-center") + " h-24"}>
            <ShopImageFactory shop={text}/>
        </div>
    );
}