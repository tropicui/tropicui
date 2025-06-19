import Breadcrumb from "../components/BreadcrumbItem";
import TableOfContent from "../components/TableOfContent";
import Preview from "../components/Preview";

function Alert() {
    return (
        <div className="grid grid-cols-[1fr_auto] gap-4 min-h-dvh">
            <div className="col-start-1 row-start-1 pt-8">
                <div className="mb-4">
                    <Breadcrumb>COMPONENT</Breadcrumb>
                </div>

                <div className="mb-6">
                    <h2>Alert</h2>
                </div>

                <div className="mb-8">
                    <h6>The <strong>Alert</strong> component can be used to provide temporary feedback </h6>
                </div>

                <div className="mb-6">
                    <h3 id="usage">Usage</h3>
                </div>

                <div className="mb-4">
                    <h4 id="basic">Basic</h4>
                </div>

                <Preview code={`<details class="accordion">
    <summary>What is a UI library?</summary>
    <p>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</p>
</details>`}>
                    <details className="accordion">
                        <summary>What is a UI library?</summary>
                        <p>A UI library is a collection of pre-built components that developers use to build the frontend user interface of a web application more efficiently.</p>
                    </details>
                </Preview>
            </div>
        </div>
    );
}

export default Alert;