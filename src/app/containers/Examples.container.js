import React from 'react'
import { Example } from '../components/Example.component';

export const Examples = () => {
    return (
        <div className="examples-container">
            <div className="container mb-5 mt-5">
                <Example value={{title:"FIRST COMPONENT",penID:"OJVXvNQ",show:"js,result"}}/>

                <Example value={{title:"CLASS VS FUNCTIONAL COMPONENT",penID:"vYOKrpN",show:"js,result"}}/>

                <Example value={{title:"LIFECYCLE",penID:"qBdNKMW",show:"js"}}/>
            </div>
        </div>
    )
}