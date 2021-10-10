import { useEffect } from "react";
import { signOut } from "../../services/users";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function SignOut(props) {
    const { setUser } = props;
    const history = useHistory();

    useEffect(() => {
        const signOutUser = async () => {
            await signOut();
            setUser(null);
            toast("Why you leave me?")
            history.push("/")
        };
        signOutUser();
    }, [history, setUser])

    return ""
}
