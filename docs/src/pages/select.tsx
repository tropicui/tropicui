import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import Preview from "../components/Preview";
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";
import TableOfContent from "../components/TableOfContent";

function Select() {
    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>COMPONENT</BreadcrumbItem>
                </Breadcrumb>

                <h2>Select</h2>

                <h6>A flexible, customizable select dropdown component with various states, sizes, and styles for form selections with consistent styling and built-in dropdown arrow.</h6>

                <h3 id="usage">Usage</h3>

                <h4 id="basic">Basic</h4>

                <Preview code={`<select class="select">
    <option value="">Choose an option</option>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
</select>`}/>

                <h4 id="placeholder">Placeholder</h4>

                <Preview code={`<select class="select">
    <option value="" disabled selected>Select your country</option>
    <option value="us">United States</option>
    <option value="ca">Canada</option>
    <option value="uk">United Kingdom</option>
    <option value="au">Australia</option>
</select>`}/>

                <h4 id="disabled">Disabled</h4>

                <Preview code={`<div class="grid gap-4">
    <select class="select" disabled>
        <option value="">Disabled select</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select class="select" disabled>
        <option value="option0">Selected disabled</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
</div>`}/>

                <h4 id="helper-text">Helper Text</h4>

                <Preview code={`<form class="form w-3xs">
    <div class="form-field">
        <label class="label">Please select</label>
        <select class="select" required>
            <option value="">Filter by</option>
            <option value="price">Price ($)</option>
            <option value="weight">Weight (kg)</option>
            <option value="length">Length (m)</option>
        </select>
        <span class="form-helper">Select a filter option to filter the products.</span>
    </div>
</form>`}/>

                <h4 id="validation">Validation</h4>

                <Preview code={`<form class="form w-3xs">
    <div class="form-field">
        <label class="label">Unselect me</label>
        <span class="form-helper">Unselect the option below to view invalid state.</span>
        <select class="select select-validate" required>
            <option value="">Please select an option</option>
            <option value="valid1" selected>Valid Option 1</option>
            <option value="valid2">Valid Option 2</option>
            <option value="valid3">Valid Option 3</option>
        </select>
        <span class="form-helper invalid">Please select an option.</span>
    </div>
</form>`}/>

                <h4 id="invalid">Invalid</h4>

                <p>Use the <code className="tag">select-invalid</code> class to indicate an invalid state regardless of validation.</p>

                <Preview code={`<select class="select select-invalid">
    <option value="">Invalid selection</option>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
</select>`}/>

                <h3 id="styles">Styles</h3>

                <h4 id="sizes">Sizes</h4>

                <Preview code={`<div class="grid gap-6">
    <select class="select select-xs">
        <option value="">Extra Small</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select class="select select-sm">
        <option value="">Small</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select class="select">
        <option value="">Default</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select class="select select-lg">
        <option value="">Large</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select class="select select-xl">
        <option value="">Extra Large</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select class="select select-2xl">
        <option value="">2XL</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
</div>`}/>

                <h4 id="colours">Colours</h4>

                <Preview code={`<div class="flex flex-wrap gap-6">
    <select class="select select-primary">
        <option value="">Primary</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select class="select select-accent">
        <option value="">Accent</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select class="select select-success">
        <option value="">Success</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select class="select select-warning">
        <option value="">Warning</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select class="select select-danger">
        <option value="">Danger</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
</div>`}/>

                <h4 id="soft">Soft</h4>

                <p>Soft background with subtle styling.</p>

                <Preview code={`<div class="grid grid-cols-1 @md:grid-cols-3 gap-8 mb-8">
    <select class="select select-soft">
        <option value="">Soft Default</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select class="select select-soft select-primary">
        <option value="">Soft Primary</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select class="select select-soft select-accent">
        <option value="">Soft Accent</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select class="select select-soft select-success">
        <option value="">Soft Success</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select class="select select-soft select-warning">
        <option value="">Soft Warning</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select class="select select-soft select-danger">
        <option value="">Soft Danger</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
</div>`}/>

                <h4 id="outline">Outline</h4>

                <p>Transparent background with border only.</p>

                <Preview code={`<div class="grid grid-cols-1 @md:grid-cols-3 gap-8 mb-8">
    <select class="select select-outline">
        <option value="">Outline Default</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select class="select select-outline select-primary">
        <option value="">Outline Primary</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select class="select select-outline select-accent">
        <option value="">Outline Accent</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select class="select select-outline select-success">
        <option value="">Outline Success</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select class="select select-outline select-warning">
        <option value="">Outline Warning</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select class="select select-outline select-danger">
        <option value="">Outline Danger</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
</div>`}/>

                <h4 id="outline-bold">Outline Bold</h4>

                <p>Transparent background with thicker border.</p>

                <Preview code={`<div class="grid grid-cols-1 @md:grid-cols-3 gap-8 mb-8">
    <select class="select select-outline-bold">
        <option value="">Outline Bold Default</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select class="select select-outline-bold select-primary">
        <option value="">Outline Bold Primary</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select class="select select-outline-bold select-accent">
        <option value="">Outline Bold Accent</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select class="select select-outline-bold select-success">
        <option value="">Outline Bold Success</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select class="select select-outline-bold select-warning">
        <option value="">Outline Bold Warning</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select class="select select-outline-bold select-danger">
        <option value="">Outline Bold Danger</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
</div>`}/>

                <h4 id="clear">Clear</h4>

                <p>Removes border, shadow, and background for a minimal appearance.</p>

                <Preview code={`<div class="grid grid-cols-1 @md:grid-cols-3 gap-8 mb-8">
    <select class="select select-clear">
        <option value="">Clear</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select class="select select-clear select-primary">
        <option value="">Primary</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select class="select select-clear select-accent">
        <option value="">Accent</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select class="select select-clear select-success">
        <option value="">Success</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select class="select select-clear select-warning">
        <option value="">Warning</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select class="select select-clear select-danger">
        <option value="">Danger</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
</div>`}/>

                <h3 id="variants">Variants</h3>

                <h4 id="pill">Pill</h4>

                <Preview code={`<div class="flex flex-wrap gap-8">
    <select class="select select-pill">
        <option value="">Pill style</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select class="select select-pill select-primary">
        <option value="">Pill primary</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select class="select select-pill select-outline select-accent">
        <option value="">Pill outline accent</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
</div>`}/>

                <h3 id="examples">Examples</h3>

                <h4 id="grouped-options">Grouped Options</h4>

                <Preview code={`<div class="h-80">
    <select class="select select-lg">
        <option value="">Choose a programming language</option>
        <optgroup label="Frontend">
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
        </optgroup>
        <optgroup label="Backend">
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="php">PHP</option>
            <option value="ruby">Ruby</option>
        </optgroup>
        <optgroup label="Database">
            <option value="sql">SQL</option>
            <option value="mongodb">MongoDB</option>
            <option value="postgresql">PostgreSQL</option>
        </optgroup>
    </select>
</div>`}/>

                <PageFooterNav>
                    <PrevPageNav href="/components/radio">Radio</PrevPageNav>
                    <NextPageNav href="/components/sink">Sink</NextPageNav>
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
                            title: "Placeholder",
                            href: "#placeholder",
                        },
                        {
                            title: "Disabled",
                            href: "#disabled",
                        },
                        {
                            title: "Helper Text",
                            href: "#helper-text",
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
                            title: "Soft",
                            href: "#soft",
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
                            title: "Pill",
                            href: "#pill",
                        },
                    ]
                },
                {
                    title: "Examples",
                    href: "#examples",
                    nested: [
                        {
                            title: "Grouped Options",
                            href: "#grouped-options",
                        },
                    ]
                },
            ]}/>
        </>
    )
}

export default Select;