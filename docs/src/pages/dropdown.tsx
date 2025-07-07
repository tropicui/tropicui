import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import Preview from "../components/Preview";
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";
import TableOfContent from "../components/TableOfContent";

function Dropdown() {

    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>COMPONENT</BreadcrumbItem>
                </Breadcrumb>

                <h2>Dropdown</h2>

                <h6>Opens a collapsible list of menu or any other content.</h6>

                <h3 id="usage">Usage</h3>

                <h4 id="basic">Basic</h4>

                <Preview code={`<div class="dropdown">
    <button class="btn dropdown-toggle">
        <span>Dropdown</span>
    </button>
    <div class="dropdown-content">
        <ul class="menu menu-md">
            <li><button class="btn btn-clear">Profile</button></li>
            <li><button class="btn btn-clear">Settings</button></li>
            <li><button class="btn btn-clear">Help</button></li>
            <li><button class="btn btn-clear">Logout</button></li>
        </ul>
    </div>
</div>`}/>

                <h4 id="open">Open</h4>

                <p>Use the <code className="tag">dropdown-open</code> class on <code className="tag">dropdown-content</code> to keep the dropdown open.</p>

                <Preview code={`<div class="dropdown">
    <button class="btn dropdown-toggle">
        <span>Dropdown Open</span>
    </button>
    <div class="dropdown-content dropdown-open">
        <ul class="menu menu-md">
            <li><button class="btn btn-clear">Profile</button></li>
            <li><button class="btn btn-clear">Settings</button></li>
            <li><button class="btn btn-clear">Help</button></li>
            <li><button class="btn btn-clear">Logout</button></li>
        </ul>
    </div>
</div>`}/>

                <h3 id="alignment">Alignment</h3>

                <h4 id="up">Up</h4>

                <Preview code={`<div class="dropdown dropdown-up">
    <button class="btn dropdown-toggle">
        Dropup
    </button>
    <div class="dropdown-content">
        <ul class="menu menu-md">
            <li><button class="btn btn-clear">Profile</button></li>
            <li><button class="btn btn-clear">Settings</button></li>
            <li><button class="btn btn-clear">Help</button></li>
            <li><button class="btn btn-clear">Logout</button></li>
        </ul>
    </div>
</div>`}/>

                <h4 id="leading">Leading</h4>

                <p>Align the dropdown to the leading edge of the button with respect to the document text direction.</p>

                <Preview code={`<div class="flex flex-wrap gap-4">
    <div class="dropdown dropdown-up dropdown-start">
        <button class="btn dropdown-toggle">
            Leading Dropup
        </button>
        <div class="dropdown-content">
            <ul class="menu menu-md">
                <li><button class="btn btn-clear">Profile</button></li>
                <li><button class="btn btn-clear">Settings</button></li>
                <li><button class="btn btn-clear">Help</button></li>
                <li><button class="btn btn-clear">Logout</button></li>
            </ul>
        </div>
    </div>
    <div class="dropdown dropdown-start">
        <button class="btn dropdown-toggle">
            Leading Dropdown
        </button>
        <div class="dropdown-content">
            <ul class="menu menu-md">
                <li><button class="btn btn-clear">Profile</button></li>
                <li><button class="btn btn-clear">Settings</button></li>
                <li><button class="btn btn-clear">Help</button></li>
                <li><button class="btn btn-clear">Logout</button></li>
            </ul>
        </div>
    </div>
</div>`}/>

                <h4 id="trailing">Trailing</h4>

                <p>Align the dropdown to the trailing edge of the button with respect to the document text direction.</p>

                <Preview code={`<div class="flex flex-wrap gap-4">
    <div class="dropdown dropdown-up dropdown-end">
        <button class="btn dropdown-toggle">
            Trailing Dropup
        </button>
        <div class="dropdown-content">
            <ul class="menu menu-md">
                <li><button class="btn btn-clear">Profile</button></li>
                <li><button class="btn btn-clear">Settings</button></li>
                <li><button class="btn btn-clear">Help</button></li>
                <li><button class="btn btn-clear">Logout</button></li>
            </ul>
        </div>
    </div>
    <div class="dropdown dropdown-end">
        <button class="btn dropdown-toggle">
            Trailing Dropdown
        </button>
        <div class="dropdown-content">
            <ul class="menu menu-md">
                <li><button class="btn btn-clear">Profile</button></li>
                <li><button class="btn btn-clear">Settings</button></li>
                <li><button class="btn btn-clear">Help</button></li>
                <li><button class="btn btn-clear">Logout</button></li>
            </ul>
        </div>
    </div>
</div>`}/>

                <h4 id="left">Left</h4>

                <Preview code={`<div class="flex flex-wrap gap-4">
    <div class="dropdown dropdown-up dropdown-left">
        <button class="btn dropdown-toggle">
            Left Dropup
        </button>
        <div class="dropdown-content">
            <ul class="menu menu-md">
                <li><button class="btn btn-clear">Profile</button></li>
                <li><button class="btn btn-clear">Settings</button></li>
                <li><button class="btn btn-clear">Help</button></li>
                <li><button class="btn btn-clear">Logout</button></li>
            </ul>
        </div>
    </div>
    <div class="dropdown dropdown-left">
        <button class="btn dropdown-toggle">
            Left Dropdown
        </button>
        <div class="dropdown-content">
            <ul class="menu menu-md">
                <li><button class="btn btn-clear">Profile</button></li>
                <li><button class="btn btn-clear">Settings</button></li>
                <li><button class="btn btn-clear">Help</button></li>
                <li><button class="btn btn-clear">Logout</button></li>
            </ul>
        </div>
    </div>
</div>`}/>

                <h4 id="right">Right</h4>

                <Preview code={`<div class="flex flex-wrap gap-4">
    <div class="dropdown dropdown-up dropdown-right">
        <button class="btn dropdown-toggle">
            Right Dropup
        </button>
        <div class="dropdown-content">
            <ul class="menu menu-md">
                <li><button class="btn btn-clear">Profile</button></li>
                <li><button class="btn btn-clear">Settings</button></li>
                <li><button class="btn btn-clear">Help</button></li>
                <li><button class="btn btn-clear">Logout</button></li>
            </ul>
        </div>
    </div>
    <div class="dropdown dropdown-right">
        <button class="btn dropdown-toggle">
            Right Dropdown
        </button>
        <div class="dropdown-content">
            <ul class="menu menu-md">
                <li><button class="btn btn-clear">Profile</button></li>
                <li><button class="btn btn-clear">Settings</button></li>
                <li><button class="btn btn-clear">Help</button></li>
                <li><button class="btn btn-clear">Logout</button></li>
            </ul>
        </div>
    </div>
</div>`}/>

                <h3 id="examples">Examples</h3>

                <h4 id="icon">Icon</h4>

                <Preview code={`<div class="mt-64">
    <div class="dropdown dropdown-up dropdown-start">
        <button class="btn dropdown-toggle">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <span>John Doe</span>
        </button>
        <div class="dropdown-content">
            <div class="sink flex flex-col items-center m-1 p-6">
                <div class="avatar avatar-circle">
                    <img src="/docs/img/user1.jpg" alt="User" />
                </div>
                <div>
                    <h6>John Doe</h6>
                </div>
                <span class="text-sm opacity-70">Software Engineer II</span>
            </div>
            <ul class="menu">
                <li>
                    <button class="btn btn-sm btn-clear">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <span>View Profile</span>
                        <span class="grow"></span>
                    </button>
                </li>
                <li>
                    <button class="btn btn-sm btn-clear">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <span>Settings</span>
                        <span class="grow"></span>
                    </button>
                </li>
                <li>
                    <button class="btn btn-sm btn-clear btn-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                        </svg>
                        <span>Sign Out</span>
                        <span class="grow"></span>
                    </button>
                </li>
            </div>
        </div>
    </div>
</div>`}/>

                <h4 id="nested-menu">Nested Menu</h4>

                <Preview code={`<div class="h-64">
    <div class="dropdown dropdown-end">
        <button class="dropdown-toggle btn btn-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
            </svg>
        </button>
        <div class="dropdown-content">
            <ul class="menu menu-md">
                <li>
                    <button class="btn btn-clear">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <span>View</span>
                        <span class="grow"></span>
                        <span class="tag tag-sm tag-soft tag-primary">8+</span>
                    </button>
                </li>
                <li>
                    <button class="menu-toggle btn btn-clear">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                        <span>Edit</span>
                        <span class="grow"></span>
                    </button>
                    <ul>
                        <li>
                            <button class="btn btn-clear">
                                <span>Rename</span>
                                <span class="grow"></span>
                            </button>
                        </li>
                        <li>
                            <button class="btn btn-clear">
                                <span>Move</span>
                                <span class="grow"></span>
                            </button>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="divider"></div>
            <ul class="menu">
                <li>
                    <button class="btn btn-clear btn-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                        <span>Delete</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</div>`}/>

                <h4 id="horizontal-menu">Horizontal Menu</h4>

                <Preview code={`<div class="dropdown">
    <button class="btn dropdown-toggle">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
        </svg>
        <span>Filter</span>
    </button>
    <div class="dropdown-content">
        <ul class="menu menu-inline">
            <li>
                <button class="btn btn-clear">All Items</button>
            </li>
            <li>
                <button class="btn btn-clear">
                    <span class="status status-accent"></span>
                    <span>Active</span>
                </button>
            </li>
            <li>
                <button class="btn btn-clear">
                    <span class="status status-danger"></span>
                    <span>Inactive</span>
                </button>
            </li>
            <li>
                <button class="btn btn-clear">
                    <span class="status status-warning"></span>
                    <span>Pending</span>
                </button>
            </li>
            <li>
                <button class="btn btn-clear">
                    <span class="status status-success"></span>
                    <span>Completed</span>
                </button>
            </li>
        </ul>
    </div>
</div>`}/>

                <h4 id="card">Card</h4>

                <Preview code={`<div class="h-80">
    <div class="dropdown">
        <button class="btn dropdown-toggle">
            <span>Notifications</span>
            <span class="tag tag-sm tag-round tag-danger">3</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
        </button>
        <div class="dropdown-content">
            <div class="card w-xs">
                <div class="card-header">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                    <div class="card-title">
                        <h6>Notifications</h6>
                    </div>
                </div>
                <div class="card-body">
                    <div class="space-y-3">
                        <div class="flex gap-3">
                            <div class="avatar avatar-sm">
                                <img src="/docs/img/user1.jpg" alt="User">
                            </div>
                            <div class="flex-1">
                                <div class="text-sm font-medium">Sarah commented on your post</div>
                                <div class="text-xs opacity-70">2 minutes ago</div>
                            </div>
                        </div>
                        <div class="flex gap-3">
                            <div class="avatar avatar-sm">
                                <img src="/docs/img/user1.jpg" alt="User">
                            </div>
                            <div class="flex-1">
                                <div class="text-sm font-medium">Mike liked your photo</div>
                                <div class="text-xs opacity-70">1 hour ago</div>
                            </div>
                        </div>
                        <div class="flex gap-3">
                            <div class="avatar avatar-sm">
                                <img src="/docs/img/user1.jpg" alt="User">
                            </div>
                            <div class="flex-1">
                                <div class="text-sm font-medium">Emma started following you</div>
                                <div class="text-xs opacity-70">3 hours ago</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button class="btn btn-sm btn-ghost w-full">View All</button>
                </div>
            </div>
        </div>
    </div>
</div>`}/>

                <h4 id="form">Form</h4>

                <Preview code={`<div class="dropdown">
    <button class="btn dropdown-toggle">
        <span>Trade</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
    </button>
    <div class="dropdown-content p-1">
        <form class="form">
            <div class="sink w-xs">
                <div class="form-helper">Available: 200.000 USDT</div>
                <input type="text" class="input" placeholder="Price">
                <input type="text" class="input" placeholder="Amount">
                <button class="btn btn-danger">Sell BTC</button>
            </div>
        </form>
    </div>
</div>`}/>

                <PageFooterNav>
                    <PrevPageNav href="/components/drawer">Drawer</PrevPageNav>
                    <NextPageNav href="/components/form">Form</NextPageNav>
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
                            title: "Open",
                            href: "#open",
                        },
                    ]
                },
                {
                    title: "Alignment",
                    href: "#alignment",
                    nested: [
                        {
                            title: "Up",
                            href: "#up",
                        },
                        {
                            title: "Leading",
                            href: "#leading",
                        },
                        {
                            title: "Trailing",
                            href: "#trailing",
                        },
                        {
                            title: "Left",
                            href: "#left",
                        },
                        {
                            title: "Right",
                            href: "#right",
                        },
                    ]
                },
                {
                    title: "Examples",
                    href: "#examples",
                    nested: [
                        {
                            title: "Icon",
                            href: "#icon",
                        },
                        {
                            title: "Nested Menu",
                            href: "#nested-menu",
                        },
                        {
                            title: "Horizontal Menu",
                            href: "#horizontal-menu",
                        },
                        {
                            title: "Card",
                            href: "#card",
                        },
                        {
                            title: "Form",
                            href: "#form",
                        },
                    ]
                },
            ]}/>
        </>
    )
}

export default Dropdown;