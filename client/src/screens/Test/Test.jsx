// import { addToCart, getUser, removeFromCart } from "../../services/users";
// import { getProducts } from "../../services/products"
// import { useState, useEffect } from "react";


// export default function Test(props) {
//     const { user } = props;
//     const [products, setProducts] = useState([])
//     const [userCart, setUserCart] = useState([])

//     useEffect(() => {
//         const fetchProducts = async () => {
//             const res = await getProducts();
//             setProducts(res)
//         } 
//         fetchProducts()
//     },[])


//     const handleSubmit = async(e) => {
//         e.preventDefault();

//         if (e.target.id === "add") {
//             const res = await addToCart(user.id, { productId: `${e.target.value}`})
//             // setUserCart(res)
//             console.log("add", res)
//             console.log("add", typeof e.target.value)
//         } else {
//             const res = await removeFromCart(user.id, { productId: `${e.target.value}`})
//             // setUserCart(res)
//             console.log("delete", res)
//             console.log("delete", e.target.value)
//             console.log("delete", typeof e.target.value)

//         }
//     }

//     if (!user) return <h2>loading</h2>


//     return (
//         <div>
//             <label>Cart Items Counter</label>
//             {userCart ? <div>{userCart}</div> : <div>loading</div>}
//             <div>
//                 {products.map((product, index) => (
//                     <div key={index}>
//                         <img key={index} src={product?.imgURL} alt={product?._id} />
//                         <div >{product?.name}</div>
//                             {/* <form onSubmit={handleSubmit}> */}
//                                 <button id="add" type="submit" onClick={handleSubmit} value={product._id}>Add to Cart</button>
//                                 <button id="remove" type="submit" onClick={handleSubmit} value={product._id}>Remove from Cart</button>
//                             {/* </form> */}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }
