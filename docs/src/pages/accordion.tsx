import Breadcrumb from "../components/Breadcrumb";
import TableOfContent from "../components/TableOfContent";
import Preview from "../components/Preview";

function Accordion() {
    return (
        <div className="grid grid-cols-[1fr_auto] gap-4 min-h-dvh">
            <div className="col-start-1 row-start-1 pt-8">
                <div className="mb-4">
                    <Breadcrumb>COMPONENT</Breadcrumb>
                </div>

                <div className="mb-6">
                    <h2>Accordion</h2>
                </div>

                <div className="mb-8">
                    <h6>The <strong>Accordion</strong> component reveals and hides content with a sliding animation.</h6>
                </div>

                <div className="mb-6">
                    <h3 id="usage">Usage</h3>
                </div>

                <div className="mb-4">
                    <h4 id="basic">Basic</h4>
                </div>

                <Preview code={`<details class="accordion">
    <summary>What is a UI library?</summary>
    <p>A UI library is a collection ...</p>
</details>`}>
                    <details className="accordion">
                        <summary>What is a UI library?</summary>
                        <p>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</p>
                    </details>
                </Preview>

                <div className="mb-4">
                    <h4 id="multiples">Multiples</h4>
                </div>
                <div className="alert alert-outline mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                    <p>A <a href="" className="btn btn-link btn-accent">divider</a> component can be added in between the accordions.</p>
                </div>

                <Preview code={`<details name="acd01" class="accordion">
    <summary>What is a UI library?</summary>
    <p>A UI library is a collection ...</p>
</details>
<div class="divider"></div>
<details name="acd01" class="accordion">
    <summary>Where can I download the TropicUI library?</summary>
    <p>You may visit <a href="tropicui.com" class="btn btn-link btn-accent">tropicui.com</a> and follow the installation instructions outlined in the documentation.</p>
</details>
<div class="divider"></div>
<details name="acd01" class="accordion">
    <summary>How to use a UI library?</summary>
    <p>Simply <span class="tag"><code>@import</code></span> the ...</p>
</details>`}>
                    <details name="acd01" className="accordion">
                        <summary>What is a UI library?</summary>
                        <p>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</p>
                    </details>
                    <div className="divider"></div>
                    <details name="acd01" className="accordion">
                        <summary>Where can I download the TropicUI library?</summary>
                        <p>You may visit <a href="tropicui.com" className="btn btn-link btn-accent">tropicui.com</a> and follow the installation instructions outlined in the documentation.</p>
                    </details>
                    <div className="divider"></div>
                    <details name="acd01" className="accordion">
                        <summary>How to use a UI library?</summary>
                        <p>Simply <span className="tag"><code>@import</code></span> the UI library to your main css file after <code>tailwindcss</code> and execute the following command in your working terminal:</p>
                        <p><span className="tag"><code>$ npm run dev</code></span></p>
                    </details>
                </Preview>

                <div className="mb-4">
                    <h4 id="outline">Outline</h4>
                </div>
                <div className="alert alert-outline mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                    <p>The <span className="tag"><pre>accordion-gutter</pre></span> class is added to the accordions for spacing in between.</p>
                </div>

                <Preview code={`<details name="acd02" class="accordion accordion-gutter accordion-outline">
    <summary>What is a UI library?</summary>
    <p>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</p>
</details>
<details name="acd02" class="accordion accordion-gutter accordion-outline">
    <summary>Where can I download the TropicUI library?</summary>
    <p>You may visit <a href="tropicui.com" class="btn btn-link btn-accent">tropicui.com</a> and follow the installation instructions outlined in the documentation.</p>
</details>
<details name="acd02" class="accordion accordion-outline">
    <summary>How to use a UI library?</summary>
    <p>Simply <span class="tag"><code>@import</code></span> the UI library to your main css file after <code>tailwindcss</code> and execute the following command in your working terminal:</p>
    <p><span class="tag"><code>$ npm run dev</code></span></p>
</details>`}>
                    <details name="acd02" className="accordion accordion-gutter accordion-outline">
                        <summary>What is a UI library?</summary>
                        <p>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</p>
                    </details>
                    <details name="acd02" className="accordion accordion-gutter accordion-outline">
                        <summary>Where can I download the TropicUI library?</summary>
                        <p>You may visit <a href="tropicui.com" className="btn btn-link btn-accent">tropicui.com</a> and follow the installation instructions outlined in the documentation.</p>
                    </details>
                    <details name="acd02" className="accordion accordion-outline">
                        <summary>How to use a UI library?</summary>
                        <p>Simply <span className="tag"><code>@import</code></span> the UI library to your main css file after <code>tailwindcss</code> and execute the following command in your working terminal:</p>
                        <p><span className="tag"><code>$ npm run dev</code></span></p>
                    </details>
                </Preview>

                <div className="mb-4">
                    <h4 id="open">Open By Default</h4>
                </div>

                <Preview code={`<details name="acd03" class="accordion accordion-gutter accordion-outline" open>
    <summary>What is a UI library?</summary>
    <p>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</p>
</details>
<details name="acd03" class="accordion accordion-gutter accordion-outline">
    <summary>Where can I download the TropicUI library?</summary>
    <p>You may visit <a href="tropicui.com" class="btn btn-link btn-accent">tropicui.com</a> and follow the installation instructions outlined in the documentation.</p>
</details>
<details name="acd03" class="accordion accordion-outline">
    <summary>How to use a UI library?</summary>
    <p>Simply <span class="tag"><code>@import</code></span> the UI library to your main css file after <code>tailwindcss</code> and execute the following command in your working terminal:</p>
    <p><span class="tag"><code>$ npm run dev</code></span></p>
</details>`}>
                    <details name="acd03" className="accordion accordion-gutter accordion-outline" open>
                        <summary>What is a UI library?</summary>
                        <p>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</p>
                    </details>
                    <details name="acd03" className="accordion accordion-gutter accordion-outline">
                        <summary>Where can I download the TropicUI library?</summary>
                        <p>You may visit <a href="tropicui.com" className="btn btn-link btn-accent">tropicui.com</a> and follow the installation instructions outlined in the documentation.</p>
                    </details>
                    <details name="acd03" className="accordion accordion-gutter accordion-outline">
                        <summary>How to use a UI library?</summary>
                        <p>Simply <span className="tag"><code>@import</code></span> the UI library to your main css file after <code>tailwindcss</code> and execute the following command in your working terminal:</p>
                        <p><span className="tag"><code>$ npm run dev</code></span></p>
                    </details>
                </Preview>

                <div className="mb-4">
                    <h4 id="nested">Nested</h4>
                </div>

                <Preview code={`<details class="accordion accordion-gutter accordion-outline">
    <summary>What is a UI library?</summary>
    <p class="mb-2">A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</p>
    <details name="acdn04" class="accordion accordion-gutter accordion-outline">
        <summary>Where can I download the TropicUI library?</summary>
        <p>You may visit <a href="tropicui.com" class="btn btn-link btn-accent">tropicui.com</a> and follow the installation instructions outlined in the documentation.</p>
    </details>
    <details name="acdn04" class="accordion accordion-outline">
        <summary>How to use a UI library?</summary>
        <p>Simply <span class="tag"><code>@import</code></span> the UI library to your main css file after <code>tailwindcss</code> and execute the following command in your working terminal:</p>
        <p><span class="tag"><code>$ npm run dev</code></span></p>
    </details>
</details>`}>
                    <details className="accordion accordion-gutter accordion-outline">
                        <summary>What is a UI library?</summary>
                        <p className="mb-2">A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</p>
                        <details name="acdn04" className="accordion accordion-gutter accordion-outline">
                            <summary>Where can I download the TropicUI library?</summary>
                            <p>You may visit <a href="tropicui.com" className="btn btn-link btn-accent">tropicui.com</a> and follow the installation instructions outlined in the documentation.</p>
                        </details>
                        <details name="acdn04" className="accordion accordion-outline">
                            <summary>How to use a UI library?</summary>
                            <p>Simply <span className="tag"><code>@import</code></span> the UI library to your main css file after <code>tailwindcss</code> and execute the following command in your working terminal:</p>
                            <p><span className="tag"><code>$ npm run dev</code></span></p>
                        </details>
                    </details>
                </Preview>

                <div className="mb-4">
                    <h4 id="icon">With Icon</h4>
                </div>

                <Preview code={`<details class="accordion accordion-outline">
    <summary>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
        </svg>
        <span>What is a UI library?</span>
    </summary>
    <p>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</p>
</details>`}>
                    <details className="accordion accordion-outline">
                        <summary>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
                            </svg>
                            <span>What is a UI library?</span>
                        </summary>
                        <p>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</p>
                    </details>
                </Preview>

                <div className="mb-6">
                    <h3 id="colours">Colours</h3>
                </div>

                <Preview code={`<details class="accordion accordion-gutter accordion-primary">
    <summary>Primary Accordion</summary>
    <p>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</p>
</details>
<details class="accordion accordion-gutter accordion-accent">
    <summary>Accent Accordion</summary>
    <p>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</p>
</details>
<details class="accordion accordion-gutter accordion-success">
    <summary>Success Accordion</summary>
    <p>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</p>
</details>
<details class="accordion accordion-gutter accordion-warning">
    <summary>Warning Accordion</summary>
    <p>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</p>
</details>
<details class="accordion accordion-gutter accordion-danger">
    <summary>Danger Accordion</summary>
    <p>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</p>
</details>`}>
                    <details className="accordion accordion-gutter accordion-primary">
                        <summary>Primary Accordion</summary>
                        <p>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</p>
                    </details>
                    <details className="accordion accordion-gutter accordion-accent">
                        <summary>Accent Accordion</summary>
                        <p>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</p>
                    </details>
                    <details className="accordion accordion-gutter accordion-success">
                        <summary>Success Accordion</summary>
                        <p>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</p>
                    </details>
                    <details className="accordion accordion-gutter accordion-warning">
                        <summary>Warning Accordion</summary>
                        <p>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</p>
                    </details>
                    <details className="accordion accordion-gutter accordion-danger">
                        <summary>Danger Accordion</summary>
                        <p>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</p>
                    </details>
                </Preview>

                <div className="mb-6">
                    <h3 id="variants">Variants</h3>
                </div>

                <div className="mb-4">
                    <h4 id="shadow">Shadow</h4>
                </div>

                <Preview code={`<details class="accordion accordion-shadow">
    <summary>What is a UI library?</summary>
    <p>A UI library is a collection ...</p>
</details>`}>
                    <details className="accordion accordion-shadow">
                        <summary>What is a UI library?</summary>
                        <p>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</p>
                    </details>
                </Preview>

                <div className="mb-4">
                    <h4 id="outline-bold">Outline Bold</h4>
                </div>

                <Preview code={`<details class="accordion accordion-outline-bold">
    <summary>What is a UI library?</summary>
    <p>A UI library is a collection ...</p>
</details>
<details class="accordion accordion-outline-bold">
    <summary>What is a UI library?</summary>
    <p>A UI library is a collection ...</p>
</details>`}>
                    <details name="acd02" className="accordion accordion-gutter accordion-outline-bold">
                        <summary>What is a UI library?</summary>
                        <p>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</p>
                    </details>
                    <details name="acd02" className="accordion accordion-outline-bold">
                        <summary>What is a UI library?</summary>
                        <p>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</p>
                    </details>
                </Preview>
            </div>
            <div className="col-start-2 row-start-1">
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
                                title: "Outline",
                                href: "#outline",
                            },
                            {
                                title: "Open By Default",
                                href: "#open",
                            },
                            {
                                title: "Nested",
                                href: "#nested",
                            },
                            {
                                title: "With Icon",
                                href: "#icon",
                            },
                        ]
                    },
                    {
                        title: "Colours",
                        href: "#colours",
                    },
                    {
                        title: "Variants",
                        href: "#variants",
                        nested: [
                            {
                                title: "Shadow",
                                href: "#shadow",
                            },
                            {
                                title: "Outline with Shadow",
                                href: "#outline-shadow",
                            },
                            {
                                title: "Group",
                                href: "#group",
                            },
                            {
                                title: "With Dropdown Arrow",
                                href: "#arrow",
                            },
                        ]
                    }
                ]}/>
            </div>
        </div>
    );
};

export default Accordion;