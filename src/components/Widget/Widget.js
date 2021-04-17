import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import styles from "./widget.module.css";

const Widget = ({heading, subTitle})=> {
    return (
        <div className={styles.widget__article}> 
            <div className={styles.widget__articleLeft}>
                <FiberManualRecordIcon/>
            </div>
            <div className={styles.widget__articleRight}>
                <h4>{heading}</h4>
                <p>{subTitle}</p>
            </div>
        </div>
    );
}
export default Widget;