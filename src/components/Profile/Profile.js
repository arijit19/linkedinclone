import { Avatar } from "@material-ui/core";


import styles from "./profile.module.css";
import ProfileStats from "../ProfileStats/ProfileStats";
import RecentItems from "../RecentItems/RecentItems";

const Profile = ({title, subtitle})=> {
    return (
        <div className={styles.profile}>
            <div className={styles.profile__top}>
                <img src="https://miro.medium.com/max/3840/1*h58eRcgYpAFec_QbmJcRpg.jpeg" alt="" />
                <Avatar className={styles.profile__avatar}/>
                <h2>{title}</h2>
                <h4>{subtitle}</h4>
            </div>
            <ProfileStats/>
            <div className={styles.profile__bottom}>
                <RecentItems/>
            </div>
        </div>
    )
}

export default Profile;