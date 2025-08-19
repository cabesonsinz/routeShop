import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "../cart.css";

export function GetData({ load }: any) {
    if (!load) {
        return <div>YOUR CART IS EMPTY</div>;
    }

    return (
        <div className="carrito-item">
            <img src={load.image} alt={load.title} />
            <div className="carrito-item-info">
                <span className="carrito-item-title">{load.title}</span>
                <span className="carrito-item-price">${load.price}</span>
            </div>
            <div className="carrito-item-actions">
           
                <button>Eliminar</button>
            </div>
        </div>
    );
}

export default function Cart() {
    const loader = useLocation().state;
    const [actuallCart, setCart] = useState<any[]>([]);

    useEffect(() => {
        const data = window.localStorage.getItem("carrito");
        let copy: any[] = [];

        if (data && loader) {
            const parsedData = JSON.parse(data);
            copy = [...parsedData];

            const exist = parsedData.every((element: any) => element.id !== loader.id);

            if (exist) {
                copy.push(loader);
                window.localStorage.setItem("carrito", JSON.stringify(copy));
            }
        }


      

    }, []);

    useEffect(() => {
        const checkNull = window.localStorage.getItem("carrito");
        if (checkNull) {
            const product = JSON.parse(checkNull);
            setCart(product);
        }
    }, []);

    // Calcular el total
    const total = actuallCart.reduce((acc, item) => acc + (item.price || 0), 0);

    return (
        <main>
            <h1>CART</h1>
            <section className="carrito">
                {actuallCart.length === 0 ? (
                    <div className="empty">Tu carrito está vacío.</div>
                ) : (
                    actuallCart.map((object: any) => (
                        <GetData key={object.id} load={object} />
                    ))
                )}
                <div className="carrito-total">Total: ${total.toFixed(2)}</div>
            </section>
        </main>
    );
}
