import { useState } from "react";
import { changePassword } from "../../services/users";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./ChangePassword.css";


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
            <div className='container-change-password'>
                <h3>Update Password</h3>
                <Box 
                    className="box-change-password"
                    sx={{"& .MuiTextField-root": { m: 1, width: "45ch" }}}
                    noValidate
                    autoComplete="off"
                >
                    <Card className="card-change-password">
                        <CardContent 
                            className="card-content-change-password">
                            <form 
                                className="form-change-password"
                                onSubmit={newPassword === newPasswordConfirmation ?
                                    onPasswordChange : handleToggle}
                            >
                                <TextField
                                    label="Email"
                                    value={email}
                                    name='email'
                                    required
                                    autoFocus
                                    onChange={handleChange}
                                />
                                <TextField
                                    label="Old Password"
                                    name='password'
                                    value={password}
                                    type='password'
                                    required
                                    onChange={handleChange}
                                />
                                <TextField
                                    label="New Password"
                                    name='newPassword'
                                    value={newPassword}
                                    type='password'
                                    required
                                    onChange={handleChange}
                                />
                                <TextField
                                    label="Confirm Password"
                                    name='newPasswordConfirmation'
                                    value={newPasswordConfirmation}
                                    type='password'
                                    required
                                    onChange={handleChange}
                                />
                                {toggle === true ? <h3>Error: Passwords Must Match</h3> : null}
                                {/* {renderError()} */}
                                <CardActions>
                                    <Button type="submit" className="submit-button">
                                        Update Password!
                                    </Button>
                                </CardActions>
                            </form>
                        </CardContent>
                    </Card>
                </Box>
            </div>
        </Layout>
    )
}
