import { Fragment } from 'react';
import TopBar from '../../components/Topbar/Topbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Home from '../Home/Home';

import './baselayout.css';

const BaseLayout = () => {
    return (
        <Fragment>
            <TopBar />
            <div className="container">
                <Sidebar />
                <Home />
            </div>
        </Fragment>
    );
};

export default BaseLayout;
