import GitHubIcon from '@mui/icons-material/GitHub';
import FaceBookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import "./Footer.css";


export default function Footer() {
    return (
        <div className="footer">
            <a
                className="link-footer"
                href="https://github.com/lukewarmsoup1486/jay-walkin"
                alt="link-github"
            >
                <GitHubIcon className="icon-github"/>
            </a>
            <a
                className="link-footer"
                href="https://www.facebook.com/"
                alt="link-facebook"
            >
                <FaceBookIcon className="icon-facebook"/>
        </a>
      
            <a
                className="link-footer"
                href="https://twitter.com/?lang=en/"
                alt="link-twitter"
            >
                <TwitterIcon className="icon-twitter"/>
            </a>
            <a
                className="link-footer"
                href="https://www.instagram.com/"
                alt="link-instagram"
            >
                <InstagramIcon className="icon-instagram"/>
            </a>
        </div>
    )
}
