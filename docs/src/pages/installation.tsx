import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import CodeBlock from '../components/CodeBlock';
import TableOfContent from '../components/TableOfContent';
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";

function Installation() {
    const tocItems = [
        {
            title: "Prerequisites",
            href: "#prerequisites",
            nested: [
                { title: "Tailwindcss", href: "#tailwindcss" },
            ]
        },
        { title: "NPM", href: "#npm" },
        { title: "Import CSS", href: "#import-css" },
    ];

    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>GETTING STARTED</BreadcrumbItem>
                </Breadcrumb>

                <h2>Installation</h2>

                <h6>How to install TropicUI in your project.</h6>

                <h3 id="prerequisites">Prerequisites</h3>

                <h4 id="tailwindcss">Tailwindcss</h4>

                <p>TropicUI is built with Tailwindcss, so you need to have it installed in your project.</p>

                <p>Please head to <a href="https://tailwindcss.com/docs/installation" target="_blank" rel="noopener noreferrer" className="btn btn-link btn-accent">Tailwindcss installation</a> documentation for installation instructions.</p>

                <h3 id="npm">NPM</h3>

                <p>TropicUI package can be installed with NPM.</p>

                <p>From your project root, run the following command:</p>

                <div className="card mb-8">
                    <CodeBlock title="Terminal" lang="bash">
                        {`npm install tropicui`}
                    </CodeBlock>
                </div>

                <h3 id="import-css">Import CSS</h3>

                <p>Import TropicUI CSS library to your main CSS file after Tailwindcss.</p>

                <div className="card mb-8">
                    <CodeBlock title="main.css" lang="css">
                        {`@import "tailwindcss";
@import "tropicui";`}
                    </CodeBlock>
                </div>

                <h3>That's it!</h3>

                <p>You can now start using TropicUI components in your project.</p>
                
                <PageFooterNav>
                    <PrevPageNav href="/docs/introduction">Introduction</PrevPageNav>
                    <NextPageNav href="/docs/theming">Theming</NextPageNav>
                </PageFooterNav>
            </div>
            <TableOfContent items={tocItems} />
        </>
    );
}

export default Installation;