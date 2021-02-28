import { useEffect, useState } from "react";

export function useFetch(url: string) {
    const [state, setState] = useState({data: null});

    useEffect(() => {
        setState(state => ({data: state.data}));
        fetch(url)
        .then(x => x.json())
        .then(y => {
            setState({data: y});
        });
    }, [url])
    return state;
}