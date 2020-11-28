import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./components/navigation/Navigation";
import Search from "./components/search/Search";
import CatNavigation from "./components/catNavigation/catNavigation";
import Posts from "./components/posts/Posts";
import Transaction from "./components/transaction/Transaction";
import Whoops404 from "./components/whoops404/Whoops404";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SinglePosting from "./components/postingSingle";
import PostingUpload from "./components/postingUpload";

import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

import Login from "./components/login/Login";
import Register from "./components/register/Register";

import App from "./components/app";


let baseUrl = "http://monol-ecsal-11t95abd0otdz-1158302926.us-east-1.elb.amazonaws.com/";

if (process.env.REACT_APP_SERVER_BASE_URL) {
	console.log("Using custom server base url: ", process.env.REACT_APP_SERVER_BASE_URL);
    baseUrl = process.env.REACT_APP_SERVER_BASE_URL;
}

console.log("baseUrl :", process.env.REACT_APP_SERVER_BASE_URL);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);

registerServiceWorker();

export { baseUrl };
