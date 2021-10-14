import { useState } from "react";
import { changePassword } from "../../services/users";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, Card, Button, TextField, Typography, Container } from "@mui/material";
import "./ChangePassword.css";


export default function ChangePassword(props) {
    const [form, setForm] = useState({
        email: "",
        password: "",
        newPassword: "",
        newPasswordConfirmation: ""
    })

    const [toggle, setToggle] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);
    const { email, password, newPassword, newPasswordConfirmation } = form;
    const { setUser } = props;
    const history = useHistory();

    const handleChange = (e) => {
        e.preventDefault();

        setToggle(false);
        setToggle2(false);
        setToggle3(false);

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
            toast("You have successfully changed your password!");
            history.push("/");

        } catch (error) {
            console.error(error);

            if (error.response.data.error.includes("password_digest")) {
                setToggle3(true);
            };

            setForm({
                email: "",
                password: "",
                newPassword: "",
                newPasswordConfirmation: ""
            });
        }
    }

    const handleToggle = (e) => {
        e.preventDefault();

        if (newPassword !== newPasswordConfirmation) {
            setToggle((prevToggle) => !prevToggle);
        };

        if (password === newPassword) {
            setToggle2((prevToggle) => !prevToggle);
        };

        setForm({
            email: "",
            password: "",
            newPassword: "",
            newPasswordConfirmation: ""
        });
    }; 

    return (
        <Layout user={props.user}>
            <div className='container-change-password'>
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
                            Update Password
                        </Typography>
                        <Box
                            className="box-change-password"
                            sx={{ width: "100%",
                                ".MuiTextField-root": { 
                                    m: 1, 
                                    width: ".75" 
                                }
                            }}
                            component="form"
                            autoComplete="off"
                            onSubmit={newPassword === newPasswordConfirmation && password !== newPassword ?
                                onPasswordChange 
                                : 
                                handleToggle
                            }
                        >
                            <TextField
                                label="Email"
                                value={email}
                                name="email"
                                type="email"
                                error={toggle3}
                                required
                                autoFocus
                                onChange={handleChange}
                            />
                            <TextField
                                label="Old Password"
                                value={password}
                                name="password"
                                type="password"
                                error={toggle2}
                                required
                                onChange={handleChange}
                            />
                            <TextField
                                label="New Password"
                                value={newPassword}
                                inputProps={{ minLength: 8 }}
                                name="newPassword"
                                type="password"
                                error={toggle || toggle2}
                                required
                                onChange={handleChange}
                            />
                            <TextField
                                label="Confirm Password"
                                value={newPasswordConfirmation}
                                inputProps={{ minLength: 8 }}
                                name="newPasswordConfirmation"
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
                                    Error: New password must not match current password 
                                </Typography>
                                : null
                            }
                            {toggle3 === true ? 
                                <Typography 
                                    sx={{ fontSize: 18 }} 
                                    color="text-secondary" 
                                    gutterBottom
                                >
                                    Error: Email is not valid 
                                </Typography>
                                : null
                            }
                            <Button 
                                type="submit"
                                variant="contained"
                                size="medium"
                                sx={{
                                    mt: 1,
                                    mb: 2
                                }}
                            >
                                    Submit Changes
                            </Button>
                        </Box>
                    </Card>
                </Container>
            </div>
        </Layout>
    )
}
