import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router'

import marked from "marked"
import { Parser } from 'html-to-react';

import SlidesMD from '../../../doc/planning.md'

export const Slides = withRouter((props) => {
    const [slideHeader, setSlideHeader] = useState("")
    const [slides, setSlides] = useState([])

    useEffect(() => {
        const _slides = SlidesMD.split('Slide');
        setSlideHeader(_old => _slides[0])
        _slides.shift()
        setSlides(_old => _slides)

        return () => { }
    }, [])


    marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function (code) {
            return require('highlight.js').highlightAuto(code).value;
        },
        pedantic: false,
        gfm: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false
    });
    
    return (

        <section className="mdSection">
            {
                slides.map(
                    slide =>
                        <article>
                            { Parser().parse(marked(slideHeader)) }
                            { Parser().parse(marked(slide))}
                        </article>)
            }
        </section>)
    //return <div>Slide {props.match.params.slideNo}</div>
})