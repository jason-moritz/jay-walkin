import { useState } from "react";
import { signUp } from "../../services/users";
import { useHistory } from "react-router-dom";

export default function SignUp(props) {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        isError: false,
        errorMsg: ""
    })

    const [toggle, setToggle] = useState(false);

    const { username, email, password, passwordConfirmation, isError, errorMsg } = form;
    const history = useHistory();
    const { setUser } = props;

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSignUp = async (e) => {
        e.preventDefault()

        try {
            const user = await signUp(form);
            setUser(user);
            history.push("/");
        } catch (error) {
            console.error(error);
            setForm({
                username: "",
                email: "",
                password: "",
                passwordConfirmation: "",
                isError: true,
                errorMsg: "Sign Up Details Invalid"
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
            return <button type="submit">Sign Up</button>
        }
    }

    const handleToggle = (e) => {
        e.preventDefault();

        setToggle((prevToggle) => !prevToggle);
        setForm({
            username: "",
            email: "",
            password: "",
            passwordConfirmation: "",
            isError: true,
            errorMsg: "Sign Up Details Invalid"
        })
    };

    return (
        <div className='form-container'>
            <h3>Sign Up</h3>
            <form onSubmit={form.password === form.passwordConfirmation ? onSignUp : handleToggle}>
                <label>Username</label>
                <input
                  required
                  type='text'
                  name='username'
                  value={username}
                  placeholder='Enter Username'
                  onChange={handleChange}
                />
                <label>Email address</label>
                <input
                  required
                  type='email'
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
                <label>Password Confirmation</label>
                <input
                  required
                  name='passwordConfirmation'
                  value={passwordConfirmation}
                  type='password'
                  placeholder='Confirm Password'
                  onChange={handleChange}
                />
                {toggle === true ? <h3>Error: Passwords Must Match</h3> : null}
                {renderError()}
            </form>
        </div>
    )
}
