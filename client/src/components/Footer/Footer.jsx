import GitHubIcon from '@mui/icons-material/GitHub';
import "./Footer.css";

export default function Footer() {
    return (
        <div className="footer">
            <a
                className="link-github"
                href="https://github.com/lukewarmsoup1486/jay-walkin"
                alt="link-github"
            >
                <GitHubIcon className="icon-github"/>
            </a>
        </div>
    )
}
