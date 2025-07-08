import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import Preview from "../components/Preview";
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";
import TableOfContent from "../components/TableOfContent";

function Tooltip() {
    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>COMPONENT</BreadcrumbItem>
                </Breadcrumb>

                <h2>Tooltip</h2>

                <h6>A flexible, customizable tooltip component with various positions, sizes, and color variants.</h6>

                <h3 id="usage">Usage</h3>

                <h4 id="basic">Basic</h4>
                <Preview code={`<button class="btn tooltip" data-tooltip="This is a tooltip!">Hover me</button>`}/>

                <h4 id="open">Open</h4>
                <Preview code={`<button class="btn tooltip open" data-tooltip="Always visible tooltip">Always visible</button>`}/>

                <h3 id="positioning">Positioning</h3>

                <h4 id="top">Top (default)</h4>
                <Preview code={`<button class="btn tooltip" data-tooltip="Tooltip on top">Top</button>`}/>

                <h4 id="top-leading">Top Leading</h4>
                <Preview code={`<button class="btn tooltip tooltip-top-start" data-tooltip="Top leading">Top Leading</button>`}/>

                <h4 id="top-trailing">Top Trailing</h4>
                <Preview code={`<button class="btn tooltip tooltip-top-end" data-tooltip="Top trailing">Top Trailing</button>`}/>

                <h4 id="bottom">Bottom</h4>
                <Preview code={`<button class="btn tooltip tooltip-bottom" data-tooltip="Tooltip on bottom">Bottom</button>`}/>

                <h4 id="bottom-leading">Bottom Leading</h4>
                <Preview code={`<button class="btn tooltip tooltip-bottom-start" data-tooltip="Bottom leading">Bottom Leading</button>`}/>

                <h4 id="bottom-trailing">Bottom Trailing</h4>
                <Preview code={`<button class="btn tooltip tooltip-bottom-end" data-tooltip="Bottom trailing">Bottom Trailing</button>`}/>

                <h4 id="left">Left</h4>
                <Preview code={`<button class="btn tooltip tooltip-left" data-tooltip="Tooltip on left">Left</button>`}/>

                <h4 id="left-start">Left Start</h4>
                <Preview code={`<button class="btn tooltip tooltip-left-start" data-tooltip="Left start">Left Start</button>`}/>

                <h4 id="left-end">Left End</h4>
                <Preview code={`<button class="btn tooltip tooltip-left-end" data-tooltip="Left end">Left End</button>`}/>

                <h4 id="right">Right</h4>
                <Preview code={`<button class="btn tooltip tooltip-right" data-tooltip="Tooltip on right">Right</button>`}/>

                <h4 id="right-start">Right Start</h4>
                <Preview code={`<button class="btn tooltip tooltip-right-start" data-tooltip="Right start">Right Start</button>`}/>

                <h4 id="right-end">Right End</h4>
                <Preview code={`<button class="btn tooltip tooltip-right-end" data-tooltip="Right end">Right End</button>`}/>

                <h4 id="leading">Leading</h4>
                <Preview code={`<button class="btn tooltip tooltip-start" data-tooltip="Tooltip on leading">Leading</button>`}/>

                <h4 id="leading-start">Leading Start</h4>
                <Preview code={`<button class="btn tooltip tooltip-start-start" data-tooltip="Tooltip on leading start">Leading Start</button>`}/>

                <h4 id="leading-end">Leading End</h4>
                <Preview code={`<button class="btn tooltip tooltip-start-end" data-tooltip="Tooltip on leading end">Leading End</button>`}/>

                <h4 id="trailing">Trailing</h4>
                <Preview code={`<button class="btn tooltip tooltip-end" data-tooltip="Tooltip on trailing">Trailing</button>`}/>

                <h4 id="trailing-start">Trailing Start</h4>
                <Preview code={`<button class="btn tooltip tooltip-end-start" data-tooltip="Tooltip on trailing start">Trailing Start</button>`}/>

                <h4 id="trailing-end">Trailing End</h4>
                <Preview code={`<button class="btn tooltip tooltip-end-end" data-tooltip="Tooltip on trailing end">Trailing End</button>`}/>

                <h3 id="styles">Styles</h3>

                <h4 id="sizes">Sizes</h4>
                <Preview code={`<div class="flex gap-4">
    <button class="btn tooltip tooltip-xs" data-tooltip="Extra Small">Extra Small</button>
    <button class="btn tooltip tooltip-sm" data-tooltip="Small">Small</button>
    <button class="btn tooltip" data-tooltip="Default">Default</button>
    <button class="btn tooltip tooltip-lg" data-tooltip="Large">Large</button>
    <button class="btn tooltip tooltip-xl" data-tooltip="Extra Large">Extra Large</button>
    <button class="btn tooltip tooltip-2xl" data-tooltip="2XL">2XL</button>
</div>`}/>

                <h4 id="colours">Colours</h4>
                <Preview code={`<div class="flex gap-4">
    <button class="btn tooltip tooltip-primary" data-tooltip="Primary">Primary</button>
    <button class="btn tooltip tooltip-accent" data-tooltip="Accent">Accent</button>
    <button class="btn tooltip tooltip-success" data-tooltip="Success">Success</button>
    <button class="btn tooltip tooltip-warning" data-tooltip="Warning">Warning</button>
    <button class="btn tooltip tooltip-danger" data-tooltip="Danger">Danger</button>
</div>`}/>

                <h4 id="soft">Soft</h4>
                <Preview code={`<div class="flex gap-4">
    <button class="btn tooltip tooltip-soft" data-tooltip="Soft">Soft</button>
    <button class="btn tooltip tooltip-soft tooltip-primary" data-tooltip="Soft Primary">Soft Primary</button>
    <button class="btn tooltip tooltip-soft tooltip-accent" data-tooltip="Soft Accent">Soft Accent</button>
    <button class="btn tooltip tooltip-soft tooltip-success" data-tooltip="Soft Success">Soft Success</button>
    <button class="btn tooltip tooltip-soft tooltip-warning" data-tooltip="Soft Warning">Soft Warning</button>
    <button class="btn tooltip tooltip-soft tooltip-danger" data-tooltip="Soft Danger">Soft Danger</button>
</div>`}/>

                <PageFooterNav>
                    <PrevPageNav href="/docs/components/toast">Toast</PrevPageNav>
                    <NextPageNav href="/docs/utilities/float">Float</NextPageNav>
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
                            title: "Open",
                            href: "#open",
                        },
                    ]
                },
                {
                    title: "Positioning",
                    href: "#positioning",
                    nested: [
                        { title: "Top (default)", href: "#top" },
                        { title: "Top Leading", href: "#top-leading" },
                        { title: "Top Trailing", href: "#top-trailing" },
                        { title: "Bottom", href: "#bottom" },
                        { title: "Bottom Leading", href: "#bottom-leading" },
                        { title: "Bottom Trailing", href: "#bottom-trailing" },
                        { title: "Left", href: "#left" },
                        { title: "Left Start", href: "#left-start" },
                        { title: "Left End", href: "#left-end" },
                        { title: "Right", href: "#right" },
                        { title: "Right Start", href: "#right-start" },
                        { title: "Right End", href: "#right-end" },
                        { title: "Leading", href: "#leading" },
                        { title: "Leading Start", href: "#leading-start" },
                        { title: "Leading End", href: "#leading-end" },
                        { title: "Trailing", href: "#trailing" },
                        { title: "Trailing Start", href: "#trailing-start" },
                        { title: "Trailing End", href: "#trailing-end" },
                    ]
                },
                {
                    title: "Styles",
                    href: "#styles",
                    nested: [
                        { title: "Sizes", href: "#sizes" },
                        { title: "Colours", href: "#colours" },
                        { title: "Soft", href: "#soft" },
                    ]
                },
            ]}/>
        </>
    )
}

export default Tooltip; 