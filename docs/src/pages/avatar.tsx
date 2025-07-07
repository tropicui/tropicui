import { Link } from "react-router";
import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import Preview from "../components/Preview";
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";
import TableOfContent from "../components/TableOfContent";

function Avatar() {
    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>COMPONENT</BreadcrumbItem>
                </Breadcrumb>

                <h2>Avatar</h2>

                <h6>Displays user profile images, initials, or placeholder icons in a consistent format.</h6>

                <h3 id="usage">Usage</h3>

                <h4 id="basic">Basic</h4>

                <Preview code={`<div class="avatar">
    <img src="/docs/img/user1.jpg" alt="User1" />
</div>`}/>

                <h4 id="initials">Initials</h4>

                <Preview code={`<div class="avatar">JD</div>`}/>

                <h4 id="icon">Icon</h4>

                <Preview code={`<div class="avatar">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
</div>`}/>

                <h3 id="styles">Styles</h3>

                <h4 id="sizes">Sizes</h4>

                <Preview code={`<div class="flex flex-wrap items-center gap-8">
    <div class="avatar avatar-xs">
        <img src="/docs/img/user1.jpg" alt="Extra Small Avatar" />
    </div>
    <div class="avatar avatar-sm">
        <img src="/docs/img/user1.jpg" alt="Small Avatar" />
    </div>
    <div class="avatar">
        <img src="/docs/img/user1.jpg" alt="Default Avatar" />
    </div>
    <div class="avatar avatar-lg">
        <img src="/docs/img/user1.jpg" alt="Large Avatar" />
    </div>
    <div class="avatar avatar-xl">
        <img src="/docs/img/user1.jpg" alt="Extra Large Avatar" />
    </div>
</div>`}/>

                <h4 id="colours">Colours</h4>

                <Preview code={`<div class="flex flex-wrap gap-8 mb-8">
    <div class="avatar avatar-primary">PR</div>
    <div class="avatar avatar-accent">AC</div>
    <div class="avatar avatar-success">SU</div>
    <div class="avatar avatar-warning">WA</div>
    <div class="avatar avatar-danger">DA</div>
</div>
<div class="flex flex-wrap gap-8">
    <div class="avatar avatar-primary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
    </div>
    <div class="avatar avatar-accent">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
    </div>
    <div class="avatar avatar-success">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
    </div>
    <div class="avatar avatar-warning">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
    </div>
    <div class="avatar avatar-danger">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
    </div>
</div>`}/>

                <h4 id="soft">Soft</h4>

                <Preview code={`<div class="flex flex-wrap gap-8 mb-8">
    <div class="avatar avatar-soft avatar-primary">PR</div>
    <div class="avatar avatar-soft avatar-accent">AC</div>
    <div class="avatar avatar-soft avatar-success">SU</div>
    <div class="avatar avatar-soft avatar-warning">WA</div>
    <div class="avatar avatar-soft avatar-danger">DA</div>
</div>
<div class="flex flex-wrap gap-8">
    <div class="avatar avatar-soft avatar-primary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
    </div>
    <div class="avatar avatar-soft avatar-accent">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
    </div>
    <div class="avatar avatar-soft avatar-success">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
    </div>
    <div class="avatar avatar-soft avatar-warning">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
    </div>
    <div class="avatar avatar-soft avatar-danger">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
    </div>
</div>`}/>

                <h3 id="variants">Variants</h3>

                <h4 id="circle">Circle</h4>

                <Preview code={`<div class="flex flex-wrap gap-8">
    <div class="avatar avatar-circle">
        <img src="/docs/img/user1.jpg" alt="User1" />
    </div>
    <div class="avatar avatar-circle">JD</div>
    <div class="avatar avatar-circle">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
    </div>
    <div class="avatar avatar-circle avatar-primary">PR</div>
</div>`}/>

                <h4 id="ring">Ring</h4>

                <Preview code={`<div class="flex flex-wrap gap-8 mb-8">
    <div class="avatar avatar-ring">
        <img src="/docs/img/user1.jpg" alt="User1" />
    </div>
    <div class="avatar avatar-ring">JD</div>
    <div class="avatar avatar-ring avatar-primary">PR</div>
</div>
<div class="flex flex-wrap gap-8">
    <div class="avatar avatar-circle avatar-ring">
        <img src="/docs/img/user1.jpg" alt="User1" />
    </div>
    <div class="avatar avatar-circle avatar-ring">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
    </div>
    <div class="avatar avatar-circle avatar-ring avatar-primary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
    </div>
</div>`}/>

                <h4 id="ring-colour">Ring Colour</h4>

                <p>The <code className="tag"><pre>avatar-ring-[colour]</pre></code> attribute can be used to set the ring colour regardless of the avatar base colour.</p>

                <Preview code={`<div class="flex flex-wrap gap-8 mb-8">
    <div class="avatar avatar-ring avatar-ring-primary">PR</div>
    <div class="avatar avatar-ring avatar-ring-accent">AC</div>
    <div class="avatar avatar-ring avatar-ring-success">SU</div>
    <div class="avatar avatar-ring avatar-ring-warning">WA</div>
    <div class="avatar avatar-ring avatar-ring-danger">DA</div>
</div>
<div class="flex flex-wrap gap-8">
    <div class="avatar avatar-circle avatar-ring avatar-ring-primary">
        <img src="/docs/img/user1.jpg" alt="User1" />
    </div>
    <div class="avatar avatar-circle avatar-ring avatar-ring-accent">
        <img src="/docs/img/user1.jpg" alt="User1" />
    </div>
    <div class="avatar avatar-circle avatar-ring avatar-ring-success">
        <img src="/docs/img/user1.jpg" alt="User1" />
    </div>
    <div class="avatar avatar-circle avatar-ring avatar-ring-warning">
        <img src="/docs/img/user1.jpg" alt="User1" />
    </div>
    <div class="avatar avatar-circle avatar-ring avatar-ring-danger">
        <img src="/docs/img/user1.jpg" alt="User1" />
    </div>
</div>`}/>

                <h4 id="ring-bold">Ring Bold</h4>

                <Preview code={`<div class="grid gap-8">
    <div class="avatar avatar-ring-bold avatar-ring-accent">JD</div>
    <div class="avatar avatar-circle avatar-ring-bold avatar-ring-accent">
        <img src="/docs/img/user1.jpg" alt="User1" />
    </div>
</div>`}/>

                <h4 id="status-badge">Status Badge</h4>

                <p>Enclose the <code className="tag"><pre>avatar</pre></code> component within <code className="tag"><pre>badge</pre></code> element to add a <Link to="/components/badge" className="btn btn-link btn-accent">badge</Link> + <Link to="/components/status" className="btn btn-link btn-accent">status</Link> indicator component.</p>

                <Preview code={`<div class="grid gap-8">
    <div class="badge">
        <div class="avatar">JD</div>
        <span class="badge-bottom-right badge-tight status status-round status-ring status-success"></span>
    </div>
    <div class="badge">
        <div class="avatar avatar-circle">
            <img src="/docs/img/user1.jpg" alt="User1" />
        </div>
        <span class="badge-bottom-right badge-tight status status-round status-ring status-success"></span>
    </div>
</div>`}/>

                <h4 id="group">Group</h4>

                <Preview code={`<div class="avatar-group">
    <div class="avatar avatar-circle">
        <img src="/docs/img/user1.jpg" alt="User1" />
    </div>
    <div class="avatar avatar-circle">JD</div>
    <div class="avatar avatar-circle">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
    </div>
    <div class="avatar avatar-circle avatar-primary">+9</div>
</div>`}/>

                <h4 id="group-compact">Group Compact</h4>

                <Preview code={`<div class="avatar-group avatar-group-compact">
    <div class="avatar avatar-circle">
        <img src="/docs/img/user1.jpg" alt="User1" />
    </div>
    <div class="avatar avatar-circle">JD</div>
    <div class="avatar avatar-circle">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
    </div>
    <div class="avatar avatar-circle avatar-primary">+9</div>
</div>`}/>

                <PageFooterNav>
                    <PrevPageNav href="/components/alert">Alert</PrevPageNav>
                    <NextPageNav href="/components/badge">Badge</NextPageNav>
                </PageFooterNav>
            </div>
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
                            title: "Icon",
                            href: "#icon",
                        },
                    ]
                },
                {
                    title: "Styles",
                    href: "#styles",
                    nested: [
                        {
                            title: "Sizes",
                            href: "#sizes",
                        },
                        {
                            title: "Colours",
                            href: "#colours",
                        },
                        {
                            title: "Soft",
                            href: "#soft",
                        },
                    ]
                },
                {
                    title: "Variants",
                    href: "#variants",
                    nested: [
                        {
                            title: "Circle",
                            href: "#circle",
                        },
                        {
                            title: "Ring",
                            href: "#ring",
                        },
                        {
                            title: "Ring Colour",
                            href: "#ring-colour",
                        },
                        {
                            title: "Ring Bold",
                            href: "#ring-bold",
                        },
                        {
                            title: "Status Badge",
                            href: "#status-badge",
                        },
                        {
                            title: "Group",
                            href: "#group",
                        },
                        {
                            title: "Group Compact",
                            href: "#group-compact",
                        },
                    ]
                },
            ]}/>
        </>
    );
};

export default Avatar;