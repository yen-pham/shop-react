import React, { Component } from 'react';

class EarningCard extends Component {
    render() {
        return (
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className={"card  shadow h-100 py-2 border-left-"+this.props.color}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={"text-xs font-weight-bold  text-uppercase mb-1 text-"+this.props.color}>
                                {this.props.text}
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{this.props.number}</div>
                            </div>
                            <div className="col-auto">
                                <i className={" fa-2x text-gray-300 fa fa-"+this.props.icon} />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>  
            
        );
    }
}

export default EarningCard;