import {connect} from 'react-redux';
import Feed from '../Feed/Feed';

// import Feed from "../Feed/Feed";
// import Widgets from "../Widgets/Widgets";
// import Header from "../../components/Header/Header";
import Profile from "../Profile/Profile";
import Widgets from '../Widgets/Widgets';
import styles from "./dashboard.module.css"

const Dashboard = (props)=> {
  return (
    <main className={styles.dashboard}>
      <div className={styles.dashboard__body}>
      <Profile 
        title={props.fullName}
        subtitle={props.email}/>
        <Feed/>
        <Widgets/>
      </div>
    </main>
  );
}


const mapStateToProps = state => {
  return {
    fullName: state.auth.fullName,
    email: state.auth.email
  }
}
export default connect(mapStateToProps)(Dashboard);

// export default (Dashboard);