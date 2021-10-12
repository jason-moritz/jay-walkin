import { useState } from "react";
import { useHistory } from "react-router-dom";
import { signIn } from "../../services/users";
import Layout from "../../components/Layout/Layout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
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
            toast(`Welcome ${user.username}`)
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
                <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                    Sign In
                </Typography>
                <Box 
                    className="box-sign-in"
                    sx={{"& .MuiTextField-root": { m: 1, width: "45ch" }}}
                    noValidate
                    autoComplete="off"
                >
                    <Card className="card-sign-in">
                        <CardContent 
                            className="card-content-sign-in">
                            <form 
                                className="form-sign-in" 
                                onSubmit={onSignIn}
                            >
                                <TextField
                                    sx ={{ 
                                        width: {
                                            xs: 1,
                                            sm: 200,
                                            md: 300,
                                            lg: 400,
                                            xl: 1/8
                                        }
                                    }}
                                    label="Email"
                                    value={email}
                                    name="email"
                                    type="email"
                                    required
                                    autoFocus
                                    onChange={handleChange}
                                />
                                <TextField
                                    sx ={{ width: 1/2 }}
                                    label="Password"
                                    value={password}
                                    name="password"
                                    type="password"
                                    required
                                    onChange={handleChange}
                                />
                                {toggle ? 
                                    <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                                        Error: Invalid credentials
                                    </Typography>
                                    : 
                                    null
                                }
                                <CardActions>
                                    <Button type="submit" className="submit-button">
                                        Sign In!
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
