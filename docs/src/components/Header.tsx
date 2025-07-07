import { useEffect, useState } from "react";

function Header() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const isDarkTheme = localStorage.getItem('theme') === 'dark';

        if (isDarkTheme) {
            document.documentElement.setAttribute('data-theme', 'dark');
            setIsDark(true);
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }, []);

    const toggleTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            localStorage.setItem('theme', 'dark');
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            localStorage.removeItem('theme');
            document.documentElement.removeAttribute('data-theme');
        }
        setIsDark(event.target.checked);
    };

    return (
        <div className="fixed inset-x-0 start-0 z-10 border-b border-base-border">
            <div className="bg-base-background">
                <div className="flex h-[var(--header-h)] px-4">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">🌴</span>
                        <span className="text-2xl text-base-foreground font-medium">TropicUI</span>
                        <div className="m-0.5"></div>
                        <div className="tag tag-pill tag-sm">v1.0</div>
                    </div>
                    <div className="grow"></div>
                    <nav className="flex items-center gap-4">
                        <label className="btn btn-clear btn-icon btn-round btn-toggle">
                            <input
                                type="checkbox"
                                checked={isDark}
                                onChange={toggleTheme}
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="btn-toggled-icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                            </svg>                                  
                        </label>
                        <a href="https://github.com/tropic-ui/tropic-ui" target="_blank" className="text-base-foreground hover:text-base-foreground/80 transition-colors">
                            <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.2 1.839 1.2 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.299-1.23 3.299-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header