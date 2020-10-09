import React from 'react';

const SelectFilter = ({ selectPriority }) => {
    const updatePriority = (event) => {
        selectPriority(event.target.value);
    }
    return (
        <select onChange={updatePriority} style={{ margin: 10, textAlign: "center" }}>
            <option value="All">All</option>
            <option value="complete">complete</option>
            <option value="inComplete">inComplete</option>
        </select>
    )
}

export default SelectFilter;