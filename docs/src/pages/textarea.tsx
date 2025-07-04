import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import Preview from "../components/Preview";
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";
import TableOfContent from "../components/TableOfContent";

function Textarea() {
    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>COMPONENT</BreadcrumbItem>
                </Breadcrumb>

                <h2>Textarea</h2>

                <h6>A flexible, customizable textarea component with various states and styles for multi-line text input with consistent styling.</h6>

                <h3 id="usage">Usage</h3>

                <h4 id="basic">Basic</h4>

                <Preview code={`<textarea class="textarea" placeholder="Enter text..."></textarea>`}/>

                <h4 id="readonly">Read Only</h4>

                <Preview code={`<textarea class="textarea" readonly>Read only value</textarea>`}/>

                <h4 id="disabled">Disabled</h4>

                <Preview code={`<textarea class="textarea" placeholder="Disabled textarea" disabled></textarea>`}/>

                <h4 id="validation">Validation</h4>

                <Preview code={`<textarea class="textarea textarea-validate" placeholder="Enter text" required>Erase me</textarea>`}/>

                <h4 id="invalid">Invalid</h4>

                <p>Use the <code className="tag">textarea-invalid</code> class to indicate an invalid state regardless of validation.</p>

                <Preview code={`<textarea class="textarea textarea-invalid" placeholder="Invalid textarea"></textarea>`}/>

                <h3 id="styles">Styles</h3>

                <h4 id="sizes">Sizes</h4>

                <Preview code={`<div class="grid gap-4">
    <textarea class="textarea text-xs" placeholder="Extra Small"></textarea>
    <textarea class="textarea text-sm" placeholder="Small"></textarea>
    <textarea class="textarea" placeholder="Default"></textarea>
    <textarea class="textarea text-lg" placeholder="Large"></textarea>
    <textarea class="textarea text-xl" placeholder="Extra Large"></textarea>
    <textarea class="textarea text-2xl" placeholder="2XL"></textarea>
</div>`}/>

                <h4 id="colours">Colours</h4>

                <Preview code={`<div class="grid gap-4">
    <textarea class="textarea textarea-primary" placeholder="Primary"></textarea>
    <textarea class="textarea textarea-accent" placeholder="Accent"></textarea>
    <textarea class="textarea textarea-success" placeholder="Success"></textarea>
    <textarea class="textarea textarea-warning" placeholder="Warning"></textarea>
    <textarea class="textarea textarea-danger" placeholder="Danger"></textarea>
</div>`}/>

                <h4 id="solid">Solid</h4>

                <p>Solid background without border or shadow.</p>

                <Preview code={`<div class="grid gap-4">
    <textarea class="textarea textarea-solid" placeholder="Solid style"></textarea>
    <textarea class="textarea textarea-solid textarea-primary" placeholder="Solid primary"></textarea>
    <textarea class="textarea textarea-solid textarea-accent" placeholder="Solid accent"></textarea>
    <textarea class="textarea textarea-solid textarea-success" placeholder="Solid success"></textarea>
    <textarea class="textarea textarea-solid textarea-warning" placeholder="Solid warning"></textarea>
    <textarea class="textarea textarea-solid textarea-danger" placeholder="Solid danger"></textarea>
</div>`}/>

                <h4 id="outline">Outline</h4>

                <p>Transparent background with border only.</p>

                <Preview code={`<div class="grid gap-4">
    <textarea class="textarea textarea-outline" placeholder="Outline style"></textarea>
    <textarea class="textarea textarea-outline textarea-primary" placeholder="Outline primary"></textarea>
    <textarea class="textarea textarea-outline textarea-accent" placeholder="Outline accent"></textarea>
    <textarea class="textarea textarea-outline textarea-success" placeholder="Outline success"></textarea>
    <textarea class="textarea textarea-outline textarea-warning" placeholder="Outline warning"></textarea>
    <textarea class="textarea textarea-outline textarea-danger" placeholder="Outline danger"></textarea>
</div>`}/>

                <h4 id="outline-bold">Outline Bold</h4>

                <p>Transparent background with thicker border.</p>

                <Preview code={`<div class="grid gap-4">
    <textarea class="textarea textarea-outline-bold" placeholder="Outline bold style"></textarea>
    <textarea class="textarea textarea-outline-bold textarea-primary" placeholder="Outline bold primary"></textarea>
    <textarea class="textarea textarea-outline-bold textarea-accent" placeholder="Outline bold accent"></textarea>
    <textarea class="textarea textarea-outline-bold textarea-success" placeholder="Outline bold success"></textarea>
    <textarea class="textarea textarea-outline-bold textarea-warning" placeholder="Outline bold warning"></textarea>
    <textarea class="textarea textarea-outline-bold textarea-danger" placeholder="Outline bold danger"></textarea>
</div>`}/>

                <h4 id="clear">Clear</h4>

                <p>Removes border, shadow, and background for a minimal appearance.</p>

                <Preview code={`<div class="grid gap-4">
    <textarea class="textarea textarea-clear" placeholder="Clear"></textarea>
    <textarea class="textarea textarea-clear textarea-primary" placeholder="Primary"></textarea>
    <textarea class="textarea textarea-clear textarea-accent" placeholder="Accent"></textarea>
    <textarea class="textarea textarea-clear textarea-success" placeholder="Success"></textarea>
    <textarea class="textarea textarea-clear textarea-warning" placeholder="Warning"></textarea>
    <textarea class="textarea textarea-clear textarea-danger" placeholder="Danger"></textarea>
</div>`}/>

                <PageFooterNav>
                    <PrevPageNav href="/components/input">Input</PrevPageNav>
                    <NextPageNav href="/components/select">Select</NextPageNav>
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
            ]}/>
        </>
    )
}

export default Textarea; 