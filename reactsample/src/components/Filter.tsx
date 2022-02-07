import React from 'react';
interface IAppProps {
    "filterEvent" : (txt:string) => void
}
const Filter: React.FC<IAppProps> = (props) => {
    return <>
        <input type="text" placeholder="search by name" 
        onChange={(evt) => props.filterEvent(evt.target.value)} />
    </>
}

export default Filter;
