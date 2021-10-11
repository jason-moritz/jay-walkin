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
import Typography from '@mui/material/Typography';
import "./SignIn.css";


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

    return (
        <Layout user={props.user}>
            <div className='container-sign-in'>
                <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                    <h3>Sign In</h3>
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
                                    label="Email"
                                    value={email}
                                    name='email'
                                    required
                                    autoFocus
                                    onChange={handleChange}
                                />
                                <TextField
                                    label="Password"
                                    value={password}
                                    name='password'
                                    type='password'
                                    required
                                    onChange={handleChange}
                                />
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
