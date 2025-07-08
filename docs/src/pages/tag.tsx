import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import Preview from "../components/Preview";
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";
import TableOfContent from "../components/TableOfContent";

function Tag() {
    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>COMPONENT</BreadcrumbItem>
                </Breadcrumb>

                <h2>Tag</h2>

                <h6>A flexible container label component with predefined sizing, color and various styling options.</h6>

                <h3 id="usage">Usage</h3>

                <h4 id="basic">Basic</h4>

                <Preview code={`<div class="tag">Default</div>`}/>

                <h4 id="icon">Icon</h4>

                <p>Tags can include icons to provide additional visual context.</p>

                <Preview code={`<div class="flex flex-wrap gap-8">
    <div class="tag">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
        </svg>
        <span>Verified</span>
    </div>
    <div class="tag">
        <span>Category</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
        </svg>
    </div>
</div>`}/>

                <h4 id="link">Link</h4>

                <Preview code={`<div class="tag">
    <a href="mailto:username@example.com">@username</a>
</div>`}/>

                <h3 id="styles">Styles</h3>

                <h4 id="sizes">Sizes</h4>

                <Preview code={`<div class="flex flex-wrap items-center gap-8">
    <div class="tag tag-xs">Extra Small</div>
    <div class="tag tag-sm">Small</div>
    <div class="tag">Default</div>
    <div class="tag tag-lg">Large</div>
    <div class="tag tag-xl">Extra Large</div>
    <div class="tag tag-2xl">2XL</div>
</div>`}/>

                <h4 id="colours">Colours</h4>

                <Preview code={`<div class="flex flex-wrap gap-8">
    <div class="tag tag-primary">Primary</div>
    <div class="tag tag-accent">Accent</div>
    <div class="tag tag-success">Success</div>
    <div class="tag tag-warning">Warning</div>
    <div class="tag tag-danger">Danger</div>
</div>`}/>

                <h4 id="solid">Solid</h4>

                <p>The solid variant removes the border for a cleaner appearance.</p>

                <Preview code={`<div class="flex flex-wrap gap-8">
    <div class="tag tag-solid">Default</div>
    <div class="tag tag-solid tag-primary">Primary</div>
    <div class="tag tag-solid tag-accent">Accent</div>
    <div class="tag tag-solid tag-success">Success</div>
    <div class="tag tag-solid tag-warning">Warning</div>
    <div class="tag tag-solid tag-danger">Danger</div>
</div>`}/>

                <h4 id="soft">Soft</h4>

                <p>The soft variant uses a subtle background color with transparent borders.</p>

                <Preview code={`<div class="flex flex-wrap gap-8">
    <div class="tag tag-soft tag-primary">Primary</div>
    <div class="tag tag-soft tag-accent">Accent</div>
    <div class="tag tag-soft tag-success">Success</div>
    <div class="tag tag-soft tag-warning">Warning</div>
    <div class="tag tag-soft tag-danger">Danger</div>
</div>`}/>

                <h4 id="outline">Outline</h4>

                <p>The outline variant shows only the border with a transparent background.</p>

                <Preview code={`<div class="flex flex-wrap gap-8">
    <div class="tag tag-outline">Default</div>
    <div class="tag tag-outline tag-primary">Primary</div>
    <div class="tag tag-outline tag-accent">Accent</div>
    <div class="tag tag-outline tag-success">Success</div>
    <div class="tag tag-outline tag-warning">Warning</div>
    <div class="tag tag-outline tag-danger">Danger</div>
</div>`}/>

                <h4 id="outline-bold">Outline Bold</h4>

                <p>The outline bold variant provides a thicker border for better visibility.</p>

                <Preview code={`<div class="flex flex-wrap gap-8">
    <div class="tag tag-outline-bold">Default</div>
    <div class="tag tag-outline-bold tag-primary">Primary</div>
    <div class="tag tag-outline-bold tag-accent">Accent</div>
    <div class="tag tag-outline-bold tag-success">Success</div>
    <div class="tag tag-outline-bold tag-warning">Warning</div>
    <div class="tag tag-outline-bold tag-danger">Danger</div>
</div>`}/>

                <h4 id="dashed">Dashed</h4>

                <p>The dashed variant uses a dashed border style.</p>

                <Preview code={`<div class="flex flex-wrap gap-8">
    <div class="tag tag-dashed">Default</div>
    <div class="tag tag-dashed tag-primary">Primary</div>
    <div class="tag tag-dashed tag-accent">Accent</div>
    <div class="tag tag-dashed tag-success">Success</div>
    <div class="tag tag-dashed tag-warning">Warning</div>
    <div class="tag tag-dashed tag-danger">Danger</div>
</div>`}/>

                <h4 id="dashed-bold">Dashed Bold</h4>

                <p>The dashed bold variant combines dashed borders with increased thickness.</p>

                <Preview code={`<div class="flex flex-wrap gap-8">
    <div class="tag tag-dashed-bold">Default</div>
    <div class="tag tag-dashed-bold tag-primary">Primary</div>
    <div class="tag tag-dashed-bold tag-accent">Accent</div>
    <div class="tag tag-dashed-bold tag-success">Success</div>
    <div class="tag tag-dashed-bold tag-warning">Warning</div>
    <div class="tag tag-dashed-bold tag-danger">Danger</div>
</div>`}/>

                <h3 id="variants">Variants</h3>

                <h4 id="pill">Pill</h4>

                <p>The pill variant creates fully rounded tags with adjusted padding.</p>

                <Preview code={`<div class="flex flex-wrap gap-8">
    <div class="tag tag-pill">Default</div>
    <div class="tag tag-pill tag-primary">Primary</div>
    <div class="tag tag-pill tag-solid tag-accent">Accent</div>
    <div class="tag tag-pill tag-soft tag-success">Success</div>
    <div class="tag tag-pill tag-outline tag-warning">Warning</div>
    <div class="tag tag-pill tag-dashed-bold tag-danger">Danger</div>
</div>`}/>

                <h4 id="join">Join</h4>

                <Preview code={`<div class="grid justify-items-center gap-8">

    <div class="join join-row">
        <div class="tag tag-sm tag-success tag-soft">
            Secured
        </div>
        <div class="tag tag-sm tag-success tag-solid">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
        </div>
    </div>

    <div class="join join-row">
        <div class="tag tag-primary">
            <span>PHP</span>
        </div>
        <div class="tag tag-primary tag-soft">
            <span>8.4.2</span>
        </div>
    </div>

    <div class="join join-row">
        <div class="tag tag-xl tag-pill tag-accent">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" />
            </svg>
        </div>
        <div class="tag tag-xl tag-accent tag-soft tag-outline">
            <span>Thumbprint</span>
        </div>
    </div>

</div>`}/>

                <h3 id="examples">Examples</h3>

                <h4 id="status">Status Indicator</h4>

                <Preview code={`<div class="flex flex-wrap gap-8">
    <div class="tag">
        <div class="status"></div>
        <span>Offline</span>
    </div>
    <div class="tag tag-pill tag-soft tag-dashed-bold tag-success">
        <div class="status status-round status-success animate-pulse"></div>
        <span>Online</span>
    </div>
    <div class="tag tag-pill tag-soft tag-warning">
        <div class="status status-round status-warning"></div>
        <span>Warning</span>
    </div>
    <div class="tag tag-pill tag-outline tag-danger">
        <div class="status status-round status-danger"></div>
        <span>Critical</span>
    </div>
</div>`}/>

                <PageFooterNav>
                    <PrevPageNav href="/docs/components/table">Table</PrevPageNav>
                    <NextPageNav href="/docs/components/textarea">Textarea</NextPageNav>
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
                        {
                            title: "Link",
                            href: "#link",
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
                            title: "Solid",
                            href: "#solid",
                        },
                        {
                            title: "Soft",
                            href: "#soft",
                        },
                        {
                            title: "Outline",
                            href: "#outline",
                        },
                        {
                            title: "Outline Bold",
                            href: "#outline-bold",
                        },
                        {
                            title: "Dashed",
                            href: "#dashed",
                        },
                        {
                            title: "Dashed Bold",
                            href: "#dashed-bold",
                        },
                    ]
                },
                {
                    title: "Variants",
                    href: "#variants",
                    nested: [
                        {
                            title: "Pill",
                            href: "#pill",
                        },
                        {
                            title: "Join",
                            href: "#join",
                        },
                    ]
                },
                {
                    title: "Examples",
                    href: "#examples",
                    nested: [
                        {
                            title: "Status Indicator",
                            href: "#status",
                        },
                    ]
                },
            ]}/>
        </>
    )
}

export default Tag;