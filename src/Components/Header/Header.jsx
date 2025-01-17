import module from "./Header.module.css"
import NetflixLogo from "../../assets/Images/netflix-logo.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
  return (
    <div className={module.header_outer_container} >
        <div className={module.header_container}>
            <div className={module.header_left}>
                <ul>
                    <li><img src={NetflixLogo} alt="" /></li>
                    <li>Home</li>
                    <li>Tv shows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>My Lists</li>
                    <li>Browse by Language</li>
                </ul>
            </div>
            <div className={module.header_right}>
                <ul>
                    <li><SearchIcon /></li>
                    <li><NotificationsNoneIcon /></li>
                    <li><AccountBoxIcon /></li>
                    <li><ArrowDropDownIcon /></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header