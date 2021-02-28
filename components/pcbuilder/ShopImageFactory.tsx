import { useEffect } from "react";

function getImage(shop: string) {
    if (shop == "x-kom") {
        return <img className="object-contain h-12" src="/xkom.jpg" alt="x-kom logo" />;
    }
    return <img className="object-contain h-12" src="/xkom.jpg" alt="x-kom logo" />;
}

export default function ShopImageFactory(shop: any) {

    return (
        <>
            {getImage(shop.shop)}
        </>
    );
}