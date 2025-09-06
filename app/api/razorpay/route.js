"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import dbConnect from "@/lib/db"
import User from "@/models/User"

export const initiate = async (amount, to_username, paymentform) => {
    await dbConnect()

    // fetch the secret of the user who is getting the payment
    let user = await User.findOne({ username: to_username }).lean()
    if (!user) throw new Error("User not found")

    const secret = user.razorpaysecret
    let instance = new Razorpay({ key_id: user.razorpayid, key_secret: secret })

    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options)

    // create a payment object which shows a pending payment in the  database
    await Payment.create({
        oid: x.id,
        amount: amount / 100,
        to_user: to_username,
        name: paymentform.name,
        message: paymentform.message,
    })

    return x
}

export const fetchuser = async (username) => {
    await dbConnect()
    let u = await User.findOne({ username }).lean()
    if (!u) return null

    return {
        ...u,
        _id: u._id.toString(),
        createdAt: u.createdAt?.toISOString(),
        updatedAt: u.updatedAt?.toISOString(),
    }
}

export const fetchpayments = async (username) => {
    await dbConnect()
    let payments = await Payment.find({ to_user: username, done: true })
        .sort({ amount: -1 })
        .limit(10)
        .lean()

    return payments.map((p) => ({
        ...p,
        _id: p._id.toString(),
        createdAt: p.createdAt?.toISOString(),
        updatedAt: p.updatedAt?.toISOString(),
    }))
}

export const updateProfile = async (data, oldusername) => {
    await dbConnect()
    let ndata = Object.fromEntries(data)

    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username })
        if (u) {
            return { error: "Username already exists" }
        }
        await User.updateOne({ email: ndata.email }, ndata)
        await Payment.updateMany({ to_user: oldusername }, { to_user: ndata.username })
    } else {
        await User.updateOne({ email: ndata.email }, ndata)
    }

    return { success: true }
}
