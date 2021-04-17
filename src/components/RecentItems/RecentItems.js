import React, {Fragment} from 'react';
import { RecentItemsData } from '../../data/RecentItemsData';

import RecentItem  from "../RecentItem/RecentItem";

const RecentItems = () => (
    <Fragment >
        <p>Recent</p>
        {RecentItemsData.map ((element, index)=> (
            <RecentItem 
                key = {index}
                topic= {element.topic}/>
        ))}
    </Fragment>)

export default RecentItems;