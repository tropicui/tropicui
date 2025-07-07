import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import Preview from "../components/Preview";
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";
import TableOfContent from "../components/TableOfContent";

function Spinner() {
    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>COMPONENT</BreadcrumbItem>
                </Breadcrumb>

                <h2>Spinner</h2>

                <h6>A flexible, customizable loading spinner component with various sizes, colors, and styles for indicating loading or processing states.</h6>

                <h3 id="usage">Usage</h3>

                <h4 id="basic">Basic</h4>

                <Preview code={`<div class="spinner"></div>`}/>

                <h4 id="label">Label</h4>

                <p>Spinners can be wrapped in a <code className="tag">label</code> element to display loading text alongside the spinner.</p>

                <Preview code={`<label>
    <div class="spinner"></div>
    <span>Loading...</span>
</label>`}/>

                <h4 id="button">Button</h4>

                <Preview code={`<button class="btn" disabled>
    <div class="spinner"></div>
    <span>Saving...</span>
</button>`}/>

                <h3 id="styles">Styles</h3>

                <h4 id="sizes">Sizes</h4>

                <Preview code={`<div class="flex flex-col gap-4">
    <label>
        <div class="spinner spinner-xs"></div>
        <span class="text-xs">Extra Small</span>
    </label>
    <label>
        <div class="spinner spinner-sm"></div>
        <span class="text-sm">Small</span>
    </label>
    <label>
        <div class="spinner"></div>
        <span>Default</span>
    </label>
    <label>
        <div class="spinner spinner-lg"></div>
        <span class="text-lg">Large</span>
    </label>
    <label>
        <div class="spinner spinner-xl"></div>
        <span class="text-xl">Extra Large</span>
    </label>
    <label>
        <div class="spinner spinner-2xl"></div>
        <span class="text-2xl">2XL</span>
    </label>
</div>`}/>

                <h4 id="colours">Colours</h4>

                <Preview code={`<div class="flex flex-col gap-4">
    <label>
        <div class="spinner"></div>
        <span>Default</span>
    </label>
    <label>
        <div class="spinner spinner-primary"></div>
        <span>Primary</span>
    </label>
    <label>
        <div class="spinner spinner-accent"></div>
        <span>Accent</span>
    </label>
    <label>
        <div class="spinner spinner-success"></div>
        <span>Success</span>
    </label>
    <label>
        <div class="spinner spinner-warning"></div>
        <span>Warning</span>
    </label>
    <label>
        <div class="spinner spinner-danger"></div>
        <span>Danger</span>
    </label>
</div>`}/>

                <h3 id="variants">Variants</h3>

                <h4 id="clear">Clear</h4>

                <p>The clear variant removes the border track, showing only the animated accent color.</p>

                <Preview code={`<div class="flex flex-wrap gap-8">
    <div class="spinner spinner-clear"></div>
    <div class="spinner spinner-clear spinner-primary"></div>
    <div class="spinner spinner-clear spinner-accent"></div>
    <div class="spinner spinner-clear spinner-success"></div>
    <div class="spinner spinner-clear spinner-warning"></div>
    <div class="spinner spinner-clear spinner-danger"></div>
</div>`}/>

                <h4 id="solid">Solid</h4>

                <Preview code={`<div class="flex flex-wrap gap-8">
    <div class="spinner spinner-solid"></div>
    <div class="spinner spinner-solid spinner-primary"></div>
    <div class="spinner spinner-solid spinner-accent"></div>
    <div class="spinner spinner-solid spinner-success"></div>
    <div class="spinner spinner-solid spinner-warning"></div>
    <div class="spinner spinner-solid spinner-danger"></div>
</div>`}/>

                <h3 id="examples">Examples</h3>

                <h4 id="page-loading">Page Loading</h4>

                <Preview code={`<div class="flex flex-col items-center justify-center gap-4">
    <div class="spinner spinner-xl spinner-primary"></div>
    <span class="text-muted">Loading content...</span>
</div>`}/>

                <h4 id="card-loading">Card Loading</h4>

                <Preview code={`<div class="card card-center w-lg h-64">
    <div class="card-body">
        <div class="mb-4">
            <div class="spinner spinner-lg spinner-accent"></div>
        </div>
        <p class="text-muted">Processing your request, please wait...</p>
    </div>
</div>`}/>

                <PageFooterNav>
                    <PrevPageNav href="/components/sink">Sink</PrevPageNav>
                    <NextPageNav href="/components/status">Status</NextPageNav>
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
                            title: "Button",
                            href: "#button",
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
                            title: "Clear",
                            href: "#clear",
                        },
                        {
                            title: "Solid",
                            href: "#solid",
                        },
                    ]
                },
                {
                    title: "Examples",
                    href: "#examples",
                    nested: [
                        {
                            title: "Page Loading",
                            href: "#page-loading",
                        },
                        {
                            title: "Card Loading",
                            href: "#card-loading",
                        },
                    ]
                },
            ]}/>
        </>
    )
}

export default Spinner;