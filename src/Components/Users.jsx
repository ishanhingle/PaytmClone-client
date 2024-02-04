import axios from 'axios';
import React, { useEffect, useState } from 'react'
import backendURL from '../config/config';
import UserListItem from './UserListItem';
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    IconButton
} from "@material-tailwind/react";
import PaymentCard from './PaymentCard';
function Users() {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    const [toUser, setToUser] = useState(null);
    const [showPaymentCard, setShowPaymentCard] = useState(false);
    const closeCard = () => {
        console.log("close card called")
        setShowPaymentCard(false);
    };
    useEffect(() => {
        axios.get(`${backendURL}/user/bulk?name=` + filter, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }).then((res) => {
            setUsers(res.data.users);
        })
    }, [filter, showPaymentCard]);
    return (
        <div className='w-full mx-3 flex flex-col items-center'>
            <h1 className='text-5xl p-3 font-bold'>Users</h1>
            <input
                onChange={(e) => setFilter(e.target.value)}
                placeholder='Search Users'
                className='w-4/5 mb-7 p-2 rounded-2xl  border-black border-2 focus:border-4'
            />
            <div className='w-full flex flex-col items-center'>
                {(users.length > 0) ?
                    users.map(user => <UserListItem user={user} setShowPaymentCard={setShowPaymentCard} setToUser={setToUser} />) :
                    <div> No Such Users! </div>
                }
            </div>
            <Dialog
                size="xs"
                open={showPaymentCard}
                className="bg-transparent shadow-none"
                handler={closeCard}
            > <div className=''>
                    <IconButton
                        color="white"
                        size="lg"
                        variant="text"
                        onClick={closeCard}
                        className=''
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>
                <PaymentCard toUser={toUser} />
            </Dialog>
        </div>
    )
}
export default Users