import React from 'react'
import marked from '../utils/markded'
import { Parser } from 'html-to-react';

import { SplitView } from './SplitView.container'

const ComponentExample =
"\
```js  \n \
const MyComponent = () => <div>My Component</div> \n \
\n \
ReactDOM.render( \n \
    <MyComponent />, \n \
    document.getElementById('root') \n \
)\; \n \
```\
";

const MyComponent = () => <div>My Component</div>


export const Examples = () => {
    return (
        <div className="examples-container">
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5">
                        <h2> FIRST COMPONENT </h2>
                        <SplitView>
                            {Parser().parse(marked(ComponentExample))}
                            <MyComponent />
                        </SplitView>
                    </div>
                </div>
            </div>
        </div>
    )
}