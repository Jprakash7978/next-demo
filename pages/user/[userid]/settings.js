import {useRouter } from "next/router";



const SettingsPage = () => {
    const router = new useRouter();
    console.log(router);
    return (
        <div>
            <h1>Hello this is user SettingsPage for {router.query.username}</h1>
        </div>
    );
};

export default SettingsPage;