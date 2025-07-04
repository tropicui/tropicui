import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import Preview from "../components/Preview";
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";
import TableOfContent from "../components/TableOfContent";

function Join() {
    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>UTILITY</BreadcrumbItem>
                </Breadcrumb>

                <h2>Join</h2>

                <h6>
                    Visually connect multiple components (such as buttons, cards, tags, etc.) into a seamless group.
                </h6>

                <h3 id="usage">Usage</h3>

                <h4 id="button-row">Button Row</h4>
                <Preview code={`<div class="join join-row">
    <button class="btn">Low</button>
    <button class="btn">Medium</button>
    <button class="btn">High</button>
</div>`}/>

                <h4 id="button-col">Button Column</h4>
                <Preview code={`<div class="join join-col">
    <button class="btn">Authentication</button>
    <button class="btn">Authorization</button>
    <button class="btn">Permissions</button>
</div>`}/>

                <h4 id="card">Card Group</h4>
                <Preview code={`<div class="join join-row">
    <div class="card">
        <figure class="h-60">
            <img src="/img/house1.jpg" alt="Card image" />
        </figure>
        <div class="card-body">
            <span>First card includes an image cover at the top.</span>
        </div>
    </div>

    <div class="card">
        <figure class="h-60">
            <img src="/img/desk1.jpg" alt="Card image" />
        </figure>
        <div class="card-body">
            <span>Second card includes an image cover at the top.</span>
        </div>
    </div>

    <div class="card">
        <figure class="h-60">
            <img src="/img/loft1.jpg" alt="Card image" />
        </figure>
        <div class="card-body">
            <span>Third card includes an image cover at the top.</span>
        </div>
    </div>
</div>`}/>

                <h4 id="tag">Tag Group</h4>
                <Preview code={`<div class="join join-row">
    <div class="tag tag-primary">PHP</div>
    <div class="tag tag-primary tag-soft">8.4.2</div>
    <div class="tag tag-primary tag-outline">Stable</div>
</div>`}/>

                <h3 id="variants">Variants</h3>

                <h4 id="fit-content">Fit Content</h4>
                <Preview code={`<div class="grid w-full gap-8">
    <div class="join join-col">
        <button class="btn">Stage 1</button>
        <button class="btn">Stage 2</button>
        <button class="btn">Stage 3</button>
    </div>

    <div class="join join-fit join-col">
        <button class="btn">Gold</button>
        <button class="btn">Silver</button>
        <button class="btn">Bronze</button>
    </div>
</div>`}/>

                <PageFooterNav>
                    <PrevPageNav href="/components/tooltip">Tooltip</PrevPageNav>
                    <NextPageNav href="/components/toast">Toast</NextPageNav>
                </PageFooterNav>
            </div>
            <TableOfContent items={[
                {
                    title: "Usage",
                    href: "#usage",
                    nested: [
                        { title: "Button Row", href: "#button-row" },
                        { title: "Button Column", href: "#button-col" },
                        { title: "Card Group", href: "#card" },
                        { title: "Tag Group", href: "#tag" },
                    ]
                },
                {
                    title: "Variants",
                    href: "#variants",
                    nested: [
                        { title: "Fit Content", href: "#fit-content" },
                    ]
                },
            ]}/>
        </>
    );
}

export default Join; 