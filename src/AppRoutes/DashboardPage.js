import { Fragment } from 'react';

import Dashboard from '../components/Dashboard/Dashboard';
import NavigationBar from '../components/NavigationBar/NavigationBar';


const DashboardPage = ()=>(
    <Fragment>
        <NavigationBar/>
        <Dashboard/>
    </Fragment>
)

export default DashboardPage;