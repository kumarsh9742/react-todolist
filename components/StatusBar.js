import React, { Fragment } from 'react';


const StatusBar = ({ high, medium, low, completed, pending }) => {
    return (
        <Fragment>
            <p style={{textAlign: "center" }}>
                <b>High Priority Tasks: {high} <br></br> Medium Priority Tasks: {medium} <br></br> Low Priority Tasks: {low}<br></br> Completed Tasks: {completed} <br></br>Pending Tasks: {pending}</b>
            </p>
            <br />
        </Fragment>
    );
};

export default StatusBar;