import { NavLink } from "react-router-dom";

const authenticatedOptions = (
    <>
        <NavLink className="link" to="/add-product">Add Product</NavLink>
        <NavLink className="link" to="/change-password">Change Password</NavLink>
        <NavLink className="link" to="/sign-out">Sign Out</NavLink>
    </>
)

const unauthenticatedOptions = (
    <>
        <NavLink className="link" to="/sign-up">Sign Up</NavLink>
        <NavLink className="link" to="/sign-in">Sign In</NavLink>
    </>
    )

const alwaysOptions = (
    <>
        <NavLink className="link" to="/products">Products</NavLink>
    </>
)

export default function Nav({ user }) {
    return (
        <nav>
            <div className="nav-container">
                <div className="nav-logo">
                    <NavLink className="logo" to="/">JayWalkin</NavLink>
                </div>
                <div className="links">
                    {user && <div className="link welcome">Welcome, {user.username}</div>}
                    {alwaysOptions}
                    {user ? authenticatedOptions : unauthenticatedOptions}
                </div>
            </div>
        </nav>
    )
}
