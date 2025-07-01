import { Link } from "react-router";

import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import Preview from "../components/Preview";
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";
import TableOfContent from "../components/TableOfContent";

function Menu() {
    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>COMPONENT</BreadcrumbItem>
                </Breadcrumb>

                <h2>Menu</h2>

                <h6>Display a vertical list of interactive menu items with support for nested submenus.</h6>

                <h3 id="usage">Usage</h3>

                <h4 id="basic">Basic</h4>

                <Preview code={`<ul class="menu">
    <li><button class="btn btn-clear">Home</button></li>
    <li><button class="btn btn-clear">About</button></li>
    <li><button class="btn btn-clear" disabled>Disabled</button></li>
    <li><button class="btn btn-clear">Services</button></li>
</ul>`}/>

                <h4 id="card">Card</h4>

                <Preview code={`<div class="card">
    <ul class="menu">
        <li>
            <button class="btn btn-clear">
                <span>Home</span>
            </button>
        </li>
        <li>
            <button class="btn btn-clear">
                <span>Profile</span>
            </button>
        </li>
        <li>
            <button class="btn btn-clear" disabled>
                <span>Disabled</span>
            </button>
        </li>
        <li>
            <button class="btn btn-clear">
                <span>Settings</span>
            </button>
        </li>
    </ul>
</div>`}/>

                <h4 id="icon">Icon</h4>

                <Preview code={`<div class="card card-gutter">
    <ul class="menu w-fit">
        <li>
            <button class="btn btn-clear btn-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </button>
        </li>
        <li>
            <button class="btn btn-clear btn-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            </button>
        </li>
        <li>
            <button class="btn btn-clear btn-icon" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
            </button>
        </li>
        <li>
            <button class="btn btn-clear btn-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            </button>
        </li>
    </ul>
</div>
<div class="card card-gutter">
    <ul class="menu">
        <li>
            <button class="btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <span>Home</span>
                <div class="grow"></div>
            </button>
        </li>
        <li>
            <button class="btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <span>Profile</span>
                <div class="grow"></div>
            </button>
        </li>
        <li>
            <button class="btn btn-clear" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
                <span>Disabled</span>
                <div class="grow"></div>
            </button>
        </li>
        <li>
            <button class="btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <span>Settings</span>
                <div class="grow"></div>
            </button>
        </li>
    </ul>
</div>`}/>

                <h3 id="sizes">Sizes</h3>

                <h4 id="small-sizes">Small Sizes</h4>

                <Preview code={`<div class="card card-gutter">
    <ul class="menu menu-3xs">
        <li><button class="btn btn-clear">3XS Menu</button></li>
        <li><button class="btn btn-clear">Item 2</button></li>
        <li><button class="btn btn-clear">Item 3</button></li>
    </ul>
</div>
<div class="card card-gutter">
    <ul class="menu menu-2xs">
        <li><button class="btn btn-clear">2XS Menu</button></li>
        <li><button class="btn btn-clear">Item 2</button></li>
        <li><button class="btn btn-clear">Item 3</button></li>
    </ul>
</div>
<div class="card card-gutter">
    <ul class="menu menu-xs">
        <li><button class="btn btn-clear">XS Menu</button></li>
        <li><button class="btn btn-clear">Item 2</button></li>
        <li><button class="btn btn-clear">Item 3</button></li>
    </ul>
</div>`}/>

                <h4 id="medium-sizes">Medium Sizes</h4>

                <Preview code={`<div class="card card-gutter">
    <ul class="menu menu-sm">
        <li><button class="btn btn-clear">Small Menu</button></li>
        <li><button class="btn btn-clear">Item 2</button></li>
        <li><button class="btn btn-clear">Item 3</button></li>
    </ul>
</div>
<div class="card card-gutter">
    <ul class="menu menu-md">
        <li><button class="btn btn-clear">Medium Menu</button></li>
        <li><button class="btn btn-clear">Item 2</button></li>
        <li><button class="btn btn-clear">Item 3</button></li>
    </ul>
</div>
<div class="card card-gutter">
    <ul class="menu menu-lg">
        <li><button class="btn btn-clear">Large Menu</button></li>
        <li><button class="btn btn-clear">Item 2</button></li>
        <li><button class="btn btn-clear">Item 3</button></li>
    </ul>
</div>`}/>

                <h4 id="large-sizes">Large Sizes</h4>

                <Preview code={`<div class="card card-gutter">
    <ul class="menu menu-xl">
        <li><button class="btn btn-clear">Extra Large Menu</button></li>
        <li><button class="btn btn-clear">Item 2</button></li>
        <li><button class="btn btn-clear">Item 3</button></li>
    </ul>
</div>
<div class="card card-gutter">
    <ul class="menu menu-2xl">
        <li><button class="btn btn-clear">2XL Menu</button></li>
        <li><button class="btn btn-clear">Item 2</button></li>
        <li><button class="btn btn-clear">Item 3</button></li>
    </ul>
</div>
<div class="card card-gutter">
    <ul class="menu menu-3xl">
        <li><button class="btn btn-clear">3XL Menu</button></li>
        <li><button class="btn btn-clear">Item 2</button></li>
        <li><button class="btn btn-clear">Item 3</button></li>
    </ul>
</div>`}/>

                <h4 id="extra-large-sizes">Extra Large Sizes</h4>

                <Preview code={`<div class="card card-gutter">
    <ul class="menu menu-4xl">
        <li><button class="btn btn-clear">4XL Menu</button></li>
        <li><button class="btn btn-clear">Item 2</button></li>
        <li><button class="btn btn-clear">Item 3</button></li>
    </ul>
</div>
<div class="card card-gutter">
    <ul class="menu menu-5xl">
        <li><button class="btn btn-clear">5XL Menu</button></li>
        <li><button class="btn btn-clear">Item 2</button></li>
        <li><button class="btn btn-clear">Item 3</button></li>
    </ul>
</div>
<div class="card card-gutter">
    <ul class="menu menu-6xl">
        <li><button class="btn btn-clear">6XL Menu</button></li>
        <li><button class="btn btn-clear">Item 2</button></li>
        <li><button class="btn btn-clear">Item 3</button></li>
    </ul>
</div>
<div class="card card-gutter">
    <ul class="menu menu-7xl">
        <li><button class="btn btn-clear">7XL Menu</button></li>
        <li><button class="btn btn-clear">Item 2</button></li>
        <li><button class="btn btn-clear">Item 3</button></li>
    </ul>
</div>`}/>

                <h3 id="variants">Variants</h3>

                <h4 id="inline">Inline Menu</h4>

                <Preview code={`<div class="card card-gutter">
    <ul class="menu menu-inline">
        <li>
            <button class="btn btn-clear btn-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </button>
        </li>
        <li>
            <button class="btn btn-clear btn-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            </button>
        </li>
        <li>
            <button class="btn btn-clear btn-icon" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
            </button>
        </li>
        <li>
            <button class="btn btn-clear btn-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            </button>
        </li>
    </ul>
</div>
<div class="card">
    <ul class="menu menu-inline">
        <li>
            <button class="btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <span>Home</span>
            </button>
        </li>
        <li>
            <button class="btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <span>Profile</span>
            </button>
        </li>
        <li>
            <button class="btn btn-clear" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
                <span>Disabled</span>
            </button>
        </li>
        <li>
            <button class="btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <span>Settings</span>
            </button>
        </li>
    </ul>
</div>`}/>

                <h4 id="nested">Nested Menu</h4>

                <Preview code={`<div class="card">
    <ul class="menu">
        <li>
            <button class="btn btn-clear">
                <span>Dashboard</span>
                <div class="grow"></div>
            </button>
        </li>
        <li>
            <button class="btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
                </svg>
                <span>Catalog</span>
                <div class="grow"></div>
            </button>
            <ul class="menu-open">
                <li>
                    <button class="btn btn-clear">
                        <span>Products</span>
                        <div class="grow"></div>
                    </button>
                </li>
                <li>
                    <button class="btn btn-clear">
                        <span>Categories</span>
                        <div class="grow"></div>
                    </button>
                </li>
            </ul>
        </li>
        <li>
            <button class="btn btn-clear">
                <span>Users & Roles</span>
                <div class="grow"></div>
            </button>
            <ul class="menu-open">
                <li>
                    <button class="btn btn-clear">
                        <span>Users</span>
                        <div class="grow"></div>
                    </button>
                </li>
                <li>
                    <button class="btn btn-clear">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                        </svg>
                        <span>Roles</span>
                        <div class="grow"></div>
                    </button>
                    <ul class="menu-open">
                        <li>
                            <button class="btn btn-clear">
                                <span>Assign Roles</span>
                                <div class="grow"></div>
                            </button>
                        </li>
                        <li>
                            <button class="btn btn-clear">
                                <span>Assign Permissions</span>
                                <div class="grow"></div>
                            </button>
                        </li>
                    </ul>
                </li>
                <li>
                    <button class="btn btn-clear">
                        <span>Permissions</span>
                        <div class="grow"></div>
                    </button>
                </li>
            </ul>
        </li>
        <li><button class="btn btn-clear">
            <span>Settings</span>
            <div class="grow"></div>
        </button></li>
    </ul>
</div>`}/>

                <h4 id="nested-inline">Nested Inline Menu</h4>

                <Preview code={`<div class="card">
    <ul class="menu menu-inline">
        <li>
            <button class="btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                </svg>
                <span>Platform</span>
                <span class="grow"></span>
            </button>
            <ul>
                <li>
                    <button class="btn btn-clear">
                        <span>Overview</span>
                        <span class="grow"></span>
                    </button>
                </li>
                <li>
                    <button class="btn btn-clear">
                        <span>Pricing Plan</span>
                        <span class="grow"></span>
                    </button>
                </li>
            </ul>
        </li>
        <li>
            <button class="btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
                <span>Research</span>
                <span class="grow"></span>
            </button>
            <ul>
                <li>
                    <button class="btn btn-clear">
                        <span>Deep Learning</span>
                        <span class="grow"></span>
                    </button>
                </li>
                <li>
                    <button class="btn btn-clear">
                        <span>Tokenisation</span>
                        <span class="grow"></span>
                    </button>
                </li>
                <li>
                    <button class="btn btn-clear">
                        <span>P-Matrix</span>
                        <span class="grow"></span>
                    </button>
                </li>
            </ul>
        </li>
        <li>
            <button class="btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
                <span>Models</span>
                <span class="grow"></span>
            </button>
            <ul>
                <li>
                    <button class="btn btn-clear">
                        <span>V3o</span>
                        <span class="grow"></span>
                    </button>
                </li>
                <li>
                    <button class="btn btn-clear">
                        <span>Legacy</span>
                        <span class="grow"></span>
                    </button>
                    <ul>
                        <li>
                            <button class="btn btn-clear">
                                <span>Version 2</span>
                                <span class="grow"></span>
                            </button>
                        </li>
                        <li>
                            <button class="btn btn-clear">
                                <span>Epoch</span>
                                <span class="grow"></span>
                            </button>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>
            <button class="btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                <span>Explore</span>
                <span class="grow"></span>
            </button>
            <ul>
                <li>
                    <button class="btn btn-clear">
                        <span>Newsroom</span>
                        <span class="grow"></span>
                    </button>
                </li>
            </ul>
        </li>
    </ul>
</div>`}/>

                <h4 id="collapsible">Collapsible Menu</h4>

                <Preview code={`<div class="card">
    <ul class="menu menu-lg">
        <li>
            <button class="btn btn-clear">
                <span>Dashboard</span>
                <div class="grow"></div>
            </button>
        </li>
        <li>
            <button class="menu-toggle btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
                </svg>
                <span>Catalog</span>
                <div class="grow"></div>
            </button>
            <ul>
                <li>
                    <button class="btn btn-clear">
                        <span>Products</span>
                        <div class="grow"></div>
                    </button>
                </li>
                <li>
                    <button class="btn btn-clear">
                        <span>Categories</span>
                        <div class="grow"></div>
                    </button>
                </li>
                <li>
                    <button class="btn btn-clear">
                        <span>Inventory</span>
                        <div class="grow"></div>
                    </button>
                </li>
            </ul>
        </li>
        <li>
            <button class="menu-toggle btn btn-clear">
                <span>Users & Roles</span>
                <div class="grow"></div>
            </button>
            <ul>
                <li>
                    <button class="btn btn-clear">
                        <span>Users</span>
                        <div class="grow"></div>
                    </button>
                </li>
                <li>
                    <button class="menu-toggle btn btn-clear">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                        </svg>
                        <span>Roles</span>
                        <div class="grow"></div>
                    </button>
                    <ul>
                        <li>
                            <button class="btn btn-clear">
                                <span>Assign Roles</span>
                                <div class="grow"></div>
                            </button>
                        </li>
                        <li>
                            <button class="btn btn-clear">
                                <span>Assign Permissions</span>
                                <div class="grow"></div>
                            </button>
                        </li>
                    </ul>
                </li>
                <li>
                    <button class="btn btn-clear">
                        <span>Permissions</span>
                        <div class="grow"></div>
                    </button>
                </li>
            </ul>
        </li>
        <li><button class="btn btn-clear">
            <span>Settings</span>
            <div class="grow"></div>
        </button></li>
    </ul>
</div>`}/>

                <h4 id="collapsible-inline">Collapsible Inline Menu</h4>

                <Preview code={`<div class="card">
    <ul class="menu menu-inline">
        <li>
            <button class="btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <span>Home</span>
                <span class="grow"></span>
            </button>
        </li>
        <li>
            <button class="menu-toggle btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <span>Profile</span>
                <span class="grow"></span>
            </button>
            <ul>
                <li>
                    <button class="btn btn-clear">
                        <span>Account</span>
                        <span class="grow"></span>
                    </button>
                </li>
                <li>
                    <button class="menu-toggle btn btn-clear">
                        <span>Security</span>
                        <span class="grow"></span>
                    </button>
                    <ul>
                        <li>
                            <button class="btn btn-clear">
                                <span>Password</span>
                                <span class="grow"></span>
                            </button>
                        </li>
                        <li>
                            <button class="btn btn-clear">
                                <span>2FA Key</span>
                                <span class="grow"></span>
                            </button>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>
            <button class="menu-toggle btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <span>Settings</span>
                <span class="grow"></span>
            </button>
            <ul>
                <li>
                    <button class="btn btn-clear">
                        <span>Languages</span>
                        <span class="grow"></span>
                    </button>
                </li>
                <li>
                    <button class="btn btn-clear">
                        <span>Plugins</span>
                        <span class="grow"></span>
                    </button>
                </li>
            </ul>
        </li>
    </ul>
</div>`}/>

                <h4 id="dropdown">Dropdown</h4>

                <Preview code={`<div class="flex flex-wrap gap-16">
    <div class="dropdown">
        <button class="btn dropdown-toggle">
            <span>Dropdown Menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
        </button>
        <div class="dropdown-content">
            <ul class="menu menu-lg">
                <li><button class="btn btn-clear">Profile</button></li>
                <li><button class="btn btn-clear">Settings</button></li>
                <li><button class="btn btn-clear">Help</button></li>
                <li><button class="btn btn-clear">Logout</button></li>
            </ul>
        </div>
    </div>
    <div class="dropdown">
        <button class="btn dropdown-toggle">
            <span>Dropdown Inline Menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
        </button>
        <div class="dropdown-content">
            <ul class="menu menu-inline">
                <li><button class="btn btn-clear">Profile</button></li>
                <li><button class="btn btn-clear">Settings</button></li>
                <li><button class="btn btn-clear">Help</button></li>
                <li><button class="btn btn-clear">Logout</button></li>
            </ul>
        </div>
    </div>
</div>`}/>

                <h4 id="tag">Tag</h4>

                <Preview code={`<div class="card card-gutter">
    <ul class="menu menu-lg">
        <li>
            <button class="btn btn-clear">
                <span>Home</span>
                <div class="grow"></div>
                <span class="tag tag-sm">⌘K</span>
            </button>
        </li>
        <li>
            <button class="btn btn-clear">
                <span>Orders</span>
                <div class="grow"></div>
                <span class="tag tag-sm"><span class="status status-sm status-round status-success"></span>NEW</span>
            </button>
        </li>
        <li>
            <button class="btn btn-clear">
                <span>Messages</span>
                <div class="grow"></div>
                <span class="tag tag-solid tag-sm tag-danger">99+</span>
            </button>
        </li>
    </ul>
</div>
<div class="card card-gutter">
    <ul class="menu menu-inline">
        <li>
            <button class="btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <span>Home</span>
                <span class="tag tag-sm">⌘K</span>
            </button>
        </li>
        <li>
            <button class="btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v7.5m2.25-6.466a9.016 9.016 0 0 0-3.461-.203c-.536.072-.974.478-1.021 1.017a4.559 4.559 0 0 0-.018.402c0 .464.336.844.775.994l2.95 1.012c.44.15.775.53.775.994 0 .136-.006.27-.018.402-.047.539-.485.945-1.021 1.017a9.077 9.077 0 0 1-3.461-.203M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                <span>Orders</span>
                <span class="tag tag-sm"><span class="status status-sm status-round status-success"></span>NEW</span>
            </button>
        </li>
        <li>
            <button class="btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <span>Messages</span>
                <span class="tag tag-solid tag-sm tag-danger">99+</span>
            </button>
        </li>
    </ul>
</div>`}/>

                <h4 id="divider">Divider</h4>

                <Preview code={`<div class="card card-gutter">
    <ul class="menu menu-lg">
        <li>
            <button class="btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <span>Home</span>
                <div class="grow"></div>
            </button>
        </li>
        <li>
            <button class="btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
                <span>Products</span>
                <div class="grow"></div>
            </button>
        </li>
        <li>
            <button class="btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v7.5m2.25-6.466a9.016 9.016 0 0 0-3.461-.203c-.536.072-.974.478-1.021 1.017a4.559 4.559 0 0 0-.018.402c0 .464.336.844.775.994l2.95 1.012c.44.15.775.53.775.994 0 .136-.006.27-.018.402-.047.539-.485.945-1.021 1.017a9.077 9.077 0 0 1-3.461-.203M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                <span>Orders</span>
                <div class="grow"></div>
            </button>
        </li>
    </ul>
    <div class="divider"></div>
    <ul class="menu">
        <li>
            <button class="btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <span>Profile</span>
                <div class="grow"></div>
            </button>
        </li>
        <li>
            <button class="btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <span>Settings</span>
                <div class="grow"></div>
            </button>
        </li>
    </ul>
    <div class="divider"></div>
    <ul class="menu">
        <li>
            <button class="btn btn-clear btn-danger">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                </svg>
                <span>Logout</span>
                <div class="grow"></div>
            </button>
        </li>
    </ul>
</div>
<div class="card flex">
    <ul class="menu menu-inline">
        <li>
            <button class="btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <span>Home</span>
                <div class="grow"></div>
            </button>
        </li>
        <li>
            <button class="btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
                <span>Products</span>
                <div class="grow"></div>
            </button>
        </li>
        <li>
            <button class="btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v7.5m2.25-6.466a9.016 9.016 0 0 0-3.461-.203c-.536.072-.974.478-1.021 1.017a4.559 4.559 0 0 0-.018.402c0 .464.336.844.775.994l2.95 1.012c.44.15.775.53.775.994 0 .136-.006.27-.018.402-.047.539-.485.945-1.021 1.017a9.077 9.077 0 0 1-3.461-.203M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                <span>Orders</span>
                <div class="grow"></div>
            </button>
        </li>
    </ul>
    <div class="divider divider-vertical"></div>
    <ul class="menu menu-inline">
        <li>
            <button class="btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <span>Profile</span>
                <div class="grow"></div>
            </button>
        </li>
        <li>
            <button class="btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <span>Settings</span>
                <div class="grow"></div>
            </button>
        </li>
    </ul>
    <div class="divider divider-vertical"></div>
    <ul class="menu menu-inline">
        <li>
            <button class="btn btn-clear btn-danger">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                </svg>
                <span>Logout</span>
                <div class="grow"></div>
            </button>
        </li>
    </ul>
</div>`}/>

                <h4 id="divider-title">Divider Title</h4>

                <Preview code={`<div class="card">
    <div class="divider divider-start-xs">
        <span class="text-muted text-sm font-medium">DIVIDER AS TITLE</span>
    </div>
    <ul class="menu menu-lg">
        <li>
            <button class="btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <span>Home</span>
                <div class="grow"></div>
            </button>
        </li>
        <li>
            <button class="btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
                <span>Products</span>
                <div class="grow"></div>
            </button>
        </li>
        <li>
            <button class="btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v7.5m2.25-6.466a9.016 9.016 0 0 0-3.461-.203c-.536.072-.974.478-1.021 1.017a4.559 4.559 0 0 0-.018.402c0 .464.336.844.775.994l2.95 1.012c.44.15.775.53.775.994 0 .136-.006.27-.018.402-.047.539-.485.945-1.021 1.017a9.077 9.077 0 0 1-3.461-.203M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                <span>Orders</span>
                <div class="grow"></div>
            </button>
        </li>
    </ul>
    <div class="divider divider-start-xs my-2">
        <span class="text-muted text-sm font-medium">ACCOUNT</span>
    </div>
    <ul class="menu">
        <li>
            <button class="btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <span>Profile</span>
                <div class="grow"></div>
            </button>
        </li>
        <li>
            <button class="btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <span>Settings</span>
                <div class="grow"></div>
            </button>
        </li>
    </ul>
    <div class="divider divider-start-xs my-2">
        <span class="text-muted text-sm font-medium">DANGER ZONE</span>
    </div>
    <ul class="menu">
        <li>
            <button class="btn btn-clear btn-danger">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                </svg>
                <span>Logout</span>
                <div class="grow"></div>
            </button>
        </li>
    </ul>
</div>`}/>

                <h4 id="title">Title</h4>

                <Preview code={`<div class="flex flex-wrap gap-8">
    <div class="card h-fit">
        <ul class="menu menu-lg">
            <li>
                <span class="menu-title">Menu Title</span>
            </li>
            <li>
                <button class="btn btn-clear">
                    <span>Home</span>
                </button>
            </li>
            <li>
                <button class="btn btn-clear">
                    <span>Profile</span>
                </button>
            </li>
            <li>
                <button class="btn btn-clear">
                    <span>Settings</span>
                </button>
            </li>
        </ul>
    </div>
    <div class="card h-fit">
        <ul class="menu menu-lg">
            <li>
                <div class="menu-title">
                    <span>Pushed Title</span>
                    <span class="grow"></span>
                </div>
            </li>
            <li>
                <button class="btn btn-clear">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <span>Home</span>
                    <div class="grow"></div>
                </button>
            </li>
            <li>
                <button class="btn btn-clear">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <span>Profile</span>
                    <div class="grow"></div>
                </button>
            </li>
            <li>
                <button class="btn btn-clear">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <span>Settings</span>
                    <div class="grow"></div>
                </button>
            </li>
        </ul>
    </div>
</div>`}/>

                <h4 id="title-as-parent">Title as Parent</h4>

                <Preview code={`<div class="card">
    <ul class="menu menu-lg">
        <li>
            <button class="btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <span>Home</span>
                <div class="grow"></div>
            </button>
        </li>
        <li>
            <button class="btn btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v7.5m2.25-6.466a9.016 9.016 0 0 0-3.461-.203c-.536.072-.974.478-1.021 1.017a4.559 4.559 0 0 0-.018.402c0 .464.336.844.775.994l2.95 1.012c.44.15.775.53.775.994 0 .136-.006.27-.018.402-.047.539-.485.945-1.021 1.017a9.077 9.077 0 0 1-3.461-.203M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                <span>Orders</span>
                <div class="grow"></div>
            </button>
        </li>
        <li>
            <div class="menu-title">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
                <span>Title As Parent</span>
                <span class="grow"></span>
            </div>
            <ul class="menu-open">
                <li>
                    <button class="btn btn-clear">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <span>Profile</span>
                        <div class="grow"></div>
                    </button>
                </li>
                <li>
                    <button class="btn btn-clear">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <span>Settings</span>
                        <div class="grow"></div>
                    </button>
                </li>
            </ul>
        </li>
        <li>
            <button class="btn btn-clear btn-danger">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                </svg>
                <span>Logout</span>
                <div class="grow"></div>
            </button>
        </li>
    </ul>
</div>`}/>

                <h4 id="mega-menu">Mega Menu</h4>

                <p>Responsive breakpoints can be used with <Link to="#inline" className="btn btn-link btn-accent">Inline Menu</Link> class <code className="tag">menu-inline</code> to enable responsive layout.</p>

                <Preview code={`<div class="card flex flex-wrap">
    <ul class="menu md:menu-inline">
        <li>
            <div class="menu-title">
                <span>Home</span>
                <span class="grow"></span>
            </div>
            <ul>
                <li>
                    <button class="btn btn-clear">
                        <span>About Us</span>
                        <span class="grow"></span>
                    </button>
                </li>
                <li>
                    <button class="btn btn-clear">
                        <span>Contact</span>
                        <span class="grow"></span>
                    </button>
                </li>
                <li>
                    <button class="btn btn-clear">
                        <span>Career</span>
                        <span class="grow"></span>
                    </button>
                </li>
                <li>
                    <button class="btn btn-clear">
                        <span>Press</span>
                        <span class="grow"></span>
                    </button>
                </li>
            </ul>
        </li>
        <li>
            <div class="menu-title">
                <span>Merchant</span>
                <span class="grow"></span>
            </div>
            <ul>
                <li>
                    <button class="btn btn-clear">
                        <span>Sell Online</span>
                        <span class="grow"></span>
                    </button>
                </li>
                <li>
                    <button class="btn btn-clear">
                        <span>Guides</span>
                        <span class="grow"></span>
                    </button>
                </li>
                <li>
                    <button class="btn btn-clear">
                        <span>Fundings</span>
                        <span class="grow"></span>
                    </button>
                </li>
                <li>
                    <button class="btn btn-clear">
                        <span>Community Month</span>
                        <span class="grow"></span>
                    </button>
                </li>
                <li>
                    <button class="btn btn-clear">
                        <span>Corporate Responsibility</span>
                        <span class="grow"></span>
                    </button>
                </li>
                <li>
                    <button class="btn btn-clear">
                        <span>Success Stories</span>
                        <span class="grow"></span>
                    </button>
                </li>
            </ul>
        </li>
        <li>
            <div class="menu-title">
                <span>Quick Links</span>
                <span class="grow"></span>
            </div>
            <ul>
                <li>
                    <button class="btn btn-clear">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288" />
                        </svg>
                        <span>Help Centre</span>
                        <span class="grow"></span>
                    </button>
                </li>
                <li>
                    <button class="btn btn-clear">
                        <span>Mobile App</span>
                        <span class="grow"></span>
                    </button>
                </li>
                <li>
                    <button class="btn btn-clear">
                        <span>Developer Portal</span>
                        <span class="grow"></span>
                    </button>
                    <ul>
                        <li>
                            <button class="btn btn-clear">
                                <span>Sandbox Account</span>
                                <span class="grow"></span>
                            </button>
                        </li>
                        <li>
                            <button class="btn btn-clear">
                                <span>API Documentation</span>
                                <span class="grow"></span>
                            </button>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>
            <div class="menu-title">
                <span>Terms of Use</span>
                <span class="grow"></span>
            </div>
            <ul>
                <li>
                    <button class="btn btn-clear">
                        <span>Terms & Policies</span>
                        <span class="grow"></span>
                    </button>
                </li>
                <li>
                    <button class="btn btn-clear">
                        <span>Privacy Notice</span>
                        <span class="grow"></span>
                    </button>
                </li>
            </ul>
        </li>
    </ul>
</div>`}/>

                <h4 id="sink">Sink</h4>

                <Preview code={`<div class="grid justify-items-center gap-8">
    <ul class="menu menu-lg sink">
        <li>
            <button class="btn btn-clear">
                <span>Home</span>
            </button>
        </li>
        <li>
            <button class="btn btn-clear">
                <span>Profile</span>
            </button>
        </li>
        <li>
            <button class="btn btn-clear">
                <span>Settings</span>
            </button>
        </li>
        <li>
            <button class="btn btn-clear">
                <span>Logout</span>
            </button>
        </li>
    </ul>
    <ul class="menu menu-inline sink">
        <li>
            <button class="btn btn-clear">
                <span>Home</span>
            </button>
        </li>
        <li>
            <button class="btn btn-clear">
                <span>Profile</span>
            </button>
        </li>
        <li>
            <button class="btn btn-clear">
                <span>Settings</span>
            </button>
        </li>
        <li>
            <button class="btn btn-clear">
                <span>Logout</span>
            </button>
        </li>
    </ul>
</div>`}/>

                <PageFooterNav>
                    <PrevPageNav href="/components/card">Card</PrevPageNav>
                    <NextPageNav href="/components/modal">Modal</NextPageNav>
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
                            title: "Card",
                            href: "#card",
                        },
                        {
                            title: "Icon",
                            href: "#icon",
                        },
                    ]
                },
                {
                    title: "Sizes",
                    href: "#sizes",
                    nested: [
                        {
                            title: "Small Sizes",
                            href: "#small-sizes",
                        },
                        {
                            title: "Medium Sizes",
                            href: "#medium-sizes",
                        },
                        {
                            title: "Large Sizes",
                            href: "#large-sizes",
                        },
                        {
                            title: "Extra Large Sizes",
                            href: "#extra-large-sizes",
                        },
                    ]
                },
                {
                    title: "Variants",
                    href: "#variants",
                    nested: [
                        {
                            title: "Inline Menu",
                            href: "#inline",
                        },
                        {
                            title: "Nested Menu",
                            href: "#nested",
                        },
                        {
                            title: "Nested Inline Menu",
                            href: "#nested-inline",
                        },
                        {
                            title: "Collapsible Menu",
                            href: "#collapsible",
                        },
                        {
                            title: "Collapsible Inline Menu",
                            href: "#collapsible-inline",
                        },
                        {
                            title: "Dropdown",
                            href: "#dropdown",
                        },
                        {
                            title: "Tag",
                            href: "#tag",
                        },
                        {
                            title: "Divider",
                            href: "#divider",
                        },
                        {
                            title: "Divider Title",
                            href: "#divider-title",
                        },
                        {
                            title: "Title",
                            href: "#title",
                        },
                        {
                            title: "Title as Parent",
                            href: "#title-as-parent",
                        },
                        {
                            title: "Mega Menu",
                            href: "#mega-menu",
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

export default Menu;