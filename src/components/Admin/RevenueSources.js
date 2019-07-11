import React, { Component } from 'react';

class RevenueSources extends Component {
    render() {
        return (
            <div className="card-body">
            <div className="chart-pie pt-4 pb-2"><div className="chartjs-size-monitor" style={{position: 'absolute', left: '0px', top: '0px', right: '0px', bottom: '0px', overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: -1}}><div className="chartjs-size-monitor-expand" style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: -1}}><div style={{position: 'absolute', width: '1000000px', height: '1000000px', left: 0, top: 0}} /></div><div className="chartjs-size-monitor-shrink" style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: -1}}><div style={{position: 'absolute', width: '200%', height: '200%', left: 0, top: 0}} /></div></div>
                <canvas id="myPieChart" width={301} height={245} className="chartjs-render-monitor" style={{display: 'block', width: '301px', height: '245px'}} />
            </div>
            <div className="mt-4 text-center small">
                <span className="mr-2">
                <i className="fas fa-circle text-primary" /> Direct
                </span>
                <span className="mr-2">
                <i className="fas fa-circle text-success" /> Social
                </span>
                <span className="mr-2">
                <i className="fas fa-circle text-info" /> Referral
                </span>
            </div>
            </div>

        );
    }
}

export default RevenueSources;