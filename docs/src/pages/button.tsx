import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import Preview from "../components/Preview";
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";
import TableOfContent from "../components/TableOfContent";

function Button() {
    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>COMPONENT</BreadcrumbItem>
                </Breadcrumb>

                <h2>Button</h2>

                <h6>Display a clickable button to trigger an action.</h6>

                <h3 id="usage">Usage</h3>

                <h4 id="basic">Basic</h4>

                <Preview code={`<button class="btn">Button</button>`}/>

                <h4 id="with-icon">With Icon</h4>

                <Preview code={`<button class="btn">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
    </svg>
    <span>Send</span>
</button>`}/>

                <h4 id="disabled">Disabled</h4>

                <Preview code={`<div class="flex flex-wrap items-center gap-8">
    <button class="btn" disabled>Attribute</button>
    <button class="btn btn-disabled">Class</button>
</div>`}/>

                <h4 id="active">Active</h4>

                <Preview code={`<button class="btn btn-active">Button</button>`}/>

                <h3 id="styles">Styles</h3>

                <h4 id="sizes">Sizes</h4>

                <Preview code={`<div class="flex flex-wrap items-center gap-8">
    <button class="btn btn-xs">Extra Small</button>
    <button class="btn btn-sm">Small</button>
    <button class="btn">Button</button>
    <button class="btn btn-lg">Large</button>
    <button class="btn btn-xl">Extra Large</button>
    <button class="btn btn-2xl">2XL</button>
</div>`}/>

                <h4 id="wide">Wide</h4>

                <Preview code={`<button class="btn btn-wide">Button</button>`}/>

                <h4 id="colours">Colours</h4>

                <Preview code={`<div class="flex flex-wrap gap-8"><button class="btn btn-primary">Primary</button>
    <button class="btn btn-accent">Accent</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-warning">Warning</button>
    <button class="btn btn-danger">Danger</button>
</div>`}/>

                <h4 id="soft">Soft</h4>

                <Preview code={`<div class="flex flex-wrap gap-8">
    <button class="btn btn-soft">Button</button>
    <button class="btn btn-soft btn-primary">Primary</button>
    <button class="btn btn-soft btn-accent">Accent</button>
    <button class="btn btn-soft btn-success">Success</button>
    <button class="btn btn-soft btn-warning">Warning</button>
    <button class="btn btn-soft btn-danger">Danger</button>
</div>`}/>

                <h4 id="solid">Solid</h4>

                <Preview code={`<div class="flex flex-wrap gap-8">
    <button class="btn btn-solid">Button</button>
    <button class="btn btn-solid btn-primary">Primary</button>
    <button class="btn btn-solid btn-accent">Accent</button>
    <button class="btn btn-solid btn-success">Success</button>
    <button class="btn btn-solid btn-warning">Warning</button>
    <button class="btn btn-solid btn-danger">Danger</button>
</div>`}/>

                <h4 id="clear">Clear</h4>

                <Preview code={`<div class="flex flex-wrap gap-8">
    <button class="btn btn-clear">Clear</button>
    <button class="btn btn-clear btn-primary">Primary</button>
    <button class="btn btn-clear btn-accent">Accent</button>
    <button class="btn btn-clear btn-success">Success</button>
    <button class="btn btn-clear btn-warning">Warning</button>
    <button class="btn btn-clear btn-danger">Danger</button>
</div>`}/>

                <h4 id="outline">Outline</h4>

                <Preview code={`<div class="flex flex-wrap gap-8">
    <button class="btn btn-outline">Button</button>
    <button class="btn btn-outline btn-primary">Primary</button>
    <button class="btn btn-outline btn-accent">Accent</button>
    <button class="btn btn-outline btn-success">Success</button>
    <button class="btn btn-outline btn-warning">Warning</button>
    <button class="btn btn-outline btn-danger">Danger</button>
</div>`}/>

                <h4 id="outline-bold">Outline Bold</h4>

                <Preview code={`<div class="flex flex-wrap gap-8">
    <button class="btn btn-outline-bold">Button</button>
    <button class="btn btn-outline-bold btn-primary">Primary</button>
    <button class="btn btn-outline-bold btn-accent">Accent</button>
    <button class="btn btn-outline-bold btn-success">Success</button>
    <button class="btn btn-outline-bold btn-warning">Warning</button>
    <button class="btn btn-outline-bold btn-danger">Danger</button>
</div>`}/>

                <h4 id="dash">Dash</h4>

                <Preview code={`<div class="flex flex-wrap gap-8">
    <button class="btn btn-dash">Button</button>
    <button class="btn btn-dash btn-primary">Primary</button>
    <button class="btn btn-dash btn-accent">Accent</button>
    <button class="btn btn-dash btn-success">Success</button>
    <button class="btn btn-dash btn-warning">Warning</button>
    <button class="btn btn-dash btn-danger">Danger</button>
</div>`}/>

                <h4 id="dash-bold">Dash Bold</h4>

                <Preview code={`<div class="flex flex-wrap gap-8">
    <button class="btn btn-dash-bold">Button</button>
    <button class="btn btn-dash-bold btn-primary">Primary</button>
    <button class="btn btn-dash-bold btn-accent">Accent</button>
    <button class="btn btn-dash-bold btn-success">Success</button>
    <button class="btn btn-dash-bold btn-warning">Warning</button>
    <button class="btn btn-dash-bold btn-danger">Danger</button>
</div>`}/>

                <h3 id="Variants">Variants</h3>

                <h4 id="block">Block</h4>

                <Preview code={`<button class="btn btn-block">Button</button>`}/>

                <h4 id="icon">Icon</h4>

                <Preview code={`<button class="btn btn-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
    </svg>
</button>`}/>

                <h4 id="pill">Pill</h4>

                <Preview code={`<button class="btn btn-pill">Button</button>`}/>

                <h4 id="round">Round</h4>

                <Preview code={`<button class="btn btn-round">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
</button>`}/>

                <h4 id="link">Link</h4>

                <Preview code={`<button class="btn btn-link">Link</button>`}/>

                <h4 id="toggle">Toggle</h4>

                <Preview code={`<label class="btn btn-icon btn-toggle">
    <input type="checkbox">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="btn-toggled-icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
</label>`}/>

                <h4 id="join">Join</h4>

                <Preview code={`<div class="grid gap-8">
    <div class="join join-row">
        <button class="btn">Button Row 1</button>
        <button class="btn">Button Row 2</button>
        <button class="btn">Button Row 3</button>
    </div>
    <div class="join join-col">
        <button class="btn">Button Column A </button>
        <button class="btn">Button Column B</button>
        <button class="btn">Button Column C</button>
    </div>
</div>`}/>

                <PageFooterNav>
                    <PrevPageNav href="/docs/components/breadcrumb">Breadcrumb</PrevPageNav>
                    <NextPageNav href="/docs/components/card">Card</NextPageNav>
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
                            title: "With Icon",
                            href: "#with-icon",
                        },
                        {
                            title: "Disabled",
                            href: "#disabled",
                        },
                        {
                            title: "Active",
                            href: "#active",
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
                            title: "Wide",
                            href: "#wide",
                        },
                        {
                            title: "Colours",
                            href: "#colours",
                        },
                        {
                            title: "Soft",
                            href: "#soft",
                        },
                        {
                            title: "Solid",
                            href: "#solid",
                        },
                        {
                            title: "Clear",
                            href: "#clear",
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
                            title: "Dash",
                            href: "#dash",
                        },
                        {
                            title: "Dash Bold",
                            href: "#dash-bold",
                        },
                    ]
                },
                {
                    title: "Variants",
                    href: "#variants",
                    nested: [
                        {
                            title: "Block",
                            href: "#block",
                        },
                        {
                            title: "Icon",
                            href: "#icon",
                        },
                        {
                            title: "Pill",
                            href: "#pill",
                        },
                        {
                            title: "Round",
                            href: "#round",
                        },
                        {
                            title: "Link",
                            href: "#link",
                        },
                        {
                            title: "Toggle",
                            href: "#toggle",
                        },
                        {
                            title: "Join",
                            href: "#join",
                        },
                    ]
                },
            ]}/>
        </>
    )
}

export default Button;