import React from 'react'

var parse = require('html-react-parser')

export const Example = ({ value: { title, penID,show} }) => {

    return (
        <div className="row">
            <div className="offset-1 col-10 mt-5 mb-5">
                <h2> {title} </h2>
                <iframe height="500" style={{ width: "100%" }} scrolling="no" title={penID} src={"https://codepen.io/Bonoldiz/embed/preview/"+penID+"?height=265&theme-id=default&default-tab="+show} frameBorder={"no"} allowFullScreen={true}></iframe>
            </div>
        </div >
    );
};