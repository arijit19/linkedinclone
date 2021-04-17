import SearchIcon from '@material-ui/icons/Search';

import NavOptions from '../NavOptions/NavOptions';
import styles from "./navigationBar.module.css";



const NavigationBar = ()=> {
    return (
        <header className={styles.header}>
            <div className={styles.header__left}>
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="icon"/>
                <div className={styles.header__search}>
                    <SearchIcon/>
                    <input type="text" />
                </div>     
            </div>
            <div className={styles.header__right}>
                <NavOptions/>
            </div>
        </header>
    )
}
export default NavigationBar;