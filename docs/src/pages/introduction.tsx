import { Link } from "react-router";
import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import CodeBlock from '../components/CodeBlock';
import TableOfContent from '../components/TableOfContent';
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";

function Introduction() {
    const tocItems = [
        { title: "What is TropicUI?", href: "#what" },
        { title: "What is included?", href: "#included" },
        { title: "How to use TropicUI?", href: "#how" },
        { title: "Why should I use TropicUI?", href: "#why" },
        { title: "Design Philosophy", href: "#design-philosophy" },
        { title: "Is TropicUI free?", href: "#free" },
        { title: "How can I support TropicUI?", href: "#support" },
        { title: "Next Steps", href: "#next" }
    ];

    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>GETTING STARTED</BreadcrumbItem>
                </Breadcrumb>

                <h2>Introduction</h2>

                <h6>TropicUI component library is the best UI toolkit for developers to build modern web applications.</h6>

                <div className="card bg-gradient-to-t from-accent-content to-transparent to-80% border border-accent mb-8">
                    <div className="card-body">
                        <div className="card-title">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                            </svg>
                            <h4>Quick Start Guide</h4>
                        </div>
                        <div>Check out the <Link to="/installation" className="btn btn-link btn-accent">Installation Guide</Link> to learn how to install TropicUI and start using it in your project.</div>
                    </div>

                </div>

                <h3 id="what">What is TropicUI?</h3>

                <p>TropicUI is a collection of robust, hand-crafted, and customisable UI components and utilities built on top of Tailwind CSS that can be used to build a consistent user interface for any web application.</p>

                <p>TropicUI primary goal is to streamline frontend development process, allowing developers to focus on building beautiful and adaptable user interfaces and an enhanced user experience.</p>

                <h3 id="included">What is included?</h3>

                <p>TropicUI includes a set of UI components and utilities that can be used to build modern web applications. It is designed to be easy to use and customize.</p>

                <h3 id="how">How to use TropicUI?</h3>

                <p>TropicUI is an NPM package that can be installed freely from the NPM registry. Tailwind CSS is also included as a peer dependency, so you can use it with any other Tailwind CSS framework or library.</p>
                <p>The package contains all the components and utilities written in CSS that can be imported and used in your project immediately without any additional configuration.</p>
                <p>Tailwind CSS classes can be used alongside TropicUI to customise and achieve the desired look and feel of your application.</p>

                <h3 id="why">Why should I use TropicUI?</h3>

                <h6>Choose TropicUI for your project if:</h6>

                <ul className="list-disc list-inside mb-8">
                    <li>You want to build a modern looking web application</li>
                    <li>You want an easy to use UI library that can save you time and effort</li>
                    <li>You want consistent user interface and at the same time easily customisable</li>
                    <li>You want to use a library that is well-documented, well-maintained and up to date</li>
                    <li>You want to use a library that is free and open source</li>
                    <li>You want to use a library that respect the web standards and best practices</li>
                    <li>You want to stay as native to the HTML and CSS standards as possible</li>
                    <li>You need to use a framework-agnostic UI library</li>
                </ul>

                <h6>TropicUI may not be the best choice for you if:</h6>
                
                <ul className="list-disc list-inside mb-8">
                    <li>You want to spend a lot of time customising the UI to your needs</li>
                    <li>You want to get drown in classes</li>
                    <li>You want to write a lot of custom CSS to achieve your desired look and feel</li>
                    <li>You want to re-invent the wheel instead of shipping your product faster</li>
                </ul>

                <h3 id="where">Where can I use TropicUI?</h3>

                <p>TropicUI is framework agnostic and can be used with any web application framework or backend programming language.</p>

                <h3 id="design-philosophy">Design Philosophy</h3>

                <p>We strongly believe in balancing features and standards. We want to provide a set of UI components that are capable and customisable, but also leverage on the native HTML & CSS standards and best practices that get passed on to your projects.</p>

                <h3 id="free">Is TropicUI free?</h3>

                <p>Yes, TropicUI is free and open source. You can use it in your personal and commercial projects.</p>

                <h3 id="support">How can I support TropicUI?</h3>

                <p>If you find TropicUI useful, please consider supporting us by the following means:</p>

                <ul className="list-disc list-inside">
                    <li>Giving us a star on <a href="https://github.com/tropicui/tropicui" target="_blank" rel="noopener noreferrer" className="btn btn-link btn-accent">GitHub</a></li>
                    <li>Sharing the project with your friends and colleagues</li>
                    <li>Submitting bug reports and feature requests on <a href="https://github.com/tropicui/tropicui/issues" target="_blank" rel="noopener noreferrer" className="btn btn-link btn-accent">GitHub Issues</a></li>
                    <li>Make a donation to the project:</li>
                </ul>

                <div className="card bg-gradient-to-b from-success-content to-transparent to-60% border border-success my-8">
                    <div className="card-body">
                        <div className="card-title justify-center">
                            <h4>Support the creator. Make a donation.</h4>
                        </div>
                        <div className="flex items-center justify-around gap-8 pt-4">
                            <a href="https://github.com/sponsors/kenfai" target="_blank" className="btn btn-lg btn-primary">
                                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.2 1.839 1.2 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.299-1.23 3.299-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                                <span>GitHub</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </a>
                            <a href="https://patreon.com/KenFai/membership" target="_blank" className="btn btn-lg btn-primary">
                                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><g transform="matrix(.47407 0 0 .47407 .383 .422)"><clipPath id="prefix__a"><path d="M0 0h1080v1080H0z"/></clipPath><g clip-path="url(#prefix__a)"><path d="M1033.05 324.45c-.19-137.9-107.59-250.92-233.6-291.7-156.48-50.64-362.86-43.3-512.28 27.2-181.1 85.46-237.99 272.66-240.11 459.36-1.74 153.5 13.58 557.79 241.62 560.67 169.44 2.15 194.67-216.18 273.07-321.33 55.78-74.81 127.6-95.94 216.01-117.82 151.95-37.61 255.51-157.53 255.29-316.38z" fill-rule="nonzero"/></g></g></svg>
                                <span>Patreon</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <p>Your support is greatly appreciated and helps us continue to improve and maintain the project.</p>

                <h3 id="next">Next Steps</h3>

                <p>Ready to get started? Check out the <Link to="/installation" className="btn btn-link btn-accent">Installation Guide</Link> to learn how to install TropicUI and start using it in your project and accelerate your development process.</p>

                <PageFooterNav>
                    <div></div>
                    <NextPageNav href="/installation">Installation</NextPageNav>
                </PageFooterNav>
            </div>
            <TableOfContent items={tocItems} />
        </>
    );
}

export default Introduction;