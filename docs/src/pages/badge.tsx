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

                <h6>Displays a small status indicator that can be positioned on any element.</h6>

                <h3 id="usage">Usage</h3>

                <h4 id="basic">Basic</h4>

                <p>Badge must be positioned using one of the four positioning classes.</p>

                <Preview code={`<div class="grid justify-items-center gap-8">
    <div class="badge">
        <div class="badge-top-left status status-success"></div>
        <button class="btn">Top Left</button>
    </div>
    <div class="badge">
        <div class="badge-top-right status status-success"></div>
        <button class="btn">Top Right</button>
    </div>
    <div class="badge">
        <div class="badge-bottom-left status status-success"></div>
        <button class="btn">Bottom Left</button>
    </div>
    <div class="badge">
        <div class="badge-bottom-right status status-success"></div>
        <button class="btn">Bottom Right</button>
    </div>
</div>`}/>

                <h4 id="text">Text</h4>

                <Preview code={`<div class="badge">
    <div class="badge-top-right tag">99+</div>
    <button class="btn">Notifications</button>
</div>`}/>

                <h4 id="icon">Icon</h4>

                <Preview code={`<div class="badge">
    <div class="badge-top-right tag tag-pill">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
    </div>
    <button class="btn">Messages</button>
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
                            title: "Text",
                            href: "#text",
                        },
                        {
                            title: "Icon",
                            href: "#icon",
                        },
                    ]
                },
            ]}/>
        </>
    );
};

export default Badge;
