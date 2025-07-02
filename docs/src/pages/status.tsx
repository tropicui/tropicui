import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import Preview from "../components/Preview";
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";
import TableOfContent from "../components/TableOfContent";

function Status() {
    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>COMPONENT</BreadcrumbItem>
                </Breadcrumb>

                <h2>Status</h2>

                <h6>A flexible, customizable status indicator component with various shapes, sizes, and colors. Supports solid, outline, and ring variations to represent different states visually.</h6>

                <h3 id="usage">Usage</h3>

                <h4 id="basic">Basic</h4>

                <Preview code={`<div class="status"></div>`}/>

                <h4 id="text">Text</h4>

                <p>Status indicators can be combined with text to provide context about the current state.</p>

                <Preview code={`<div class="flex items-center gap-2">
    <div class="status"></div>
    <span>Offline</span>
</div>`}/>

                <h3 id="styles">Styles</h3>

                <h4 id="sizes">Sizes</h4>

                <Preview code={`<div class="grid gap-4">
    <div class="flex items-center gap-2">
        <div class="status status-xs"></div>
        <span class="text-xs">Extra Small</span>
    </div>
    <div class="flex items-center gap-2">
        <div class="status status-sm"></div>
        <span class="text-sm">Small</span>
    </div>
    <div class="flex items-center gap-2">
        <div class="status"></div>
        <span>Default</span>
    </div>
    <div class="flex items-center gap-2">
        <div class="status status-lg"></div>
        <span class="text-lg">Large</span>
    </div>
    <div class="flex items-center gap-2">
        <div class="status status-xl"></div>
        <span class="text-xl">Extra Large</span>
    </div>
    <div class="flex items-center gap-2">
        <div class="status status-2xl"></div>
        <span class="text-2xl">2XL</span>
    </div>
</div>`}/>

                <h4 id="colours">Colours</h4>

                <Preview code={`<div class="flex flex-wrap gap-8">
    <div class="flex items-center gap-2">
        <div class="status status-primary"></div>
        <span>Primary</span>
    </div>
    <div class="flex items-center gap-2">
        <div class="status status-accent"></div>
        <span>Accent</span>
    </div>
    <div class="flex items-center gap-2">
        <div class="status status-success"></div>
        <span>Success</span>
    </div>
    <div class="flex items-center gap-2">
        <div class="status status-warning"></div>
        <span>Warning</span>
    </div>
    <div class="flex items-center gap-2">
        <div class="status status-danger"></div>
        <span>Danger</span>
    </div>
</div>`}/>

                <h3 id="variants">Variants</h3>

                <h4 id="round">Round</h4>

                <p>The round variant creates circular status indicators.</p>

                <Preview code={`<div class="flex flex-wrap gap-4">
    <div class="status status-round"></div>
    <div class="status status-round status-primary"></div>
    <div class="status status-round status-accent"></div>
    <div class="status status-round status-success"></div>
    <div class="status status-round status-warning"></div>
    <div class="status status-round status-danger"></div>
</div>`}/>

                <h4 id="outline">Outline</h4>

                <p>The outline variant shows only the border with a transparent background.</p>

                <Preview code={`<div class="flex flex-wrap gap-4">
    <div class="status status-outline"></div>
    <div class="status status-outline status-primary"></div>
    <div class="status status-outline status-accent"></div>
    <div class="status status-outline status-success"></div>
    <div class="status status-outline status-warning"></div>
    <div class="status status-outline status-danger"></div>
</div>`}/>

                <h4 id="outline-bold">Outline Bold</h4>

                <p>The outline bold variant provides a thicker border for better visibility.</p>

                <Preview code={`<div class="flex flex-wrap gap-4">
    <div class="status status-outline-bold"></div>
    <div class="status status-outline-bold status-primary"></div>
    <div class="status status-outline-bold status-accent"></div>
    <div class="status status-outline-bold status-success"></div>
    <div class="status status-outline-bold status-warning"></div>
    <div class="status status-outline-bold status-danger"></div>
</div>`}/>

                <h4 id="ring">Ring</h4>

                <p>The ring variant adds an outer ring around the status indicator for emphasis.</p>

                <Preview code={`<div class="flex flex-wrap gap-4">
    <div class="status status-ring"></div>
    <div class="status status-ring status-ring-primary"></div>
    <div class="status status-ring status-ring-accent"></div>
    <div class="status status-ring status-ring-success"></div>
    <div class="status status-ring status-ring-warning"></div>
    <div class="status status-ring status-ring-danger"></div>
</div>`}/>

                <h4 id="bounce">Bounce</h4>

                <Preview code={`<div class="status status-danger animate-bounce"></div>`}/>

                <h4 id="occilate">Occilate</h4>

                <Preview code={`<div class="status status-primary animate-spin-occilate"></div>`}/>

                <h4 id="ping">Ping</h4>

                <Preview code={`<div class="stack">
    <div class="status status-success "></div>
    <div class="status status-success animate-ping"></div>
</div>`}/>

                <h4 id="pulse">Pulse</h4>

                <Preview code={`<div class="status status-warning animate-pulse"></div>`}/>

                <h4 id="spin">Spin</h4>

                <Preview code={`<div class="status status-accent animate-spin"></div>`}/>

                <h3 id="examples">Examples</h3>

                <h4 id="badge">Badge</h4>

                <Preview code={`<div class="flex items-center gap-3">
    <div class="badge">
        <div class="avatar">
            <img src="/img/user1.jpg" alt="User">
            <div class="badge-bottom-right status status-sm status-round status-success status-ring"></div>
        </div>
    </div>
    <div>
        <div class="font-medium">John Doe</div>
        <span class="text-sm text-muted">Online</span>
    </div>
</div>`}/>

                <h4 id="tag">Tag</h4>

                <Preview code={`<div class="flex flex-wrap gap-8">
    <div class="tag">
        <div class="status status-round status-success"></div>
        <span>Healthy</span>
    </div>
    <div class="tag">
        <div class="status status-round status-warning"></div>
        <span>High Load</span>
    </div>
    <div class="tag">
        <div class="status status-round status-danger"></div>
        <span>Down</span>
    </div>
</div>`}/>

                <h4 id="button">Button</h4>

                <Preview code={`<button class="btn">
    <div class="stack">
        <div class="status status-round status-success"></div>
        <div class="status status-round status-success animate-ping"></div>
    </div>
    <span>Ready</span>
</button>`}/>

                <PageFooterNav>
                    <PrevPageNav href="/components/spinner">Spinner</PrevPageNav>
                    <NextPageNav href="/components/switch">Switch</NextPageNav>
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
                    ]
                },
                {
                    title: "Variants",
                    href: "#variants",
                    nested: [
                        {
                            title: "Round",
                            href: "#round",
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
                            title: "Ring",
                            href: "#ring",
                        },
                        {
                            title: "Bounce",
                            href: "#bounce",
                        },
                        {
                            title: "Occilate",
                            href: "#occilate",
                        },
                        {
                            title: "Ping",
                            href: "#ping",
                        },
                        {
                            title: "Pulse",
                            href: "#pulse",
                        },
                        {
                            title: "Spin",
                            href: "#spin",
                        },
                    ]
                },
                {
                    title: "Examples",
                    href: "#examples",
                    nested: [
                        {
                            title: "Badge",
                            href: "#badge",
                        },
                        {
                            title: "Tag",
                            href: "#tag",
                        },
                        {
                            title: "Button",
                            href: "#button",
                        },
                    ]
                },
            ]}/>
        </>
    )
}

export default Status;