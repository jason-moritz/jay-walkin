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
import Typography from '@mui/material/Typography';
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
                <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                    Update Password
                </Typography>
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
                                onSubmit={newPassword === newPasswordConfirmation && password !== newPassword ?
                                    onPasswordChange : handleToggle}
                            >
                                <TextField
                                    label="Email"
                                    name="email"
                                    value={email}
                                    type="email"
                                    required
                                    autoFocus
                                    onChange={handleChange}
                                />
                                <TextField
                                    label="Old Password"
                                    name="password"
                                    value={password}
                                    type="password"
                                    required
                                    onChange={handleChange}
                                />
                                <TextField
                                    label="New Password"
                                    name="newPassword"
                                    value={newPassword}
                                    inputProps={{ minLength: 8 }}
                                    type="password"
                                    minlength="8"
                                    required
                                    onChange={handleChange}
                                />
                                <TextField
                                    label="Confirm Password"
                                    name="newPasswordConfirmation"
                                    value={newPasswordConfirmation}
                                    inputProps={{ minLength: 8 }}
                                    type="password"
                                    minlength="8"
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
                                        Error: New password must not match current password 
                                    </Typography>
                                    : null
                                }
                                {toggle3 === true ? 
                                    <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                                        Error: Email is not valid 
                                    </Typography>
                                    : null
                                }
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
