import { Link } from "react-router" 
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
                            <>
                                <div className="producto">
                                    <img src={obj.image} alt="" />
                                    <Link className="details" to={`/products/${obj.id}`}>DETAILS</Link>
                                </div>

                            </>

                    )
                    })
                }
            </section>
        </main>
    )
}