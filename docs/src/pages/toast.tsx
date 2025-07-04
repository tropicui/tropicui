import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import Preview from "../components/Preview";
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";
import TableOfContent from "../components/TableOfContent";

function Toast() {

    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>COMPONENT</BreadcrumbItem>
                </Breadcrumb>

                <h2>Toast</h2>

                <h6>A flexible, customizable toast notification component with various positions, sizes, colors, and auto-dismiss options.</h6>

                <h3 id="usage">Usage</h3>

                <h4 id="basic">Basic</h4>

                <Preview code={`<div class="toast-group toast-top">
    <div class="toast">
        <span>This is a basic toast notification.</span>
    </div>
</div>`}/>

                <h4 id="close">Close Button</h4>

                <Preview code={`<div class="toast-group toast-top">
    <div class="toast">
        <span>Toast with close button.</span>
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon">
    </div>

    <div class="toast">
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon">
        <span>Toast with close button.</span>
    </div>
</div>`}/>

                <h4 id="icon">Icon</h4>

                <Preview code={`<div class="toast-group toast-top">
    <div class="toast">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="toast-icon">
            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
        </svg>
        <span>Toast with an icon for better visual context.</span>
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon">
    </div>
</div>`}/>

                <h4 id="multiple">Multiple</h4>

                <Preview code={`<div class="toast-group toast-top">
    <div class="toast">
        <span>Toast 1</span>
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon">
    </div>
    <div class="toast">
        <span>Toast 2</span>
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon">
    </div>
    <div class="toast">
        <span>Toast 3</span>
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon">
    </div>
    <div class="toast">
        <span>Toast 4</span>
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon">
    </div>
</div>`}/>

                <h3 id="positioning">Positioning</h3>

                <h4 id="top">Top</h4>

                <Preview code={`<div class="toast-group toast-top">
    <div class="toast">
        <span>Toast appears at the top of the screen.</span>
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon">
    </div>
</div>`}/>

                <h4 id="top-left">Top Left</h4>

                <Preview code={`<div class="toast-group toast-top-left">
    <div class="toast">
        <span>Toast appears at the top left of the screen.</span>
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon">
    </div>
</div>`}/>

                <h4 id="top-right">Top Right</h4>

                <Preview code={`<div class="toast-group toast-top-right">
    <div class="toast">
        <span>Toast appears at the top right of the screen.</span>
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon">
    </div>
</div>`}/>

                <h4 id="top-leading">Top Leading</h4>

                <p>Position the toast at the top leading edge with respect to the document text direction.</p>

                <Preview code={`<div class="toast-group toast-top-start">
    <div class="toast">
        <span>Toast appears at the top leading edge of the screen.</span>
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon">
    </div>
</div>`}/>

                <h4 id="top-trailing">Top Trailing</h4>

                <p>Position the toast at the top trailing edge with respect to the document text direction.</p>

                <Preview code={`<div class="toast-group toast-top-end">
    <div class="toast">
        <span>Toast appears at the top trailing edge of the screen.</span>
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon">
    </div>
</div>`}/>

                <h4 id="bottom">Bottom</h4>

                <Preview code={`<div class="toast-group toast-bottom">
    <div class="toast">
        <span>Toast appears at the bottom of the screen.</span>
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon">
    </div>
</div>`}/>

                <h4 id="bottom-left">Bottom Left</h4>

                <Preview code={`<div class="toast-group toast-bottom-left">
    <div class="toast">
        <span>Toast appears at the bottom left of the screen.</span>
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon">
    </div>
</div>`}/>

                <h4 id="bottom-right">Bottom Right</h4>

                <Preview code={`<div class="toast-group toast-bottom-right">
    <div class="toast">
        <span>Toast appears at the bottom right of the screen.</span>
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon">
    </div>
</div>`}/>

                <h4 id="bottom-leading">Bottom Leading</h4>

                <p>Position the toast at the bottom leading edge with respect to the document text direction.</p>

                <Preview code={`<div class="toast-group toast-bottom-start">
    <div class="toast">
        <span>Toast appears at the bottom leading edge of the screen.</span>
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon">
    </div>
</div>`}/>

                <h4 id="bottom-trailing">Bottom Trailing</h4>

                <p>Position the toast at the bottom trailing edge with respect to the document text direction.</p>

                <Preview code={`<div class="toast-group toast-bottom-end">
    <div class="toast">
        <span>Toast appears at the bottom trailing edge of the screen.</span>
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon">
    </div>
</div>`}/>

                <h3 id="styles">Styles</h3>

                <h4 id="sizes">Sizes</h4>

                <Preview code={`<div class="toast-group toast-top">
    <div class="toast toast-sm">
        <span>Small toast notification.</span>
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon">
    </div>

    <div class="toast">
        <span>Default toast notification.</span>
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon">
    </div>

    <div class="toast toast-lg">
        <span>Large toast notification.</span>
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon">
    </div>

    <div class="toast toast-xl">
        <span>Extra large toast notification.</span>
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon">
    </div>

    <div class="toast toast-2xl">
        <span>2XL toast notification.</span>
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon">
    </div>
</div>`}/>

                <h4 id="colours">Colours</h4>

                <Preview code={`<div class="toast-group toast-top">
    <div class="toast toast-primary">
        <span>Primary toast notification.</span>
        <input type="radio" class="toast-close btn btn-round btn-icon btn-solid btn-primary ">
    </div>
    <div class="toast toast-accent">
        <span>Accent toast notification.</span>
        <input type="radio" class="toast-close btn btn-round btn-icon btn-solid btn-accent ">
    </div>
    <div class="toast toast-success">
        <span>Success toast notification.</span>
        <input type="radio" class="toast-close btn btn-round btn-icon btn-solid btn-success ">
    </div>
    <div class="toast toast-warning">
        <span>Warning toast notification.</span>
        <input type="radio" class="toast-close btn btn-round btn-icon btn-solid btn-warning ">
    </div>
    <div class="toast toast-danger">
        <span>Danger toast notification.</span>
        <input type="radio" class="toast-close btn btn-round btn-icon btn-solid btn-danger ">
    </div>
</div>`}/>

                <h4 id="soft">Soft</h4>

                <Preview code={`<div class="toast-group toast-top">
    <div class="toast toast-soft">
        <span>Soft toast notification.</span>
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon">
    </div>
    <div class="toast toast-soft toast-primary">
        <span>Primary toast notification.</span>
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon btn-primary">
    </div>
    <div class="toast toast-soft toast-accent">
        <span>Accent toast notification.</span>
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon btn-accent">
    </div>
    <div class="toast toast-soft toast-success">
        <span>Success toast notification.</span>
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon btn-success">
    </div>
    <div class="toast toast-soft toast-warning">
        <span>Warning toast notification.</span>
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon btn-warning">
    </div>
    <div class="toast toast-soft toast-danger">
        <span>Danger toast notification.</span>
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon btn-danger">
    </div>
</div>`}/>

                <h3 id="auto-dismiss">Auto Dismiss</h3>

                <h4 id="timed-dismiss">Timed Dismiss</h4>

                <p>Toasts can automatically dismiss after a specified time. Use classes from <code className="tag">toast-dismiss-1</code> to <code className="tag">toast-dismiss-20</code> for 1-20 second delays.</p>

                <Preview code={`<div class="toast-group toast-top">
    <div class="toast toast-dismiss-3">
        <span>This toast will dismiss after 3 seconds.</span>
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon">
    </div>
    <div class="toast toast-dismiss-5">
        <span>This toast will dismiss after 5 seconds.</span>
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon">
    </div>
    <div class="toast toast-dismiss-10">
        <span>This toast will dismiss after 10 seconds.</span>
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon">
    </div>
</div>

<form class="form">
    <button class="btn">Reset</button>
</form>`}/>

                <h4 id="custom-dismiss">Custom Dismiss Time</h4>

                <p>Use <code className="tag">toast-dismiss-t</code> class with a custom CSS variable <code className="tag">--toast-delay-t</code> for custom dismissal times.</p>

                <Preview code={`<div class="toast-group toast-top">
    <div class="toast toast-dismiss-t" style="--toast-delay-t: 7.5s;">
        <span>This toast will dismiss after 7.5 seconds.</span>
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon">
    </div>
</div>

<form class="form">
    <button class="btn">Reset</button>
</form>`}/>

                <h4 id="hover-pause">Hover to Pause</h4>

                <p>Auto-dismissing toasts pause their countdown when hovered over, allowing users to read the content.</p>

                <Preview code={`<div class="toast-group toast-top">
    <div class="toast toast-dismiss-4">
        <span>Hover over this toast to pause the auto-dismiss countdown timer.</span>
        <input type="radio" class="toast-close btn btn-clear btn-round btn-icon">
    </div>
</div>

<form class="form">
    <button class="btn">Reset</button>
</form>`}/>

                <PageFooterNav>
                    <PrevPageNav href="/components/tag">Tag</PrevPageNav>
                    <NextPageNav href="/components/tooltip">Tooltip</NextPageNav>
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
                            title: "Close Button",
                            href: "#close",
                        },
                        {
                            title: "Icon",
                            href: "#icon",
                        },
                        {
                            title: "Multiple",
                            href: "#multiple",
                        },
                    ]
                },
                {
                    title: "Positioning",
                    href: "#positioning",
                    nested: [
                        {
                            title: "Top",
                            href: "#top",
                        },
                        {
                            title: "Top Left",
                            href: "#top-left",
                        },
                        {
                            title: "Top Right",
                            href: "#top-right",
                        },
                        {
                            title: "Top Leading",
                            href: "#top-leading",
                        },
                        {
                            title: "Top Trailing",
                            href: "#top-trailing",
                        },
                        {
                            title: "Bottom",
                            href: "#bottom",
                        },
                        {
                            title: "Bottom Left",
                            href: "#bottom-left",
                        },
                        {
                            title: "Bottom Right",
                            href: "#bottom-right",
                        },
                        {
                            title: "Bottom Leading",
                            href: "#bottom-leading",
                        },
                        {
                            title: "Bottom Trailing",
                            href: "#bottom-trailing",
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
                    title: "Auto Dismiss",
                    href: "#auto-dismiss",
                    nested: [
                        {
                            title: "Timed Dismiss",
                            href: "#timed-dismiss",
                        },
                        {
                            title: "Custom Dismiss Time",
                            href: "#custom-dismiss",
                        },
                        {
                            title: "Hover to Pause",
                            href: "#hover-pause",
                        },
                    ]
                },
            ]}/>
        </>
    )
}

export default Toast; 