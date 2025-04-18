import ProductCard from "./ProductCard";
import Link from "next/link";

export default async function CarCatalog({carJson}:{carJson:Object}){
    const carJsonReady = await carJson
    return(
        <>
        Explore {carJsonReady.count} models in our catalog
        <div style={{margin:"20px", display:"flex",
            flexDirection:"row", alignContent:"space-around",
            justifyContent:"space-around", flexWrap:"wrap",padding:"10px"}}>
                {
                    carJsonReady.data.map((carItem:Object)=>(
                        <Link href={`/car/${carItem.id}`} 
                        className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%]
                        p-2 sm:p-4 md:p-4 lg:p-8">
                            <ProductCard carName={carItem.model} imgSrc={carItem.picture}/>
                        </Link>
                    ))
                }
        </div>
        </>
    )
}