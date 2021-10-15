import { useState } from "react";
import { useHistory } from "react-router-dom";
import { signIn } from "../../services/users";
import Layout from "../../components/Layout/Layout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, Card, Button, TextField, Typography, Container } from "@mui/material";
import "./SignIn.css";


export default function SignIn(props) {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const [toggle, setToggle] = useState(false)

    const { email, password } = form;
    const { setUser } = props;
    const history = useHistory();

    const handleChange = (e) => {
        e.preventDefault();

        setToggle(false);
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onSignIn = async (e) => {
        e.preventDefault();
        try {
            const user = await signIn(form);
            setUser(user);
            toast(`Welcome back ${user.username}!`)
            history.push("/");
        } catch (error) {
            console.error(error);
            setToggle((prevToggle) => !prevToggle);
            setForm({
                email: "",
                password: "",
            });
        };
    };

    return (
        <Layout user={props.user}>
            <div className="container-sign-in">
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
                            Sign In
                        </Typography>
                        <Box
                            className="box-sign-in"
                            sx={{ width: "100%",
                                ".MuiTextField-root": { 
                                    m: 1, 
                                    width: ".75" 
                                }
                            }}
                            component="form"
                            onSubmit={onSignIn}
                        >
                            <TextField
                                label="Email"
                                value={email}
                                name="email"
                                type="email"
                                error={toggle}
                                required
                                autoFocus
                                onChange={handleChange}
                            />
                            <TextField
                                label="Password"
                                value={password}
                                name="password"
                                type="password"
                                error={toggle}
                                required
                                onChange={handleChange}
                            />
                            {toggle ? 
                                <Typography 
                                    sx={{ fontSize: 18 }} 
                                    color="text-secondary" 
                                    gutterBottom
                                >
                                    Error: Invalid credentials
                                </Typography>
                                : 
                                null
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
                                Sign In!
                            </Button>
                        </Box>
                    </Card>
                </Container>
            </div>
        </Layout>
    )
}
