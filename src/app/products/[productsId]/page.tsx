import { notFound } from "next/navigation"

export default  function ProductsDetails({params}: {params: {productsId: string} }){


    if(parseInt(params.productsId)>100){
       notFound()
    }
    return <>
    <h1>Deatils About Project: {params.productsId}</h1>
    </> 
  }