import { useState } from "react";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";
// import "highlight.js/styles/monokai-sublime.min.css";
import "highlight.js/styles/panda-syntax-dark.min.css";

hljs.registerLanguage("html", html);

interface CodeBlockProps {
    children: React.ReactNode;
}

function CodeBlock(props: CodeBlockProps) {
    const { children } = props;
    const [isViewCode, setViewCode] = useState(false);
    const [isCopied, setCopied] = useState(false);
    const [isScrolling, setScrolling] = useState(false);

    const code = children?.toString() || '';

    const copyAndReset = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCopied(event.target.checked);

        navigator.clipboard.writeText(code);

        // Reset the copied state after 2 seconds
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    const highlightedCode = hljs.highlight(
        code,
        { language: 'html' }
    ).value

    return (
        <div className="grid bg-primary p-1">
            <div
                className={`hljs relative border border-base-foreground rounded-md overflow-x-auto scheme-dark ${isViewCode ? '' : 'max-h-36'}`}
                style={{scrollbarGutter: 'stable'}}
                onScroll={() => { setScrolling(true) }}
                onScrollEnd={() => { setScrolling(false) }}
            >
                <div className="sticky inset-x-0 top-0 flex justify-end gap-1 p-1">
                    <label className={`btn btn-sm btn-toggle btn-primary ${isCopied ? 'text-success' : ''}  ${isScrolling ? 'opacity-30' : ''}`}>
                        <input
                            type="checkbox"
                            checked={isCopied}
                            onChange={copyAndReset}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="btn-toggled-icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span>Copy Code</span>
                        <span className="btn-toggled-icon">Copied!</span>
                    </label>
                    <label
                        className={`btn btn-sm btn-toggle btn-primary  ${isScrolling ? 'opacity-30' : ''}`}
                    >
                        <input
                            type="checkbox"
                            checked={isViewCode}
                            onChange={(event) => { setViewCode(event.target.checked) }}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="btn-toggled-icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                        <span>View Code</span>
                        <span className="btn-toggled-icon">Hide Code</span>
                    </label>
                </div>
                <pre className={`px-6 ${isViewCode ? 'pb-12' : 'pb-0'}`}>
                    <code dangerouslySetInnerHTML={{ __html: highlightedCode }} className=""></code>
                </pre>
                <div className={`sticky pointer-events-none inset-x-0 bottom-0 bg-linear-to-t from-[#2a2c2d] from-10% via-[#2a2c2d]/30 via-80% to-transparent w-full ${isViewCode ? 'h-0' : 'h-12'}`}></div>
            </div>
        </div>
    );
}

export default CodeBlock;