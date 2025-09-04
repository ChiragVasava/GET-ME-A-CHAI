"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import dbConnect from "@/lib/db"
import User from "@/models/User"


export const initiate = async (amount, to_username, paymentform) => {
    await dbConnect()
    let instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_KEY_ID, key_secret: process.env.KEY_SECRET })

    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options)
    // create a payment object which shows a pending payment in the  database
    await Payment.create({ oid: x.id, amount: amount, to_user: to_username, name: paymentform.name, message: paymentform.message })

    return x

}

export const fetchuser = async (username) => {
    await dbConnect()
    let u = await User.findOne({ username: username })
    let user = u.toObject({ flattenObjectIds: true })
    return user
}

export const fetchpayments = async (username) => {
    await dbConnect()
    // find all payments sorted by decreasing order of amount and flatten object ids
    let p = await Payment.find({ to_user: username, done: true }).sort({ amount: -1 }).limit(10).lean()
    return p
}