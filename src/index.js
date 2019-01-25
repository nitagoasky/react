import ReactDOM from "react-dom";
import React from "react";
import IndexContainer from "./js/components/container/IndexContainer";
import './css/zero.css';

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<IndexContainer/>, wrapper) : false;
