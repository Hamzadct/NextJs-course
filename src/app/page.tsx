import Link from "next/link";

export default  function Home(){
  return <>
  <h1>Home Page</h1>
  <Link href='/dashboard'>Dashboard</Link>
  <div>
  <Link href='/products'>Products</Link>
  </div>
  <div>
  <Link href='/order'>Order</Link>
  </div>

  </> 
}