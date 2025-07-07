import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import Preview from "../components/Preview";
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";
import TableOfContent from "../components/TableOfContent";

function Typography() {
    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>COMPONENT</BreadcrumbItem>
                </Breadcrumb>

                <h2>Typography</h2>

                <h6>Typography utilities for consistent text styling and hierarchy.</h6>

                <h3 id="usage">Usage</h3>

                <h4 id="headings">Headings</h4>

                <Preview code={`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`}/>

                <h4 id="paragraphs">Paragraphs</h4>

                <Preview code={`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`}/>

                <h4 id="blockquotes">Blockquotes</h4>

                <Preview code={`<div class="grid gap-12">
    <blockquote>
        <p>"The greatest glory in living lies not in never falling, but in rising every time we fall."</p>
        <footer class="blockquote-footer">by <cite>Nelson Mandela</cite></footer>
    </blockquote>

    <blockquote class="text-center">
        <p>"The greatest glory in living lies not in never falling, but in rising every time we fall."</p>
        <footer class="blockquote-footer">by <cite>Nelson Mandela</cite></footer>
    </blockquote>

    <blockquote class="text-right">
        <p>"The greatest glory in living lies not in never falling, but in rising every time we fall."</p>
        <footer class="blockquote-footer">by <cite>Nelson Mandela</cite></footer>
    </blockquote>
</div>`}/>

                <h3 id="lists">Lists</h3>

                <h4 id="unordered-lists">Unordered Lists</h4>

                <Preview code={`<ul class="list-disc">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Sub items
        <ul class="list-disc list-inside">
            <li>Item 2.1</li>
            <li>Item 2.2</li>
            <li>sub-Sub items
                <ul class="list-disc list-inside pl-4">
                    <li>Item 2.2.1</li>
                    <li>Item 2.2.2</li>
                    <li>Item 2.2.3</li>
                </ul>
            </li>
        </ul>
    </li>
</ul>`}/>

                <h4 id="ordered-lists">Ordered Lists</h4>

                <Preview code={`<ol class="list-decimal">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Sub items
        <ol class="list-[upper-alpha] list-inside">
            <li>Item 2.1</li>
            <li>Item 2.2</li>
            <li>sub-Sub items
                <ol class="list-[lower-roman] list-inside pl-4">
                    <li>Item 2.2.1</li>
                    <li>Item 2.2.2</li>
                    <li>Item 2.2.3</li>
                </ol>
            </li>
        </ol>
    </li>
</ol>`}/>

                <h4 id="unstyled-lists">Unstyled Lists</h4>

                <Preview code={`<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Sub items
        <ul class="pl-4">
            <li>Item 2.1</li>
            <li>Item 2.2</li>
            <li>sub-Sub items</li>
        </ul>
    </li>
</ul>`}/>

                <h4 id="definition-lists">Definition Lists</h4>

                <Preview code={`<dl>
    <dt>Item 1</dt>
    <dd>Definition 1</dd>
    <dt>Item 2</dt>
    <dd>Definition 2</dd>
    <dt>Item 3</dt>
    <dd>Definition 3</dd>
</dl>`}/>

                <h3 id="inline-elements">Inline Elements</h3>

                <h4 id="mark">Mark/Highlight</h4>

                <Preview code={`<p>You can use the mark tag to <mark>highlight</mark> text.</p>`}/>

                <h4 id="deleted-text">Deleted Text</h4>

                <Preview code={`<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>`}/>

                <h4 id="inserted-text">Inserted Text</h4>

                <Preview code={`<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>`}/>

                <h4 id="underlined-text">Underlined Text</h4>

                <Preview code={`<p><u>This line of text will render as underlined</u></p>`}/>

                <h4 id="small">Small Text</h4>

                <Preview code={`<p><small>This line of text is meant to be treated as fine print.</small></p>`}/>

                <h4 id="strong">Strong Text</h4>

                <Preview code={`<p><strong>This line rendered as bold text.</strong></p>`}/>

                <h4 id="emphasized-text">Emphasized Text</h4>

                <Preview code={`<p><em>This line rendered as italicized text.</em></p>`}/>

                <h4 id="abbreviation">Abbreviation</h4>

                <Preview code={`<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>`}/>

                <h4 id="superscript">Superscript</h4>

                <Preview code={`<p>This is <sup>superscript</sup> text.</p>`}/>

                <h4 id="subscript">Subscript</h4>

                <Preview code={`<p>This is <sub>subscript</sub> text.</p>`}/>

                <h4 id="code">Code</h4>

                <Preview code={`<p>Here we enter some <code>inline code</code> as example.</p>
<p>This is a <samp>sample output</samp> example.</p>
<p>And this is a <var>variable</var> example.</p>`}/>

                <h4 id="keyboard-input">Keyboard Input</h4>

                <Preview code={`<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.</p>`}/>

                <h4 id="preformatted-text">Preformatted Text</h4>

                <Preview code={`<pre>
    This is preformatted text.
        It follows the line
            breaks and indents.
    E X A C T L Y as it is written in the HTML source.
</pre>`}/>

                <h4 id="address">Address</h4>

                <Preview code={`<address>
    No. 123, Street Name, City Name, Country Name
</address>`}/>

                <h4 id="time">Time</h4>

                <Preview code={`<p>The time element: <time datetime="2020-01-01">January 1, 2020</time></p>`}/>

                <h3 id="text-utilities">Text Utilities</h3>

                <h4 id="text-alignment">Text Alignment</h4>

                <Preview code={`<div>
    <p class="text-left">This is left aligned text.</p>
    <p class="text-center">This is center aligned text.</p>
    <p class="text-right">This is right aligned text.</p>
    <p class="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, placeat. Consequuntur, vel nihil quod voluptatem rerum, placeat itaque molestias nam cupiditate sed deleniti vitae? Magni repellendus fugit in neque maiores.</p>
</div>`}/>

                <h4 id="text-transform">Text Transform</h4>

                <Preview code={`<p class="uppercase">This is uppercase text.</p>
<p class="lowercase">This IS LOWERCASE TEXT</p>
<p class="capitalize">This is capitalize text.</p>`}/>

                <h4 id="text-indentation">Text Indentation</h4>

                <Preview code={`<p class="indent-20">This is text with indentation. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, placeat. Consequuntur, vel nihil quod voluptatem rerum, placeat itaque molestias nam cupiditate sed deleniti vitae? Magni repellendus fugit in neque maiores.</p>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, placeat. Consequuntur, vel nihil quod voluptatem rerum, placeat itaque molestias nam cupiditate sed deleniti vitae? Magni repellendus fugit in neque maiores.</p>`}/>

                <h4 id="text-overflow">Text Overflow</h4>

                <Preview code={`<p class="truncate w-20">This is text with overflow.</p>`}/>

                <h4 id="text-wrapping">Text Wrapping</h4>

                <Preview code={`<div class="card card-border w-sm">
    <div class="card-body">
        <p class="text-nowrap">This is text with absolutely no wrapping regardless of the container.</p>
        <p class="text-wrap">This is text with normal wrapping that will break at the end of the container.</p>
    </div>
</div>`}/>

                <h4 id="text-spacing">Text Spacing</h4>

                <Preview code={`<p class="tracking-widest">This is text with 2px letter spacing.</p>`}/>

                <h4 id="text-line-height">Text Line Height</h4>

                <Preview code={`<div class="grid gap-8">
    <p class="leading-none">This is text with 1 line height. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, placeat. Consequuntur, vel nihil quod voluptatem rerum, placeat itaque molestias nam cupiditate sed deleniti vitae? Magni repellendus fugit in neque maiores.</p>
    <p class="leading-normal">This is text with 1.5 line height. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, placeat. Consequuntur, vel nihil quod voluptatem rerum, placeat itaque molestias nam cupiditate sed deleniti vitae? Magni repellendus fugit in neque maiores.</p>
    <p class="leading-loose">This is text with 2 line height. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, placeat. Consequuntur, vel nihil quod voluptatem rerum, placeat itaque molestias nam cupiditate sed deleniti vitae? Magni repellendus fugit in neque maiores.</p>
</div>`}/>

                <h4 id="text-color">Text Color</h4>

                <Preview code={`<p>This is base text.</p>
<p class="text-primary">This is primary text.</p>
<p class="text-accent">This is accent text.</p>
<p class="text-success">This is success text.</p>
<p class="text-warning">This is warning text.</p>
<p class="text-danger">This is danger text.</p>`}/>

                <h4 id="text-decoration">Text Decoration</h4>

                <Preview code={`<p>This is text with no decoration.</p>
<p class="no-underline">This is text with no text decoration.</p>
<p class="underline">This is text with underline decoration.</p>
<p class="overline">This is text with overline decoration.</p>
<p class="line-through">This is text with line-through decoration.</p>
<p class="underline decoration-solid">This is text with solid text decoration.</p>
<p class="underline decoration-double">This is text with double text decoration.</p>
<p class="underline decoration-dotted">This is text with dotted text decoration.</p>
<p class="underline decoration-dashed">This is text with dashed text decoration.</p>
<p class="underline decoration-wavy">This is text with wavy text decoration.</p>
<p class="underline decoration-2">This is text with thick text decoration.</p>
<p class="underline decoration-4">This is text with thicker text decoration.</p>
<p class="underline decoration-2 decoration-success">This is text with colored text decoration.</p>
<p class="underline decoration-2 decoration-danger">This is text with colored text decoration.</p>`}/>

                <h4 id="text-background-color">Text Background Color</h4>

                <Preview code={`<p class="bg-base text-base-foreground">This is text with base background color.</p>
<p class="bg-primary text-primary-content">This is text with primary background color.</p>
<p class="bg-accent text-accent-content">This is text with accent background color.</p>
<p class="bg-success text-success-content">This is text with success background color.</p>
<p class="bg-warning text-warning-content">This is text with warning background color.</p>
<p class="bg-danger text-danger-content">This is text with danger background color.</p>`}/>

                <h4 id="text-font">Text Font</h4>

                <Preview code={`<p class="font-sans">This is text with sans-serif font.</p>
<p class="font-serif">This is text with serif font.</p>
<p class="font-mono">This is text with monospace font.</p>`}/>

                <h4 id="font-style">Font Style</h4>

                <Preview code={`<p class="not-italic">This is text with normal font style.</p>
<p class="italic">This is text with italic font style.</p>`}/>

                <h4 id="text-weight">Text Weight</h4>

                <Preview code={`<p class="font-thin">This is text with thin weight of 100.</p>
<p class="font-extralight">This is text with extralight weight of 200.</p>
<p class="font-light">This is text with light weight of 300.</p>
<p class="font-normal">This is text with normal weight of 400.</p>
<p class="font-medium">This is text with medium weight of 500.</p>
<p class="font-semibold">This is text with semibold weight of 600.</p>
<p class="font-bold">This is text with bold weight of 700.</p>
<p class="font-extrabold">This is text with extrabold weight of 800.</p>
<p class="font-black">This is text with black weight of 900.</p>`}/>

                <h4 id="text-shadow">Text Shadow</h4>

                <Preview code={`<p class="text-shadow-2xs">This is text with 2xs shadow.</p>
<p class="text-shadow-xs">This is text with extra small shadow.</p>
<p class="text-shadow-sm">This is text with small shadow.</p>
<p class="text-shadow-md">This is text with medium shadow.</p>
<p class="text-shadow-lg">This is text with large shadow.</p>`}/>

                <h4 id="text-size">Text Size</h4>

                <Preview code={`<p class="text-xs">This is text with xs font size.</p>
<p class="text-sm">This is text with sm font size.</p>
<p>This is text with normal font size.</p>
<p class="text-lg">This is text with lg font size.</p>
<p class="text-xl">This is text with xl font size.</p>
<p class="text-2xl">This is text with 2xl font size.</p>
<p class="text-3xl">This is text with 3xl font size.</p>
<p class="text-4xl">This is text with 4xl font size.</p>
<p class="text-5xl">This is text with 5xl font size.</p>
<p class="text-6xl">This is text with 6xl font size.</p>
<p class="text-7xl">This is text with 7xl font size.</p>
<p class="text-8xl">This is text with 8xl font size.</p>
<p class="text-9xl">This is text with 9xl font size.</p>`}/>

                <PageFooterNav>
                    <PrevPageNav href="/theming">Theming</PrevPageNav>
                    <NextPageNav href="/components/accordion">Accordion</NextPageNav>
                </PageFooterNav>
            </div>

            <TableOfContent items={[
                {
                    title: "Headings",
                    href: "#headings",
                },
                {
                    title: "Paragraphs",
                    href: "#paragraphs",
                },
                {
                    title: "Blockquotes",
                    href: "#blockquotes",
                },
                {
                    title: "Lists",
                    href: "#lists",
                    nested: [
                        {
                            title: "Unordered Lists",
                            href: "#unordered-lists",
                        },
                        {
                            title: "Ordered Lists",
                            href: "#ordered-lists",
                        },
                        {
                            title: "Unstyled Lists",
                            href: "#unstyled-lists",
                        },
                        {
                            title: "Definition Lists",
                            href: "#definition-lists",
                        },
                    ]
                },
                {
                    title: "Inline Elements",
                    href: "#inline-elements",
                    nested: [
                        {
                            title: "Mark/Highlight",
                            href: "#mark",
                        },
                        {
                            title: "Deleted Text",
                            href: "#deleted-text",
                        },
                        {
                            title: "Inserted Text",
                            href: "#inserted-text",
                        },
                        {
                            title: "Underlined Text",
                            href: "#underlined-text",
                        },
                        {
                            title: "Small Text",
                            href: "#small",
                        },
                        {
                            title: "Strong Text",
                            href: "#strong",
                        },
                        {
                            title: "Emphasized Text",
                            href: "#emphasized-text",
                        },
                        {
                            title: "Abbreviation",
                            href: "#abbreviation",
                        },
                        {
                            title: "Superscript",
                            href: "#superscript",
                        },
                        {
                            title: "Subscript",
                            href: "#subscript",
                        },
                        {
                            title: "Code",
                            href: "#code",
                        },
                        {
                            title: "Keyboard Input",
                            href: "#keyboard-input",
                        },
                        {
                            title: "Preformatted Text",
                            href: "#preformatted-text",
                        },
                        {
                            title: "Address",
                            href: "#address",
                        },
                        {
                            title: "Time",
                            href: "#time",
                        },
                    ]
                },
                {
                    title: "Text Utilities",
                    href: "#text-utilities",
                    nested: [
                        {
                            title: "Text Alignment",
                            href: "#text-alignment",
                        },
                        {
                            title: "Text Transform",
                            href: "#text-transform",
                        },
                        {
                            title: "Text Indentation",
                            href: "#text-indentation",
                        },
                        {
                            title: "Text Overflow",
                            href: "#text-overflow",
                        },
                        {
                            title: "Text Wrapping",
                            href: "#text-wrapping",
                        },
                        {
                            title: "Text Spacing",
                            href: "#text-spacing",
                        },
                        {
                            title: "Text Line Height",
                            href: "#text-line-height",
                        },
                        {
                            title: "Text Color",
                            href: "#text-color",
                        },
                        {
                            title: "Text Decoration",
                            href: "#text-decoration",
                        },
                        {
                            title: "Text Background Color",
                            href: "#text-background-color",
                        },
                        {
                            title: "Text Font",
                            href: "#text-font",
                        },
                        {
                            title: "Font Style",
                            href: "#font-style",
                        },
                        {
                            title: "Text Weight",
                            href: "#text-weight",
                        },
                        {
                            title: "Text Shadow",
                            href: "#text-shadow",
                        },
                        {
                            title: "Text Size",
                            href: "#text-size",
                        },
                    ]
                },
            ]}/>
        </>
    );
}

export default Typography; 