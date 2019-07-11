import React, { Component } from 'react';
import Nav from './Nav';
import EarningCard from './EarningCard';
import TaskCard from './TaskCard';
import EarningsOverview from './EarningsOverview';
import RevenueSources from './RevenueSources';
import ContentHeader from './ContentHeader';
import Projects from './Projects';
import Illustrations from './Illustrations';


class Content extends Component {
    render() {
        return (
           
                
                <div class="container-fluid">
                    <ContentHeader/>
                    <div class="row">
                    <EarningCard color="primary" text ="Earnings (Monthly)" number="$40,000" icon="calendar"/>
                    <EarningCard color="success" text ="Earnings(Annual)" number="$215,000" icon="dollar-sign"/>
                    <TaskCard />            
                    <EarningCard color="warning" text ="Pending Requests" number="18" icon="comments"/>

                    </div>
                    <div class="row">
                        <EarningsOverview/>
                        <RevenueSources/>
                    </div>
                    <div class="row">
                        <Projects/>
                        <Illustrations/>
                    </div>
                </div>
                
           
          
        );
    }
}

export default Content;