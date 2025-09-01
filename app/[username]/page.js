import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

const UsernamePage = async ({ params }) => {
  const username = await params

  return (
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
        <h1 className="text-2xl font-bold">@{params.username}</h1>
        <p className="text-slate-400">Creating Animated art for VTTs</p>
        <p className="text-slate-400">
          9,719 members · 82 posts · $15,450/release
        </p>
      </div>

      {/* Example scrollable content */}
      {/* <div className="flex-grow px-4 py-10 space-y-6">
          {[...Array(20)].map((_, i) => (
            <p key={i} className="text-slate-300">
              Sample post content #{i + 1}
            </p>
          ))}
        </div> */}

      <br />

      <div className="payment flex gap-3 w-[80%] mt-11">
        <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-7">

          {/* SHows list of all the supportes as a leaderboard */}
          <h2 className="text-2xl font-bold my-5">Supporters</h2>

          <ul className="mx-5 text-lg">

            <li className="my-4 flex gap-2 items-center">
              <Image width={33} height={33} src="/avatar.gif" alt="user avatar" />
              <span>
                Shubham Donated <span className="font-bold">$30</span> with a message &ldquo;I support you bro. lots of ❤️&rdquo;
              </span>
            </li>
            <li className="my-4 flex gap-2 items-center">
              <Image width={33} height={33} src="/avatar.gif" alt="user avatar" />
              <span>
                Shubham Donated <span className="font-bold">$30</span> with a message &ldquo;I support you bro. lots of ❤️&rdquo;
              </span>
            </li>
            <li className="my-4 flex gap-2 items-center">
              <Image width={33} height={33} src="/avatar.gif" alt="user avatar" />
              <span>
                Shubham Donated <span className="font-bold">$30</span> with a message &ldquo;I support you bro. lots of ❤️&rdquo;
              </span>
            </li>
            <li className="my-4 flex gap-2 items-center">
              <Image width={33} height={33} src="/avatar.gif" alt="user avatar" />
              <span>
                Shubham Donated <span className="font-bold">$30</span> with a message &ldquo;I support you bro. lots of ❤️&rdquo;
              </span>
            </li>

          </ul>
        </div>

        <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
          <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
          <div className="flex gap-2 flex-col">

            {/* input for name and message */}
            <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Name" />
            <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Message" />

            <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Amount" />

            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm p-3 px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">Pay</button>

          </div>
          {/* or choose from these amounts */}
          <div className="flex gap-2 mt-5">
            <button className="bg-slate-800 p-3 rounded-lg cursor-pointer">Pay $10</button>
            <button className="bg-slate-800 p-3 rounded-lg cursor-pointer">Pay $20</button>
            <button className="bg-slate-800 p-3 rounded-lg cursor-pointer">Pay $30</button>
          </div>

        </div>
      </div>
    </div>
  )
}
export default UsernamePage
