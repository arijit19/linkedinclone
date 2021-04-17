
import { ProfileStatsdata } from '../../data/ProfileStatsData';
import ProfileStat from "../ProfileStat/ProfileStat";
import styles from "./profileStats.module.css";

const ProfileStats = ()=> (
    <div className={styles.profileStats}>
        {ProfileStatsdata.map( (element, index) => (
            <ProfileStat 
                key={index}
                msg={element.message}
                num={element.number}/>
        ))}
        
    </div>
)

export default ProfileStats;