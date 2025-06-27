import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import Preview from "../components/Preview";
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";
import TableOfContent from "../components/TableOfContent";

function Input() {
    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>COMPONENT</BreadcrumbItem>
                </Breadcrumb>

                <h2>Input</h2>

                <h6>A flexible, customizable input component with various states, sizes, and styles for form inputs with consistent styling. Supports input groups with prefixes, suffixes, and buttons.</h6>

                <h3 id="usage">Usage</h3>

                <h4 id="basic">Basic</h4>

                <Preview code={`<input type="text" class="input" placeholder="Enter text...">`}/>

                <h4 id="readonly">Read Only</h4>

                <Preview code={`<input type="text" class="input" value="Read only value" readonly>`}/>

                <h4 id="label">Label</h4>

                <Preview code={`<div class="grid gap-8">
    <div class="input">
        <span>@</span>
        <input type="text" placeholder="Username">
    </div>
    <div class="input">
        <input type="text" placeholder="Regex pattern">
        <span>/s</span>
    </div>
    <div class="input">
        <span>Label 1</span>
        <span>Label 2</span>
        <input type="text" placeholder="Multiple labels">
    </div>
</div>`}/>

                <h4 id="icon">Icon</h4>

                <Preview code={`<div class="grid gap-8">
    <div class="input">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
        </svg>
        <input type="text" placeholder="16-digit card number">
    </div>
    <div class="input">
        <input type="text" placeholder="Name">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
        </svg>
    </div>
</div>`}/>

                <h4 id="button">Button</h4>

                <Preview code={`<div class="grid gap-8">
    <div class="input">
        <input type="text" placeholder="Search...">
        <button class="btn">Search</button>
    </div>
    <div class="input">
        <button class="btn btn-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
        </button>
        <input type="text" placeholder="Icon Button">
    </div>
</div>`}/>

                <h4 id="prefix-suffix">Prefix & Suffix</h4>

                <Preview code={`<div class="grid gap-8">
    <div class="input">
        <div class="input-prefix">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </div>
        <input type="number" placeholder="0.00">
        <div class="input-suffix">USD</div>
    </div>
    <div class="input">
        <div class="input-prefix">
            <input type="checkbox" class="checkbox">
        </div>
        <input type="text" placeholder="Checkbox & Radio">
        <div class="input-suffix">
            <input type="radio" class="radio">
        </div>
    </div>
</div>`}/>

                <h4 id="disabled">Disabled</h4>

                <Preview code={`<div class="grid gap-8">
    <input type="text" class="input" placeholder="Disabled input" disabled>
    <input type="text" class="input" value="Disabled read only" readonly disabled>
    <div class="input">
        <input type="text" placeholder="Disabled button" disabled>
        <button class="btn btn-icon" disabled>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        </button>
    </div>
</div>`}/>

                <h4 id="validation">Validation</h4>

                <Preview code={`<input type="email" class="input input-validate" value="Edit me" placeholder="Enter email">`}/>

                <h4 id="invalid">Invalid</h4>

                <p>Use the <code className="tag">input-invalid</code> class to indicate an invalid state regardless of validation.</p>

                <Preview code={`<input type="text" class="input input-invalid" placeholder="Invalid input">`}/>

                <h4 id="no-focus">No Focus</h4>

                <p>Use the <code className="tag">input-nofocus</code> class to disable focus outline styling.</p>

                <Preview code={`<input type="text" class="input input-nofocus" placeholder="Edit me to focus">`}/>

                <h3 id="styles">Styles</h3>

                <h4 id="sizes">Sizes</h4>

                <Preview code={`<div class="grid gap-4">
    <input type="text" class="input input-xs" placeholder="Extra Small">
    <input type="text" class="input input-sm" placeholder="Small">
    <input type="text" class="input" placeholder="Default">
    <input type="text" class="input input-lg" placeholder="Large">
    <input type="text" class="input input-xl" placeholder="Extra Large">
    <input type="text" class="input input-2xl" placeholder="Huge">
</div>`}/>

                <h4 id="colours">Colours</h4>

                <Preview code={`<div class="grid gap-4">
    <input type="text" class="input input-primary" placeholder="Primary">
    <input type="text" class="input input-accent" placeholder="Accent">
    <input type="text" class="input input-success" placeholder="Success">
    <input type="text" class="input input-warning" placeholder="Warning">
    <input type="text" class="input input-danger" placeholder="Danger">
</div>`}/>

                <h4 id="solid">Solid</h4>

                <p>Solid background without border or shadow.</p>

                <Preview code={`<div class="grid gap-4">
    <input type="text" class="input input-solid" placeholder="Solid style">
    <input type="text" class="input input-solid input-primary" placeholder="Solid primary">
    <input type="text" class="input input-solid input-accent" placeholder="Solid accent">
    <input type="text" class="input input-solid input-success" placeholder="Solid success">
    <input type="text" class="input input-solid input-warning" placeholder="Solid warning">
    <input type="text" class="input input-solid input-danger" placeholder="Solid danger">
</div>`}/>

                <h4 id="outline">Outline</h4>

                <p>Transparent background with border only.</p>

                <Preview code={`<div class="grid gap-4">
    <input type="text" class="input input-outline" placeholder="Outline style">
    <input type="text" class="input input-outline input-primary" placeholder="Outline primary">
    <input type="text" class="input input-outline input-accent" placeholder="Outline accent">
    <input type="text" class="input input-outline input-success" placeholder="Outline success">
    <input type="text" class="input input-outline input-warning" placeholder="Outline warning">
    <input type="text" class="input input-outline input-danger" placeholder="Outline danger">
</div>`}/>

                <h4 id="outline-bold">Outline Bold</h4>

                <p>Transparent background with thicker border.</p>

                <Preview code={`<div class="grid gap-4">
    <input type="text" class="input input-outline-bold" placeholder="Outline bold style">
    <input type="text" class="input input-outline-bold input-primary" placeholder="Outline bold primary">
    <input type="text" class="input input-outline-bold input-accent" placeholder="Outline bold accent">
    <input type="text" class="input input-outline-bold input-success" placeholder="Outline bold success">
    <input type="text" class="input input-outline-bold input-warning" placeholder="Outline bold warning">
    <input type="text" class="input input-outline-bold input-danger" placeholder="Outline bold danger">
</div>`}/>

                <h4 id="clear">Clear</h4>

                <p>Removes border, shadow, and background for a minimal appearance.</p>

                <Preview code={`<div class="grid gap-4">
    <input type="text" class="input input-clear" placeholder="Clear">
    <input type="text" class="input input-clear input-primary" placeholder="Primary">
    <input type="text" class="input input-clear input-accent" placeholder="Accent">
    <input type="text" class="input input-clear input-success" placeholder="Success">
    <input type="text" class="input input-clear input-warning" placeholder="Warning">
    <input type="text" class="input input-clear input-danger" placeholder="Danger">
    <input type="text" class="input input-clear input-nofocus" placeholder="No focus">
</div>`}/>

                <h3 id="variants">Variants</h3>

                <h4 id="date">Date</h4>

                <Preview code={`<input type="date" class="input">`}/>

                <h4 id="time">Time</h4>

                <Preview code={`<input type="time" class="input">`}/>

                <h4 id="date-time">Date-Time</h4>

                <Preview code={`<input type="datetime-local" class="input">`}/>

                <h4 id="month">Month</h4>

                <Preview code={`<input type="month" class="input">`}/>

                <h4 id="week">Week</h4>

                <Preview code={`<input type="week" class="input">`}/>

                <h4 id="password">Password</h4>

                <Preview code={`<input type="password" class="input" value="password" placeholder="Password">`}/>

                <h4 id="number">Number</h4>

                <Preview code={`<input type="number" class="input" value="2" placeholder="Number">`}/>

                <h4 id="file-input">File Input</h4>

                <Preview code={`<input type="file" class="input">`}/>

                <h3 id="examples">Examples</h3>

                <h4 id="button-label">Button & Label</h4>

                <Preview code={`<div class="input">
    <button class="btn">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
    </button>
    <input type="text" placeholder="Search with icon">
    <span>⌘K</span>
</div>`}/>

                <h4 id="button-variations">Button Variations</h4>

                <Preview code={`<div class="grid gap-8">
    <div class="input">
        <div class="dropdown">
            <button class="btn btn-clear btn-icon dropdown-toggle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                </svg>
            </button>
            <div class="dropdown-content">
                <div class="card">
                    <div class="card-body">
                        <div>Dropdown content</div>
                    </div>
                </div>
            </div>
        </div>
        <input type="url" placeholder="Dropdown button">
    </div>
    <div class="input input-solid input-accent">
        <input type="email" placeholder="Enter email">
        <button class="btn btn-accent">Subscribe</button>
    </div>
    <div class="input input-warning">
        <button class="btn btn-outline btn-warning">-</button>
        <input type="number" value="1" class="text-center">
        <button class="btn btn-outline btn-warning">+</button>
    </div>
</div>`}/>

                <h4 id="complex-groups">Button, Label, Prefix & Suffix</h4>

                <Preview code={`<div class="grid gap-8">
    <div class="input input-lg input-success">
        <div class="input-prefix">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
        </div>
        <input type="text" placeholder="Full name">
        <button class="btn btn-success">Save</button>
    </div>
    
    <div class="input">
        <span>https://</span>
        <input type="text" placeholder="example">
        <div class="input-suffix">.com</div>
        <button class="btn btn-outline">Check</button>
    </div>
</div>`}/>

                <PageFooterNav>
                    <PrevPageNav href="/components/form">Form</PrevPageNav>
                    <NextPageNav href="/components/menu">Menu</NextPageNav>
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
                            title: "Read Only",
                            href: "#readonly",
                        },
                        {
                            title: "Label",
                            href: "#label",
                        },
                        {
                            title: "Icon",
                            href: "#icon",
                        },
                        {
                            title: "Button",
                            href: "#button",
                        },
                        {
                            title: "Prefix & Suffix",
                            href: "#prefix-suffix",
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
                        {
                            title: "No Focus",
                            href: "#no-focus",
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
                            title: "Outline",
                            href: "#outline",
                        },
                        {
                            title: "Outline Bold",
                            href: "#outline-bold",
                        },
                        {
                            title: "Clear",
                            href: "#clear",
                        },
                    ]
                },
                {
                    title: "Variants",
                    href: "#variants",
                    nested: [
                        {
                            title: "Date",
                            href: "#date",
                        },
                        {
                            title: "Time",
                            href: "#time",
                        },
                        {
                            title: "Date-Time",
                            href: "#date-time",
                        },
                        {
                            title: "Month",
                            href: "#month",
                        },
                        {
                            title: "Week",
                            href: "#week",
                        },
                        {
                            title: "Password",
                            href: "#password",
                        },
                        {
                            title: "Number",
                            href: "#number",
                        },
                        {
                            title: "File Input",
                            href: "#file-input",
                        },
                    ]
                },
                {
                    title: "Examples",
                    href: "#examples",
                    nested: [
                        {
                            title: "Button & Label",
                            href: "#button-label",
                        },
                        {
                            title: "Button Variations",
                            href: "#button-variations",
                        },
                        {
                            title: "Button, Label, Prefix & Suffix",
                            href: "#complex-groups",
                        },
                    ]
                },
            ]}/>
        </>
    )
}

export default Input;