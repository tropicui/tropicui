import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import Preview from "../components/Preview";
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";
import TableOfContent from "../components/TableOfContent";

function Switch() {
    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>COMPONENT</BreadcrumbItem>
                </Breadcrumb>

                <h2>Switch</h2>

                <h6>A flexible, customizable toggle switch component with various states, sizes, and styles for form inputs with consistent styling.</h6>

                <h3 id="usage">Usage</h3>

                <h4 id="basic">Basic</h4>

                <Preview code={`<input type="checkbox" class="switch">`}/>

                <h4 id="label">Label</h4>

                <div className="alert alert-outline mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                    <span>Label text content will be correctly aligned with the switch when wrapped.</span>
                </div>

                <Preview code={`<label>
    <input type="checkbox" class="switch">
    <span>Enable notifications</span>
</label>`}/>

                <h4 id="checked">Checked</h4>

                <Preview code={`<label>
    <input type="checkbox" class="switch" checked>
    <span>Enabled</span>
</label>`}/>

                <h4 id="disabled">Disabled</h4>

                <Preview code={`<div class="flex gap-8">
    <label>
        <input type="checkbox" class="switch" disabled>
        <span>Disabled off</span>
    </label>
    <label>
        <input type="checkbox" class="switch" disabled checked>
        <span>Disabled on</span>
    </label>
</div>`}/>

                <h4 id="validation">Validation</h4>

                <Preview code={`<form class="form">
    <div class="form-field">
        <label>
            <input type="checkbox" class="switch switch-validate" checked required>
            <div>
                <span>Uncheck me</span>
                <span class="form-helper invalid">Please accept the terms</span>
            </div>
        </label>
    </div>
</form>`}/>

                <h4 id="invalid">Invalid</h4>

                <p>Use the <code className="tag">switch-invalid</code> class to indicate an invalid state regardless of the <code className="tag">required</code> attribute.</p>

                <Preview code={`<label>
    <input type="checkbox" class="switch switch-invalid">
    <span>Invalid state</span>
</label>`}/>

                <h3 id="styles">Styles</h3>

                <h4 id="sizes">Sizes</h4>

                <Preview code={`<div class="grid gap-8">
    <label>
        <input type="checkbox" class="switch switch-xs" checked>
        <span>Extra Small</span>
    </label>
    <label>
        <input type="checkbox" class="switch switch-sm" checked>
        <span>Small</span>
    </label>
    <label>
        <input type="checkbox" class="switch" checked>
        <span>Default</span>
    </label>
    <label>
        <input type="checkbox" class="switch switch-lg" checked>
        <span>Large</span>
    </label>
    <label>
        <input type="checkbox" class="switch switch-xl" checked>
        <span>Extra Large</span>
    </label>
    <label>
        <input type="checkbox" class="switch switch-2xl" checked>
        <span>2XL</span>
    </label>
</div>`}/>

                <h4 id="colours">Colours</h4>

                <Preview code={`<div class="flex flex-wrap gap-8">
    <label>
        <input type="checkbox" class="switch switch-primary" checked>
        <span>Primary</span>
    </label>
    <label>
        <input type="checkbox" class="switch switch-accent" checked>
        <span>Accent</span>
    </label>
    <label>
        <input type="checkbox" class="switch switch-success" checked>
        <span>Success</span>
    </label>
    <label>
        <input type="checkbox" class="switch switch-warning" checked>
        <span>Warning</span>
    </label>
    <label>
        <input type="checkbox" class="switch switch-danger" checked>
        <span>Danger</span>
    </label>
</div>`}/>

                <h4 id="outline">Outline</h4>

                <Preview code={`<div class="flex flex-wrap gap-8">
    <label>
        <input type="checkbox" class="switch switch-outline" checked>
        <span>Default</span>
    </label>
    <label>
        <input type="checkbox" class="switch switch-outline switch-primary" checked>
        <span>Primary</span>
    </label>
    <label>
        <input type="checkbox" class="switch switch-outline switch-accent" checked>
        <span>Accent</span>
    </label>
    <label>
        <input type="checkbox" class="switch switch-outline switch-success" checked>
        <span>Success</span>
    </label>
    <label>
        <input type="checkbox" class="switch switch-outline switch-warning" checked>
        <span>Warning</span>
    </label>
    <label>
        <input type="checkbox" class="switch switch-outline switch-danger" checked>
        <span>Danger</span>
    </label>
</div>`}/>

                <h4 id="outline-bold">Outline Bold</h4>

                <Preview code={`<div class="flex flex-wrap gap-8">
    <label>
        <input type="checkbox" class="switch switch-outline-bold" checked>
        <span>Default</span>
    </label>
    <label>
        <input type="checkbox" class="switch switch-outline-bold switch-primary" checked>
        <span>Primary</span>
    </label>
    <label>
        <input type="checkbox" class="switch switch-outline-bold switch-accent" checked>
        <span>Accent</span>
    </label>
    <label>
        <input type="checkbox" class="switch switch-outline-bold switch-success" checked>
        <span>Success</span>
    </label>
    <label>
        <input type="checkbox" class="switch switch-outline-bold switch-warning" checked>
        <span>Warning</span>
    </label>
    <label>
        <input type="checkbox" class="switch switch-outline-bold switch-danger" checked>
        <span>Danger</span>
    </label>
</div>`}/>

                <h4 id="solid">Solid</h4>

                <Preview code={`<div class="flex flex-wrap gap-8">
    <label>
        <input type="checkbox" class="switch switch-solid" checked>
        <span>Default</span>
    </label>
    <label>
        <input type="checkbox" class="switch switch-solid switch-primary" checked>
        <span>Primary</span>
    </label>
    <label>
        <input type="checkbox" class="switch switch-solid switch-accent" checked>
        <span>Accent</span>
    </label>
    <label>
        <input type="checkbox" class="switch switch-solid switch-success" checked>
        <span>Success</span>
    </label>
    <label>
        <input type="checkbox" class="switch switch-solid switch-warning" checked>
        <span>Warning</span>
    </label>
    <label>
        <input type="checkbox" class="switch switch-solid switch-danger" checked>
        <span>Danger</span>
    </label>
</div>`}/>

                <h3 id="layouts">Layouts</h3>

                <h4 id="inline">Inline</h4>

                <Preview code={`<div class="switch-inline">
    <label>
        <input type="checkbox" class="switch">
        <span>Option 1</span>
    </label>
    <label>
        <input type="checkbox" class="switch">
        <span>Option 2</span>
    </label>
    <label>
        <input type="checkbox" class="switch">
        <span>Option 3</span>
    </label>
</div>`}/>

                <h4 id="list">List</h4>

                <Preview code={`<div class="switch-list">
    <label>
        <input type="checkbox" class="switch">
        <span>Enable dark mode</span>
    </label>
    <label>
        <input type="checkbox" class="switch">
        <span>Enable notifications</span>
    </label>
    <label>
        <input type="checkbox" class="switch">
        <span>Enable auto-save</span>
    </label>
</div>`}/>

                <PageFooterNav>
                    <PrevPageNav href="/components/status">Status</PrevPageNav>
                    <NextPageNav href="/components/Tab">Tab</NextPageNav>
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
                            title: "Label",
                            href: "#label",
                        },
                        {
                            title: "Checked",
                            href: "#checked",
                        },
                        {
                            title: "Disabled",
                            href: "#disabled",
                        },
                        {
                            title: "Validation",
                            href: "#validation",
                        },
                        {
                            title: "Invalid",
                            href: "#invalid",
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
                            title: "Outline",
                            href: "#outline",
                        },
                        {
                            title: "Outline Bold",
                            href: "#outline-bold",
                        },
                        {
                            title: "Solid",
                            href: "#solid",
                        },
                    ]
                },
                {
                    title: "Layouts",
                    href: "#layouts",
                    nested: [
                        {
                            title: "Inline",
                            href: "#inline",
                        },
                        {
                            title: "List",
                            href: "#list",
                        },
                    ]
                },
            ]}/>
        </>
    )
}

export default Switch;