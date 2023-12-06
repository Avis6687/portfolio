import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/l.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope,faHome,faUser} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (


    <div className='nav-bar'>
        <Link className='logo' to ='/'>
            <img src={LogoS} alt="logo"/>
            <img  className="sub-logo" src={LogoSubtitle} alt="slobodan"/>
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active" className="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#0077ff"/>
            </NavLink>
            <NavLink exact="true" activeclassname="about-link" className="about-link" to="/about">
                <FontAwesomeIcon icon={faEnvelope} color="#0077ff"/>
            </NavLink>
            <NavLink exact="true" activeclassname="contact-link" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faUser} color="#0077ff"/>
            </NavLink>
        </nav>
        
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/abhishek-tamang-232700251/">
                    <FontAwesomeIcon icon={faLinkedin} color="#d5deef"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/Avis6687?tab=repositories">
                    <FontAwesomeIcon icon={faGithub} color="#d5deef"/>
                </a>
            </li>
        </ul>

    </div>
 )



export default Sidebar;