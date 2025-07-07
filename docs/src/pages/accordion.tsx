import { Link } from "react-router";
import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import Preview from "../components/Preview";
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";
import TableOfContent from "../components/TableOfContent";

function Accordion() {
    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>COMPONENT</BreadcrumbItem>
                </Breadcrumb>

                <h2>Accordion</h2>

                <h6>Reveals and hides content with a sliding animation.</h6>

                <h3 id="usage">Usage</h3>

                <h4 id="basic">Basic</h4>

                <Preview code={`<details class="accordion">
    <summary>What is a UI library?</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>`}/>

                <h4 id="multiples">Multiples</h4>

                <p>The <code className="tag">name</code> attribute can be used to group accordions.</p>

                <div className="alert alert-outline mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                    <span>A <Link to="/docs/components/divider" className="btn btn-link btn-accent">divider</Link> component can be added in between the accordions.</span>
                </div>

                <Preview code={`<details name="acd01" class="accordion">
    <summary>What is a UI library?</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>
<div class="divider"></div>
<details name="acd01" class="accordion">
    <summary>Where can I download the TropicUI library?</summary>
    <div>You may visit <a href="tropicui.com" class="btn btn-link btn-accent">tropicui.com</a> and follow the installation instructions outlined in the documentation.</div>
</details>
<div class="divider"></div>
<details name="acd01" class="accordion">
    <summary>How to use a UI library?</summary>
    <div>Simply <span class="tag"><code>@import</code></span> the UI library to your main css file after <code>tailwindcss</code> and execute the following command in your working terminal:</div>
    <div><span class="tag"><code>$ npm run dev</code></span></div>
</details>`}/>

                <h4 id="icon">Icon</h4>

                <Preview code={`<details class="accordion">
    <summary>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
        </svg>
        <span>What is a UI library?</span>
    </summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>`}/>

                <h3 id="styles">Styles</h3>

                <h4 id="shadow">Shadow</h4>

                <p>The <code className="tag">accordion-shadow</code> class can be added to any accordion variant for a raised effect.</p>

                <div className="alert alert-outline mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                    <span>The <code className="tag">accordion-gutter</code> class is added to the accordions for spacing in between.</span>
                </div>

                <Preview code={`<details name="acd02" class="accordion accordion-gutter accordion-shadow">
    <summary>What is a UI library?</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>
<details name="acd02" class="accordion accordion-gutter accordion-shadow">
    <summary>Where can I download the TropicUI library?</summary>
    <div>You may visit <a href="tropicui.com" class="btn btn-link btn-accent">tropicui.com</a> and follow the installation instructions outlined in the documentation.</div>
</details>
<details name="acd02" class="accordion accordion-shadow">
    <summary>How to use a UI library?</summary>
    <div>Simply <span class="tag"><code>@import</code></span> the UI library to your main css file after <code>tailwindcss</code> and execute the following command in your working terminal:</div>
    <div><span class="tag"><code>$ npm run dev</code></span></div>
</details>`}/>

                <h4 id="colours">Colours</h4>

                <Preview code={`<details class="accordion accordion-gutter accordion-primary">
    <summary>Primary Accordion</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>
<details class="accordion accordion-gutter accordion-accent">
    <summary>Accent Accordion</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>
<details class="accordion accordion-gutter accordion-success">
    <summary>Success Accordion</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>
<details class="accordion accordion-gutter accordion-warning">
    <summary>Warning Accordion</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>
<details class="accordion accordion-gutter accordion-danger">
    <summary>Danger Accordion</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>`}/>

                <h4 id="soft">Soft</h4>

                <Preview code={`<details class="accordion accordion-gutter accordion-soft">
    <summary>Soft Accordion</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>
<details class="accordion accordion-gutter accordion-soft accordion-primary">
    <summary>Soft Primary Accordion</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>
<details class="accordion accordion-gutter accordion-soft accordion-accent">
    <summary>Soft Accent Accordion</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>
<details class="accordion accordion-gutter accordion-soft accordion-success">
    <summary>Soft Success Accordion</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>
<details class="accordion accordion-gutter accordion-soft accordion-warning">
    <summary>Soft Warning Accordion</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>
<details class="accordion accordion-gutter accordion-soft accordion-danger">
    <summary>Soft Danger Accordion</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>`}/>

                <h4 id="outline">Outline</h4>

                <Preview code={`<details class="accordion accordion-gutter accordion-outline">
    <summary>Outline Accordion</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>
<details class="accordion accordion-gutter accordion-outline accordion-primary">
    <summary>Outline Primary Accordion</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>
<details class="accordion accordion-gutter accordion-outline accordion-accent">
    <summary>Outline Accent Accordion</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>
<details class="accordion accordion-gutter accordion-outline accordion-success">
    <summary>Outline Success Accordion</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>
<details class="accordion accordion-gutter accordion-outline accordion-warning">
    <summary>Outline Warning Accordion</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>
<details class="accordion accordion-gutter accordion-outline accordion-danger">
    <summary>Outline Danger Accordion</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>`}/>

                <h4 id="outline-bold">Outline Bold</h4>

                <Preview code={`<details class="accordion accordion-gutter accordion-outline-bold">
    <summary>Outline Bold Accordion</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>
<details class="accordion accordion-gutter accordion-outline-bold accordion-primary">
    <summary>Outline Bold Primary Accordion</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>
<details class="accordion accordion-gutter accordion-outline-bold accordion-accent">
    <summary>Outline Bold Accent Accordion</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>
<details class="accordion accordion-gutter accordion-outline-bold accordion-success">
    <summary>Outline Bold Success Accordion</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>
<details class="accordion accordion-gutter accordion-outline-bold accordion-warning">
    <summary>Outline Bold Warning Accordion</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>
<details class="accordion accordion-gutter accordion-outline-bold accordion-danger">
    <summary>Outline Bold Danger Accordion</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>`}/>

                <h4 id="header">Header</h4>

                <Preview code={`<details name="acd03" class="accordion accordion-gutter accordion-header accordion-primary">
    <summary>Primary Header Accordion</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>
<details name="acd03" class="accordion accordion-gutter accordion-header accordion-soft accordion-primary">
    <summary>Soft Primary Header Accordion</summary>
    <div>You may visit <a href="tropicui.com" class="btn btn-link btn-accent">tropicui.com</a> and follow the installation instructions outlined in the documentation.</div>
</details>
<details name="acd03" class="accordion accordion-gutter accordion-header accordion-soft accordion-outline accordion-primary">
    <summary>Outline Soft Primary Header Accordion</summary>
    <div>Simply <span class="tag"><code>@import</code></span> the UI library to your main css file after <code>tailwindcss</code> and execute the following command in your working terminal:</div>
    <div><span class="tag"><code>$ npm run dev</code></span></div>
</details>`}/>

                <h3 id="variants">Variants</h3>

                <h4 id="open">Open By Default</h4>

                <Preview code={`<details name="acd04" class="accordion accordion-gutter accordion-outline" open>
    <summary>What is a UI library?</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>
<details name="acd04" class="accordion accordion-gutter accordion-outline">
    <summary>Where can I download the TropicUI library?</summary>
    <div>You may visit <a href="tropicui.com" class="btn btn-link btn-accent">tropicui.com</a> and follow the installation instructions outlined in the documentation.</div>
</details>
<details name="acd04" class="accordion accordion-outline">
    <summary>How to use a UI library?</summary>
    <div>Simply <span class="tag"><code>@import</code></span> the UI library to your main css file after <code>tailwindcss</code> and execute the following command in your working terminal:</div>
    <div><span class="tag"><code>$ npm run dev</code></span></div>
</details>`}/>

                <h4 id="open-style">Open Style</h4>

                <Preview code={`<details name="acd05" class="accordion accordion-gutter accordion-open:shadow accordion-shadow">
    <summary>Open Shadow</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>
<details name="acd05" class="accordion accordion-gutter accordion-open:bg accordion-open:fg accordion-primary">
    <summary>Open Primary</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>
<details name="acd05" class="accordion accordion-gutter accordion-open:bg accordion-open:fg accordion-header accordion-primary">
    <summary>Open Primary Header</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>
<details name="acd05" class="accordion accordion-gutter accordion-soft accordion-open:bg accordion-open:fg accordion-primary">
    <summary>Open Soft Primary</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>
<details name="acd05" class="accordion accordion-gutter accordion-soft accordion-open:bg accordion-open:fg accordion-header accordion-primary">
    <summary>Open Soft Primary Header</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>
<details name="acd05" class="accordion accordion-gutter accordion-outline accordion-open:outline">
    <summary>Open Outline</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>`}/>

                <h4 id="nested">Nested</h4>

                <Preview code={`<details class="accordion accordion-gutter accordion-outline" open>
    <summary>What is a UI library?</summary>
    <p class="mb-2">A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</p>
    <details class="accordion accordion-gutter accordion-outline">
        <summary>Where can I download the TropicUI library?</summary>
        <p class="mb-2">You may visit <a href="tropicui.com" class="btn btn-link btn-accent">tropicui.com</a> and follow the installation instructions outlined in the documentation.</p>
        <details class="accordion accordion-outline">
            <summary>How to use a UI library?</summary>
            <div>Simply <span class="tag"><code>@import</code></span> the UI library to your main css file after <code>tailwindcss</code> and execute the following command in your working terminal:</div>
            <div><span class="tag"><code>$ npm run dev</code></span></div>
        </details>
    </details>
</details>`}/>

                <h4 id="arrow">Dropdown Arrow</h4>

                <h6>Left Arrow</h6>

                <Preview code={`<details name="acd06" class="accordion accordion-arrow-left">
    <summary>What is a UI library?</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>
<div class="divider"></div>
<details name="acd06" class="accordion accordion-arrow-left">
    <summary>Where can I download the TropicUI library?</summary>
    <div>You may visit <a href="tropicui.com" class="btn btn-link btn-accent">tropicui.com</a> and follow the installation instructions outlined in the documentation.</div>
</details>
<div class="divider"></div>
<details name="acd06" class="accordion accordion-arrow-left">
    <summary>How to use a UI library?</summary>
    <div>Simply <span class="tag"><code>@import</code></span> the UI library to your main css file after <code>tailwindcss</code> and execute the following command in your working terminal:</div>
    <div><span class="tag"><code>$ npm run dev</code></span></div>
</details>`}/>

                <h6>Right Arrow</h6>

                <Preview code={`<details name="acd07" class="accordion accordion-arrow-right">
    <summary>What is a UI library?</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>
<div class="divider"></div>
<details name="acd07" class="accordion accordion-arrow-right">
    <summary>Where can I download the TropicUI library?</summary>
    <div>You may visit <a href="tropicui.com" class="btn btn-link btn-accent">tropicui.com</a> and follow the installation instructions outlined in the documentation.</div>
</details>
<div class="divider"></div>
<details name="acd07" class="accordion accordion-arrow-right">
    <summary>How to use a UI library?</summary>
    <div>Simply <span class="tag"><code>@import</code></span> the UI library to your main css file after <code>tailwindcss</code> and execute the following command in your working terminal:</div>
    <div><span class="tag"><code>$ npm run dev</code></span></div>
</details>`}/>

                <h6>Leading Arrow</h6>

                <p>Leading arrow placement follows the text direction of the document.</p>

                <Preview code={`<details name="acd08" class="accordion accordion-arrow-start">
    <summary>What is a UI library?</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>
<div class="divider"></div>
<details name="acd08" class="accordion accordion-arrow-start">
    <summary>Where can I download the TropicUI library?</summary>
    <div>You may visit <a href="tropicui.com" class="btn btn-link btn-accent">tropicui.com</a> and follow the installation instructions outlined in the documentation.</div>
</details>
<div class="divider"></div>
<details name="acd08" class="accordion accordion-arrow-start">
    <summary>How to use a UI library?</summary>
    <div>Simply <span class="tag"><code>@import</code></span> the UI library to your main css file after <code>tailwindcss</code> and execute the following command in your working terminal:</div>
    <div><span class="tag"><code>$ npm run dev</code></span></div>
</details>`}/>

                <h6>Trailing Arrow</h6>

                <p>Trailing arrow placement follows the text direction of the document.</p>

                <Preview code={`<details name="acd09" class="accordion accordion-arrow-end">
    <summary>What is a UI library?</summary>
    <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
</details>
<div class="divider"></div>
<details name="acd09" class="accordion accordion-arrow-end">
    <summary>Where can I download the TropicUI library?</summary>
    <div>You may visit <a href="tropicui.com" class="btn btn-link btn-accent">tropicui.com</a> and follow the installation instructions outlined in the documentation.</div>
</details>
<div class="divider"></div>
<details name="acd09" class="accordion accordion-arrow-end">
    <summary>How to use a UI library?</summary>
    <div>Simply <span class="tag"><code>@import</code></span> the UI library to your main css file after <code>tailwindcss</code> and execute the following command in your working terminal:</div>
    <div><span class="tag"><code>$ npm run dev</code></span></div>
</details>`}/>

                <h4 id="join">Join</h4>

                <Preview code={`<div class="join join-col w-full">
    <details name="acd10" class="accordion accordion-outline">
        <summary>What is a UI library?</summary>
        <div>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</div>
    </details>
    <details name="acd10" class="accordion accordion-outline">
        <summary>Where can I download the TropicUI library?</summary>
        <div>You may visit <a href="tropicui.com" class="btn btn-link btn-accent">tropicui.com</a> and follow the installation instructions outlined in the documentation.</div>
    </details>
    <details name="acd10" class="accordion accordion-outline">
        <summary>How to use a UI library?</summary>
        <div>Simply <span class="tag"><code>@import</code></span> the UI library to your main css file after <code>tailwindcss</code> and execute the following command in your working terminal:</div>
        <div><span class="tag"><code>$ npm run dev</code></span></div>
    </details>
</div>`}/>

                <PageFooterNav>
                    <PrevPageNav href="/content/typography">Typography</PrevPageNav>
                    <NextPageNav href="/components/alert">Alert</NextPageNav>
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
                            title: "Multiples",
                            href: "#multiples",
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
                            title: "Shadow",
                            href: "#shadow",
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
                            title: "Header",
                            href: "#header",
                        },
                    ]
                },
                {
                    title: "Variants",
                    href: "#variants",
                    nested: [
                        {
                            title: "Open By Default",
                            href: "#open",
                        },
                        {
                            title: "Open Style",
                            href: "#open-style",
                        },
                        {
                            title: "Nested",
                            href: "#nested",
                        },
                        {
                            title: "Dropdown Arrow",
                            href: "#arrow",
                        },
                        {
                            title: "Join",
                            href: "#join",
                        },
                    ]
                },
            ]}/>
        </>
    );
};

export default Accordion;