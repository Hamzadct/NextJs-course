import { notFound } from "next/navigation"
import { Metadata } from "next"

type Props = {
   params: {
      productsId: string,
   }
}


export const genrateMetadata = async ({params}:Props): Promise <Metadata> =>{
   const title = await new Promise((resolve) =>{
      setTimeout(()=>{
         resolve(`Iphone ${params.productsId}`)
      }, 1000)
   })
   return{
      title: `Product ${title }`
   }
}

export default  function ProductsDetails({params}: Props){


    if(parseInt(params.productsId)>100){
       notFound()
    }
    return <>
    <h1>Deatils About Project: {params.productsId}</h1>
    </> 
  }