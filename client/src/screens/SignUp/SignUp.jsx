import { useState } from "react";
import { signUp } from "../../services/users";
import Layout from "../../components/Layout/Layout";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, Card, Button, TextField, Typography, Container } from "@mui/material";
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
            ...form,
            password: "",
            passwordConfirmation: ""
        });
    };

    return (
        <Layout user={props.user}>
            <div className='container-sign-up'>
                <Container 
                    maxWidth="sm" 
                    minWidth="xs"
                    sx={{ 
                        display: "flex", 
                        flexDirection: "column", 
                        alignItems: "center", 
                        textAlign: "center"
                    }}
                >
                    <Card 
                        sx={{ 
                            width: "100%",
                            display: "flex", 
                            flexDirection: "column", 
                            alignItems: "center" 
                        }}
                    >
                        <Typography 
                            sx={{ 
                                fontSize: 24, 
                                textAlign: "center" 
                            }} 
                            color="text.secondary" 
                            gutterBottom
                        >
                            Start JayWalkin Now!
                        </Typography>
                        <Box
                            className="box-sign-up"
                            sx={{ width: "100%",
                                ".MuiTextField-root": { 
                                    m: 1, 
                                    width: ".75" 
                                }
                            }}
                            component="form"
                            autoComplete="off"
                            onSubmit={form.password === form.passwordConfirmation ?
                                onSignUp 
                                : 
                                handleToggle
                            }
                        >
                            <TextField
                                label="Username"
                                value={username}
                                inputProps={{ minLength: 6 }}
                                name="username"
                                error={toggle2}
                                required
                                autoFocus
                                onChange={handleChange}
                            />
                            <TextField
                                label="Email"
                                value={email}
                                name="email"
                                type="email"
                                error={toggle3}
                                required
                                onChange={handleChange}
                            />
                            <TextField
                                label="Password"
                                value={password}
                                inputProps={{ minLength: 8 }}
                                name="password"
                                type="password"
                                error={toggle}
                                required
                                onChange={handleChange}
                            />
                            <TextField
                                label="Confirm Password"
                                value={passwordConfirmation}
                                inputProps={{ minLength: 8 }}
                                name="passwordConfirmation"
                                type="password"
                                error={toggle}
                                required
                                onChange={handleChange}
                            />
                            {toggle === true ? 
                                <Typography 
                                    sx={{ fontSize: 18 }} 
                                    color="text-secondary" 
                                    gutterBottom
                                >
                                    Error: Passwords Must Match 
                                </Typography>
                                : null
                            }
                            {toggle2 === true ? 
                                <Typography 
                                    sx={{ fontSize: 18 }} 
                                    color="text-secondary" 
                                    gutterBottom
                                >
                                    Error: Username is already taken 
                                </Typography>
                                : null
                            }
                            {toggle3 === true ? 
                                <Typography 
                                    sx={{ fontSize: 18 }} 
                                    color="text-secondary" 
                                    gutterBottom
                                >
                                    Error: Email is already in use 
                                </Typography>
                                : null
                            }
                            <Button 
                                type="submit"
                                variant="contained"
                                size="medium"
                                sx={{
                                    "&.MuiButton-containedPrimary": {
                                        backgroundColor: "#1976d2",
                                        mt: 1,
                                        mb: 2
                                    },
                                    "&.MuiButton-containedPrimary:hover": {
                                        backgroundColor: "#1565c0"
                                    }
                                }}
                            >
                                Sign Up!
                            </Button>
                        </Box>
                    </Card>
                </Container>
            </div>
        </Layout>
    )
}
