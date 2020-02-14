import React from 'react'
import { Example } from '../components/Example.component';

const MyComponent = `() => <div>My Component</div>`

export const Examples = () => {
    return (
        <div className="examples-container">
            <div className="container">
                <Example value={{title:"FIRST COMPONENT",code:MyComponent}}/>
            </div>
        </div>
    )
}