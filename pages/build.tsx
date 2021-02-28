import { useEffect } from "react";
import Builder from "../components/pcbuilder/mainTable/Builder";
import { GetServerSideProps } from 'next'

export default function Build(props: any) {
    useEffect(() => {
        console.log(props)
    })
    return (
        <Builder items={props}/>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
    const res = await fetch("http://localhost:3000/list/getItems", {
        method: "get",
        headers: ctx.req ? { cookie: ctx.req.headers.cookie } : undefined
    })
    .then((res) => res.json())
    .catch((error) => error)

    return { props: {...res} };
}
