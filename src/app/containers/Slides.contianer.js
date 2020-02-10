import React from 'react'
import {withRouter} from 'react-router'
import { match } from 'minimatch'

export const Slides = withRouter((props) => {

    return <div>Slide {props.match.params.slideNo}</div>
})