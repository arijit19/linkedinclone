
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Authpage from "../components/Auth/Auth";
import Dashboard from "./DashboardPage";
import Spinner from "../components/LoadAnim/LoadAnim"

const Routes = (props) => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path='/' exact >
                        {props.isAuth ? 
                        <Redirect to='/dashboard'/> : 
                        props.isLoading ? <Spinner/> :
                        <Authpage/>}
                    </Route>
                    <Route path='/dashboard' exact >
                        {props.isAuth ? 
                        props.isLoading ? <Spinner/> :
                        <Dashboard/> : 
                        <Redirect to='/'/>}
                    </Route>
                    <Route>{props.isAuth ? <Redirect to='/dashboard'/> : <Redirect to='/'/>}</Route>    
                </Switch>
            </div>
        </Router>
    );
}
const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        isLoading: state.auth.loading || state.data.loading
    }
}



export default connect(mapStateToProps)(Routes);