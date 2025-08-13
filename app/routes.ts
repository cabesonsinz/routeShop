import { type RouteConfig, index,route } from "@react-router/dev/routes";

export default [
    
    index("routes/home.tsx"),

    route("products/","./routes/products.tsx"),
    route("products/:id","./routes/productDetail.tsx"),
    route("cart","./routes/cart.tsx")


] satisfies RouteConfig;
