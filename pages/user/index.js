import {useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())
const IndexPage = () => {
    const {data,error} = useSWR ('https://dummyjson.com/users',fetcher);

    if(error){
        return <h1>Error happened !</h1>;
    }
    if(!data){
        return <h1>Loading....</h1>;
    }
    return (
        <div>
            <h1>Users</h1>
            {data.users && data.users.map((user) => (
                // eslint-disable-next-line react/jsx-key
                <div>{user.firstName}</div>
            ))}
        </div>
    );
};

export default IndexPage;