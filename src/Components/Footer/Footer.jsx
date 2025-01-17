
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import module from "./Footer.module.css"
function Footer() {
  return (
   <div className={module.footer_outer_container}>
    <div className={module.footer_inner_container}>
        <div className={module.footer_icons}>
            <FacebookOutlinedIcon/>
            <InstagramIcon/>
            <LinkedInIcon/>
        </div>
        <div className={module.footer_data}>
            <div>
                <ul>
                    <li>Audio Description</li>
                    <li>Investor Relations</li>
                    <li>Legal Notice</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Help Center</li>
                    <li>Jobs</li>
                    <li>Cookie Preferences</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Gift Cards</li>
                    <li>Terms of Use</li>
                    <li>Corporate Information</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Media Center</li>
                    <li>Privacy</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
        <div className={module.service_code}>
            <p>
                Service Code
            </p>
        </div>
        <div className={module.copy_right}>
            &copy; 1917-2025 Netflix, Inc.
        </div>
    </div>
   </div>
  )
}

export default Footer
