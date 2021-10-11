import { useState } from "react";
import { signUp } from "../../services/users";
import Layout from "../../components/Layout/Layout";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import "./SignUp.css";


export default function SignUp(props) {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    })

    const [toggle, setToggle] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);

    const { username, email, password, passwordConfirmation } = form;
    const { setUser } = props;
    const history = useHistory();

    const handleChange = (e) => {

        setToggle(false);
        setToggle2(false);
        setToggle3(false);
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onSignUp = async (e) => {
        e.preventDefault();

        try {
            const user = await signUp(form);
            setUser(user);
            toast(`Welcome ${form.username}!`);
            history.push("/");
        } catch (error) {
            console.error(error);
            if (error.response.data.error.includes("E11000" && "username")) {
                setToggle2((prevToggle) => !prevToggle);
            };

            if (error.response.data.error.includes("E11000" && "email")) {
                setToggle3((prevToggle) => !prevToggle);
            };

            setForm({
                username: "",
                email: "",
                password: "",
                passwordConfirmation: ""
            });
        };
    };

    const handleToggle = (e) => {
        e.preventDefault();

        setToggle((prevToggle) => !prevToggle);
        setForm({
            username: "",
            email: "",
            password: "",
            passwordConfirmation: ""
        });
    };

    return (
        <Layout user={props.user}>
            <div className='container-sign-up'>
                <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                    Sign Up
                </Typography>
                <Box 
                    className="box-sign-up"
                    sx={{"& .MuiTextField-root": { m: 1, width: "45ch" }}}
                    noValidate
                    autoComplete="off"
                >
                    <Card className="card-sign-up">
                        <CardContent 
                            className="card-content-sign-up">
                            <form className="form-sign-up" onSubmit={form.password === form.passwordConfirmation ? onSignUp : handleToggle}>
                                <TextField
                                    label="Username"
                                    value={username}
                                    name="username"
                                    required
                                    autoFocus
                                    onChange={handleChange}
                                />
                                <TextField
                                    label="Email"
                                    value={email}
                                    name="email"
                                    type="email"
                                    required
                                    onChange={handleChange}
                                />
                                <TextField
                                    label="Password"
                                    value={password}
                                    inputProps={{ minLength: 8 }}
                                    name="password"
                                    type="password"
                                    required
                                    onChange={handleChange}
                                />
                                <TextField
                                    label="Confirm Password"
                                    value={passwordConfirmation}
                                    inputProps={{ minLength: 8 }}
                                    name="passwordConfirmation"
                                    type="password"
                                    required
                                    onChange={handleChange}
                                />
                                {toggle === true ? 
                                    <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                                        Error: Passwords Must Match 
                                    </Typography>
                                    : null
                                }
                                {toggle2 === true ? 
                                    <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                                        Error: Username is already taken 
                                    </Typography>
                                    : null
                                }
                                {toggle3 === true ? 
                                    <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                                        Error: Email is already in use 
                                    </Typography>
                                    : null
                                }
                                <CardActions>
                                    <Button type="submit" className="submit-button">
                                        Sign Up!
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
