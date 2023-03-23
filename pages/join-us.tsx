import Head from 'next/head'
import React from 'react'
import { BiCircle } from 'react-icons/bi'
import NavBarComponent from '../components/NavBarComponent'

function Join() {
  return (
    <div>
         <Head>
        <title>Join Us - Luna Artisan Bakery</title>
        <meta
          name="description"
          content="Artisan Bakery Homemade Bread Pastries and More Freshly Baked"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBarComponent selected="none" />
      <hr className="w-[95%] m-auto" />

      <main className="p-16 box-border pt-32 flex mx-auto max-w-xl flex-col font-bold space-y-4">
        <h1 className=" text-6xl font-abril">
          Get The <span className="text-accent-main">Right Job</span> For You
        </h1>
        <p className="max-w-xs">
          Interested in working in a fast paced, exciting environment? Contact
          us below
        </p>
        <form className="flex space-x-6 mt-2">
          <input
            type="email"
            placeholder="johndoe@mail.com"
            className="w-[70%] border-2 border-black focus:border- rounded py-1 px-2"
          />
          <button type="submit" className="border-2 px-2 rounded border-black hover:bg-accent-main transition-all">
            <BiCircle />
          </button>
        </form>
      </main>
    </div>
  )
}

export default Join
