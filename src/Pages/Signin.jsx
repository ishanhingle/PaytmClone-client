import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
} from "@material-tailwind/react";
import { Link,useNavigate } from 'react-router-dom';
import backendURL from '../config/config';
import axios from 'axios';
import { useRecoilState, useSetRecoilState} from 'recoil';
import {currUser} from '../store/currUser';


function Signin() {
        const navigate=useNavigate();
        const [body,setBody]=useState(null)
        const setUser=useSetRecoilState(currUser);
        const handleChange=(e)=>{
            setBody(prev=>( {...prev,[e.target.name]:e.target.value}))
            //console.log(e.target.value)
        }
        const handleSubmit=(e)=>{
           e.preventDefault();
           handleSignin();
        }
        const handleSignin=async()=>{
          try {
            const res=await axios.post(`${backendURL}/user/signin`,{...body},{
              headers:{
                "Content-Type": "application/json",
              }
            })
            const token=res.data.token;
            localStorage.setItem("token",res.data.token);
            const getUser=await axios.get(`${backendURL}/user`,
            {headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
            })
            //console.log(getUser.data);
            setUser(getUser.data);
            navigate('/dashboard');
          } catch (error) {
            alert(error.response?error.response.data.message:error);
            console.log(error);
          }
        }
    return (
        <div className='flex justify-center align-middle h-screen p-40'> 
            <Card className="w-96">
                <CardHeader
                    variant="gradient"
                    color="gray"
                    className="mb-4 grid h-28 place-items-center"
                >
                    <Typography variant="h3" color="white">
                        Sign In
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <Input label="Username" onChange={handleChange} name='username' size="lg" />
                    <Input label="Password" type='password' onChange={handleChange} name='password' size="lg" />
                </CardBody>
                <CardFooter className="pt-0">
                    <Button variant="gradient" fullWidth onClick={handleSubmit}>
                        Sign In
                    </Button>
                    <Typography variant="small" className="mt-6 flex justify-center">
                        Don&apos;t have an account?
                        <Typography
                            as="a"
                            href="#signup"
                            variant="small"
                            color="blue-gray"
                            className="ml-1 font-bold"
                        >
                            <Link to='/signup'>SignUp</Link>
                        </Typography>
                    </Typography>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Signin