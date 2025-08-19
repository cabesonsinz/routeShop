import { Link } from "react-router" 

import { Fragment, useEffect,useState } from "react"


export default function products(){
    const [data,setData] = useState({})
    //URL: https://fakestoreapi.com/

    useEffect(()=>{

        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(datas => {
            setData(datas)

        });

    },[setData])


    return(
        <main>
            <h1>PRODUCTS</h1>

            <section className="productos">
                {
                    Object.values(data).map((obj:any)=>{
        
                        return ( 
                            <Fragment key={obj.id}>
                                <div className="producto" >
                                    <img src={obj.image} alt="" />
                                    <Link className="details"  to={`/products/${obj.id}`}>DETAILS</Link>
                                </div>

                            </Fragment>

                    )
                    })
                }
            </section>
        </main>
    )
}