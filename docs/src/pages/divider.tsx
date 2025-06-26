import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import Preview from "../components/Preview";
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";
import TableOfContent from "../components/TableOfContent";

function Divider() {
    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>COMPONENT</BreadcrumbItem>
                </Breadcrumb>

                <h2>Divider</h2>

                <h6>A flexible divider component for separating content sections with optional text labels.</h6>

                <h3 id="usage">Usage</h3>

                <h4 id="basic">Basic</h4>

                <Preview code={`<div>
    <h3 class="text-center text-muted">Content Above</h3>

    <div class="divider my-4"></div>

    <h3 class="text-center text-muted">Content Below</h3>
</div>`}/>

                <h4 id="text">Text</h4>

                <Preview code={`<div>
    <h3 class="text-center text-muted">Content Above</h3>

    <div class="divider my-4">OR</div>

    <h3 class="text-center text-muted">Content Below</h3>
</div>`}/>

                <h4 id="icon">Icon</h4>

                <Preview code={`<div>
    <h3 class="text-center text-muted">Content Above</h3>

    <div class="divider my-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
        </svg>
    </div>

    <h3 class="text-center text-muted">Content Below</h3>
</div>`}/>

                <h3 id="styles">Styles</h3>

                <h4 id="sizes">Sizes</h4>

                <Preview code={`<div>
    <div class="divider divider-thin">Thin</div>
    <div class="divider">Default</div>
    <div class="divider divider-bold">Bold</div>
    <div class="divider divider-thick">Thick</div>
    <div class="divider divider-thicker">Thicker</div>
</div>`}/>

                <h4 id="dashed">Dashed</h4>

                <Preview code={`<div>
    <div class="divider divider-dashed divider-thin">Thin</div>
    <div class="divider divider-dashed">Default</div>
    <div class="divider divider-dashed divider-bold">Bold</div>
    <div class="divider divider-dashed divider-thick">Thick</div>
    <div class="divider divider-dashed divider-thicker">Thicker</div>
</div>`}/>

                <h4 id="dotted">Dotted</h4>

                <Preview code={`<div>
    <div class="divider divider-dotted divider-thin">Thin</div>
    <div class="divider divider-dotted">Default</div>
    <div class="divider divider-dotted divider-bold">Bold</div>
    <div class="divider divider-dotted divider-thick">Thick</div>
    <div class="divider divider-dotted divider-thicker">Thicker</div>
</div>`}/>

                <h4 id="colors">Colors</h4>

                <Preview code={`<div>
    <div class="divider">Default</div>
    <div class="divider divider-primary">Primary</div>
    <div class="divider divider-accent">Accent</div>
    <div class="divider divider-success">Success</div>
    <div class="divider divider-warning">Warning</div>
    <div class="divider divider-danger">Danger</div>
</div>`}/>

                <h4 id="subtle">Subtle</h4>

                <Preview code={`<div>
    <div class="divider divider-subtle">Subtle</div>
    <div class="divider divider-subtle divider-primary ">Primary Subtle</div>
    <div class="divider divider-subtle divider-accent">Accent Subtle</div>
    <div class="divider divider-subtle divider-success">Success Subtle</div>
    <div class="divider divider-subtle divider-warning">Warning Subtle</div>
    <div class="divider divider-subtle divider-danger">Danger Subtle</div>
</div>`}/>

                <h3 id="variants">Variants</h3>

                <h4 id="align-left">Align Left</h4>

                <Preview code={`<div>
    <div class="divider divider-start">Start</div>
    <div class="divider divider-start-xs">Start Extra Small</div>
    <div class="divider divider-start-sm">Start Small</div>
    <div class="divider divider-start-md">Start Medium</div>
    <div class="divider divider-start-lg">Start Large</div>
    <div class="divider divider-start-xl">Start Extra Large</div>
</div>`}/>

                <h4 id="align-right">Align Right</h4>

                <Preview code={`<div>
    <div class="divider divider-end">End</div>
    <div class="divider divider-end-xs">End Extra Small</div>
    <div class="divider divider-end-sm">End Small</div>
    <div class="divider divider-end-md">End Medium</div>
    <div class="divider divider-end-lg">End Large</div>
    <div class="divider divider-end-xl">End Extra Large</div>
</div>`}/>

                <h4 id="vertical">Vertical</h4>

                <Preview code={`<div class="flex justify-center gap-4">
    <span class="text-muted">Content Left</span>
    <div class="divider divider-vertical"></div>
    <span class="text-muted">Content Right</span>
</div>`}/>

                <h4 id="vertical-text">Vertical Text</h4>

                <Preview code={`<div class="flex justify-center items-center gap-4 h-64">
    <div>
        <h3 class="text-muted">Content Left</h3>
    </div>
    <div class="divider divider-vertical">OR</div>
    <div>
        <h3 class="text-muted">Content Right</h3>
    </div>
</div>`}/>

                <h4 id="vertical-icon">Vertical icon</h4>

                <Preview code={`<div class="flex justify-center items-center gap-4 h-64">
    <div>
        <h3 class="text-muted">Content Left</h3>
    </div>
    <div class="divider divider-vertical">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
        </svg>
    </div>
    <div>
        <h3 class="text-muted">Content Right</h3>
    </div>
</div>`}/>

                <h4 id="align-top">Align top</h4>

                <Preview code={`<div class="flex gap-8 h-64">
    <div class="divider divider-vertical divider-start">Start</div>
    <div class="divider divider-vertical divider-start-xs">Start Extra Small</div>
    <div class="divider divider-vertical divider-start-sm">Start Small</div>
    <div class="divider divider-vertical divider-start-md">Start Medium</div>
    <div class="divider divider-vertical divider-start-lg">Start Large</div>
    <div class="divider divider-vertical divider-start-xl">Start Extra Large</div>
</div>`}/>

                <h4 id="align-bottom">Align Bottom</h4>

                <Preview code={`<div class="flex gap-8 h-64">
    <div class="divider divider-vertical divider-end">End</div>
    <div class="divider divider-vertical divider-end-xs">End Extra Small</div>
    <div class="divider divider-vertical divider-end-sm">End Small</div>
    <div class="divider divider-vertical divider-end-md">End Medium</div>
    <div class="divider divider-vertical divider-end-lg">End Large</div>
    <div class="divider divider-vertical divider-end-xl">End Extra Large</div>
</div>`}/>

                <PageFooterNav>
                    <PrevPageNav href="/components/checkbox">Checkbox</PrevPageNav>
                    <NextPageNav href="/components/drawer">Drawer</NextPageNav>
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
                        {
                            title: "Icon",
                            href: "#icon",
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
                            title: "Dashed",
                            href: "#dashed",
                        },
                        {
                            title: "Dotted",
                            href: "#dotted",
                        },
                        {
                            title: "Colors",
                            href: "#colors",
                        },
                        {
                            title: "Subtle",
                            href: "#subtle",
                        },
                    ]
                },
                {
                    title: "Variants",
                    href: "#variants",
                    nested: [
                        {
                            title: "Align Left",
                            href: "#align-left",
                        },
                        {
                            title: "Align Right",
                            href: "#align-right",
                        },
                        {
                            title: "Vertical",
                            href: "#vertical",
                        },
                        {
                            title: "Vertical Text",
                            href: "#vertical-text",
                        },
                        {
                            title: "Vertical Icon",
                            href: "#vertical-icon",
                        },
                        {
                            title: "Align Top",
                            href: "#align-top",
                        },
                        {
                            title: "Align Bottom",
                            href: "#align-bottom",
                        },
                    ]
                },
            ]}/>
        </>
    )
}

export default Divider;