
import type { Route } from "../+types/root";



export async function clientLoader({params}:Route.ClientLoaderArgs) {

    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    const product = await res.json()
    return product
}



export default function productDetails({loaderData}:Route.ComponentProps){
    if (!loaderData) {
        return <div>Loading...</div>;
    }
    const {category,description,rating,image,price,title} =  loaderData;

    return(
        <main>
            <section className="productos">

                <div className="producto">
                        <img src={image} alt="" />
                        
                </div>

            </section>
        </main>
    )
} 