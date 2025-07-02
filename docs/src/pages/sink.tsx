import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import Preview from "../components/Preview";
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";
import TableOfContent from "../components/TableOfContent";

function Sink() {
    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>COMPONENT</BreadcrumbItem>
                </Breadcrumb>

                <h2>Sink</h2>

                <h6>A container component with subtle recessed or "sunken" styling for grouping related content.</h6>

                <h3 id="usage">Usage</h3>

                <h4 id="basic">Basic</h4>

                <Preview code={`<div class="sink">
    <span>This content appears in a sunken container with subtle inset styling.</span>
</div>`}/>

                <h4 id="breadcrumb">Breadcrumb</h4>

                <Preview code={`<div class="sink">
    <div class="breadcrumb">
        <ul>
            <li><a class="btn btn-link">Home</a></li>
            <li><a class="btn btn-link">Sales</a></li>
            <li><span class="font-semibold">Orders</span></li>
        </ul>
    </div>
</div>`}/>

                <h4 id="form">Form</h4>

                <Preview code={`<form class="form">
    <div class="sink">
        <select class="select w-full">
            <option>Latest</option>
            <option>Last 30 days</option>
            <option>A year ago</option>
        </select>
        <div class="flex gap-1.5">
            <input type="text" class="input" placeholder="Keyword">
            <button class="btn">Go</button>
        </div>
    </div>
</form>`}/>

                <h4 id="menu">Menu</h4>

                <Preview code={`<ul class="sink menu">
    <li>
        <button class="btn justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <span>View Details</span>
        </button>
    </li>
    <li>
        <button class="btn justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
            </svg>
            <span>Edit Item</span>
        </button>
    </li>
    <li>
        <button class="btn btn-danger justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
            <span>Delete Item</span>
        </button>
    </li>
</ul>`}/>

                <h4 id="card">Card</h4>

                <Preview code={`<div class="sink p-3">
    <div>
        <h1>The Edition</h1>
    </div>
    <div class="card w-lg">
        <div class="card-body">
            <p>The sink padding can be customised with Tailwind classes.</p>
            <p>Using a card within a sink to produce a sunken and raised effect to highlight certain content.</p>
        </div>
    </div>
    <div class="text-center text-sm text-muted">&copy Copyright - Or out of the card</div>
</div>`}/>

                <PageFooterNav>
                    <PrevPageNav href="/components/select">Select</PrevPageNav>
                    <NextPageNav href="/components/spinner">Spinner</NextPageNav>
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
                            title: "Breadcrumb",
                            href: "#breadcrumb",
                        },
                        {
                            title: "Form",
                            href: "#form",
                        },
                        {
                            title: "Menu",
                            href: "#menu",
                        },
                        {
                            title: "Card",
                            href: "#card",
                        },
                    ]
                },
            ]}/>
        </>
    )
}

export default Sink;