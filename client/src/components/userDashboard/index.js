import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ReactTable from "react-table";
import { BrowserRouter, Route, Link, Router, Redirect } from 'react-router-dom';

import './styles.css'

import UserProfile from '../userProfile';

class UserDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      data: [],
      redirectTo: null
    };

    this.fetchPosts = this.fetchPosts.bind(this);
    console.log(props.loggedInUser);
    console.log(props);
  }

  fetchPosts = async () => {
    let status;
    fetch(`/api/user/postings/${this.props.loggedInUser.id}`)
      .then(res => {
        console.log(res);
        status = res.status;
        return res.json();
      }) 
      .then(body => {
        console.log(body);
        console.log(status);
      })
  }

  componentDidMount(){
    if(this.props.loggedInUser.id) {
      console.log("User is logged in, fetching posts");
      this.fetchPosts();
    }
  }

  componentDidUpdate() {
    if(this.props.loggedInUser.id) {
      console.log("User is logged in, fetching posts");
      this.fetchPosts();
    }
  }

  render() {

    const columns = [
      {
        Header: "Info",
        columns: [
          {
            Header: "Posting Title",
            accessor: "firstName"
          }
        ]
      },
      {
        Header: "Info",
        columns: [
                    {
            Header: "Created At",
            accessor: "createdAt"
                    },
                    {
            Header: "Updated At",
            accessor: "updatedAt"
                    },       
        ]
            },
            {
        Header: "Modify",
        columns: [
          {
            Header: "Delete",
            accessor: 'id',
                        Cell: ({value}) => (<button onClick={this.fetchPosts}>Delete</button>),
                    },
                    {
            Header: "Edit",
            accessor: 'id',
                        Cell: ({value}) => (<button onClick={this.fetchPosts}>Edit</button>)
                    }
                ],
      }
    ];
    
      if( !this.props.loggedInUser ) {
        return(<div>Please log in.</div>);
      }

      if( this.props.loggedInUser ) {
        return (
          <div className="userDashboard">
            <Grid container spacing={24}>
      
              <Grid item xs={12} md={6}>
                <div id="listOfPostings">
                  <h2>List of Postings</h2>

                      <ReactTable
                        data={this.state.data}
                        columns={columns}
                        defaultSorted={[{ id: "updatedAt", desc: false }]}
                      />                  

                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div id="listOfPostings">
                  <h2>User Info</h2>
                  <UserProfile user={this.props.loggedInUser}/>
                </div>
              </Grid>
            </Grid>
          </div>
  
    )}
  }
}

export default UserDashboard;