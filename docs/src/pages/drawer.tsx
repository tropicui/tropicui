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

                <p>Drawer can be closed by clicking outside of the drawer.</p>

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

<label class="btn" for="drawer-basic">Open Drawer</label>`}/>

                <h4 id="close">Close</h4>

                <p>A <code className="tag">&lt;label&gt;</code> targeting the checkbox <code className="tag">id</code> can be used to close the drawer.</p>

                <Preview code={`<div class="drawer drawer-left">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-close">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h3>Drawer Content</h3>
            <p>This is the drawer content.</p>
            <label class="btn" for="drawer-close">Close Drawer</label>
        </div>
    </div>
</div>

<label class="btn" for="drawer-close">Open Drawer</label>`}/>

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

<label class="btn" for="drawer-start">Open Leading Drawer</label>`}/>

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

<label class="btn" for="drawer-end">Open Trailing Drawer</label>`}/>

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

<label class="btn" for="drawer-left">Open Left Drawer</label>`}/>

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

<label class="btn" for="drawer-right">Open Right Drawer</label>`}/>

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

<label class="btn" for="drawer-top">Open Top Drawer</label>`}/>

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

<label class="btn" for="drawer-bottom">Open Bottom Drawer</label>`}/>

                <h3 id="sizes">Sizes</h3>

                <h4 id="3xs">3XS Small</h4>

                <Preview code={`<div class="drawer drawer-left drawer-3xs">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-3xs">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h4>3XS Left Drawer</h4>
            <p>A 3XS left drawer size.</p>
        </div>
    </div>
</div>

<div class="drawer drawer-top drawer-3xs">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-3xs-top">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h4>3XS Top Drawer</h4>
            <p>A 3XS top drawer size.</p>
        </div>
    </div>
</div>

<div class="flex flex-wrap gap-8">
    <label class="btn" for="drawer-3xs">Open 3XS Left Drawer</label>
    <label class="btn" for="drawer-3xs-top">Open 3XS Top Drawer</label>
</div>`}/>

                <h4 id="2xs">2XS Small</h4>

                <Preview code={`<div class="drawer drawer-left drawer-2xs">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-2xs">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h4>2XS Left Drawer</h4>
            <p>A 2XS left drawer size.</p>
        </div>
    </div>
</div>

<div class="drawer drawer-top drawer-2xs">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-2xs-top">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h4>2XS Top Drawer</h4>
            <p>A 2XS top drawer size.</p>
        </div>
    </div>
</div>

<div class="flex flex-wrap gap-8">
    <label class="btn" for="drawer-2xs">Open 2XS Left Drawer</label>
    <label class="btn" for="drawer-2xs-top">Open 2XS Top Drawer</label>
</div>`}/>

                <h4 id="x-small">Extra Small</h4>

                <Preview code={`<div class="drawer drawer-left drawer-xs">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-xs">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h4>Extra Small Left Drawer</h4>
            <p>An extra small left drawer size.</p>
        </div>
    </div>
</div>

<div class="drawer drawer-top drawer-xs">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-xs-top">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h4>Extra Small Top Drawer</h4>
            <p>An extra small top drawer size.</p>
        </div>
    </div>
</div>

<div class="flex flex-wrap gap-8">
    <label class="btn" for="drawer-xs">Open Extra Small Left Drawer</label>
    <label class="btn" for="drawer-xs-top">Open Extra Small Top Drawer</label>
</div>`}/>

                <h4 id="small">Small</h4>

                <Preview code={`<div class="drawer drawer-left drawer-sm">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-sm">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h4>Small Left Drawer</h4>
            <p>A small left drawer size.</p>
        </div>
    </div>
</div>

<div class="drawer drawer-top drawer-sm">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-sm-top">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h4>Small Top Drawer</h4>
            <p>A small top drawer size.</p>
        </div>
    </div>
</div>

<div class="flex flex-wrap gap-8">
    <label class="btn" for="drawer-sm">Open Small Left Drawer</label>
    <label class="btn" for="drawer-sm-top">Open Small Top Drawer</label>
</div>`}/>

                <h4 id="large">Large</h4>

                <Preview code={`<div class="drawer drawer-left drawer-lg">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-lg">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h4>Large Left Drawer</h4>
            <p>A large left drawer size.</p>
        </div>
    </div>
</div>

<div class="drawer drawer-top drawer-lg">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-lg-top">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h4>Large Top Drawer</h4>
            <p>A large top drawer size.</p>
        </div>
    </div>
</div>

<div class="flex flex-wrap gap-8">
    <label class="btn" for="drawer-lg">Open Large Left Drawer</label>
    <label class="btn" for="drawer-lg-top">Open Large Top Drawer</label>
</div>`}/>

                <h4 id="extra-large">Extra Large</h4>

                <Preview code={`<div class="drawer drawer-left drawer-xl">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-xl">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h4>Extra Large Left Drawer</h4>
            <p>An extra large left drawer size.</p>
        </div>
    </div>
</div>

<div class="drawer drawer-top drawer-xl">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-xl-top">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h4>Extra Large Top Drawer</h4>
            <p>An extra large top drawer size.</p>
        </div>
    </div>
</div>

<div class="flex flex-wrap gap-8">
    <label class="btn" for="drawer-xl">Open Extra Large Left Drawer</label>
    <label class="btn" for="drawer-xl-top">Open Extra Large Top Drawer</label>
</div>`}/>

                <h4 id="2xl">2XL</h4>

                <Preview code={`<div class="drawer drawer-left drawer-2xl">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-2xl">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h4>2XL Left Drawer</h4>
            <p>A 2XL left drawer size.</p>
        </div>
    </div>
