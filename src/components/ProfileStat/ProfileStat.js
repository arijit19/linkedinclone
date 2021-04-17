import styles from "./profileStat.module.css"

const ProfileStat = ({msg, num})=> {
    return (
        <div className={styles.profileStat}>
            <p>{msg}</p>
            <p className={styles.profileStat__Number}> {num}</p>
        </div>
    )
}

export default ProfileStat;