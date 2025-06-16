import hljs from '../../node_modules/highlight.js/lib/core';
import xml from '../../node_modules/highlight.js/lib/languages/xml';
hljs.registerLanguage('html', xml);
hljs.highlightAll();