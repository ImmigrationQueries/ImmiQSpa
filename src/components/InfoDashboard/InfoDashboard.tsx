import './infodashboard.css';

import { ArrowDownward } from '@material-ui/icons';

import React from 'react';

const InfoDashboard = () => {
    const invitesIssued2019to2020 = 7720;
    const percentageChange = Math.floor(
        ((invitesIssued2019to2020 - 1690) / invitesIssued2019to2020) * 100,
    );

    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Invites this year</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">1,690</span>
                    <span className="featuredMoneyRate">
                        {`${percentageChange}%`}
                        <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">
                    Total invitations issued is down {`${percentageChange}%`} compared to last year
                </span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Invites this month</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">0</span>
                    <span className="featuredMoneyRate">
                        {/* -1.4 <ArrowDownward className="featuredIcon negative" /> */}
                    </span>
                </div>
                <span className="featuredSub">
                    Has not changed since no invites were issued this year
                </span>
            </div>
        </div>
    );
};

export default InfoDashboard;
