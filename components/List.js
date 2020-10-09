import React, { Fragment } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';

const List = (props) => {
    return (
        <Fragment>
            <ul>
                {

                    props.tasks.map((task, index) => {
                        const toggleTaskStatus = () => {
                            props.toggleTask(index);
                        };
                        const deleteTask = () => {
                            props.deleteTask(index);
                        }
                        return (<li  key={index} style={{ marginTop: "1%" }}><span onClick={toggleTaskStatus}>
                        {task.name}-- {task.priority} -- {task.isComplete ? "✅" : "❌"} </span><span><button onClick={deleteTask}>Delete</button></span></li>
                        );
                    })
                }

            </ul>
        </Fragment >
    )
};

export default List;