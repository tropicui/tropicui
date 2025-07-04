import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import Preview from "../components/Preview";
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";
import TableOfContent from "../components/TableOfContent";

function Float() {
    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>UTILITY</BreadcrumbItem>
                </Breadcrumb>

                <h2>Float</h2>

                <h6>A flexible floating utility for fixed-position elements, with placement, shadow, and dismiss options.</h6>

                <h3 id="usage">Usage</h3>

                <h4 id="basic">Basic</h4>
                <Preview code={`<div class="float-group float-bottom-end">
    <div class="float">
        <button class="btn btn-icon btn-round">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </button>
    </div>
</div>`}/>

                <h4 id="close">Dismiss / Close Button</h4>

                <p>The <code className="tag">float</code> utility supports a close button using an <code className="tag">input[type=radio]</code> with the <code className="tag">float-close</code> class. When checked, the float is hidden.</p>

                <Preview code={`<div class="float-group float-bottom-end">
    <div class="float">
        <button class="btn btn-icon btn-round">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
            </svg>
        </button>
        <input type="radio" class="float-close btn btn-clear btn-icon btn-round">
    </div>
</div>`}/>

                <h3 id="placement">Placement</h3>

                <h4 id="top">Top</h4>
                <Preview code={`<div class="float-group float-top">
    <div class="float">
        <button class="btn btn-icon btn-round">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </button>
    </div>
</div>`}/>

                <h4 id="top-left">Top Left</h4>
                <Preview code={`<div class="float-group float-top-left">
    <div class="float">
        <button class="btn btn-icon btn-round">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </button>
    </div>
</div>`}/>

                <h4 id="top-right">Top Right</h4>
                <Preview code={`<div class="float-group float-top-right">
    <div class="float">
        <button class="btn btn-icon btn-round">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </button>
    </div>
</div>`}/>

                <h4 id="top-leading">Top Leading</h4>
                <Preview code={`<div class="float-group float-top-start">
    <div class="float">
        <button class="btn btn-icon btn-round">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </button>
    </div>
</div>`}/>

                <h4 id="top-trailing">Top Trailing</h4>
                <Preview code={`<div class="float-group float-top-end">
    <div class="float">
        <button class="btn btn-icon btn-round">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </button>
    </div>
</div>`}/>

                <h4 id="bottom">Bottom</h4>
                <Preview code={`<div class="float-group float-bottom">
    <div class="float">
        <button class="btn btn-icon btn-round">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </button>
    </div>
</div>`}/>

                <h4 id="bottom-left">Bottom Left</h4>
                <Preview code={`<div class="float-group float-bottom-left">
    <div class="float">
        <button class="btn btn-icon btn-round">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </button>
    </div>
</div>`}/>

                <h4 id="bottom-right">Bottom Right</h4>
                <Preview code={`<div class="float-group float-bottom-right">
    <div class="float">
        <button class="btn btn-icon btn-round">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </button>
    </div>
</div>`}/>

                <h4 id="bottom-leading">Bottom Leading</h4>
                <Preview code={`<div class="float-group float-bottom-start">
    <div class="float">
        <button class="btn btn-icon btn-round">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </button>
    </div>
</div>`}/>

                <h4 id="bottom-trailing">Bottom Trailing</h4>
                <Preview code={`<div class="float-group float-bottom-end">
    <div class="float">
        <button class="btn btn-icon btn-round">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </button>
    </div>
</div>`}/>

                <h3 id="styles">Styles</h3>

                <h4 id="shadow">Shadow</h4>
                <Preview code={`<div class="float-group float-top">
    <div class="float float-shadow">
        <button class="btn btn-icon btn-round">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </button>
    </div>
</div>`}/>

                <PageFooterNav>
                    <PrevPageNav href="/components/toast">Toast</PrevPageNav>
                    <NextPageNav href="/components/join">Join</NextPageNav>
                </PageFooterNav>
            </div>
            <TableOfContent items={[
                {
                    title: "Usage",
                    href: "#usage",
                    nested: [
                        { title: "Basic", href: "#basic" },
                        {
                            title: "Dismiss / Close Button",
                            href: "#close",
                        },
                    ]
                },
                {
                    title: "Placement",
                    href: "#placement",
                    nested: [
                        { title: "Top", href: "#top" },
                        { title: "Top Left", href: "#top-left" },
                        { title: "Top Right", href: "#top-right" },
                        { title: "Top Leading", href: "#top-leading" },
                        { title: "Top Trailing", href: "#top-trailing" },
                        { title: "Bottom", href: "#bottom" },
                        { title: "Bottom Left", href: "#bottom-left" },
                        { title: "Bottom Right", href: "#bottom-right" },
                        { title: "Bottom Leading", href: "#bottom-leading" },
                        { title: "Bottom Trailing", href: "#bottom-trailing" },
                    ]
                },
                {
                    title: "Styles",
                    href: "#styles",
                    nested: [
                        { title: "Shadow", href: "#shadow" },
                    ]
                },
            ]}/>
        </>
    )
}

export default Float; 