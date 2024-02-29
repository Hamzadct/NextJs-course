"use client";

import { useRouter } from "next/navigation";


const Order = () => {
    const router = useRouter();

    const handleClick = ()=>{
        console.log("Order Placed Successfully")
        router.push('/')
    }
  return (
    <>
    <h1>Order</h1>
    <button onClick={handleClick}>Place Order</button>
    </>
  )
}

export default Order