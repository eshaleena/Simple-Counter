import React from "react";


//create your first component
export function SimpleCounter(props){
    return (<div className="bigCounter d-flex mx-auto">
        <div className="clock digit">
        <i className="fa-solid fa-clock"></i>
        </div>
        <div className="digit">{Math.floor(props.counter / 100000) % 10}</div>
        <div className="digit">{Math.floor(props.counter / 10000) % 10}</div>
        <div className="digit">{Math.floor(props.counter / 1000) % 10}</div>
        <div className="digit">{Math.floor(props.counter / 100) % 10}</div>
        <div className="digit">{Math.floor(props.counter / 10) % 10}</div>
        <div className="digit">{Math.floor(props.counter / 1) % 10}</div>

    </div>
    );}
