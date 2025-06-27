import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import Preview from "../components/Preview";
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";
import TableOfContent from "../components/TableOfContent";

function Form() {
    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>COMPONENT</BreadcrumbItem>
                </Breadcrumb>

                <h2>Form</h2>

                <h6>A collection of form utilities to build interactive forms.</h6>

                <h3 id="usage">Usage</h3>

                <h4 id="basic">Form</h4>

                <p>Use the <code className="tag">form</code> class when creating a <code className="tag">&lt;form&gt;</code> element.</p>

                <Preview code={`<form class="form">
    <label>
        <input type="checkbox" class="checkbox">
        <span>I agree to the terms and conditions</span>
    </labe>
</form>`}/>

                <h3 id="form-fields">Form Fields</h3>

                <h4 id="form-fields-basic">Basic</h4>

                <p>Use the <code className="tag">form-field</code> class to group input elements.</p>

                <Preview code={`<form class="form">
    <div class="form-field">
        <input type="email" class="input" placeholder="Email">
    </div>
    <div class="form-field">
        <label>
            <input type="checkbox" class="checkbox">
            <span>I agree to the terms and conditions</span>
        </labe>
    </div>
</form>`}/>
                <h4 id="field-label">Field Label</h4>

                <Preview code={`<form class="form">
    <div class="form-field">
        <label class="label">Your email</label>
        <input type="email" class="input" placeholder="Email">
    </div>
</form>`}/>
                <h4 id="inline-field-label">Inline Field Label</h4>

                <Preview code={`<form class="form">
    <div class="form-field-inline">
        <label class="label">Your email</label>
        <input type="email" class="input" placeholder="Email">
    </div>
</form>`}/>

                <h4 id="compact">Compact</h4>

                <Preview code={`<form class="form form-compact">
    <div class="form-field">
        <input type="email" class="input" placeholder="Email">
    </div>
    <div class="form-field">
        <input type="password" class="input" placeholder="Password">
    </div>
    <div class="form-field">
        <label>
            <input type="checkbox" class="checkbox">
            <span>Remember me</span>
        </labe>
    </div>
    <div class="form-field">
        <button class="btn btn-primary">Submit</button>
    </div>
</form>`}/>

                <h3 id="helper-text">Helper Text</h3>

                <h4 id="helper-basic">Basic</h4>

                <Preview code={`<form class="form">
    <div class="form-field">
        <label class="label">Your email</label>
        <input type="email" class="input" placeholder="Email">
        <span class="form-helper">We'll never share your email with anyone else.</span>
    </div>
    <div class="form-field">
        <label>
            <input type="checkbox" class="checkbox">
            <div>
                <span>I agree to the terms and conditions</span>
                <span class="form-helper">Last update: 12/02/2025</span>
            </div>
        </labe>
    </div>
</form>`}/>

                <h4 id="validation">Validation</h4>

                <p>Add the <code className="tag">invalid</code> class to <code className="tag">helper-text</code> element.</p>

                <div className="alert alert-outline mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                    <span>Use the <code className="tag">input-validate</code> class on input field to trigger the input validation state.</span>
                </div>

                <Preview code={`<form class="form">
    <div class="form-field">
        <label class="label">Your name <span class="text-danger">*</span></label>
        <input type="text" class="input input-validate" value="Erase me" placeholder="Full name" required>
        <span class="form-helper invalid">Name cannot be empty.</span>
    </div>
</form>`}/>

                <h4 id="invalid">Invalid</h4>

                <p>Add the <code className="tag">invalid</code> class to <code className="tag">helper-text</code> element.</p>

                <div className="alert alert-outline mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                    <span>Use the <code className="tag">input-invalid</code> class on input field to display the invalid helper text regardless of input validation state.</span>
                </div>

                <Preview code={`<form class="form">
    <div class="form-field">
        <label class="label">Your name</label>
        <input type="text" class="input input-invalid" placeholder="Full name">
        <span class="form-helper invalid">Name cannot be empty.</span>
    </div>
</form>`}/>

                <h3 id="fieldset">Fieldset</h3>

                <h4 id="fieldset-basic">Basic</h4>

                <Preview code={`<form class="form w-108">
    <fieldset class="fieldset">
        <legend>Member Registration</legend>
        <div class="form-field">
            <span class="form-helper">Please complete this section with your personal details.</span>
        </div>
        <div class="form-field">
            <label class="label">Your name</label>
            <input type="text" class="input" placeholder="Full name" />
            <span class="form-helper">Your legal full name</span>
        </div>
        <div class="form-field">
            <label class="label">Company</label>
            <input type="text" class="input" placeholder="Company" />
            <span class="form-helper">Your current company</span>
        </div>
    </fieldset>
</form>`}/>

                <h4 id="fieldset-outline">Outline</h4>

                <Preview code={`<form class="form w-108">
    <fieldset class="fieldset fieldset-outline">
        <legend>Member Registration</legend>
        <div class="form-field">
            <span class="form-helper">Please complete this section with your personal details.</span>
        </div>
        <div class="form-field">
            <label class="label">Your name</label>
            <input type="text" class="input input-outline" placeholder="Full name" />
            <span class="form-helper">Your legal full name</span>
        </div>
        <div class="form-field">
            <label class="label">Company</label>
            <input type="text" class="input input-outline" placeholder="Company" />
            <span class="form-helper">Your current company</span>
        </div>
    </fieldset>
</form>`}/>

                <h4 id="fieldset-solid">Solid</h4>

                <Preview code={`<form class="form w-108">
    <fieldset class="fieldset fieldset-solid">
        <legend>Member Registration</legend>
        <div class="form-field">
            <span class="form-helper">Please complete this section with your personal details.</span>
        </div>
        <div class="form-field">
            <label class="label">Your name</label>
            <input type="text" class="input input-solid" placeholder="Full name" />
            <span class="form-helper">Your legal full name</span>
        </div>
        <div class="form-field">
            <label class="label">Company</label>
            <input type="text" class="input input-solid" placeholder="Company" />
            <span class="form-helper">Your current company</span>
        </div>
    </fieldset>
</form>`}/>

                <PageFooterNav>
                    <PrevPageNav href="/components/card">Dropdown</PrevPageNav>
                    <NextPageNav href="/components/divider">Input</NextPageNav>
                </PageFooterNav>
            </div>
            <TableOfContent items={[
                {
                    title: "Usage",
                    href: "#usage",
                    nested: [
                        {
                            title: "Form",
                            href: "#form",
                        },
                    ]
                },
                {
                    title: "Form Fields",
                    href: "#form-fields",
                    nested: [
                        {
                            title: "Basic",
                            href: "#form-fields-basic",
                        },
                        {
                            title: "Field Label",
                            href: "#field-label",
                        },
                        {
                            title: "Inline Field Label",
                            href: "#inline-field-label",
                        },
                        {
                            title: "Compact",
                            href: "#compact",
                        },
                    ]
                },
                {
                    title: "Helper Text",
                    href: "#helper-text",
                    nested: [
                        {
                            title: "Basic",
                            href: "#helper-basic",
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
                    title: "Fieldset",
                    href: "#fieldset",
                    nested: [
                        {
                            title: "Basic",
                            href: "#fieldset-basic",
                        },
                        {
                            title: "Outline",
                            href: "#fieldset-outline",
                        },
                        {
                            title: "Solid",
                            href: "#fieldset-solid",
                        },
                    ]
                },
            ]}/>
        </>
    )
}

export default Form;