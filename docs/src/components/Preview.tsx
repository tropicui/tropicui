import { useState, useEffect, useRef } from "react";
import CodeBlock from "./CodeBlock";

interface PreviewProps {
    children: React.ReactNode;
    code: string;
}

function Preview(props: PreviewProps) {
    const { children, code } = props;
    const [isDarkTheme, setDarkTheme] = useState(false);
    const [dir, setDir] = useState('ltr');
    const [isCopied, setCopied] = useState(false);
    const [margin, setMargin] = useState(0);
    const [isMouseDown, setMouseDown] = useState(false);
    const [originPos, setOriginPos] = useState(-1);
    const elementRef = useRef(null);
    const widthMin = 250; // px

    const copyAndReset = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCopied(event.target.checked);

        navigator.clipboard.writeText(code);

        // Reset the copied state after 2 seconds
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    const handleMouseDown = (event: React.MouseEvent) => {
        setMouseDown(true);
        setOriginPos(event.clientX);
        event.preventDefault();
    }

    useEffect(() => {
        const handleMouseUp = () => {
            setMouseDown(false);
            setOriginPos(-1);
        }

        const handleMouseMove = (event: MouseEvent) => {
            if (isMouseDown && elementRef.current) {
                const currentPos = event.clientX;

                const marginTotal = (dir === 'rtl')
                    ? currentPos - originPos + margin
                    : originPos - currentPos + margin;

                const width = (elementRef.current as HTMLDivElement).getBoundingClientRect().width;
                
                const marginMin = width - widthMin;

                setMargin(Math.min(marginMin, Math.max(marginTotal, 0)));
            }
        }

        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [isMouseDown, originPos]);

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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="btn-toggled-icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                </label>
                <label className="btn btn-sm btn-icon btn-toggle">
                    <input
                        type="checkbox"
                        checked={dir === 'ltr' ? false : true}
                        onChange={(event) => { setDir(event.target.checked ? 'rtl' : 'ltr') }}
                    />
                    <span className="scale-x-90">LTR</span>
                    <span className="scale-x-90 btn-toggled-icon">RTL</span>
                </label>
                <label className={`btn btn-sm btn-icon btn-toggle tooltip tooltip-primary tooltip-top ${isCopied ? 'text-success' : ''}`} data-tooltip={isCopied ? 'Copied!' : 'Copy Code'}>
                    <input
                        type="checkbox"
                        checked={isCopied}
                        onChange={copyAndReset}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="btn-toggled-icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                </label>
            </div>
            <div
                className="card relative h-fit pe-5 transition-colors"
                style={{ marginInlineEnd: margin }}
                data-theme={isDarkTheme ? 'dark' : 'default'}
                dir={dir}
            >
                <div className="card-body flex justify-center items-center-safe min-h-[420px] max-h-[420px] w-full overflow-x-hidden overflow-y-auto">
                    <div className="w-full h-fit">
                        {children}
                    </div>
                </div>
                <div className="absolute end-0 inset-y-0 grid items-center bg-base-airy border border-base-border hover:border-base-dense active:bg-base-border active:border-base-dense rounded-none rounded-e-md w-5 h-full cursor-ew-resize transition-colors"
                    onMouseDown={handleMouseDown}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
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