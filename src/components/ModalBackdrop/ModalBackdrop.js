
import styles from "./modalBackdrop.module.css";
const ModalBackdrop = (props) => (
    props.show ? <div className={styles.backdrop} onClick={props.clicked}></div> : null
);

export default ModalBackdrop;