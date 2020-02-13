import React from 'react'

export const SplitView = ({ children }) => (
    (children && children.length) ?
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 p-4" style={{borderRight: "2px solid",borderColor: "#333"}}>
                {children[0] ? children[0] : null}
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 p-4">
                {children[1] ? children[1] : null}
            </div>
        </div>
        : null
)
