import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import Preview from "../components/Preview";
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";
import TableOfContent from "../components/TableOfContent";

function Badge() {
    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>COMPONENT</BreadcrumbItem>
                </Breadcrumb>

                <h2>Badge</h2>

                <h6>Displays a corner status indicator that can be positioned on any element.</h6>

                <h3 id="usage">Usage</h3>

                <h4 id="basic">Basic</h4>

                <div className="alert alert-outline mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                    <span>This preview uses the <a href="/components/tag" className="btn btn-link btn-accent">Tag</a> component for the indicator.</span>
                </div>

                <Preview code={`<div class="badge">
    <div class="badge-top-right tag tag-sm tag-danger tag-solid">99+</div>
    <button class="btn">Notifications</button>
</div>`}/>

                <h4 id="icon">Icon</h4>

                <Preview code={`<div class="badge">
    <div class="badge-top-right tag tag-pill tag-solid tag-accent">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
    </div>
    <button class="btn">Messages</button>
</div>`}/>

                <h3 id="positioning">Positioning</h3>

                <p>Badge must be positioned using one of the four positioning classes.</p>

                <h4 id="top-left">Top Left</h4>

                <div className="alert alert-outline mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                    <span>This preview uses the <a href="/components/status" className="btn btn-link btn-accent">Status</a> component for the indicator.</span>
                </div>

                <Preview code={`<div class="badge">
    <div class="badge-top-left status status-success"></div>
    <button class="btn">Top Left</button>
</div>`}/>

                <h4 id="top-right">Top Right</h4>

                <Preview code={`<div class="badge">
    <div class="badge-top-right status status-success"></div>
    <button class="btn">Top Right</button>
</div>`}/>

                <h4 id="bottom-left">Bottom Left</h4>

                <Preview code={`<div class="badge">
    <div class="badge-bottom-left status status-success"></div>
    <button class="btn">Bottom Left</button>
</div>`}/>

                <h4 id="bottom-right">Bottom Right</h4>

                <Preview code={`<div class="badge">
    <div class="badge-bottom-right status status-success"></div>
    <button class="btn">Bottom Right</button>
</div>`}/>

                <h3 id="variants">Variants</h3>

                <h4 id="tight">Tight</h4>

                <p>Tight badge are positioned closer to the subject, suitable for rounded element.</p>

                <Preview code={`<div class="grid justify-items-center gap-8">
    <div class="badge">
        <div class="badge-tight badge-top-left status status-round status-ring status-success"></div>
        <div class="avatar avatar-circle avatar-primary">TL</div>
    </div>
    <div class="badge">
        <div class="badge-tight badge-top-right status status-round status-ring status-success"></div>
        <div class="avatar avatar-circle avatar-primary">TR</div>
    </div>
    <div class="badge">
        <div class="badge-tight badge-bottom-left status status-round status-ring status-success"></div>
        <div class="avatar avatar-circle avatar-primary">BL</div>
    </div>
    <div class="badge">
        <div class="badge-tight badge-bottom-right status status-round status-ring status-success"></div>
        <div class="avatar avatar-circle avatar-primary">BR</div>
    </div>
</div>`}/>

                <PageFooterNav>
                    <PrevPageNav href="/components/avatar">Avatar</PrevPageNav>
                    <NextPageNav href="/components/breadcrumb">Breadcrumb</NextPageNav>
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
                            title: "Icon",
                            href: "#icon",
                        },
                    ]
                },
                {
                    title: "Positioning",
                    href: "#positioning",
                    nested: [
                        {
                            title: "Top Left",
                            href: "#top-left",
                        },
                        {
                            title: "Top Right",
                            href: "#top-right",
                        },
                        {
                            title: "Bottom Left",
                            href: "#bottom-left",
                        },
                        {
                            title: "Bottom Right",
                            href: "#bottom-right",
                        },
                    ]
                },
                {
                    title: "Variants",
                    href: "#variants",
                    nested: [
                        {
                            title: "Tight",
                            href: "#tight",
                        },
                    ]
                }
            ]}/>
        </>
    );
};

export default Badge;
