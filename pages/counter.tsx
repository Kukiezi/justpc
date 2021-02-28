import { useState } from 'react'
// import useSWR from 'swr'
import { GetServerSideProps } from 'next'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import { useFetch } from '../components/useFetch';

export default function Counter(props: any) {
  const [count, setCount] = useState(0)
  const { data } = useFetch('http://localhost:3000/v1/test')

  return(
    <div>
      <button onClick={() => setCount(currentCount => currentCount + 1)}>+</button>
      <p>{count}</p>
      <p>{props.myParams.name}</p>
      <p>{data}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
    </div>
  );
}

Counter.getInitialProps = async ({query} : any) => {
  const res = await fetch("http://localhost:3000/api/v1/processors");
  const json = await res.json();
  return {myParams : query}
}

// const fetcher = (url: string) => fetch(url).then(r => r.json())

// export default function Counter() {
//     const { data, error } = useSWR('/api/hello', fetcher)
//     if (error) return <div>failed to load</div>
//     if (!data) return <div>loading...</div>
//     return <div>Hi {data.name} !</div>
//   }
