import React from 'react';

const Display = (props) => {
    console.log(props.info)
    return (
        <div>
            <img style={{filter: 'brightness(100%)'}} width={300} src={props.info} />
        </div>
    );
};

export default Display;
