
import type { Route } from "../+types/root"
import { useEffect,useState } from "react"


export default function products({params}:Route.ComponentProps){
    const [data,setData] = useState({})
    //URL: https://fakestoreapi.com/

    useEffect(()=>{

        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(datas => {
            setData(datas)

        });

    },[setData])

    console.log(data)
    return(
        <main>
            <h1>PRODUCTS</h1>

            <section className="productos">
                {
                    Object.values(data).map((obj)=>{
                        return ( 
                        <div>{obj.id}</div>
                    )
                    })
                }
            </section>
        </main>
    )
}