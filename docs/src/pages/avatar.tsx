import { Link } from "react-router";
import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import TableOfContent from "../components/TableOfContent";
import Preview from "../components/Preview";
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";

function Avatar() {
    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>COMPONENT</BreadcrumbItem>
                </Breadcrumb>

                <h2>Avatar</h2>

                <h6>The <strong>Avatar</strong> component displays user profile images, initials, or placeholder icons in a consistent format.</h6>

                <h3 id="usage">Usage</h3>

                <h4 id="basic">Basic</h4>

                <Preview code={`<div class="avatar">
    <img src="/img/user1.jpg" alt="User1" />
</div>`}>
                    <div className="mx-auto w-fit">
                        <div className="avatar">
                            <img src="/img/user1.jpg" alt="User1" />
                        </div>
                    </div>
                </Preview>

                <h4 id="initials">Initials</h4>

                <Preview code={`<div class="avatar">
    <span>JD</span>
</div>`}>
                    <div className="mx-auto w-fit">
                        <div className="avatar">
                            <span>JD</span>
                        </div>
                    </div>
                </Preview>

                <h4 id="icon">Icon</h4>

                <Preview code={`<div class="avatar">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
</div>`}>
                    <div className="mx-auto w-fit">
                        <div className="avatar">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                    </div>
                </Preview>

                <h3 id="styles">Styles</h3>

                <h4 id="sizes">Sizes</h4>

                <Preview code={`<div class="avatar avatar-xs">
    <img src="/img/user1.jpg" alt="Extra Small Avatar" />
</div>
<div class="avatar avatar-sm">
    <img src="/img/user1.jpg" alt="Small Avatar" />
</div>
<div class="avatar">
    <img src="/img/user1.jpg" alt="Default Avatar" />
</div>
<div class="avatar avatar-lg">
    <img src="/img/user1.jpg" alt="Large Avatar" />
</div>
<div class="avatar avatar-xl">
    <img src="/img/user1.jpg" alt="Extra Large Avatar" />
</div>`}>
                    <div className="flex flex-wrap items-center gap-8 mx-auto w-fit">
                        <div className="avatar avatar-xs">
                            <img src="/img/user1.jpg" alt="Extra Small Avatar" />
                        </div>
                        <div className="avatar avatar-sm">
                            <img src="/img/user1.jpg" alt="Small Avatar" />
                        </div>
                        <div className="avatar">
                            <img src="/img/user1.jpg" alt="Default Avatar" />
                        </div>
                        <div className="avatar avatar-lg">
                            <img src="/img/user1.jpg" alt="Large Avatar" />
                        </div>
                        <div className="avatar avatar-xl">
                            <img src="/img/user1.jpg" alt="Extra Large Avatar" />
                        </div>
                    </div>
                </Preview>

                <h4 id="colours">Colours</h4>

                <Preview code={`<div class="avatar avatar-primary">
    <span>PR</span>
</div>
<div class="avatar avatar-accent">
    <span>AC</span>
</div>
<div class="avatar avatar-success">
    <span>SU</span>
</div>
<div class="avatar avatar-warning">
    <span>WA</span>
</div>
<div class="avatar avatar-danger">
    <span>DA</span>
</div>

<div class="avatar avatar-primary">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
</div>
<div class="avatar avatar-accent">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
</div>
<div class="avatar avatar-success">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
</div>
<div class="avatar avatar-warning">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
</div>
<div class="avatar avatar-danger">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
</div>`}>
                    <div className="flex flex-wrap items-center gap-8 mx-auto mb-8 w-fit">
                        <div className="avatar avatar-primary">
                            <span>PR</span>
                        </div>
                        <div className="avatar avatar-accent">
                            <span>AC</span>
                        </div>
                        <div className="avatar avatar-success">
                            <span>SU</span>
                        </div>
                        <div className="avatar avatar-warning">
                            <span>WA</span>
                        </div>
                        <div className="avatar avatar-danger">
                            <span>DA</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-8 mx-auto w-fit">
                        <div className="avatar avatar-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                        <div className="avatar avatar-accent">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                        <div className="avatar avatar-success">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                        <div className="avatar avatar-warning">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                        <div className="avatar avatar-danger">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                    </div>
                </Preview>

                <h4 id="soft">Soft</h4>

                <Preview code={`<div class="avatar avatar-soft avatar-primary">
    <span>PR</span>
</div>
<div class="avatar avatar-soft avatar-accent">
    <span>AC</span>
</div>
<div class="avatar avatar-soft avatar-success">
    <span>SU</span>
</div>
<div class="avatar avatar-soft avatar-warning">
    <span>WA</span>
</div>
<div class="avatar avatar-soft avatar-danger">
    <span>DA</span>
</div>

<div class="avatar avatar-soft avatar-primary">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
</div>
<div class="avatar avatar-soft avatar-accent">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
</div>
<div class="avatar avatar-soft avatar-success">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
</div>
<div class="avatar avatar-soft avatar-warning">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
</div>
<div class="avatar avatar-soft avatar-danger">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
</div>`}>
                    <div className="flex flex-wrap items-center gap-8 mx-auto mb-8 w-fit">
                        <div className="avatar avatar-soft avatar-primary">
                            <span>PR</span>
                        </div>
                        <div className="avatar avatar-soft avatar-accent">
                            <span>AC</span>
                        </div>
                        <div className="avatar avatar-soft avatar-success">
                            <span>SU</span>
                        </div>
                        <div className="avatar avatar-soft avatar-warning">
                            <span>WA</span>
                        </div>
                        <div className="avatar avatar-soft avatar-danger">
                            <span>DA</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-8 mx-auto w-fit">
                        <div className="avatar avatar-soft avatar-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                        <div className="avatar avatar-soft avatar-accent">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                        <div className="avatar avatar-soft avatar-success">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                        <div className="avatar avatar-soft avatar-warning">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                        <div className="avatar avatar-soft avatar-danger">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                    </div>
                </Preview>

                <h3 id="variants">Variants</h3>

                <h4 id="circle">Circle</h4>

                <Preview code={`<div class="avatar avatar-circle">
    <img src="/img/user1.jpg" alt="User1" />
</div>
<div class="avatar avatar-circle">
    <span>JD</span>
</div>
<div class="avatar avatar-circle">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
</div>
<div class="avatar avatar-circle avatar-primary">
    <span>PR</span>
</div>`}>
                    <div className="flex flex-wrap items-center gap-8 mx-auto w-fit">
                        <div className="avatar avatar-circle">
                            <img src="/img/user1.jpg" alt="User1" />
                        </div>
                        <div className="avatar avatar-circle">
                            <span>JD</span>
                        </div>
                        <div className="avatar avatar-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                        <div className="avatar avatar-circle avatar-primary">
                            <span>PR</span>
                        </div>
                    </div>
                </Preview>

                <h4 id="ring">Ring</h4>

                <Preview code={`<div class="avatar avatar-ring">
    <img src="/img/user1.jpg" alt="User1" />
</div>
<div class="avatar avatar-ring">
    <span>JD</span>
</div>
<div class="avatar avatar-ring avatar-primary">
    <span>PR</span>
</div>

<div class="avatar avatar-circle avatar-ring">
    <img src="/img/user1.jpg" alt="User1" />
</div>
<div class="avatar avatar-circle avatar-ring">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
</div>
<div class="avatar avatar-circle avatar-ring avatar-primary">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
</div>`}>
                    <div className="flex flex-wrap items-center gap-8 mx-auto mb-8 w-fit">
                        <div className="avatar avatar-ring">
                            <img src="/img/user1.jpg" alt="User1" />
                        </div>
                        <div className="avatar avatar-ring">
                            <span>JD</span>
                        </div>
                        <div className="avatar avatar-ring avatar-primary">
                            <span>PR</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-8 mx-auto w-fit">
                        <div className="avatar avatar-circle avatar-ring">
                            <img src="/img/user1.jpg" alt="User1" />
                        </div>
                        <div className="avatar avatar-circle avatar-ring">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                        <div className="avatar avatar-circle avatar-ring avatar-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                    </div>
                </Preview>

                <h4 id="ring-colour">Ring Colour</h4>

                <p>The <code className="tag"><pre>avatar-ring-[colour]</pre></code> attribute can be used to set the ring colour regardless of the avatar base colour.</p>

                <Preview code={`<div class="avatar avatar-ring avatar-ring-primary">
    <span>PR</span>
</div>
<div class="avatar avatar-ring avatar-ring-accent">
    <span>AC</span>
</div>
<div class="avatar avatar-ring avatar-ring-success">
    <span>SU</span>
</div>
<div class="avatar avatar-ring avatar-ring-warning">
    <span>WA</span>
</div>
<div class="avatar avatar-ring avatar-ring-danger">
    <span>DA</span>
</div>

<div class="avatar avatar-circle avatar-ring avatar-ring-primary">
    <img src="/img/user1.jpg" alt="User1" />
</div>
<div class="avatar avatar-circle avatar-ring avatar-ring-accent">
    <img src="/img/user1.jpg" alt="User1" />
</div>
<div class="avatar avatar-circle avatar-ring avatar-ring-success">
    <img src="/img/user1.jpg" alt="User1" />
</div>
<div class="avatar avatar-circle avatar-ring avatar-ring-warning">
    <img src="/img/user1.jpg" alt="User1" />
</div>
<div class="avatar avatar-circle avatar-ring avatar-ring-danger">
    <img src="/img/user1.jpg" alt="User1" />
</div>`}>
                    <div className="flex flex-wrap items-center gap-8 mx-auto mb-8 w-fit">
                        <div className="avatar avatar-ring avatar-ring-primary">
                            <span>PR</span>
                        </div>
                        <div className="avatar avatar-ring avatar-ring-accent">
                            <span>AC</span>
                        </div>
                        <div className="avatar avatar-ring avatar-ring-success">
                            <span>SU</span>
                        </div>
                        <div className="avatar avatar-ring avatar-ring-warning">
                            <span>WA</span>
                        </div>
                        <div className="avatar avatar-ring avatar-ring-danger">
                            <span>DA</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-8 mx-auto w-fit">
                        <div className="avatar avatar-circle avatar-ring avatar-ring-primary">
                            <img src="/img/user1.jpg" alt="User1" />
                        </div>
                        <div className="avatar avatar-circle avatar-ring avatar-ring-accent">
                            <img src="/img/user1.jpg" alt="User1" />
                        </div>
                        <div className="avatar avatar-circle avatar-ring avatar-ring-success">
                            <img src="/img/user1.jpg" alt="User1" />
                        </div>
                        <div className="avatar avatar-circle avatar-ring avatar-ring-warning">
                            <img src="/img/user1.jpg" alt="User1" />
                        </div>
                        <div className="avatar avatar-circle avatar-ring avatar-ring-danger">
                            <img src="/img/user1.jpg" alt="User1" />
                        </div>
                    </div>
                </Preview>

                <h4 id="ring-bold">Ring Bold</h4>

                <Preview code={`<div class="avatar avatar-ring-bold avatar-ring-accent">
    <span>JD</span>
</div>
<div class="avatar avatar-circle avatar-ring-bold avatar-ring-accent">
    <img src="/img/user1.jpg" alt="User1" />
</div>`}>
                    <div className="grid items-center gap-8 mx-auto w-fit">
                        <div className="avatar avatar-ring-bold avatar-ring-accent">
                            <span>JD</span>
                        </div>
                        <div className="avatar avatar-circle avatar-ring-bold avatar-ring-accent">
                            <img src="/img/user1.jpg" alt="User1" />
                        </div>
                    </div>
                </Preview>

                <h4 id="status-badge">Status Badge</h4>

                <p>Enclose the <code className="tag"><pre>avatar</pre></code> component within <code className="tag"><pre>relative w-fit</pre></code> element to add a <Link to="/components/badge" className="btn btn-link btn-accent">badge</Link> + <Link to="/components/status" className="btn btn-link btn-accent">status</Link> indicator component.</p>

                <Preview code={`<div class="relative w-fit">
    <div class="avatar">
        <span>JD</span>
    </div>
    <span class="badge badge-bottom-right badge-tight status status-round status-ring status-success"></span>
</div>
<div class="relative w-fit">
    <div class="avatar avatar-circle">
        <img src="/img/user1.jpg" alt="User1" />
    </div>
    <span class="badge badge-bottom-right badge-tight status status-round status-ring status-success"></span>
</div>`}>
                    <div className="grid items-center gap-8 mx-auto w-fit">
                        <div className="relative w-fit">
                            <div className="avatar">
                                <span>JD</span>
                            </div>
                            <span className="badge badge-bottom-right badge-tight status status-round status-ring status-success"></span>
                        </div>
                        <div className="relative w-fit">
                            <div className="avatar avatar-circle">
                                <img src="/img/user1.jpg" alt="User1" />
                            </div>
                            <span className="badge badge-bottom-right badge-tight status status-round status-ring status-success"></span>
                        </div>
                    </div>
                </Preview>

                <h4 id="group">Group</h4>

                <Preview code={`<div class="avatar-group">
    <div class="avatar avatar-circle">
        <img src="/img/user1.jpg" alt="User1" />
    </div>
    <div class="avatar avatar-circle">
        <span>JD</span>
    </div>
    <div class="avatar avatar-circle">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
    </div>
    <div class="avatar avatar-circle avatar-primary">
        <span>+9</span>
    </div>
</div>`}>
                    <div className="grid grid-f items-center gap-8 mx-auto w-fit">
                        <div className="avatar-group">
                            <div className="avatar avatar-circle">
                                <img src="/img/user1.jpg" alt="User1" />
                            </div>
                            <div className="avatar avatar-circle">
                                <span>JD</span>
                            </div>
                            <div className="avatar avatar-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </div>
                            <div className="avatar avatar-circle avatar-primary">
                                <span>+9</span>
                            </div>
                        </div>
                    </div>
                </Preview>

                <h4 id="group-compact">Group Compact</h4>

                <Preview code={`<div class="avatar-group avatar-group-compact">
    <div class="avatar avatar-circle">
        <img src="/img/user1.jpg" alt="User1" />
    </div>
    <div class="avatar avatar-circle">
        <span>JD</span>
    </div>
    <div class="avatar avatar-circle">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
    </div>
    <div class="avatar avatar-circle avatar-primary">
        <span>+9</span>
    </div>
</div>`}>
                    <div className="grid grid-f items-center gap-8 mx-auto w-fit">
                        <div className="avatar-group avatar-group-compact">
                            <div className="avatar avatar-circle">
                                <img src="/img/user1.jpg" alt="User1" />
                            </div>
                            <div className="avatar avatar-circle">
                                <span>JD</span>
                            </div>
                            <div className="avatar avatar-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </div>
                            <div className="avatar avatar-circle avatar-primary">
                                <span>+9</span>
                            </div>
                        </div>
                    </div>
                </Preview>

                <PageFooterNav>
                    <PrevPageNav href="/components/alert">Alert</PrevPageNav>
                    <NextPageNav href="/components/badge">Badge</NextPageNav>
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
                            title: "Initials",
                            href: "#initials",
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
                            title: "Sizes",
                            href: "#sizes",
                        },
                        {
                            title: "Colours",
                            href: "#colours",
                        },
                        {
                            title: "Soft",
                            href: "#soft",
                        },
                    ]
                },
                {
                    title: "Variants",
                    href: "#variants",
                    nested: [
                        {
                            title: "Circle",
                            href: "#circle",
                        },
                        {
                            title: "Ring",
                            href: "#ring",
                        },
                        {
                            title: "Ring Colour",
                            href: "#ring-colour",
                        },
                        {
                            title: "Ring Bold",
                            href: "#ring-bold",
                        },
                        {
                            title: "Status Badge",
                            href: "#status-badge",
                        },
                        {
                            title: "Group",
                            href: "#group",
                        },
                        {
                            title: "Group Compact",
                            href: "#group-compact",
                        },
                    ]
                },
            ]}/>
        </>
    );
};

export default Avatar;