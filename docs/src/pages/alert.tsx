import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import TableOfContent from "../components/TableOfContent";
import Preview from "../components/Preview";
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";

function Alert() {
    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>COMPONENT</BreadcrumbItem>
                </Breadcrumb>

                <h2>Alert</h2>

                <h6>Displays important messages and notifications to users with various styling options.</h6>

                <h3 id="usage">Usage</h3>

                <h4 id="basic">Basic</h4>

                <Preview code={`<div class="alert">
    <span>Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>`}>
                    <div className="alert">
                        <span>Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                </Preview>

                <h4 id="icon">Icon</h4>

                <Preview code={`<div class="alert">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
    <span>Your account has been restored! You can now continue to <a class="btn btn-link btn-accent">your account</a>.</span>
</div>`}>
                    <div className="alert">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                        </svg>
                        <span>Your account has been restored! You can now continue to <a className="btn btn-link btn-accent">your account</a>.</span>
                    </div>
                </Preview>

                <h3 id="styles">Styles</h3>

                <h4 id="colours">Colours</h4>

                <Preview code={`<div class="alert alert-primary">
    <span>Primary: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-accent">
    <span>Accent: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-success">
    <span>Success: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-warning">
    <span>Warning: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-danger">
    <span>Danger: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>`}>
                    <div className="alert alert-primary">
                        <span>Primary: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-accent">
                        <span>Accent: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-success">
                        <span>Success: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-warning">
                        <span>Warning: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-danger">
                        <span>Danger: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                </Preview>

                <h4 id="soft">Soft</h4>

                <Preview code={`<div class="alert alert-soft">
    <span>Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-soft alert-primary">
    <span>Primary: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-soft alert-accent">
    <span>Accent: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-soft alert-success">
    <span>Success: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-soft alert-warning">
    <span>Warning: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-soft alert-danger">
    <span>Danger: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>`}>
                    <div className="alert alert-soft">
                        <span>Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-soft alert-primary">
                        <span>Primary: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-soft alert-accent">
                        <span>Accent: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-soft alert-success">
                        <span>Success: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-soft alert-warning">
                        <span>Warning: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-soft alert-danger">
                        <span>Danger: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                </Preview>

                <h4 id="outline">Outline</h4>

                <Preview code={`<div class="alert alert-outline">
    <span>Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-outline alert-primary">
    <span>Primary: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-outline alert-accent">
    <span>Accent: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-outline alert-success">
    <span>Success: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-outline alert-warning">
    <span>Warning: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-outline alert-danger">
    <span>Danger: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>`}>
                    <div className="alert alert-outline">
                        <span>Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-outline alert-primary">
                        <span>Primary: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-outline alert-accent">
                        <span>Accent: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-outline alert-success">
                        <span>Success: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-outline alert-warning">
                        <span>Warning: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-outline alert-danger">
                        <span>Danger: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                </Preview>

                <h4 id="outline-bold">Outline Bold</h4>

                <Preview code={`<div class="alert alert-outline-bold">
    <span>Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-outline-bold alert-primary">
    <span>Primary: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-outline-bold alert-accent">
    <span>Accent: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-outline-bold alert-success">
    <span>Success: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-outline-bold alert-warning">
    <span>Warning: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-outline-bold alert-danger">
    <span>Danger: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>`}>
                    <div className="alert alert-outline-bold">
                        <span>Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-outline-bold alert-primary">
                        <span>Primary: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-outline-bold alert-accent">
                        <span>Accent: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-outline-bold alert-success">
                        <span>Success: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-outline-bold alert-warning">
                        <span>Warning: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-outline-bold alert-danger">
                        <span>Danger: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                </Preview>

                <h4 id="dashed">Dashed</h4>

                <Preview code={`<div class="alert alert-dashed alert-primary">
    <span>Primary: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-dashed alert-accent">
    <span>Accent: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-dashed alert-success">
    <span>Success: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-dashed alert-warning">
    <span>Warning: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-dashed alert-danger">
    <span>Danger: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>`}>
                    <div className="alert alert-dashed">
                        <span>Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-dashed alert-primary">
                        <span>Primary: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-dashed alert-accent">
                        <span>Accent: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-dashed alert-success">
                        <span>Success: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-dashed alert-warning">
                        <span>Warning: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-dashed alert-danger">
                        <span>Danger: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                </Preview>

                <h4 id="dashed-bold">Dashed Bold</h4>

                <Preview code={`<div class="alert alert-dashed-bold">
    <span>Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-dashed-bold alert-primary">
    <span>Primary: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-dashed-bold alert-accent">
    <span>Accent: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-dashed-bold alert-success">
    <span>Success: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-dashed-bold alert-warning">
    <span>Warning: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-dashed-bold alert-danger">
    <span>Danger: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>`}>
                    <div className="alert alert-dashed-bold">
                        <span>Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-dashed-bold alert-primary">
                        <span>Primary: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-dashed-bold alert-accent">
                        <span>Accent: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-dashed-bold alert-success">
                        <span>Success: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-dashed-bold alert-warning">
                        <span>Warning: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-dashed-bold alert-danger">
                        <span>Danger: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                </Preview>

                <h4 id="dotted">Dotted</h4>

                <Preview code={`<div class="alert alert-dotted">
    <span>Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-dotted alert-primary">
    <span>Primary: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-dotted alert-accent">
    <span>Accent: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-dotted alert-success">
    <span>Success: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-dotted alert-warning">
    <span>Warning: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-dotted alert-danger">
    <span>Danger: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>`}>
                    <div className="alert alert-dotted">
                        <span>Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-dotted alert-primary">
                        <span>Primary: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-dotted alert-accent">
                        <span>Accent: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-dotted alert-success">
                        <span>Success: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-dotted alert-warning">
                        <span>Warning: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-dotted alert-danger">
                        <span>Danger: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                </Preview>

                <h4 id="dotted-bold">Dotted Bold</h4>

                <Preview code={`<div class="alert alert-dotted-bold">
    <span>Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-dotted-bold alert-primary">
    <span>Primary: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-dotted-bold alert-accent">
    <span>Accent: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-dotted-bold alert-success">
    <span>Success: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-dotted-bold alert-warning">
    <span>Warning: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>
<div class="alert alert-dotted-bold alert-danger">
    <span>Danger: Your password has expired! Please reset your password from your <a class="btn btn-link btn-accent">account here</a>.</span>
</div>`}>
                    <div className="alert alert-dotted-bold">
                        <span>Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-dotted-bold alert-primary">
                        <span>Primary: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-dotted-bold alert-accent">
                        <span>Accent: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-dotted-bold alert-success">
                        <span>Success: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-dotted-bold alert-warning">
                        <span>Warning: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                    <div className="alert alert-dotted-bold alert-danger">
                        <span>Danger: Your password has expired! Please reset your password from your <a className="btn btn-link btn-accent">account here</a>.</span>
                    </div>
                </Preview>

                <h3 id="variants">Variants</h3>

                <h4 id="close-button">Close Button</h4>

                <Preview code={`<div class="alert">
    <span>Your account has been restored! You can now continue to <a class="btn btn-link btn-accent">your account</a>.</span>
    <input type="radio" class="alert-close btn btn-clear btn-round btn-icon"></input>
</div>`}>
                    <div className="alert">
                        <span>Your account has been restored! You can now continue to <a className="btn btn-link btn-accent">your account</a>.</span>
                        <input type="radio" className="alert-close btn btn-clear btn-round btn-icon"></input>
                    </div>
                </Preview>

                <PageFooterNav>
                    <PrevPageNav href="/components/accordion">Accordion</PrevPageNav>
                    <NextPageNav href="/components/avatar">Avatar</NextPageNav>
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
                            title: "Dashed",
                            href: "#dashed",
                        },
                        {
                            title: "Dashed Bold",
                            href: "#dashed-bold",
                        },
                        {
                            title: "Dotted",
                            href: "#dotted",
                        },
                        {
                            title: "Dotted Bold",
                            href: "#dotted-bold",
                        },
                    ]
                },
                {
                    title: "Variants",
                    href: "#variants",
                    nested: [
                        {
                            title: "Close Button",
                            href: "#close-button",
                        },
                    ]
                },
            ]}/>
        </>
    );
};

export default Alert;
