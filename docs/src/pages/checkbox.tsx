import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import Preview from "../components/Preview";
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";
import TableOfContent from "../components/TableOfContent";

function Checkbox() {
    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>COMPONENT</BreadcrumbItem>
                </Breadcrumb>

                <h2>Checkbox</h2>

                <h6>A flexible, customizable checkbox component for form inputs with various states, sizes, and styles.</h6>

                <h3 id="usage">Usage</h3>

                <h4 id="basic">Basic</h4>

                <Preview code={`<input type="checkbox" class="checkbox">`}>
                    <div className="mx-auto w-fit">
                        <input type="checkbox" className="checkbox" />
                    </div>
                </Preview>

                <h4 id="label">Label</h4>

                <div className="alert alert-outline mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                    <span>Label text content will be correctly aligned with the checkbox when wrapped.</span>
                </div>

                <Preview code={`<label>
    <input type="checkbox" class="checkbox">
    <span>Accept terms and conditions</span>
</label>`}>
                    <div className="mx-auto w-fit">
                        <label>
                            <input type="checkbox" className="checkbox" />
                            <span>Accept terms and conditions</span>
                        </label>
                    </div>
                </Preview>

                <h4 id="checked">Checked</h4>

                <Preview code={`<input type="checkbox" class="checkbox" checked>`}>
                    <div className="mx-auto w-fit">
                        <input type="checkbox" className="checkbox" checked />
                    </div>
                </Preview>

                <h4 id="indeterminate">Indeterminate</h4>

                <Preview code={`<input type="checkbox" class="checkbox" id="indeterminate-checkbox">
<script>
    document.getElementById('indeterminate-checkbox').indeterminate = true;
</script>`}>
                    <div className="mx-auto w-fit">
                        <input 
                            type="checkbox" 
                            className="checkbox" 
                            ref={(el) => {
                                if (el) el.indeterminate = true;
                            }}
                        />
                    </div>
                </Preview>

                <h4 id="disabled">Disabled</h4>

                <Preview code={`<input type="checkbox" class="checkbox" disabled />
<input type="checkbox" class="checkbox" disabled checked />`}>
                    <div className="flex flex-wrap items-center gap-8 mx-auto w-fit">
                        <input type="checkbox" className="checkbox" disabled />
                        <input type="checkbox" className="checkbox" disabled checked />
                    </div>
                </Preview>

                <h4 id="validation">Validation</h4>

                <Preview code={`<input type="checkbox" class="checkbox checkbox-validate" required>`}>
                    <div className="mx-auto w-fit">
                        <label>
                            <input type="checkbox" className="checkbox checkbox-validate" required
                                ref={(el) => {
                                    if (el) el.checked = true;
                                }}
                            />
                            <span>Uncheck to see invalid state</span>
                        </label>
                    </div>
                </Preview>

                <h4 id="invalid">Invalid</h4>

                <p>Use the <code className="tag">checkbox-invalid</code> class to indicate an invalid state regardless of the <code className="tag">required</code> attribute.</p>

                <Preview code={`<input type="checkbox" class="checkbox checkbox-invalid">`}>
                    <div className="mx-auto w-fit">
                        <input type="checkbox" className="checkbox checkbox-invalid" />
                    </div>
                </Preview>

                <h3 id="styles">Styles</h3>

                <h4 id="sizes">Sizes</h4>

                <Preview code={`<label>
    <input type="checkbox" class="checkbox checkbox-xs">
    <span>Extra Small</span>
</label>
<label>
    <input type="checkbox" class="checkbox checkbox-sm">
    <span>Small</span>
</label>
<label>
    <input type="checkbox" class="checkbox">
    <span>Default</span>
</label>
<label>
    <input type="checkbox" class="checkbox checkbox-lg">
    <span>Large</span>
</label>
<label>
    <input type="checkbox" class="checkbox checkbox-xl">
    <span>Extra Large</span>
</label>
<label>
    <input type="checkbox" class="checkbox checkbox-2xl">
    <span>Huge</span>
</label>`}>
                    <div className="grid items-center gap-8 mx-auto w-fit">
                        <label>
                            <input type="checkbox" className="checkbox checkbox-xs"
                                ref={(el) => {
                                    if (el) el.checked = true;
                                }}
                            />
                            <span>Extra Small</span>
                        </label>
                        <label>
                            <input type="checkbox" className="checkbox checkbox-sm"
                                ref={(el) => {
                                    if (el) el.checked = true;
                                }}
                            />
                            <span>Small</span>
                        </label>
                        <label>
                            <input type="checkbox" className="checkbox"
                                ref={(el) => {
                                    if (el) el.checked = true;
                                }}
                            />
                            <span>Default</span>
                        </label>
                        <label>
                            <input type="checkbox" className="checkbox checkbox-lg"
                                ref={(el) => {
                                    if (el) el.checked = true;
                                }}
                            />
                            <span>Large</span>
                        </label>
                        <label>
                            <input type="checkbox" className="checkbox checkbox-xl"
                                ref={(el) => {
                                    if (el) el.checked = true;
                                }}
                            />
                            <span>Extra Large</span>
                        </label>
                        <label>
                            <input type="checkbox" className="checkbox checkbox-2xl"
                                ref={(el) => {
                                    if (el) el.checked = true;
                                }}
                            />
                            <span className="">Huge</span>
                        </label>
                    </div>
                </Preview>

                <h4 id="colours">Colours</h4>

                <Preview code={`
<label>
    <input type="checkbox" class="checkbox checkbox-primary">
    <span>Primary</span>
</label>
<label>
    <input type="checkbox" class="checkbox checkbox-accent">
    <span>Accent</span>
</label>
<label>
    <input type="checkbox" class="checkbox checkbox-success">
    <span>Success</span>
</label>
<label>
    <input type="checkbox" class="checkbox checkbox-warning">
    <span>Warning</span>
</label>
<label>
    <input type="checkbox" class="checkbox checkbox-danger">
    <span>Danger</span>
</label>`}>
                    <div className="grid items-center gap-8 mx-auto w-fit">
                        <label>
                            <input type="checkbox" className="checkbox checkbox-primary"
                                ref={(el) => {
                                    if (el) el.checked = true;
                                }}
                            />
                            <span>Primary</span>
                        </label>
                        <label>
                            <input type="checkbox" className="checkbox checkbox-accent"
                                ref={(el) => {
                                    if (el) el.checked = true;
                                }}
                            />
                            <span>Accent</span>
                        </label>
                        <label>
                            <input type="checkbox" className="checkbox checkbox-success"
                                ref={(el) => {
                                    if (el) el.checked = true;
                                }}
                            />
                            <span>Success</span>
                        </label>
                        <label>
                            <input type="checkbox" className="checkbox checkbox-warning"
                                ref={(el) => {
                                    if (el) el.checked = true;
                                }}
                            />
                            <span>Warning</span>
                        </label>
                        <label>
                            <input type="checkbox" className="checkbox checkbox-danger"
                                ref={(el) => {
                                    if (el) el.checked = true;
                                }}
                            />
                            <span className="">Danger</span>
                        </label>
                    </div>
                </Preview>

                <h4 id="outline">Outline</h4>

                <Preview code={`<input type="checkbox" class="checkbox checkbox-outline">
<input type="checkbox" class="checkbox checkbox-outline checkbox-primary">
<input type="checkbox" class="checkbox checkbox-outline checkbox-accent">
<input type="checkbox" class="checkbox checkbox-outline checkbox-success">
<input type="checkbox" class="checkbox checkbox-outline checkbox-warning">
<input type="checkbox" class="checkbox checkbox-outline checkbox-danger">`}>
                    <div className="flex flex-wrap items-center gap-8 mx-auto w-fit">
                        <input type="checkbox" className="checkbox checkbox-outline"
                                ref={(el) => {
                                    if (el) el.checked = true;
                                }}
                            />
                        <input type="checkbox" className="checkbox checkbox-outline checkbox-primary"
                                ref={(el) => {
                                    if (el) el.checked = true;
                                }}
                            />
                        <input type="checkbox" className="checkbox checkbox-outline checkbox-accent"
                                ref={(el) => {
                                    if (el) el.checked = true;
                                }}
                            />
                        <input type="checkbox" className="checkbox checkbox-outline checkbox-success"
                                ref={(el) => {
                                    if (el) el.checked = true;
                                }}
                            />
                        <input type="checkbox" className="checkbox checkbox-outline checkbox-warning"
                                ref={(el) => {
                                    if (el) el.checked = true;
                                }}
                            />
                        <input type="checkbox" className="checkbox checkbox-outline checkbox-danger"
                                ref={(el) => {
                                    if (el) el.checked = true;
                                }}
                            />
                    </div>
                </Preview>

                <h4 id="outline-bold">Outline Bold</h4>

                <Preview code={`<input type="checkbox" class="checkbox checkbox-outline-bold">
<input type="checkbox" class="checkbox checkbox-outline-bold checkbox-primary">
<input type="checkbox" class="checkbox checkbox-outline-bold checkbox-accent">
<input type="checkbox" class="checkbox checkbox-outline-bold checkbox-success">
<input type="checkbox" class="checkbox checkbox-outline-bold checkbox-warning">
<input type="checkbox" class="checkbox checkbox-outline-bold checkbox-danger">`}>
                    <div className="flex flex-wrap items-center gap-8 mx-auto w-fit">
                        <input type="checkbox" className="checkbox checkbox-outline-bold"
                                ref={(el) => {
                                    if (el) el.checked = true;
                                }}
                            />
                        <input type="checkbox" className="checkbox checkbox-outline-bold checkbox-primary"
                                ref={(el) => {
                                    if (el) el.checked = true;
                                }}
                            />
                        <input type="checkbox" className="checkbox checkbox-outline-bold checkbox-accent"
                                ref={(el) => {
                                    if (el) el.checked = true;
                                }}
                            />
                        <input type="checkbox" className="checkbox checkbox-outline-bold checkbox-success"
                                ref={(el) => {
                                    if (el) el.checked = true;
                                }}
                            />
                        <input type="checkbox" className="checkbox checkbox-outline-bold checkbox-warning"
                                ref={(el) => {
                                    if (el) el.checked = true;
                                }}
                            />
                        <input type="checkbox" className="checkbox checkbox-outline-bold checkbox-danger"
                                ref={(el) => {
                                    if (el) el.checked = true;
                                }}
                            />
                    </div>
                </Preview>

                <h4 id="solid">Solid</h4>

                <Preview code={`<input type="checkbox" class="checkbox checkbox-solid">
<input type="checkbox" class="checkbox checkbox-solid checkbox-primary">
<input type="checkbox" class="checkbox checkbox-solid checkbox-accent">
<input type="checkbox" class="checkbox checkbox-solid checkbox-success">
<input type="checkbox" class="checkbox checkbox-solid checkbox-warning">
<input type="checkbox" class="checkbox checkbox-solid checkbox-danger">`}>
                    <div className="flex flex-wrap items-center gap-8 mx-auto w-fit">
                        <input type="checkbox" className="checkbox checkbox-solid"
                                ref={(el) => {
                                    if (el) el.checked = true;
                                }}
                            />
                        <input type="checkbox" className="checkbox checkbox-solid checkbox-primary"
                                ref={(el) => {
                                    if (el) el.checked = true;
                                }}
                            />
                        <input type="checkbox" className="checkbox checkbox-solid checkbox-accent"
                                ref={(el) => {
                                    if (el) el.checked = true;
                                }}
                            />
                        <input type="checkbox" className="checkbox checkbox-solid checkbox-success"
                                ref={(el) => {
                                    if (el) el.checked = true;
                                }}
                            />
                        <input type="checkbox" className="checkbox checkbox-solid checkbox-warning"
                                ref={(el) => {
                                    if (el) el.checked = true;
                                }}
                            />
                        <input type="checkbox" className="checkbox checkbox-solid checkbox-danger"
                                ref={(el) => {
                                    if (el) el.checked = true;
                                }}
                            />
                    </div>
                </Preview>

                <h3 id="layouts">Layouts</h3>

                <h4 id="inline">Inline</h4>

                <Preview code={`<div class="checkbox-inline">
    <label>
        <input type="checkbox" class="checkbox">
        <span>Option 1</span>
    </label>
    <label>
        <input type="checkbox" class="checkbox">
        <span>Option 2</span>
    </label>
    <label>
        <input type="checkbox" class="checkbox">
        <span>Option 3</span>
    </label>
</div>`}>
                    <div className="mx-auto w-fit">
                        <div className="checkbox-inline">
                            <label>
                                <input type="checkbox" className="checkbox" />
                                <span>Option 1</span>
                            </label>
                            <label>
                                <input type="checkbox" className="checkbox" />
                                <span>Option 2</span>
                            </label>
                            <label>
                                <input type="checkbox" className="checkbox" />
                                <span>Option 3</span>
                            </label>
                        </div>
                    </div>
                </Preview>

                <h4 id="list">List</h4>

                <Preview code={`<div class="checkbox-list">
    <label>
        <input type="checkbox" class="checkbox">
        <span>First option</span>
    </label>
    <label>
        <input type="checkbox" class="checkbox">
        <span>Second option</span>
    </label>
    <label>
        <input type="checkbox" class="checkbox">
        <span>Third option</span>
    </label>
</div>`}>
                    <div className="mx-auto w-fit">
                        <div className="checkbox-list">
                            <label>
                                <input type="checkbox" className="checkbox" />
                                <span>First option</span>
                            </label>
                            <label>
                                <input type="checkbox" className="checkbox" />
                                <span>Second option</span>
                            </label>
                            <label>
                                <input type="checkbox" className="checkbox" />
                                <span>Third option</span>
                            </label>
                        </div>
                    </div>
                </Preview>

                <PageFooterNav>
                    <PrevPageNav href="/components/card">Card</PrevPageNav>
                    <NextPageNav href="/components/divider">Divider</NextPageNav>
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
                            title: "Indeterminate",
                            href: "#indeterminate",
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

export default Checkbox;