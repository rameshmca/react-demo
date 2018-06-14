import React from 'react';

const userinput = (props) => {
    return <div>
        <b>UserInput Component</b>  <br />
        <input type="text" onChange={props.changed} />
    </div>
}

export default userinput;