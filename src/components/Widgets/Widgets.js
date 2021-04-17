import InfoIcon from "@material-ui/icons/Info";

import styles from "./widgets.module.css";
import Widget from "../Widget/Widget";
import { WidgetsData } from '../../data/WidgetsData';

const Widgets = () => (
    <div className={styles.widgets}>
        <div className={styles.widgets__header}>
            <h2>LinkedIn News</h2>
            <InfoIcon/>
        </div>
        {WidgetsData.map((element,index)=>(
            <Widget
                key={index}
                heading={element.heading}
                subTitle={element.subTitle}/>
        ))}
    </div>
)

export default Widgets;