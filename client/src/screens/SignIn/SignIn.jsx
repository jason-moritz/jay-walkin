import { useState } from "react";
import { useHistory } from "react-router-dom";
import { signIn } from "../../services/users";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignIn(props) {
    const [form, setForm] = useState({
        email: "",
        password: "",
        isError: "",
        errorMsg: ""
    })

    const { email, password } = form;
    const { setUser } = props;
    const history = useHistory();

    const handleChange = (e) => {
        e.preventDefault();

        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSignIn = async (e) => {
        e.preventDefault();
        try {
            const user = await signIn(form);
            setUser(user);
            toast(`Welcome ${user.username}`)
            history.push("/");
        } catch (error) {
            console.error(error)
            setForm({
                isError: true,
                errorMsg: "Invalid Credentials",
                email: "",
                password: "",
            })
        }
    }

    const renderError = () => {
        const toggleForm = form.isError ? "danger" : ""
        if (form.isError) {
            return (
                <button type="submit" className={toggleForm}>
                    {form.errorMsg}
                </button>
            )
        } else {
            return <button type="submit">Sign In</button>
        }
    }
    return (
        <div className='form-container'>
            <h3>Sign In</h3>
            <form onSubmit={onSignIn}>
                <label>Email</label>
                <input
                  required
                  type='text'
                  name='email'
                  value={email}
                  placeholder='Enter Email'
                  onChange={handleChange}
                />
                <label>Password</label>
                <input
                  required
                  name='password'
                  value={password}
                  type='password'
                  placeholder='Password'
                  onChange={handleChange}
                />
                {renderError()}
            </form>
        </div>
    )
}
