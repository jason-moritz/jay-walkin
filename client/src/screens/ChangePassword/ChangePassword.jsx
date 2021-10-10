import { useState } from "react";
import { changePassword } from "../../services/users";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ChangePassword(props) {
    const [form, setForm] = useState({
        email: "",
        password: "",
        newPassword: "",
        newPasswordConfirmation: "",
        isError: "",
        errorMsg: ""
    })

    const [toggle, setToggle] = useState(false)
    const { email, password, newPassword, newPasswordConfirmation } = form;
    const { setUser } = props;
    const history = useHistory();

    const handleChange = (e) => {
        e.preventDefault();

        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onPasswordChange = async (e) => {
        e.preventDefault();

        try {
            const user = await changePassword(form);
            setUser(user);
            toast("You have successfully changed your password!")
            history.push("/");
        } catch (error) {
            console.error(error)
            setForm({
                isError: true,
                errorMsg: "Invalid Credentials",
                email: "",
                password: "",
                newPassword: "",
                newPasswordConfirmation: ""
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
            return <button type="submit">Update Password</button>
        }
    }

    const handleToggle = (e) => {
        e.preventDefault();

        setToggle((prevToggle) => !prevToggle);
        setForm({
            username: "",
            email: "",
            password: "",
            newPasswordConfirmation: "",
            isError: true,
            errorMsg: "Sign Up Details Invalid"
        })
    }; 

    return (
        <Layout user={props.user}>
            <div className='form-container'>
                <h3>Update Password</h3>
                <form onSubmit={newPassword === newPasswordConfirmation ? onPasswordChange : handleToggle}>
                    <label>Email</label>
                    <input
                      required
                      type='text'
                      name='email'
                      value={email}
                      placeholder='Enter Email'
                      onChange={handleChange}
                    />
                    <label>Old Password</label>
                    <input
                      required
                      name='password'
                      value={password}
                      type='password'
                      placeholder='Password'
                      onChange={handleChange}
                    />
                    <label>New Password</label>
                    <input
                      required
                      name='newPassword'
                      value={newPassword}
                      type='password'
                      placeholder='New Password'
                      onChange={handleChange}
                    />
                    <label>Confirm Password</label>
                    <input
                      required
                      name='newPasswordConfirmation'
                      value={newPasswordConfirmation}
                      type='password'
                      placeholder='Confirm Password'
                      onChange={handleChange}
                    />
                    {toggle === true ? <h3>Error: Passwords Must Match</h3> : null}
                    {renderError()}
                </form>
            </div>
        </Layout>
    )
}
