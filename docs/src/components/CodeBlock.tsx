import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";
import "highlight.js/styles/monokai-sublime.min.css";

hljs.registerLanguage("html", html);

function CodeBlock(props) {
    const { children } = props;

    const highlightedCode = hljs.highlight(
        children,
        { language: 'html' }
    ).value

    return (
        <div className="grid bg-primary p-1">
            <div className="hljs border border-base-foreground rounded-md overflow-x-auto p-6 scheme-dark">
                <pre>
                    <code dangerouslySetInnerHTML={{ __html: highlightedCode }} className=""></code>
                </pre>
            </div>
        </div>
    );
}

export default CodeBlock;