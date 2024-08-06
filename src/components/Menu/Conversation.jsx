import Conversations from "./Conversations";
import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AcountContext } from "../Context/AccountProvider";

export default function Conversation() {
    let url = "http://localhost:3000";
    let [users, setUsers] = useState([]);
    let {account}=useContext(AcountContext);
    const fetchData = async () => {
        try {
            let response = await axios.get(`${url}/getusers`);
            setUsers(response.data); // Use response.data to update the state with the user data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div>
            {users.map((user, idx) => (
                (account.sub != user.sub ?
                <Conversations users={user} key={idx} />:null)
            ))}
        </div>
    );
}
