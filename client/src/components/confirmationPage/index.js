import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import SimpleMap from '../mapsPostLocation/mapsPostLocation';
import { baseUrl} from '../../index';
import { withRouter } from 'react-router-dom';
import Whoops404 from '../whoops404/Whoops404';
import axios from 'axios';

import './confirmationPage.css';

class ConfirmationPage extends Component {
    
    constructor(props) {
        super(props);

        this.initialCenter = {
            lat: 49.282482,
            lng: -123.118275
        };

        this.state = {
            posting: null,
            seller: null
        }
    }

    componentDidMount() {
        console.log("this.props: ", this.props);

        let posting = this.props.location.state.posting;

        axios({
            baseURL: `${baseUrl}/api`,
            method: 'get',
            url: `/user/${posting.userId}`
        }).then(res => {
            console.log("res: ", res);
            
            this.setState({
                seller: res.data,
                posting: posting,
            });  
        })


    }
    

    render() {
        return (
            <div id="confirmationPage">

                {
                    !this.state.posting ? (
                        <Whoops404 />
                    ) : (
                        <Grid container spacing={24}>
                            <Grid item xs={12} md={6}>
                                <div className="confirmation-page-item-details">
                                <h2>Purchase Confirmed</h2>
                                <p>Your bid for the following item is confirmed, please email the buyer to arrange a meet up to transact.</p> 

                                <hr/> 

                                <h2>Seller: </h2>
                                <span className="bold">Email:</span>
                                <p className="item-title">{this.state.seller.email}</p>
                                <span className="bold">Phone:</span>
                                <p className="item-title">{this.state.seller.phone}</p>
                                

                                <hr />

                                <h2>Item: </h2>
                                <h3 className="item-title">{this.state.posting.postingTitle}</h3> 
                                <p className="item-title">{this.state.posting.price}</p>
                                <span className="bold">Description:</span>
                                <p>{this.state.posting.description}</p>
                                <span className="bold">Model Name:</span>
                                <p>{this.state.posting.modelName}</p>
                                <span className="bold">Brand:</span>
                                <p>{this.state.posting.brand}</p>
                                </div> 

                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className="post-map">
                                    <h5>Meeting Location</h5>
                                    <SimpleMap lat={this.initialCenter.lat} lng={this.initialCenter.lng} />
                                </div>
                            </Grid>
                        
                        </Grid>
                    )
                }
            </div>
        )
    }
}

export default withRouter(ConfirmationPage);
