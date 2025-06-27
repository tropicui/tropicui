import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import Preview from "../components/Preview";
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";
import TableOfContent from "../components/TableOfContent";

function Drawer() {

    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>COMPONENT</BreadcrumbItem>
                </Breadcrumb>

                <h2>Drawer</h2>

                <h6>A sliding panel that can be opened from any side of the screen.</h6>

                <h3 id="usage">Usage</h3>

                <h4 id="basic">Basic</h4>

                <Preview code={`<div class="drawer drawer-left">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-basic">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h3>Drawer Content</h3>
            <p>This is the drawer content.</p>
        </div>
    </div>
</div>

<div class="mx-auto">
    <label class="btn" for="drawer-basic">Open Drawer</label>
</div>`}/>

                <h3 id="alignment">Alignment</h3>

                <h4 id="leading">Leading</h4>

                <Preview code={`<div class="drawer drawer-start">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-start">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h3>Leading Drawer</h3>
            <p>Slides in from the leading side with respect to the document text direction.</p>
        </div>
    </div>
</div>

<div class="mx-auto">
    <label class="btn" for="drawer-start">Open Leading Drawer</label>
</div>`}/>

                <h4 id="trailing">Trailing</h4>

                <Preview code={`<div class="drawer drawer-end">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-end">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h3>Trailing Drawer</h3>
            <p>Slides in from the trailing side with respect to the document text direction.</p>
        </div>
    </div>
</div>

<div class="mx-auto">
    <label class="btn" for="drawer-end">Open Trailing Drawer</label>
</div>`}/>

                <h4 id="left">Left</h4>

                <Preview code={`<div class="drawer drawer-left">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-left">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h3>Left Drawer</h3>
            <p>Slides in from the left side.</p>
        </div>
    </div>
</div>

<div class="mx-auto">
    <label class="btn" for="drawer-left">Open Left Drawer</label>
</div>`}/>

                <h4 id="right">Right</h4>

                <Preview code={`<div class="drawer drawer-right">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-right">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h3>Right Drawer</h3>
            <p>Slides in from the right side.</p>
        </div>
    </div>
</div>

<div class="mx-auto">
    <label class="btn" for="drawer-right">Open Right Drawer</label>
</div>`}/>

                <h4 id="top">Top</h4>

                <Preview code={`<div class="drawer drawer-top">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-top">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h3>Top Drawer</h3>
            <p>Slides in from the top.</p>
        </div>
    </div>
</div>

<div class="mx-auto">
    <label class="btn" for="drawer-top">Open Top Drawer</label>
</div>`}/>

                <h4 id="bottom">Bottom</h4>

                <Preview code={`<div class="drawer drawer-bottom">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-bottom">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h3>Bottom Drawer</h3>
            <p>Slides in from the bottom.</p>
        </div>
    </div>
</div>

<div class="mx-auto">
    <label class="btn" for="drawer-bottom">Open Bottom Drawer</label>
</div>`}/>

                <h3 id="sizes">Sizes</h3>

                <h4 id="3xs">3XS Small</h4>

                <Preview code={`<div class="drawer drawer-left drawer-3xs">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-3xs">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h3>3XS Drawer</h3>
            <p>A 3XS drawer size.</p>
        </div>
    </div>
</div>

<div class="mx-auto">
    <label class="btn" for="drawer-3xs">Open 3XS Drawer</label>
</div>`}/>

                <h4 id="2xs">2XS Small</h4>

                <Preview code={`<div class="drawer drawer-left drawer-2xs">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-2xs">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h3>2XS Drawer</h3>
            <p>A 2XS drawer size.</p>
        </div>
    </div>
</div>

<div class="mx-auto">
    <label class="btn" for="drawer-2xs">Open 2XS Drawer</label>
</div>`}/>

                <h4 id="x-small">Extra Small</h4>

                <Preview code={`<div class="drawer drawer-left drawer-xs">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-xs">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h3>Extra Small Drawer</h3>
            <p>A extra smaller drawer size.</p>
        </div>
    </div>
</div>

<div class="mx-auto">
    <label class="btn" for="drawer-xs">Open Extra Small Drawer</label>
</div>`}/>

                <h4 id="small">Small</h4>

                <Preview code={`<div class="drawer drawer-left drawer-sm">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-sm">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h3>Small Drawer</h3>
            <p>A smaller drawer size.</p>
        </div>
    </div>
</div>

<div class="mx-auto">
    <label class="btn" for="drawer-sm">Open Small Drawer</label>
</div>`}/>

                <h4 id="large">Large</h4>

                <Preview code={`<div class="drawer drawer-left drawer-lg">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-lg">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h3>Large Drawer</h3>
            <p>A larger drawer size.</p>
        </div>
    </div>
</div>

<div class="mx-auto">
    <label class="btn" for="drawer-lg">Open Large Drawer</label>
</div>`}/>

                <h4 id="extra-large">Extra Large</h4>

                <Preview code={`<div class="drawer drawer-left drawer-xl">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-xl">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h3>Extra Large Drawer</h3>
            <p>An extra large drawer size.</p>
            <label class="btn" for="drawer-xl">Close</label>
        </div>
    </div>
</div>

<div class="mx-auto">
    <label class="btn" for="drawer-xl">Open Extra Large Drawer</label>
</div>`}/>

                <h4 id="2xl">2XL</h4>

                <Preview code={`<div class="drawer drawer-left drawer-2xl">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-2xl">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h3>2XL Drawer</h3>
            <p>A 2XL drawer size.</p>
            <label class="btn" for="drawer-2xl">Close</label>
        </div>
    </div>
</div>

<div class="mx-auto">
    <label class="btn" for="drawer-2xl">Open 2XL Drawer</label>
</div>`}/>

                <h4 id="3xl">3XL</h4>

                <Preview code={`<div class="drawer drawer-left drawer-3xl">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-3xl">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h3>3XL Drawer</h3>
            <p>A 3XL drawer size.</p>
            <label class="btn" for="drawer-3xl">Close</label>
        </div>
    </div>
</div>

<div class="mx-auto">
    <label class="btn" for="drawer-3xl">Open 3XL Drawer</label>
</div>`}/>

                <h4 id="4xl">4XL</h4>

                <Preview code={`<div class="drawer drawer-left drawer-4xl">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-4xl">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h3>4XL Drawer</h3>
            <p>A 4XL drawer size.</p>
            <label class="btn" for="drawer-4xl">Close</label>
        </div>
    </div>
</div>

<div class="mx-auto">
    <label class="btn" for="drawer-4xl">Open 4XL Drawer</label>
</div>`}/>

                <h4 id="5xl">5XL</h4>

                <Preview code={`<div class="drawer drawer-left drawer-5xl">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-5xl">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h3>5XL Drawer</h3>
            <p>A 5XL drawer size.</p>
            <label class="btn" for="drawer-5xl">Close</label>
        </div>
    </div>
</div>

<div class="mx-auto">
    <label class="btn" for="drawer-5xl">Open 5XL Drawer</label>
</div>`}/>

                <h4 id="6xl">6XL</h4>

                <Preview code={`<div class="drawer drawer-left drawer-6xl">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-6xl">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h3>6XL Drawer</h3>
            <p>A 6XL drawer size.</p>
            <label class="btn" for="drawer-6xl">Close</label>
        </div>
    </div>
</div>

<div class="mx-auto">
    <label class="btn" for="drawer-6xl">Open 6XL Drawer</label>
</div>`}/>

                <h4 id="7xl">7XL</h4>

                <Preview code={`<div class="drawer drawer-left drawer-7xl">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-7xl">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h3>7XL Drawer</h3>
            <p>A 7XL drawer size.</p>
            <label class="btn" for="drawer-7xl">Close</label>
        </div>
    </div>
</div>

<div class="mx-auto">
    <label class="btn" for="drawer-7xl">Open 7XL Drawer</label>
</div>`}/>

                <h3 id="example">Example</h3>

                <h4 id="navigation">Navigation Sidebar</h4>

                <Preview code={`<div class="drawer drawer-left">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-nav">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <div class="flex items-center justify-between mb-4">
                <div>
                    <h3>Menu</h3>
                </div>
                <label class="btn btn-icon btn-clear" for="drawer-nav">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </label>
            </div>
            <nav class="grid gap-2">
                <a class="btn btn-clear">Home</a>
                <a class="btn btn-clear">About</a>
                <a class="btn btn-clear">Services</a>
                <a class="btn btn-clear">Contact</a>
            </nav>
        </div>
    </div>
</div>

<div class="mx-auto">
    <label class="btn" for="drawer-nav">Open Navigation Drawer</label>
</div>`}/>

                <PageFooterNav>
                    <PrevPageNav href="/components/card">Card</PrevPageNav>
                    <NextPageNav href="/components/checkbox">Checkbox</NextPageNav>
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
                    ]
                },
                {
                    title: "Alignment",
                    href: "#alignment",
                    nested: [
                        {
                            title: "Leading",
                            href: "#leading",
                        },
                        {
                            title: "Trailing",
                            href: "#trailing",
                        },
                        {
                            title: "Left",
                            href: "#left",
                        },
                        {
                            title: "Right",
                            href: "#right",
                        },
                        {
                            title: "Top",
                            href: "#top",
                        },
                        {
                            title: "Bottom",
                            href: "#bottom",
                        },
                    ]
                },
                {
                    title: "Sizes",
                    href: "#sizes",
                    nested: [
                        {
                            title: "3XS",
                            href: "#3xs",
                        },
                        {
                            title: "2XS",
                            href: "#2xs",
                        },
                        {
                            title: "Extra Small",
                            href: "#x-small",
                        },
                        {
                            title: "Small",
                            href: "#small",
                        },
                        {
                            title: "Large",
                            href: "#large",
                        },
                        {
                            title: "Extra Large",
                            href: "#extra-large",
                        },
                        {
                            title: "2XL",
                            href: "#2xl",
                        },
                        {
                            title: "3XL",
                            href: "#3xl",
                        },
                        {
                            title: "4XL",
                            href: "#4xl",
                        },
                        {
                            title: "5XL",
                            href: "#5xl",
                        },
                        {
                            title: "6XL",
                            href: "#6xl",
                        },
                        {
                            title: "7XL",
                            href: "#7xl",
                        },
                    ]
                },
                {
                    title: "Example",
                    href: "#example",
                    nested: [
                        {
                            title: "Navigation Sidebar",
                            href: "#navigation",
                        },
                    ]
                },
            ]}/>
        </>
    )
}

export default Drawer;
