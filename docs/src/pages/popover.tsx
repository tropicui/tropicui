import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import Preview from "../components/Preview";
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";
import TableOfContent from "../components/TableOfContent";

function Popover() {

    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>COMPONENT</BreadcrumbItem>
                </Breadcrumb>

                <h2>Popover</h2>

                <h6>A flexible, customizable popover component with various positioning options and colour variants.</h6>

                <h3 id="usage">Usage</h3>

                <h4 id="basic">Basic</h4>

                <Preview code={`<div class="popover">
    <button class="btn popover-toggle" tabindex="1">Popover</button>
    <div class="popover-content">
        <span>This is a basic popover content.</span>
    </div>
</div>`}/>

                <h4 id="open">Open</h4>

                <Preview code={`<div class="popover open">
    <button class="btn popover-toggle" tabindex="1">Popover</button>
    <div class="popover-content">
        <span>Open popover by default.</span>
    </div>
</div>`}/>

                <h4 id="rich-content">Rich Content</h4>

                <Preview code={`<div class="popover popover-top">
    <button class="btn popover-toggle" tabindex="1">Popover</button>
    <div class="popover-content">
        <div class="flex items-center gap-2 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
            </svg>
            <h6 class="text-muted">Helpful Popover</h6>
        </div>
        <p>Display any content in the popover. <a class="btn btn-link btn-accent">See more.</a></p>
        <span class="tag tag-soft tag-warning">Account</span>
    </div>
</div>`}/>

                <h3 id="positioning">Positioning</h3>

                <h4 id="top">Top</h4>

                <p>Top is the default position.</p>

                <Preview code={`<div class="popover">
    <button class="btn popover-toggle" tabindex="1">Top Popover</button>
    <div class="popover-content">
        <span>This popover appears above the toggle button.</span>
    </div>
</div>`}/>

                <h4 id="top-leading">Top Leading</h4>

                <p>Align the popover to the leading edge of the button with respect to the document text direction.</p>

                <Preview code={`<div class="popover popover-top-start">
    <button class="btn popover-toggle" tabindex="1">Top Leading</button>
    <div class="popover-content">
        <span>This popover appears above and aligned to the leading edge of the toggle button.</span>
    </div>
</div>`}/>

                <h4 id="top-trailing">Top Trailing</h4>

                <p>Align the popover to the trailing edge of the button with respect to the document text direction.</p>

                <Preview code={`<div class="popover popover-top-end">
    <button class="btn popover-toggle" tabindex="1">Top Trailing</button>
    <div class="popover-content">
        <span>This popover appears above and aligned to the trailing edge of the toggle button.</span>
    </div>
</div>`}/>

                <h4 id="top-left">Top Left</h4>

                <Preview code={`<div class="popover popover-top-left">
    <button class="btn popover-toggle" tabindex="1">Top Left</button>
    <div class="popover-content">
        <span>This popover appears above and aligned to the left.</span>
    </div>
</div>`}/>

                <h4 id="top-right">Top Right</h4>

                <Preview code={`<div class="popover popover-top-right">
    <button class="btn popover-toggle" tabindex="1">Top Right</button>
    <div class="popover-content">
        <span>This popover appears above and aligned to the right.</span>
    </div>
</div>`}/>

                <h4 id="bottom">Bottom</h4>

                <Preview code={`<div class="popover popover-bottom">
    <button class="btn popover-toggle" tabindex="1">Bottom Popover</button>
    <div class="popover-content">
        <span>This popover appears below the toggle button.</span>
    </div>
</div>`}/>

                <h4 id="bottom-leading">Bottom Leading</h4>

                <p>Align the popover to the leading edge of the button with respect to the document text direction.</p>

                <Preview code={`<div class="popover popover-bottom-start">
    <button class="btn popover-toggle" tabindex="1">Bottom Leading</button>
    <div class="popover-content">
        <span>This popover appears below and aligned to the leading edge of the toggle button.</span>
    </div>
</div>`}/>

                <h4 id="bottom-trailing">Bottom Trailing</h4>

                <p>Align the popover to the trailing edge of the button with respect to the document text direction.</p>

                <Preview code={`<div class="popover popover-bottom-end">
    <button class="btn popover-toggle" tabindex="1">Bottom Trailing</button>
    <div class="popover-content">
        <span>This popover appears below and aligned to the trailing edge of the toggle button.</span>
    </div>
</div>`}/>

                <h4 id="bottom-left">Bottom Left</h4>

                <Preview code={`<div class="popover popover-bottom-left">
    <button class="btn popover-toggle" tabindex="1">Bottom Left</button>
    <div class="popover-content">
        <span>This popover appears below and aligned to the left.</span>
    </div>
</div>`}/>

                <h4 id="bottom-right">Bottom Right</h4>

                <Preview code={`<div class="popover popover-bottom-right">
    <button class="btn popover-toggle" tabindex="1">Bottom Right</button>
    <div class="popover-content">
        <span>This popover appears below and aligned to the right.</span>
    </div>
</div>`}/>

                <h4 id="leading">Leading</h4>

                <p>Position the popover to the leading edge of the button with respect to the document text direction.</p>

                <Preview code={`<div class="popover popover-start">
    <button class="btn popover-toggle" tabindex="1">Leading Popover</button>
    <div class="popover-content">
        <span>This popover appears to the leading edge of the toggle button.</span>
    </div>
</div>`}/>

                <h4 id="leading-start">Leading Start</h4>

                <Preview code={`<div class="popover popover-start-start">
    <button class="btn popover-toggle" tabindex="1">Leading Start</button>
    <div class="popover-content">
        <span>This popover appears to the leading edge of the toggle button and aligned to the start.</span>
    </div>
</div>`}/>

                <h4 id="leading-end">Leading End</h4>

                <Preview code={`<div class="popover popover-start-end">
    <button class="btn popover-toggle" tabindex="1">Leading End</button>
    <div class="popover-content">
        <span>This popover appears to the leading edge of the toggle button and aligned to the end.</span>
    </div>
</div>`}/>

                <h4 id="trailing">Trailing</h4>

                <p>Position the popover to the trailing edge of the button with respect to the document text direction.</p>

                <Preview code={`<div class="popover popover-end">
    <button class="btn popover-toggle" tabindex="1">Trailing Popover</button>
    <div class="popover-content">
        <span>This popover appears to the trailing edge of the toggle button.</span>
    </div>
</div>`}/>

                <h4 id="trailing-start">Trailing Start</h4>

                <Preview code={`<div class="popover popover-end-start">
    <button class="btn popover-toggle" tabindex="1">Trailing Start</button>
    <div class="popover-content">
        <span>This popover appears to the trailing edge of the toggle button and aligned to the start.</span>
    </div>
</div>`}/>

                <h4 id="trailing-end">Trailing End</h4>

                <Preview code={`<div class="popover popover-end-end">
    <button class="btn popover-toggle" tabindex="1">Trailing End</button>
    <div class="popover-content">
        <span>This popover appears to the trailing edge of the toggle button and aligned to the end.</span>
    </div>
</div>`}/>

                <h4 id="left">Left</h4>

                <Preview code={`<div class="popover popover-left">
    <button class="btn popover-toggle" tabindex="1">Left Popover</button>
    <div class="popover-content">
        <span>This popover appears to the left of the toggle button.</span>
    </div>
</div>`}/>

                <h4 id="left-start">Left Start</h4>

                <Preview code={`<div class="popover popover-left-start">
    <button class="btn popover-toggle" tabindex="1">Left Start</button>
    <div class="popover-content">
        <span>This popover appears to the left and aligned to the start.</span>
    </div>
</div>`}/>

                <h4 id="left-end">Left End</h4>

                <Preview code={`<div class="popover popover-left-end">
    <button class="btn popover-toggle" tabindex="1">Left End</button>
    <div class="popover-content">
        <span>This popover appears to the left and aligned to the end.</span>
    </div>
</div>`}/>

                <h4 id="right">Right</h4>

                <Preview code={`<div class="popover popover-right">
    <button class="btn popover-toggle" tabindex="1">Right Popover</button>
    <div class="popover-content">
        <span>This popover appears to the right of the toggle button.</span>
    </div>
</div>`}/>

                <h4 id="right-start">Right Start</h4>

                <Preview code={`<div class="popover popover-right-start">
    <button class="btn popover-toggle" tabindex="1">Right Start</button>
    <div class="popover-content">
        <span>This popover appears to the right and aligned to the start.</span>
    </div>
</div>`}/>

                <h4 id="right-end">Right End</h4>

                <Preview code={`<div class="popover popover-right-end">
    <button class="btn popover-toggle" tabindex="1">Right End</button>
    <div class="popover-content">
        <span>This popover appears to the right and aligned to the end.</span>
    </div>
</div>`}/>

                <h3 id="styles">Styles</h3>

                <h4 id="colours">Colours</h4>

                <Preview code={`<div class="grid justify-items-center gap-8">
    <div class="popover popover-right popover-primary">
        <button class="btn btn-primary popover-toggle" tabindex="1">Primary Popover</button>
        <div class="popover-content">
            <span>This is a primary coloured popover.</span>
        </div>
    </div>
    <div class="popover popover-right popover-accent">
        <button class="btn btn-accent popover-toggle" tabindex="1">Accent Popover</button>
        <div class="popover-content">
            <span>This is an accent coloured popover.</span>
        </div>
    </div>
    <div class="popover popover-right popover-success">
        <button class="btn btn-success popover-toggle" tabindex="1">Success Popover</button>
        <div class="popover-content">
            <span>This is a success coloured popover.</span>
        </div>
    </div>
    <div class="popover popover-right popover-warning">
        <button class="btn btn-warning popover-toggle" tabindex="1">Warning Popover</button>
        <div class="popover-content">
            <span>This is a warning coloured popover.</span>
        </div>
    </div>
    <div class="popover popover-right popover-danger">
        <button class="btn btn-danger popover-toggle" tabindex="1">Danger Popover</button>
        <div class="popover-content">
            <span>This is a danger coloured popover.</span>
        </div>
    </div>
</div>`}/>

                <h4 id="soft">Soft</h4>

                <Preview code={`<div class="grid justify-items-center gap-8">
    <div class="popover popover-right popover-soft">
        <button class="btn popover-toggle" tabindex="1">Default Popover</button>
        <div class="popover-content">
            <span>This is a default popover.</span>
        </div>
    </div>
    <div class="popover popover-right popover-soft popover-primary">
        <button class="btn btn-primary popover-toggle" tabindex="1">Primary Popover</button>
        <div class="popover-content">
            <span>This is a primary coloured popover.</span>
        </div>
    </div>
    <div class="popover popover-right popover-soft popover-accent">
        <button class="btn btn-accent popover-toggle" tabindex="1">Accent Popover</button>
        <div class="popover-content">
            <span>This is an accent coloured popover.</span>
        </div>
    </div>
    <div class="popover popover-right popover-soft popover-success">
        <button class="btn btn-success popover-toggle" tabindex="1">Success Popover</button>
        <div class="popover-content">
            <span>This is a success coloured popover.</span>
        </div>
    </div>
    <div class="popover popover-right popover-soft popover-warning">
        <button class="btn btn-warning popover-toggle" tabindex="1">Warning Popover</button>
        <div class="popover-content">
            <span>This is a warning coloured popover.</span>
        </div>
    </div>
    <div class="popover popover-right popover-soft popover-danger">
        <button class="btn btn-danger popover-toggle" tabindex="1">Danger Popover</button>
        <div class="popover-content">
            <span>This is a danger coloured popover.</span>
        </div>
    </div>
</div>`}/>

                <PageFooterNav>
                    <PrevPageNav href="/docs/components/modal">Modal</PrevPageNav>
                    <NextPageNav href="/docs/components/radio">Radio</NextPageNav>
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
                            title: "Open",
                            href: "#open",
                        },
                        {
                            title: "Rich Content",
                            href: "#rich-content",
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
                            title: "Top Leading",
                            href: "#top-leading",
                        },
                        {
                            title: "Top Trailing",
                            href: "#top-trailing",
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
                            title: "Bottom",
                            href: "#bottom",
                        },
                        {
                            title: "Bottom Leading",
                            href: "#bottom-leading",
                        },
                        {
                            title: "Bottom Trailing",
                            href: "#bottom-trailing",
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
                            title: "Leading",
                            href: "#leading",
                        },
                        {
                            title: "Leading Start",
                            href: "#leading-start",
                        },
                        {
                            title: "Leading End",
                            href: "#leading-end",
                        },
                        {
                            title: "Trailing",
                            href: "#trailing",
                        },
                        {
                            title: "Trailing Start",
                            href: "#trailing-start",
                        },
                        {
                            title: "Trailing End",
                            href: "#trailing-end",
                        },
                        {
                            title: "Left",
                            href: "#left",
                        },
                        {
                            title: "Left Start",
                            href: "#left-start",
                        },
                        {
                            title: "Left End",
                            href: "#left-end",
                        },
                        {
                            title: "Right",
                            href: "#right",
                        },
                        {
                            title: "Right Start",
                            href: "#right-start",
                        },
                        {
                            title: "Right End",
                            href: "#right-end",
                        },
                    ]
                },
                {
                    title: "Styles",
                    href: "#styles",
                    nested: [
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
            ]}/>
        </>
    )
}

export default Popover;