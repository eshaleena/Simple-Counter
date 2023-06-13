//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { SimpleCounter } from "./component/home.jsx";
// include your styles into the webpack bundle
import "../styles/index.css";




let counter = 0
setInterval(() => {
    counter++
    ReactDOM.render(<SimpleCounter counter={counter} />, document.querySelector("#app"));

}, );

//render your react application
