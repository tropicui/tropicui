import { NavLink } from "react-router";

interface SidebarProps {
    isMobile: boolean;
}

function Sidebar(props: SidebarProps) {
    const { isMobile } = props;

    const items = [
        {
            title: "Getting Started",
            children: [
                {
                    title: "Introduction",
                    to: "/docs/introduction",
                },
                {
                    title: "Installation",
                    to: "/docs/installation",
                },
                {
                    title: "Theming",
                    to: "/docs/theming",
                },
            ],
        },
        {
            title: "Content",
            children: [
                {
                    title: "Typography",
                    to: "/docs/content/typography",
                },
            ],
        },
        {
            title: "Components",
            children: [
                {
                    title: "Accordion",
                    to: "/docs/components/accordion",
                },
                {
                    title: "Alert",
                    to: "/docs/components/alert",
                },
                {
                    title: "Avatar",
                    to: "/docs/components/avatar",
                },
                {
                    title: "Badge",
                    to: "/docs/components/badge",
                },
                {
                    title: "Breadcrumb",
                    to: "/docs/components/breadcrumb",
                },
                {
                    title: "Button",
                    to: "/docs/components/button",
                },
                {
                    title: "Card",
                    to: "/docs/components/card",
                },
                {
                    title: "Checkbox",
                    to: "/docs/components/checkbox",
                },
                {
                    title: "Divider",
                    to: "/docs/components/divider",
                },
                {
                    title: "Drawer",
                    to: "/docs/components/drawer",
                },
                {
                    title: "Dropdown",
                    to: "/docs/components/dropdown",
                },
                {
                    title: "Form",
                    to: "/docs/components/form",
                },
                {
                    title: "Input",
                    to: "/docs/components/input",
                },
                {
                    title: "Menu",
                    to: "/docs/components/menu",
                },
                {
                    title: "Modal",
                    to: "/docs/components/modal",
                },
                {
                    title: "Popover",
                    to: "/docs/components/popover",
                },
                {
                    title: "Radio",
                    to: "/docs/components/radio",
                },
                {
                    title: "Select",
                    to: "/docs/components/select",
                },
                {
                    title: "Sink",
                    to: "/docs/components/sink",
                },
                {
                    title: "Spinner",
                    to: "/docs/components/spinner",
                },
                {
                    title: "Status",
                    to: "/docs/components/status",
                },
                {
                    title: "Switch",
                    to: "/docs/components/switch",
                },
                {
                    title: "Tab",
                    to: "/docs/components/tab",
                },
                {
                    title: "Table",
                    to: "/docs/components/table",
                },
                {
                    title: "Tag",
                    to: "/docs/components/tag",
                },
                {
                    title: "Textarea",
                    to: "/docs/components/textarea",
                },
                {
                    title: "Toast",
                    to: "/docs/components/toast",
                },
                {
                    title: "Tooltip",
                    to: "/docs/components/tooltip",
                },
            ],
        },
        {
            title: "Utilities",
            children: [
                {
                    title: "Float",
                    to: "/docs/utilities/float",
                },
                {
                    title: "Join",
                    to: "/docs/utilities/join",
                },
            ],
        },
    ];

    return (
        <aside className={`relative col-start-1 row-start-1 ${isMobile ? '' : 'max-md:hidden'} h-full`}>
            <div className="absolute inset-0">
                <div className="sticky top-14 bg-base border-r border-base-border h-full max-h-[calc(100dvh-var(--header-h))] py-4 px-8 overflow-y-auto">
                    {items.map((child) => 
                        (
                            <nav className="" key={child.title}>
                                <div className="divider divider-start-0 my-4">
                                    <span className="text-sm font-medium text-base-dense">
                                        {child.title.toUpperCase()}
                                    </span>
                                </div>
                                <ul className="menu">
                                    {
                                        child.children.map((child) => (
                                            <li className="mx-2" key={child.title}>
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