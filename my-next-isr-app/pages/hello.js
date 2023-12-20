// pages/hello.js

import { useEffect, useState } from 'react';

const Hello = ({ message }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>{message}</h1>
            <p>Count: {count}</p>
        </div>
    );
};

export async function getStaticProps() {
    const message = '안녕 세계';

    return {
        props: {
            message,
        },
        revalidate: 10, // 10초마다 페이지를 재생성
    };
}

export default Hello;
