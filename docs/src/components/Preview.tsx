import { useCallback, useEffect, useRef, useState } from "react";
import CodeBlock from "./CodeBlock";

interface PreviewProps {
    children?: React.ReactNode;
    code: string;
}

function Preview(props: PreviewProps) {
    const { code } = props;
    const [isDarkTheme, setDarkTheme] = useState(false);
    const [dir, setDir] = useState('ltr');
    const [margin, setMargin] = useState(0);
    const [isMouseDown, setMouseDown] = useState(false);
    const [originPos, setOriginPos] = useState(-1);
    const elementRef = useRef<HTMLDivElement>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const widthMin = 250; // px

    const handleMouseDown = (event: React.MouseEvent) => {
        setMouseDown(true);
        setOriginPos(event.clientX);
        event.preventDefault();
    }

    const iframeSrc = `<html lang="en" dir="ltr" data-theme="">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <style>
                html {
                    overflow: auto;
                }
                .scrollbar-stable {
                    scrollbar-gutter: stable;
                }
            </style>
        </head>
        <body class="bg-base-background bg-pattern-diagonal-lines transition-colors h-screen overflow-auto scrollbar-stable">
            <div class="@container grid content-center-safe justify-items-center-safe h-full p-6">
                ${code}
            </div>
        </body>
    </html>`;

    useEffect(() => {
        const handleMouseUp = () => {
            setMouseDown(false);
            setOriginPos(-1);
        }

        const handleMouseMove = (event: MouseEvent) => {
            if (isMouseDown && elementRef.current) {
                const currentPos = event.clientX;
                const element = elementRef.current as HTMLDivElement;
                const containerWidth = element.getBoundingClientRect().width;

                // const marginTotal = (dir === 'rtl')
                //     ? currentPos - originPos + margin
                //     : originPos - currentPos + margin;

                const marginTotal = originPos - currentPos + margin;
                
                const marginMin = containerWidth - widthMin;
                const marginClamped = Math.min(marginMin, Math.max(marginTotal, 0));

                setMargin(marginClamped);
            }
        }

        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mousemove', handleMouseMove);

        const iframe = iframeRef.current;

        if (iframe && iframe.contentDocument) {
            const htmlElement = iframe.contentDocument.documentElement;

            if (htmlElement) {
                htmlElement.setAttribute('dir', dir);
                htmlElement.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
            }
        }

        return () => {
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [isMouseDown, originPos, dir, isDarkTheme]);

    const handleLoad = useCallback(() => {
        const iframe = iframeRef.current;
        if (!iframe || !iframe.contentDocument) return;

        const doc = iframe.contentDocument;

        // Clone <link> and <style> elements from the main document
        const styles = Array.from(document.head.querySelectorAll('link[rel="stylesheet"], style'));

        styles.forEach((styleNode) => {
            doc.head.appendChild(styleNode.cloneNode(true));
        });
    }, []);

    return (
        <div
            ref={elementRef}
            className="sink mb-10"
        >
            <div className="flex items-center gap-2">
                <div className="mx-2">
                    <span className="opacity-60">Preview</span>
                </div>
                <div className="grow"></div>
                <label className="btn btn-sm btn-icon btn-toggle tooltip tooltip-primary tooltip-top" data-tooltip="Toggle Dark Theme">
                    <input
                        type="checkbox"
                        checked={isDarkTheme}
                        onChange={(event) => { setDarkTheme(event.target.checked) }}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="btn-toggled-icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                </label>
                <label className="btn btn-sm btn-icon btn-toggle tooltip tooltip-primary tooltip-top" data-tooltip="Toggle Text Direction">
                    <input
                        type="checkbox"
                        checked={dir === 'ltr' ? false : true}
                        onChange={(event) => { setDir(event.target.checked ? 'rtl' : 'ltr') }}
                    />
                    <span className="scale-x-90">LTR</span>
                    <span className="scale-x-90 btn-toggled-icon">RTL</span>
                </label>
            </div>
            <div
                className="card relative"
                style={{ marginInlineEnd: margin }}
            >
                <div className={`${isMouseDown ? '' : 'hidden'} absolute inset-x-0 h-full w-full bg-transparent`}></div>
                <iframe
                    ref={iframeRef}
                    sandbox="allow-scripts allow-same-origin allow-forms"
                    onLoad={handleLoad}
                    className="card-body h-[420px] w-full p-0 pe-5"
                    srcDoc={iframeSrc}
                >
                </iframe>

                <div className="absolute end-0 inset-y-0 grid items-center bg-base-airy border border-base-border hover:border-base-dense active:bg-base-border active:border-base-dense rounded-none rounded-e-md w-5 h-full cursor-ew-resize transition-colors"
                    onMouseDown={handleMouseDown}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                </div>
            </div>
            <div className="card">
                <CodeBlock>
                    {code}
                </CodeBlock>
            </div>
        </div>
    );
}

export default Preview;