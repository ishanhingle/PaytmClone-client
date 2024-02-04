import axios from 'axios';
import React, { useState } from 'react'
import backendURL from '../config/config';
import {
    Card,
    CardBody,
    Typography,
    IconButton
} from "@material-tailwind/react";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { balanceAtom } from '../store/balance';


function PaymentCard({ toUser,}) {
    const [paymentDone, setPaymentDone] = useState(false);
    const [amount, setAmount] = useState("");
    const [balance,setBalance]=useRecoilState(balanceAtom);
    const postBody = {
        amount: amount,
        toUserId: toUser.id
    }
    const transferMoney = async () => {
        axios.post(backendURL + "/accounts/transferMoney", { ...postBody }, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
                "Content-Type": "application/json"
            }
        }).then(() => {
                setPaymentDone(true);
            })
            .then(()=>{
                axios.get(backendURL + "/accounts/balance", {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                }).then(res => {
                    console.log(res.data);
                    setBalance(res.data.balance)
                })
            })
        .catch(err => {alert(err) })
    }
    return (
        <Card className="mx-auto w-full max-w-[24rem]">
            <CardBody className="flex p-0 flex-col justify-center items-center">
                {!paymentDone ?
                    (<div>
                        <Typography variant="h4" className='m-2' color="blue-gray">
                            TransferMoney
                        </Typography>
                        <h1 className>to <h1 className='inline text-2xl font-bold'>{toUser.name}</h1> </h1>
                        <div className='flex gap-1 mt-2 justify-center items-center'>
                            <h1 className='text-2xl'>₹</h1>
                            <input id='amount' className='inline border-black border-2 rounded-2xl p-2' onChange={(e) => { setAmount(e.target.value) }}></input>
                        </div>
                        <button className='bg-blue-gray-50 p-2 m-3 mt-5 rounded-2xl text-2xl hover:bg-blue-gray-400 hover:text-white delay-150' onClick={transferMoney}> Send Money</button>
                    </div>)
                     :
                    <div className='flex flex-col justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                          <path fill="#c8e6c9" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path>
                          <path fill="#4caf50" d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"></path>
                     </svg>
                       <h1>Payment Done!</h1>
                    </div>}
            </CardBody>
        </Card>
    )
}

export default PaymentCard