import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router";

function TableOfContent(props) {
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
        <div className="sticky inset-y-[calc(var(--header-h)+(--spacing(0)))] h-dvh px-6 pt-12 pb-32 w-84 overflow-y-auto">
            <div className="mb-4">
                <span className="divider divider-start-0 text-base-dense font-semibold">Table of Contents</span>
            </div>
            <div className="">
            {items.map((child) => 
                (
                    <ul className="">
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
                                            <li className="">
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
    );
}

export default TableOfContent;