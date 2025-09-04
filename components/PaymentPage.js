"use client"

import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { useSession } from 'next-auth/react'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
// import { useSearchParams, useRouter, notFound } from 'next/navigation'
import Image from 'next/image'


// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Bounce } from 'react-toastify';
// import { notFound } from "next/navigation"


const PaymentPage = ({ username }) => {
    const { data: session } = useSession()

    const [paymentform, setPaymentform] = useState({})

    const [currentUser, setcurrentUser] = useState({})
    const [payments, setPayments] = useState([])

    // const [scriptLoaded, setScriptLoaded] = useState(false)
    // const searchParams = useSearchParams()
    // const router = useRouter()

    useEffect(() => {
        getData()
    }, [])

    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData = async () => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
        console.log(u, dbpayments)
    }

    // If user is not found, show 404 page
    //     if (!u) {
    //         notFound()
    //         return
    //     }
    // }

    const pay = async (amount) => {
        // Check if Razorpay script is loaded
        // if (typeof window !== 'undefined' && !window.Razorpay) {
        //     alert('Payment gateway is still loading. Please try again in a moment.')
        //     return
        // }

        // Get the order Id
        // Create a new instance of Razzorpay
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        let options = {
            // "key": process.env.KEY_ID, // Enter the Key ID generated from the Dashboard
            "key": process.env.NEXT_PUBLIC_KEY_ID,
            "amount": amount, // Amount is in currency subunits. 
            "currency": "INR",
            "name": "Get ME A Chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            // "callback_url": `${process.env.URL}/api/razorpay`,
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Chirag Vasava", //your customer's name
                "email": "v.chira.007@gmail.com",
                "contact": "1234567890"
                //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        console.log(a)
        console.log(a.id)
        console.log(orderId)
        console.log(options)

        let rzp1 = new window.Razorpay(options);
        rzp1.open();
    }

    return (
        <>
            <Script
                src="https://checkout.razorpay.com/v1/checkout.js"
            // onLoad={() => {
            //     console.log('Razorpay script loaded')
            //     setScriptLoaded(true)
            // }}
            // onError={() => {
            //     console.error('Failed to load Razorpay script')
            //     alert('Failed to load payment gateway. Please refresh the page.')
            // }}
            />


            <div className="justify-center items-center flex flex-col min-h-screen text-white">
                {/* Cover section */}
                <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                    {/* Cover Image */}
                    <Image
                        src="/Drink Cover.png" // from public folder
                        alt="Tea Goblin Cafe"
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* Black Goblin Avatar */}
                    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 border-4 border-white rounded-full bg-black">
                        <Image
                            src="/Drink Profile.jpg" // from public folder
                            alt="Goblin Avatar"
                            width={150}
                            height={150}
                            className="rounded-full"
                        />
                    </div>
                </div>

                {/* Profile Info Section */}
                <div className="mt-20 flex flex-col items-center text-center px-4">
                    <h1 className="text-2xl font-bold">
                        @{username}</h1>
                    <p className="text-slate-400">Creating Animated art for VTTs</p>
                    <p className="text-slate-400">
                        9,719 members · 82 posts · $15,450/release
                    </p>
                </div>

                <br />

                <div className="payment flex gap-3 w-[80%] mt-11">
                    <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-7">

                        {/* SHows list of all the supportes as a leaderboard */}
                        <h2 className="text-2xl font-bold my-5">Supporters</h2>

                        <ul className="mx-5 text-lg">
                            {payments.map((p, i) => {
                                return <li key={i} className="my-4 flex gap-2 items-center">
                                    <Image width={33} height={33} src="/avatar.gif" alt="user avatar" />
                                    <span>
                                        {p.name} donated <span className='font-bold'>₹{p.amount / 100}</span> with a message &quot;{p.message}&quot;
                                    </span>
                                </li>
                            })}
                        </ul>
                    </div>

                    <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
                        <div className="flex gap-2 flex-col">

                            {/* input for name and message */}
                            <input onChange={handleChange} value={paymentform.name} name='name' type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Name" />

                            <input onChange={handleChange} value={paymentform.message} name='message' type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Message" />

                            <input onChange={handleChange} value={paymentform.amount} name='amount' type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Amount" />

                            <button onClick={() => pay(Number.parseInt(paymentform.amount) * 100)} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm p-3 px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">Pay
                            </button>

                        </div>
                        {/* or choose from these amounts */}
                        <div className="flex gap-2 mt-5">
                            <button className="bg-slate-800 p-3 rounded-lg cursor-pointer" onClick={() => pay(1000)}>Pay ₹10</button>
                            <button className="bg-slate-800 p-3 rounded-lg cursor-pointer" onClick={() => pay(2000)}>Pay ₹20</button>
                            <button className="bg-slate-800 p-3 rounded-lg cursor-pointer" onClick={() => pay(3000)}>Pay ₹30</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PaymentPage