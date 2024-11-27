import {useRouter } from "next/router";



const Page = () => {
    const router = new useRouter();
    console.log(router);
    return (
        <div>
            <h1>Hello this is user page for {router.query.userid}</h1>
        </div>
    );
};

export default Page;