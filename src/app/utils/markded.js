const marked = require('marked')

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

export default marked