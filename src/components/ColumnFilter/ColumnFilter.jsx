import React from 'react';
import classes from './ColumnFilter.module.css'

const ColumnFilter = ({ column }) => {
    const { filterValue, setFilter } = column
    
    const setFilterNoPropagation =(event)=>{
        event.stopPropagation();
    }
    
    return(
        <div className={classes.container} onClick={setFilterNoPropagation}>
            <input 
            name="search"
            className={classes.searchInput}
            placeholder='Search...'
            value={filterValue || ''} 
            onChange={event => setFilter(event.target.value)} />
            <label className={classes.searchLabel} for='search'></label>
        </div>
    )
};

export default ColumnFilter;