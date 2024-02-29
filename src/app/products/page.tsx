"use client"
import Link from "next/link";

const getRandomNumber = (count: number)=>{
  return Math.floor(Math.random() * count);
  }

export default  function Products(){
  const prodId = 100;

  const randomNum = getRandomNumber(2);

  if(randomNum === 1){
    throw new Error ("Erorr Loading Product")
  }
    return <>


    <Link href='/'>Home</Link>
    <h1>Products List</h1>

     <h4> <Link href='/products/1'>Product 1</Link></h4>
     <h4> <Link href='/products/2'>Product 2</Link></h4>
     <h4> <Link href='/products/3'>Product 3</Link></h4>
     <h4> <Link href={`/products/${prodId}`}> Product{`${prodId}`} </Link></h4>

    </> 
  }