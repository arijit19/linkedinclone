import { Link } from "react-router-dom";
import styles from "./navOption.module.css";

const NavOption = ({Icon, title, link})=> {
    return (
        <Link className= {styles.navOption} to={link} >
            {Icon && <Icon className={styles.navOption__icon}/>}
            <h3 className={styles.navOption__title}>{title}</h3>
        </Link>
    )
}

export default NavOption;