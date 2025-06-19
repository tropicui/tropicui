import Breadcrumb from "../components/BreadcrumbItem";
import TableOfContent from "../components/TableOfContent";
import Preview from "../components/Preview";

function Avatar() {
    return (
        <div className="grid grid-cols-[1fr_auto] gap-4 min-h-dvh">
            <div className="col-start-1 row-start-1 pt-8">
                <div className="mb-4">
                    <Breadcrumb>COMPONENT</Breadcrumb>
                </div>

                <div className="mb-6">
                    <h2>Avatar</h2>
                </div>

                <div className="mb-8">
                    <h6>The <strong>Avatar</strong> component displays user profile images, initials, or placeholder icons in a circular or rounded format.</h6>
                </div>

                <div className="mb-6">
                    <h3 id="usage">Usage</h3>
                </div>

                <div className="mb-4">
                    <h4 id="basic">Basic</h4>
                </div>

                <Preview code={`<div class="avatar">
    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
</div>`}>
                    <div className="avatar">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
                    </div>
                </Preview>

                <div className="mb-4">
                    <h4 id="initials">Initials</h4>
                </div>

                <Preview code={`<div class="avatar avatar-initials">
    <span>JD</span>
</div>`}>
                    <div className="avatar avatar-initials">
                        <span>JD</span>
                    </div>
                </Preview>

                <div className="mb-4">
                    <h4 id="placeholder">Placeholder</h4>
                </div>

                <Preview code={`<div class="avatar avatar-placeholder">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
</div>`}>
                    <div className="avatar avatar-placeholder">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </div>
                </Preview>

                <div className="mb-6">
                    <h3 id="sizes">Sizes</h3>
                </div>

                <Preview code={`<div class="avatar avatar-xs">
    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
</div>
<div class="avatar avatar-sm">
    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
</div>
<div class="avatar">
    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
</div>
<div class="avatar avatar-lg">
    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
</div>
<div class="avatar avatar-xl">
    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
</div>`}>
                    <div className="flex items-center gap-4">
                        <div className="avatar avatar-xs">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
                        </div>
                        <div className="avatar avatar-sm">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
                        </div>
                        <div className="avatar">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
                        </div>
                        <div className="avatar avatar-lg">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
                        </div>
                        <div className="avatar avatar-xl">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
                        </div>
                    </div>
                </Preview>

                <div className="mb-6">
                    <h3 id="styles">Styles</h3>
                </div>

                <div className="mb-4">
                    <h4 id="rounded">Rounded</h4>
                </div>

                <Preview code={`<div class="avatar avatar-rounded">
    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
</div>
<div class="avatar avatar-rounded avatar-initials">
    <span>JD</span>
</div>
<div class="avatar avatar-rounded avatar-placeholder">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
</div>`}>
                    <div className="flex items-center gap-4">
                        <div className="avatar avatar-rounded">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
                        </div>
                        <div className="avatar avatar-rounded avatar-initials">
                            <span>JD</span>
                        </div>
                        <div className="avatar avatar-rounded avatar-placeholder">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                    </div>
                </Preview>

                <div className="mb-4">
                    <h4 id="colours">Colours</h4>
                </div>

                <Preview code={`<div class="avatar avatar-initials avatar-primary">
    <span>PR</span>
</div>
<div class="avatar avatar-initials avatar-accent">
    <span>AC</span>
</div>
<div class="avatar avatar-initials avatar-success">
    <span>SU</span>
</div>
<div class="avatar avatar-initials avatar-warning">
    <span>WA</span>
</div>
<div class="avatar avatar-initials avatar-danger">
    <span>DA</span>
</div>`}>
                    <div className="flex items-center gap-4">
                        <div className="avatar avatar-initials avatar-primary">
                            <span>PR</span>
                        </div>
                        <div className="avatar avatar-initials avatar-accent">
                            <span>AC</span>
                        </div>
                        <div className="avatar avatar-initials avatar-success">
                            <span>SU</span>
                        </div>
                        <div className="avatar avatar-initials avatar-warning">
                            <span>WA</span>
                        </div>
                        <div className="avatar avatar-initials avatar-danger">
                            <span>DA</span>
                        </div>
                    </div>
                </Preview>

                <div className="mb-4">
                    <h4 id="outline">Outline</h4>
                </div>

                <Preview code={`<div class="avatar avatar-outline">
    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
</div>
<div class="avatar avatar-outline avatar-primary">
    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
</div>
<div class="avatar avatar-outline avatar-initials avatar-accent">
    <span>AC</span>
</div>
<div class="avatar avatar-outline avatar-placeholder avatar-success">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
</div>`}>
                    <div className="flex items-center gap-4">
                        <div className="avatar avatar-outline">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
                        </div>
                        <div className="avatar avatar-outline avatar-primary">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
                        </div>
                        <div className="avatar avatar-outline avatar-initials avatar-accent">
                            <span>AC</span>
                        </div>
                        <div className="avatar avatar-outline avatar-placeholder avatar-success">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                    </div>
                </Preview>

                <div className="mb-6">
                    <h3 id="variants">Variants</h3>
                </div>

                <div className="mb-4">
                    <h4 id="status">Status Indicator</h4>
                </div>

                <Preview code={`<div class="avatar avatar-status avatar-status-online">
    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
</div>
<div class="avatar avatar-status avatar-status-offline">
    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
</div>
<div class="avatar avatar-status avatar-status-busy">
    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
</div>
<div class="avatar avatar-status avatar-status-away">
    <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
</div>`}>
                    <div className="flex items-center gap-4">
                        <div className="avatar avatar-status avatar-status-online">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
                        </div>
                        <div className="avatar avatar-status avatar-status-offline">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
                        </div>
                        <div className="avatar avatar-status avatar-status-busy">
                            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
                        </div>
                        <div className="avatar avatar-status avatar-status-away">
                            <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
                        </div>
                    </div>
                </Preview>

                <div className="mb-4">
                    <h4 id="group">Avatar Group</h4>
                </div>

                <Preview code={`<div class="avatar-group">
    <div class="avatar">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
    </div>
    <div class="avatar">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
    </div>
    <div class="avatar">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
    </div>
    <div class="avatar">
        <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
    </div>
</div>`}>
                    <div className="avatar-group">
                        <div className="avatar">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
                        </div>
                        <div className="avatar">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
                        </div>
                        <div className="avatar">
                            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
                        </div>
                        <div className="avatar">
                            <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
                        </div>
                    </div>
                </Preview>

                <div className="mb-4">
                    <h4 id="group-counter">Avatar Group with Counter</h4>
                </div>

                <Preview code={`<div class="avatar-group">
    <div class="avatar">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
    </div>
    <div class="avatar">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
    </div>
    <div class="avatar">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
    </div>
    <div class="avatar avatar-counter">
        <span>+5</span>
    </div>
</div>`}>
                    <div className="avatar-group">
                        <div className="avatar">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
                        </div>
                        <div className="avatar">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
                        </div>
                        <div className="avatar">
                            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
                        </div>
                        <div className="avatar avatar-counter">
                            <span>+5</span>
                        </div>
                    </div>
                </Preview>

                <div className="mb-4">
                    <h4 id="badge">Avatar with Badge</h4>
                </div>

                <Preview code={`<div class="avatar avatar-badge">
    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
    <div class="badge badge-primary">3</div>
</div>
<div class="avatar avatar-badge">
    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
    <div class="badge badge-danger">!</div>
</div>
<div class="avatar avatar-badge avatar-initials avatar-accent">
    <span>JD</span>
    <div class="badge badge-success">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
    </div>
</div>`}>
                    <div className="flex items-center gap-4">
                        <div className="avatar avatar-badge">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
                            <div className="badge badge-primary">3</div>
                        </div>
                        <div className="avatar avatar-badge">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
                            <div className="badge badge-danger">!</div>
                        </div>
                        <div className="avatar avatar-badge avatar-initials avatar-accent">
                            <span>JD</span>
                            <div className="badge badge-success">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </Preview>

                <div className="mb-4">
                    <h4 id="clickable">Clickable Avatar</h4>
                </div>

                <Preview code={`<button class="avatar avatar-clickable">
    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
</button>
<a href="#" class="avatar avatar-clickable avatar-initials avatar-primary">
    <span>JD</span>
</a>
<button class="avatar avatar-clickable avatar-outline avatar-placeholder">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
</button>`}>
                    <div className="flex items-center gap-4">
                        <button className="avatar avatar-clickable">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="User Avatar" />
                        </button>
                        <a href="#" className="avatar avatar-clickable avatar-initials avatar-primary">
                            <span>JD</span>
                        </a>
                        <button className="avatar avatar-clickable avatar-outline avatar-placeholder">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </button>
                    </div>
                </Preview>

                <div className="mb-4">
                    <h4 id="fallback">Fallback Avatar</h4>
                </div>
                <div className="mb-4">
                    <p>When an image fails to load, the avatar can fallback to initials or a placeholder icon.</p>
                </div>

                <Preview code={`<div class="avatar avatar-fallback">
    <img src="broken-image-url.jpg" alt="User Avatar" />
    <span class="avatar-fallback-initials">JD</span>
</div>
<div class="avatar avatar-fallback">
    <img src="another-broken-url.jpg" alt="User Avatar" />
    <div class="avatar-fallback-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
    </div>
</div>`}>
                    <div className="flex items-center gap-4">
                        <div className="avatar avatar-fallback">
                            <img src="broken-image-url.jpg" alt="User Avatar" />
                            <span className="avatar-fallback-initials">JD</span>
                        </div>
                        <div className="avatar avatar-fallback">
                            <img src="another-broken-url.jpg" alt="User Avatar" />
                            <div className="avatar-fallback-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </Preview>
            </div>
            <div className="col-start-2 row-start-1">
                <TableOfContent items={[
                    {
                        title: "Usage",
                        href: "#usage",
                        nested: [
                            {
                                title: "Basic",
                                href: "#basic",
                            },
                            {
                                title: "Initials",
                                href: "#initials",
                            },
                            {
                                title: "Placeholder",
                                href: "#placeholder",
                            },
                        ]
                    },
                                        {
                        title: "Sizes",
                        href: "#sizes",
                    },
                    {
                        title: "Styles",
                        href: "#styles",
                        nested: [
                            {
                                title: "Rounded",
                                href: "#rounded",
                            },
                            {
                                title: "Colours",
                                href: "#colours",
                            },
                            {
                                title: "Outline",
                                href: "#outline",
                            },
                        ]
                    },
                    {
                        title: "Variants",
                        href: "#variants",
                        nested: [
                            {
                                title: "Status Indicator",
                                href: "#status",
                            },
                            {
                                title: "Avatar Group",
                                href: "#group",
                            },
                            {
                                title: "Avatar Group with Counter",
                                href: "#group-counter",
                            },
                            {
                                title: "Avatar with Badge",
                                href: "#badge",
                            },
                            {
                                title: "Clickable Avatar",
                                href: "#clickable",
                            },
                            {
                                title: "Fallback Avatar",
                                href: "#fallback",
                            },
                        ]
                    },
                ]}/>
            </div>
        </div>
    );
};

export default Avatar;