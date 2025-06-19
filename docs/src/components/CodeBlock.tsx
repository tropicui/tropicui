import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";
import "highlight.js/styles/monokai-sublime.min.css";

hljs.registerLanguage("html", html);

interface CodeBlockProps {
    children: React.ReactNode;
}

function CodeBlock(props: CodeBlockProps) {
    const { children } = props;

    const highlightedCode = hljs.highlight(
        children?.toString() || '',
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