import React from "react";
import 'antd/dist/antd.css';
import { Card, Col, Row } from 'antd';
import './style.css';
import ViewDates from '../Atoms/ViewDates';

function Dates() {
        return (
            <div className="molecules-site-card-wrapper">
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="27 November 2019" bordered={false}>
                        #39 JakartaJS April Meetup with kumparan.
                            <div className="molecules-card-audience">
                                <b>139</b> went
                            </div>
                            <ViewDates></ViewDates>
                        </Card>
                        
                    </Col>
                    <Col span={8}>
                        <Card title="27 October 2019" bordered={false}>
                        #38 JakartaJS April Meetup with Blibli
                            <div className="molecules-card-audience">
                                <b>113</b> went
                            </div>
                            <ViewDates></ViewDates>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="27 September 2019" bordered={false}>
                        #37 JakartaJS April Meetup with Hacktiv8.
                            <div className="molecules-card-audience">
                                <b>110</b> went
                            </div>
                            <ViewDates></ViewDates>
                        </Card>
                    </Col>
                    </Row>
                </div>
                )
        }

export default Dates;



// Working version below without using any UI framework
// import React, { Component } from "react";

// class Dates extends Component {
//     render() {
//         return (
//             <React.Fragment>

// <div className="container">
//         <div className="row mb-5">
//             <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
//                 <div className="card card-inverse card-info">
                    
//                     <div className="card-block">
                        
//                         <h4 className="card-title">27 November 2017</h4><hr></hr>
//                         <div className="card-text">
//                             <h4>#39 JakartaJS April Meetup with kumparan.</h4>
//                         </div>
//                         <div className="card-audience">
//                             <b>139</b> went
//                         </div>
//                     </div>
//                     <div className="card-footer">
//                         <button className="btn btn-info btn-sm">View</button>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
//                 <div className="card card-inverse card-info">
                    
//                     <div className="card-block">
                        
//                         <h4 className="card-title">27 October 2017</h4><hr></hr>
//                         <div className="card-text">
//                             <h4>#38 JakartaJS April Meetup with Blibli</h4>
//                         </div>
//                         <div className="card-audience">
//                             <b>113</b> went
//                         </div>
//                     </div>
//                     <div className="card-footer">
//                         <button className="btn btn-info btn-sm">View</button>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
//                 <div className="card card-inverse card-info">
                    
//                     <div className="card-block">
                        
//                         <h4 className="card-title">27 September 2017</h4><hr></hr>
//                         <div className="card-text">
//                             <h4>#37 JakartaJS April Meetup with Hacktiv8.</h4>
//                         </div>
//                         <div className="card-audience">
//                             <b>110</b> went
//                         </div>
//                     </div>
//                     <div className="card-footer">
//                         <button className="btn btn-info btn-sm">View</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
// </div>
//             </React.Fragment>
//         );
//     }
// }

// export default Dates;