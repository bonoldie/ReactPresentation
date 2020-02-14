import React, { useState, useEffect } from 'react'
import { withRouter, Redirect } from 'react-router'

import { Parser } from 'html-to-react';

import SlidesMD from '../../../doc/planning.md'
import { loadMDSlides } from '../utils/loadMDSlides';

export const Slides = (props) => {
    const [slides, setSlides] = useState({})

    useEffect(() => {
        setSlides(_old => loadMDSlides(SlidesMD))
        return () => { }
    }, [])

    var nextSlide = (
        slides._slides &&
        slides._slides.length &&
        props.match.params.slideNo &&
        props.match.params.slideNo < slides._slides.length - 1)
        ? parseInt(props.match.params.slideNo) + 1
        : parseInt(props.match.params.slideNo);

    var previousSlide = (
        slides._slides &&
        slides._slides.length &&
        props.match.params.slideNo &&
        parseInt(props.match.params.slideNo) > 0)
        ? parseInt(props.match.params.slideNo) - 1
        : parseInt(props.match.params.slideNo);


    document.onkeydown = (e) => {
        switch (e.keyCode) {
            // NEXT
            case 39:
                props.history.push("/slides/" + nextSlide)
                break;
            // PREVIOUS
            case 37:
                props.history.push("/slides/" + previousSlide)
                break;
            default:
                break;
        }
    }

    return (
        (slides && slides._slides) ?
        <div className="md-container">
            <section className="md-section">
                    
                {
                    props.match.params.slideNo && slides._slides[props.match.params.slideNo] ?

                        <div>
                            {Parser().parse(slides._header)}
                            {Parser().parse(slides._slides[props.match.params.slideNo])}
                        </div>

                        :

                        <div>
                            {Parser().parse(slides._header)}
                            {slides._slides.map(
                                slide =>
                                    <article>
                                        {Parser().parse(slide)}
                                    </article>
                            )}
                        </div>
                }

                {
                    props.match.params.slideNo && props.match.params.slideNo > slides._slides.length ?
                        <Redirect to="/slides/1" />
                        :
                        null
                }

                {
                    (parseInt(props.match.params.slideNo)) ?
                        <button className="btn previous-btn grad" onClick={() => { props.history.push("/slides/" + previousSlide) }}><i className="fas fa-angle-left fa-2x"></i></button>
                        : null
                }
                {
                    (props.match.params.slideNo < slides._slides.length - 1) ?
                        <button className="btn next-btn grad" onClick={() => { props.history.push("/slides/" + nextSlide) }}><i className="fas fa-angle-right fa-2x" ></i></button>
                        : null
                }


            </section>
        </div>
            :
            null
    )
    //return <div>Slide {props.match.params.slideNo}</div>
}