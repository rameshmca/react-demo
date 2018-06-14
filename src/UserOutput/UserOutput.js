import React from 'react';

const useroutput = (props) => {
    return (
<div>
    <br /><b>UserOutput Component</b>
    <p onClick={props.click}>This is first paragraph. </p>
    <p>This is second paragraph.</p>
    <p>Username : {
    props.username}</p>
</div>
    )
}

export default useroutput;