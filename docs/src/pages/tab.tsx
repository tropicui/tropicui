import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import Preview from "../components/Preview";
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";
import TableOfContent from "../components/TableOfContent";

function Tab() {
    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>COMPONENT</BreadcrumbItem>
                </Breadcrumb>

                <h2>Tab</h2>

                <h6>Display content in multiple panels with tab navigation.</h6>

                <h3 id="usage">Usage</h3>

                <h4 id="basic">Basic</h4>

                <Preview code={`<div class="tabs">
    <label class="tab btn">
        <input type="radio" name="tab1" checked>
        Tab 1
    </label>
    <div class="tab-content">
        <h4>Tab 1 Content</h4>
        <p>This is the content for the first tab. You can put any HTML content here including text, images, forms, and other components.</p>
    </div>
    <label class="tab btn">
        <input type="radio" name="tab1">
        Tab 2
    </label>
    <div class="tab-content">
        <h4>Tab 2 Content</h4>
        <p>This is the content for the second tab. Each tab can have completely different content and layout depending on your requirements.</p>
    </div>
    <label class="tab btn">
        <input type="radio" name="tab1">
        Tab 3
    </label>
    <div class="tab-content">
        <h4>Tab 3 Content</h4>
        <p>This is the content for the third tab. The tab system automatically handles showing and hiding content based on the selected tab.</p>
    </div>
</div>`}/>

                <h3 id="examples">Examples</h3>

                <h4 id="form">Form</h4>

                <Preview code={`<form class="form">
    <div class="tabs w-lg">
        <label class="tab btn btn-pill btn-clear">
            <input type="radio" name="steps" id="step-1" checked>
            Step 1
        </label>
        <div class="tab-content">
            <div class="card">
                <div class="card-body">
                    <h4>Step 1</h4>
                    <div class="form-field">
                        <label class="label">Your name</label>
                        <input type="text" class="input">
                    </div>
                    <div class="form-field">
                        <div class="flex">
                            <div class="grow"></div>
                            <label class="btn btn-clear" for="step-2">Next &gt;</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <label class="tab btn btn-pill btn-clear">
            <input type="radio" name="steps" id="step-2">
            Step 2
        </label>
        <div class="tab-content">
            <div class="card">
                <div class="card-body">
                    <h4>Step 2</h4>
                    <div class="form-field">
                        <label class="label">Subscription</label>
                        <select class="select">
                            <option>Please select</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                        </select>
                    </div>
                    <div class="form-field">
                        <div class="flex">
                            <label class="btn btn-clear" for="step-1">&lt; Back</label>
                            <div class="grow"></div>
                            <label class="btn btn-clear" for="step-3">Next &gt;</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <label class="tab btn btn-pill btn-clear">
            <input type="radio" name="steps" id="step-3">
            Step 3
        </label>
        <div class="tab-content">
            <div class="card">
                <div class="card-body">
                    <h4>Step 3</h4>
                    <div class="form-field">
                        <label class="label">Receive marketing messages?</label>
                        <label>
                            <input type="radio" name="marketing" class="radio radio-accent"> Yes
                        </label>
                        <label>
                            <input type="radio" name="marketing" class="radio radio-accent"> No
                        </label>
                    </div>
                    <div class="form-field">
                        <div class="flex">
                            <label class="btn btn-clear" for="step-2">&lt; Back</label>
                            <div class="grow"></div>
                            <label class="btn btn-clear" for="step-1">Reset</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>`}/>

                <h4 id="sink">Sink</h4>

                <Preview code={`<div class="tabs sink">
    <label class="tab btn">
        <input type="radio" name="tab1" checked>
        Express
    </label>
    <div class="tab-content">
        <div class="card">
            <div class="card-body">
                <p>We offer several courier services offer express shipping, which is a faster and usually more expensive delivery option compared to standard shipping.</p>
            </div>
        </div>
    </div>
    <label class="tab btn">
        <input type="radio" name="tab1">
        Transit
    </label>
    <div class="tab-content">
        <div class="card">
            <div class="card-body">
                <p>Transit service is a cost-effective method, particularly for large volumes of cargo and long distances that don't require express arrival.</p>
            </div>
        </div>
    </div>
    <label class="tab btn">
        <input type="radio" name="tab1">
        Next Day Delivery
    </label>
    <div class="tab-content">
        <div class="card">
            <div class="card-body">
                <p>We ensure your a package is delivered to its destination within one business day of being shipped from 332 of our drop-off location mail boxes.</p>
            </div>
        </div>
    </div>
</div>`}/>

                <PageFooterNav>
                    <PrevPageNav href="/docs/components/switch">Switch</PrevPageNav>
                    <NextPageNav href="/docs/components/table">Table</NextPageNav>
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
                    ]
                },
                {
                    title: "Examples",
                    href: "#examples",
                    nested: [
                        {
                            title: "Form",
                            href: "#form",
                        },
                        {
                            title: "Sink",
                            href: "#sink",
                        },
                    ]
                },
            ]}/>
        </>
    )
}

export default Tab;