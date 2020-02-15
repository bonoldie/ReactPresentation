import React, { useState, useCallback, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { SplitView } from '../containers/SplitView.container'

import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'


const randDOMid = () => Math.random().toString().substr(7, 13)

export const Example = ({ value: { title, code: _code } }) => {
    const [code, setCode] = useState(_code)
    const liveRef = useRef(null)

    useEffect(() => {
        console.log(React.createElement(code))

        

        if (liveRef && liveRef.current) {
            ReactDOM.render(React.createElement(code), liveRef.current)
        }
    }, [code])


    return (
        <div className="row">
            <div className="col-12 mt-5">
                {/* <LiveProvider>
                    <h2> {title} </h2>
                    <SplitView >
                        <LiveEditor onKeyDown={(e) => {
                            if (e.keyCode === 9) {
                                e.preventDefault()
                                e.target.blur()
                            }
                        }}
                        />
                        <LivePreview />
                    </SplitView>
                </LiveProvider>
                <hr /> */}

                <h2> {title} </h2>
                <SplitView >


                    <Editor
                        value={code}
                        onValueChange={code => setCode(oldCode => code)}
                        highlight={code => highlight(code, languages.js)}
                        padding={10}
                        style={{
                            fontFamily: '"Fira code", "Fira Mono", monospace',
                            fontSize: 12,
                        }}
                    />

                    <div ref={liveRef} />
                </SplitView>

            </div>
        </div >
    );
};