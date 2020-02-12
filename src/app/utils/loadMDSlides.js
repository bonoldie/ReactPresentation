import marked from 'marked'

const MDHeaderRegex = /<!-- START HEADER -->([\s\S]*.*)<!-- END HEADER -->/g

// TODO : BETTER SLIDE NUMERATION METHOD 
const MDSlidesRegex = /<!-- (?:START|END) SLIDE (\d+) -->((?:.|[\n|\r|\r\n])*?)<!-- (?:START|END) SLIDE (?:\d+) -->/g

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

/**
 * Load the slides from a Markdown file
 * 
 * @param {string} MDFile  
 * @returns {Object} MDSLides
 */
export const loadMDSlides = (MDFile) => {
    const rawHeader = MDFile.match(MDHeaderRegex)
    const _header = (rawHeader && rawHeader[0]) ? rawHeader[0] : null

    const _matches = MDFile.matchAll(MDSlidesRegex)
    var matches = []

    var match
    // Add the slides following the right order
    while (match = MDSlidesRegex.exec(MDFile)) {
        try {
            matches[match[1]] = match[2]
        } catch (error) {
            console.log(error)
        }       
    }

    const _slides = matches.map(slide => marked(slide))

    return { _header: marked(_header), _slides };
}