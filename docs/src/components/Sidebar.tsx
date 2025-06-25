import { NavLink } from "react-router";

function Sidebar() {
    const items = [
        {
            title: "Getting Started",
            children: [
                {
                    title: "Introduction",
                    to: "/introduction",
                },
                {
                    title: "Installation",
                    to: "/installation",
                },
                {
                    title: "Theming",
                    to: "/theming",
                },
            ],
        },
        {
            title: "Components",
            children: [
                {
                    title: "Accordion",
                    to: "/components/accordion",
                },
                {
                    title: "Alert",
                    to: "/components/alert",
                },
                {
                    title: "Avatar",
                    to: "/components/avatar",
                },
                {
                    title: "Badge",
                    to: "/components/badge",
                },
                {
                    title: "Breadcrumb",
                    to: "/components/breadcrumb",
                },
                {
                    title: "Button",
                    to: "/components/button",
                },
                {
                    title: "Card",
                    to: "/components/card",
                },
                {
                    title: "Checkbox",
                    to: "/components/checkbox",
                },
            ],
        },
    ];

    return (
        <aside className="relative col-start-1 row-start-1">
            <div className="absolute inset-0">
                <div className="sticky top-14 bg-base border-r border-base-border h-full max-h-[calc(100dvh-(var(--spacing)*14))] py-4 px-8 overflow-y-auto">
                    {items.map((child) => 
                        (
                            <nav className="">
                                <ul className="">
                                    <li>
                                        <div className="divider divider-start-0 my-4">
                                            <span className="text-sm font-medium text-base-dense">
                                                {child.title.toUpperCase()}
                                            </span>
                                        </div>
                                    </li>
                                    {
                                        child.children.map((child) => (
                                            <li className="mx-2">
                                                <NavLink
                                                    to={child.to}
                                                    className={({ isActive }) => `btn btn-block ${isActive ? '' : 'btn-clear'}`}
                                                >
                                                    {child.title}
                                                    <span className="grow"></span>
                                                </NavLink>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </nav>
                        )
                    )}
                </div>
            </div>
        </aside>
    );
}

export default Sidebar