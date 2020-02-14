import React from 'react';
import { LiveProvider, LiveEditor, LivePreview } from 'react-live';
import { SplitView } from '../containers/SplitView.container';


export const Example = ({value:{title,code}}) => {
    return (
        <div className="row">   
        <div className="col-12 mt-5">
            <LiveProvider code={code} >
            <h2> {title} </h2>
                <SplitView >
                    <LiveEditor />
                    <LivePreview />
                </SplitView>
            </LiveProvider>
            <hr />
        </div>
    </div>
    );
};