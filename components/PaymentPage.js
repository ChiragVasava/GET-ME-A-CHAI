"use client"

import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { useSession } from 'next-auth/react'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
import { useSearchParams, useRouter, notFound } from 'next/navigation'
import Image from 'next/image'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PaymentPage = ({ username }) => {
    const { data: session } = useSession()

    const [paymentform, setPaymentform] = useState({ name: "", message: "", amount: "" })
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setPayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (searchParams.get("paymentdone") == "true") {
            toast('Thanks For Your Donation 💸', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
        router.push(`/${username}`)
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

    const pay = async (amount) => {
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        let options = {
            "key": currentUser.razorpayid,
            "amount": amount,
            "currency": "INR",
            "name": "Get ME A Chai",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId,
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": {
                "name": "Chirag Vasava",
                "email": "v.chira.007@gmail.com",
                "contact": "1234567890"
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
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Script src="https://checkout.razorpay.com/v1/checkout.js" />

            <div className="min-h-screen bg-gray-900 text-white">
                {/* Cover Section */}
                <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[400px]">
                    {/* Cover Image */}
                    {currentUser.coverpic ? (
                        <Image
                            src={currentUser.coverpic}
                            alt="User Coverpic"
                            fill
                            className="object-cover"
                            priority
                        />
                    ) : (
                        <Image
                            src="/Fallback Cover.png"
                            alt="Fallback Cover"
                            fill
                            className="object-cover"
                            priority
                        />
                    )}

                    {/* Profile Avatar */}
                    <div className="absolute -bottom-8 sm:-bottom-12 md:-bottom-16 left-1/2 transform -translate-x-1/2 border-2 sm:border-4 border-white rounded-full bg-black">
                        {currentUser.profilepic ? (
                            <Image
                                src={currentUser.profilepic}
                                alt="User Avatar"
                                width={64}
                                height={64}
                                className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full object-cover"
                            />
                        ) : (
                            <Image
                                src="/Fallback Profile.png"
                                alt="Fallback Avatar"
                                width={64}
                                height={64}
                                className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full object-cover"
                            />
                        )}
                    </div>
                </div>

                {/* Profile Info Section */}
                <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 flex flex-col items-center text-center px-4 sm:px-6">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                        @{username}
                    </h1>
                    <p className="text-slate-400 text-sm sm:text-base mb-1">
                        Lets help {username} get a chai!
                    </p>
                    <p className="text-slate-400 text-sm sm:text-base">
                        {payments.length} Payments · ₹{payments.reduce((a, b) => a + b.amount, 0)} raised
                    </p>
                </div>

                {/* Payment Section */}
                <div className="mt-8 sm:mt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-8">
                    <div className="flex flex-col xl:flex-row gap-4 sm:gap-6">
                        
                        {/* Supporters Section */}
                        <div className="w-full xl:w-1/2 bg-slate-900 rounded-lg p-4 sm:p-6 md:p-8">
                            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Top 10 Supporters</h2>
                            
                            <div className="space-y-3 sm:space-y-4">
                                {payments.length == 0 && (
                                    <div className="text-slate-400 text-center py-8">
                                        <p>No Payments yet</p>
                                        <p className="text-sm mt-2">Be the first to support!</p>
                                    </div>
                                )}
                                
                                {payments.slice(0, 10).map((p, i) => (
                                    <div key={i} className="flex gap-3 items-start bg-slate-800 rounded-lg p-3 sm:p-4">
                                        <Image 
                                            width={32} 
                                            height={32} 
                                            src="/avatar.gif" 
                                            alt="user avatar"
                                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex-shrink-0 mt-1"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm sm:text-base break-words">
                                                <span className="font-semibold text-white">{p.name}</span>
                                                <span className="text-slate-300"> donated </span>
                                                <span className="font-bold text-green-400">₹{p.amount}</span>
                                            </p>
                                            <p className="text-xs sm:text-sm text-slate-400 mt-1 break-words">
                                                &quot;{p.message}&quot;
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Make Payment Section */}
                        <div className="w-full xl:w-1/2 bg-slate-900 rounded-lg p-4 sm:p-6 md:p-8">
                            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Make a Payment</h2>
                            
                            <div className="space-y-4">
                                {/* Form Inputs */}
                                <input 
                                    onChange={handleChange} 
                                    value={paymentform.name} 
                                    name='name' 
                                    type="text" 
                                    className="w-full p-3 sm:p-4 rounded-lg bg-slate-800 text-white placeholder-slate-400 text-sm sm:text-base border border-slate-700 focus:border-blue-500 focus:outline-none transition-colors" 
                                    placeholder="Enter Name" 
                                />

                                <textarea 
                                    onChange={handleChange} 
                                    value={paymentform.message} 
                                    name='message' 
                                    rows="3"
                                    className="w-full p-3 sm:p-4 rounded-lg bg-slate-800 text-white placeholder-slate-400 text-sm sm:text-base border border-slate-700 focus:border-blue-500 focus:outline-none transition-colors resize-none" 
                                    placeholder="Enter Message" 
                                />

                                <input 
                                    onChange={handleChange} 
                                    value={paymentform.amount} 
                                    name='amount' 
                                    type="number" 
                                    min="1"
                                    className="w-full p-3 sm:p-4 rounded-lg bg-slate-800 text-white placeholder-slate-400 text-sm sm:text-base border border-slate-700 focus:border-blue-500 focus:outline-none transition-colors" 
                                    placeholder="Enter Amount (₹)" 
                                />

                                <button 
                                    onClick={() => pay(Number.parseInt(paymentform.amount) * 100)} 
                                    type="button" 
                                    className="cursor-pointer w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm sm:text-base p-3 sm:p-4 text-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount?.length < 1}
                                >
                                    Pay ₹{paymentform.amount || '0'}
                                </button>
                            </div>

                            {/* Quick Payment Options */}
                            <div className="mt-6">
                                <p className="text-slate-400 text-sm mb-3">Or choose from these amounts:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                                    <button 
                                        className="bg-slate-800 hover:bg-slate-700 p-3 sm:p-4 rounded-lg cursor-pointer transition-colors text-sm sm:text-base font-medium border border-slate-700 hover:border-slate-600" 
                                        onClick={() => pay(1000)}
                                    >
                                        Pay ₹10
                                    </button>
                                    <button 
                                        className="bg-slate-800 hover:bg-slate-700 p-3 sm:p-4 rounded-lg cursor-pointer transition-colors text-sm sm:text-base font-medium border border-slate-700 hover:border-slate-600" 
                                        onClick={() => pay(2000)}
                                    >
                                        Pay ₹20
                                    </button>
                                    <button 
                                        className="bg-slate-800 hover:bg-slate-700 p-3 sm:p-4 rounded-lg cursor-pointer transition-colors text-sm sm:text-base font-medium border border-slate-700 hover:border-slate-600" 
                                        onClick={() => pay(3000)}
                                    >
                                        Pay ₹30
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage