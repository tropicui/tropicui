import { useLocation } from "react-router";
import Sidebar from './Sidebar'

function Navbar() {
    const location = useLocation();
    const pathname = location.pathname;
    const lastPath = pathname.split('/').pop();
    const pagetitle = lastPath
        ? lastPath.split('#')[0].charAt(0).toUpperCase() + lastPath.split('#')[0].slice(1)
        : '';

    let section = '';

    if (pathname.includes('/content/')) {
        section = 'CONTENT';
    } else if (pathname.includes('/components/')) {
        section = 'COMPONENTS';
    } else if (pathname.includes('/utilities/')) {
        section = 'UTILITIES';
    } else {
        section = 'GETTING STARTED';
    }

    return (
        <>
            <div className="fixed inset-x-0 inset-y-[var(--header-h)_auto] bg-base-background z-10 md:hidden">
                <div className="flex items-center gap-4 h-(--header-h) border-b border-base-border px-4">
                    <label className="btn btn-clear btn-icon" htmlFor="sidebar-cbx">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </label>
                    <div className="text-base-dense font-semibold">{section}</div>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                    <div className="font-medium">{pagetitle}</div>
                </div>
            </div>
            <div className="drawer drawer-left drawer-sm inset-y-[calc(var(--header-h)*2)_auto]">
                <label className="drawer-toggle">
                    <input type="checkbox" id="sidebar-cbx" />
                </label>
                <div className="drawer-content pb-[calc(var(--header-h)*2)]">
                    <Sidebar isMobile={true} />
                </div>
            </div>
        </>
    );
}

export default Navbar;