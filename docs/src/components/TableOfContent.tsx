import { useEffect } from "react";
import { NavLink, useLocation } from "react-router";

interface TableOfContentItem {
    title: string;
    href: string;
    nested?: TableOfContentItem[];
}

interface TableOfContentProps {
    items: TableOfContentItem[];
}

function TableOfContent(props: TableOfContentProps) {
    const { items } = props;
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const elem = document.getElementById(location.hash.slice(1));

            if (elem) {
                elem.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location.hash]);

    return (
        <div className="max-xl:hidden">
            <div className="sticky top-(--header-h) max-h-[calc(100svh-var(--header-h))] px-6 py-12 w-84 overflow-x-hidden overflow-y-auto">
                <div className="mb-4">
                    <span className="divider divider-start-0 text-base-dense font-semibold">Table of Contents</span>
                </div>
                <div className="">
                {items.map((child) => 
                    (
                        <ul className="" key={child.title}>
                            <li className="">
                                <NavLink
                                    to={child.href}
                                    className={() => `block border-s hover:border-accent py-1 ps-4 ${location.hash === child.href ? 'border-accent font-medium' : 'border-base-border not-hover:text-base-dense'}`}
                                >
                                    {child.title}
                                </NavLink>
                                {child.nested && (
                                    <ul className="">
                                        {child.nested.map((child) =>
                                            (
                                                <li className="" key={child.href}>
                                                    <NavLink
                                                        to={child.href}
                                                        className={() => `block border-s hover:border-accent py-1 ps-8 ${location.hash === child.href ? 'border-accent font-medium' : 'border-base-border not-hover:text-base-dense'}`}
                                                    >
                                                        {child.title}
                                                    </NavLink>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                )}
                            </li>
                        </ul>
                    )
                )}
                </div>
            </div>
        </div>
    );
}

export default TableOfContent;