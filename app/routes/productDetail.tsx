import { Link } from "react-router";
import type { Route } from "../+types/root";


export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
    const product = await res.json();
    return product;
}

export default function productDetails({ loaderData }: Route.ComponentProps) {
    if (!loaderData) {
        return <div>Loading...</div>;
    }
    const { category, description, rating, image, price, title } = loaderData;
    const {count,rate} = rating

   

    return (
        <main>
            <section className="productDetail">
                <img src={image} alt={description} />

                <aside className="productDescription">
                    <h1>{title}</h1>
                    <p>{category}</p>
                    <p>{description}</p>
                    <div className="productMinData">
                        <p>PRICE: {price}</p>
                        <p>CALIFICATION <b>{count} </b> SCORE <b>{rate}</b></p>
                    </div>
                    <section className="addButtons">
                        <button  ><Link   to={"/cart"}  state={loaderData}>ADD CART </Link></button>
                        <button >BUY</button>
                    </section>
                </aside>
            </section>

        </main>
    );
}