</div>

<div class="drawer drawer-top drawer-2xl">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-2xl-top">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h4>2XL Top Drawer</h4>
            <p>A 2XL top drawer size.</p>
        </div>
    </div>
</div>

<div class="flex flex-wrap gap-8">
    <label class="btn" for="drawer-2xl">Open 2XL Left Drawer</label>
    <label class="btn" for="drawer-2xl-top">Open 2XL Top Drawer</label>
</div>`}/>

                <h4 id="3xl">3XL</h4>

                <Preview code={`<div class="drawer drawer-left drawer-3xl">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-3xl">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h4>3XL Left Drawer</h4>
            <p>A 3XL left drawer size.</p>
            <label class="btn" for="drawer-3xl">Close Drawer</label>
        </div>
    </div>
</div>

<div class="drawer drawer-top drawer-3xl">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-3xl-top">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h4>3XL Top Drawer</h4>
            <p>A 3XL top drawer size.</p>
            <label class="btn" for="drawer-3xl-top">Close Drawer</label>
        </div>
    </div>
</div>

<div class="flex flex-wrap gap-8">
    <label class="btn" for="drawer-3xl">Open 3XL Left Drawer</label>
    <label class="btn" for="drawer-3xl-top">Open 3XL Top Drawer</label>
</div>`}/>

                <h4 id="4xl">4XL</h4>

                <Preview code={`<div class="drawer drawer-left drawer-4xl">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-4xl">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h4>4XL Left Drawer</h4>
            <p>A 4XL left drawer size.</p>
            <label class="btn" for="drawer-4xl">Close Drawer</label>
        </div>
    </div>
</div>

<div class="drawer drawer-top drawer-4xl">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-4xl-top">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h4>4XL Top Drawer</h4>
            <p>A 4XL top drawer size.</p>
            <label class="btn" for="drawer-4xl-top">Close Drawer</label>
        </div>
    </div>
</div>

<div class="flex flex-wrap gap-8">
    <label class="btn" for="drawer-4xl">Open 4XL Left Drawer</label>
    <label class="btn" for="drawer-4xl-top">Open 4XL Top Drawer</label>
</div>`}/>

                <h4 id="5xl">5XL</h4>

                <Preview code={`<div class="drawer drawer-left drawer-5xl">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-5xl">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h4>5XL Left Drawer</h4>
            <p>A 5XL left drawer size.</p>
            <label class="btn" for="drawer-5xl">Close Drawer</label>
        </div>
    </div>
</div>

<div class="drawer drawer-top drawer-5xl">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-5xl-top">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h4>5XL Top Drawer</h4>
            <p>A 5XL top drawer size.</p>
            <label class="btn" for="drawer-5xl-top">Close Drawer</label>
        </div>
    </div>
</div>

<div class="flex flex-wrap gap-8">
    <label class="btn" for="drawer-5xl">Open 5XL Left Drawer</label>
    <label class="btn" for="drawer-5xl-top">Open 5XL Top Drawer</label>
</div>`}/>

                <h4 id="6xl">6XL</h4>

                <Preview code={`<div class="drawer drawer-left drawer-6xl">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-6xl">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h4>6XL Left Drawer</h4>
            <p>A 6XL left drawer size.</p>
            <label class="btn" for="drawer-6xl">Close Drawer</label>
        </div>
    </div>
</div>

<div class="drawer drawer-top drawer-6xl">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-6xl-top">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h4>6XL Top Drawer</h4>
            <p>A 6XL top drawer size.</p>
            <label class="btn" for="drawer-6xl-top">Close Drawer</label>
        </div>
    </div>
</div>

<div class="flex flex-wrap gap-8">
    <label class="btn" for="drawer-6xl">Open 6XL Left Drawer</label>
    <label class="btn" for="drawer-6xl-top">Open 6XL Top Drawer</label>
</div>`}/>

                <h4 id="7xl">7XL</h4>

                <Preview code={`<div class="drawer drawer-left drawer-7xl">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-7xl">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h4>7XL Left Drawer</h4>
            <p>A 7XL left drawer size.</p>
            <label class="btn" for="drawer-7xl">Close Drawer</label>
        </div>
    </div>
</div>

<div class="drawer drawer-top drawer-7xl">
    <label class="drawer-toggle">
        <input type="checkbox" id="drawer-7xl-top">
    </label>
    <div class="drawer-content">
        <div class="p-4">
            <h4>7XL Top Drawer</h4>
            <p>A 7XL top drawer size.</p>
            <label class="btn" for="drawer-7xl-top">Close Drawer</label>
        </div>
    </div>
</div>

<div class="flex flex-wrap gap-8">
    <label class="btn" for="drawer-7xl">Open 7XL Left Drawer</label>
    <label class="btn" for="drawer-7xl-top">Open 7XL Top Drawer</label>
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
            <nav>
                <ul class="menu">
                    <li><a class="btn btn-clear">Home</a></li>
                    <li><a class="btn btn-clear">About</a></li>
                    <li><a class="btn btn-clear">Services</a></li>
                    <li><a class="btn btn-clear">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>
</div>

<label class="btn" for="drawer-nav">Open Navigation Drawer</label>`}/>

                <PageFooterNav>
                    <PrevPageNav href="/components/divider">Divider</PrevPageNav>
                    <NextPageNav href="/components/dropdown">Dropdown</NextPageNav>
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
                            title: "Close",
                            href: "#close",
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
