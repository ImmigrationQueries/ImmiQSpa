import React from 'react';
import './home.css';

import InfoDashboard from '../../components/InfoDashboard/InfoDashboard';
import LineChart from '../../components/Charts/LineChart';
import { oneEightNine } from '../../services/userdata';

const Home = () => {
    const filteredData = oneEightNine[0].data;
    return (
        <div className="home">
            <div className="homeWidgets">
                <div className="infoWrapper">
                    <div className="infoItem">
                        <InfoDashboard />
                    </div>
                </div>
                <div className="chartWrapper">
                    <div className="chartItem">
                        <LineChart
                            data={filteredData}
                            title="Invitations issued in 2021"
                            grid
                            dataKey="invitesIssued"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
