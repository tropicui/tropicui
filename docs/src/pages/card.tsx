import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import TableOfContent from "../components/TableOfContent";
import Preview from "../components/Preview";
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";

function Card() {
    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>COMPONENT</BreadcrumbItem>
                </Breadcrumb>

                <h2>Card</h2>

                <h6>A flexible, customizable card component for displaying content in a contained box with consistent styling for headers, bodies, and footers.</h6>

                <h3 id="usage">Usage</h3>

                <h4 id="basic">Basic</h4>

                <Preview code={`<div class="card">
    <div class="card-body">
        <span>A card UI is best use for enclosing content and actions on a single topic within a contained surface.</span>
    </div>
</div>`}>
                    <div className="card">
                        <div className="card-body">
                            <span>A card UI is best use for enclosing content and actions on a single topic within a contained surface.</span>
                        </div>
                    </div>
                </Preview>

                <h4 id="title">Title</h4>

                <Preview code={`<div class="card">
    <div class="card-body">
        <div class="card-title">
            <h5>Main Title</h5>
        </div>
        <span>A card UI is best use for enclosing content and actions on a single topic within a contained surface.</span>
    </div>
</div>`}>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">
                                <h5>Main Title</h5>
                            </div>
                            <span>A card UI is best use for enclosing content and actions on a single topic within a contained surface.</span>
                        </div>
                    </div>
                </Preview>

                <h4 id="actions">Action Buttons</h4>

                <Preview code={`<div class="card">
    <div class="card-body">
        <p>A card UI is best use for enclosing content and actions on a single topic within a contained surface.</p>
        <div class="card-actions">
            <button class="btn btn-primary">Proceed</button>
            <button class="btn btn-soft">Cancel</button>
        </div>
    </div>
</div>

<div class="card">
    <div class="card-body">
        <p>A card UI is best use for enclosing content and actions on a single topic within a contained surface.</p>
        <div class="card-actions justify-end">
            <button class="btn btn-primary">Proceed</button>
            <button class="btn btn-soft">Cancel</button>
        </div>
    </div>
</div>`}>
                    <div className="grid gap-8">
                        <div className="card">
                            <div className="card-body">
                                <p>A card UI is best use for enclosing content and actions on a single topic within a contained surface.</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Proceed</button>
                                    <button className="btn btn-soft">Cancel</button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <p>A card UI is best use for enclosing content and actions on a single topic within a contained surface.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Proceed</button>
                                    <button className="btn btn-soft">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Preview>

                <h4 id="header">Header</h4>

                <Preview code={`<div class="card">
    <div class="card-header">
        <div class="card-title">
            <h5>Main Title</h5>
        </div>
        <div class="card-actions">
            <div class="grow"></div>
            <button class="btn btn-icon btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </div>
    <div class="card-body">
        <span>A card UI is best use for enclosing content and actions on a single topic within a contained surface.</span>
    </div>
</div>

<div class="card">
    <div class="card-header">
        <div class="card-actions">
            <button class="btn btn-icon btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <div class="grow"></div>
        <div class="card-title">
            <h5>Main Title</h5>
        </div>
    </div>
    <div class="card-body">
        <span>A card UI is best use for enclosing content and actions on a single topic within a contained surface.</span>
    </div>
</div>`}>
                    <div className="grid gap-8">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-title">
                                    <h5>Main Title</h5>
                                </div>
                                <div className="card-actions">
                                    <div className="grow"></div>
                                    <button className="btn btn-icon btn-clear">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <span>A card UI is best use for enclosing content and actions on a single topic within a contained surface.</span>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <div className="card-actions">
                                    <button className="btn btn-icon btn-clear">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="grow"></div>
                                <div className="card-title">
                                    <h5>Main Title</h5>
                                </div>
                            </div>
                            <div className="card-body">
                                <span>A card UI is best use for enclosing content and actions on a single topic within a contained surface.</span>
                            </div>
                        </div>
                    </div>
                </Preview>

                <h4 id="subtitle">Subtitle</h4>

                <Preview code={`<div class="card">
    <div class="card-header">
        <div class="card-title">
            <h5>Main Title</h5>
            <small class="text-muted">Secondary information text</small>
        </div>
        <div class="card-actions">
            <div class="grow"></div>
            <button class="btn btn-icon btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </div>
    <div class="card-body">
        <span>A card UI is best use for enclosing content and actions on a single topic within a contained surface.</span>
    </div>
</div>

<div class="card">
    <div class="card-header">
        <div class="card-title">
            <div>
                <h5>Main Title</h5>
                <small class="text-muted">Secondary information text</small>
            </div>
        </div>
        <div class="card-actions">
            <div class="grow"></div>
            <button class="btn btn-icon btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </div>
    <div class="card-body">
        <span>A card UI is best use for enclosing content and actions on a single topic within a contained surface.</span>
    </div>
</div>`}>
                    <div className="grid gap-8">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-title">
                                    <h5>Main Title</h5>
                                    <small className="text-muted">Secondary information text</small>
                                </div>
                                <div className="card-actions">
                                    <div className="grow"></div>
                                    <button className="btn btn-icon btn-clear">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <span>A card UI is best use for enclosing content and actions on a single topic within a contained surface.</span>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <div className="card-title">
                                    <div>
                                        <h5>Main Title</h5>
                                        <small className="text-muted">Secondary information text</small>
                                    </div>
                                </div>
                                <div className="card-actions">
                                    <div className="grow"></div>
                                    <button className="btn btn-icon btn-clear">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <span>A card UI is best use for enclosing content and actions on a single topic within a contained surface.</span>
                            </div>
                        </div>
                    </div>
                </Preview>

                <h4 id="icon">Icon</h4>

                <Preview code={`<div class="card">
    <div class="card-header">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
        </svg>
        <div class="card-title">
            <h5>Main Title</h5>
            <small class="text-muted">Secondary information text</small>
        </div>
        <div class="card-actions">
            <div class="grow"></div>
            <button class="btn btn-icon btn-clear">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </div>
    <div class="card-body">
        <span>A card UI is best use for enclosing content and actions on a single topic within a contained surface.</span>
    </div>
</div>`}>
                    <div className="card">
                        <div className="card-header">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                            </svg>
                            <div className="card-title">
                                <h5>Main Title</h5>
                                <small className="text-muted">Secondary information text</small>
                            </div>
                            <div className="card-actions">
                                <div className="grow"></div>
                                <button className="btn btn-icon btn-clear">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <span>A card UI is best use for enclosing content and actions on a single topic within a contained surface.</span>
                        </div>
                    </div>
                </Preview>

                <h4 id="footer">Footer</h4>

                <Preview code={`<div class="card">
    <div class="card-body">
        <span>A card UI is best use for enclosing content and actions on a single topic within a contained surface.</span>
    </div>
    <div class="card-footer">
        <div class="card-actions">
            <span class="text-muted">5 results</span>
            <div class="grow"></div>
            <button class="btn btn-clear">Prev</button>
            <button class="btn btn-clear">Next</button>
        </div>
    </div>
</div>`}>
                    <div className="card">
                        <div className="card-body">
                            <span>A card UI is best use for enclosing content and actions on a single topic within a contained surface.</span>
                        </div>
                        <div className="card-footer">
                            <div className="card-actions">
                                <span className="text-muted">5 results</span>
                                <div className="grow"></div>
                                <button className="btn btn-clear">Prev</button>
                                <button className="btn btn-clear">Next</button>
                            </div>
                        </div>
                    </div>
                </Preview>

                <h3 id="styles">Styles</h3>

                <h4 id="border">Border</h4>

                <Preview code={`<div class="card card-border">
    <div class="card-body">
        <span>This card has a border around it.</span>
    </div>
</div>`}>
                    <div className="card card-border">
                        <div className="card-body">
                            <span>This card has a border around it.</span>
                        </div>
                    </div>
                </Preview>

                <h4 id="flat">Flat</h4>

                <Preview code={`<div class="card card-flat">
    <div class="card-body">
        <span>This card has no shadow or border radius.</span>
    </div>
</div>`}>
                    <div className="card card-flat">
                        <div className="card-body">
                            <span>This card has no shadow or border radius.</span>
                        </div>
                    </div>
                </Preview>

                <h4 id="gutter">Gutter</h4>

                <Preview code={`<div class="card card-gutter">
    <div class="card-body">
        <span>First card with spacing at the bottom.</span>
    </div>
</div>
<div class="card">
    <div class="card-body">
        <span>Second card below.</span>
    </div>
</div>`}>
                    <div className="card card-gutter">
                        <div className="card-body">
                            <span>First card with spacing at the bottom.</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <span>Second card below.</span>
                        </div>
                    </div>
                </Preview>

                <h3 id="variants">Variants</h3>

                <h4 id="image">Image</h4>

                <Preview code={`<div class="card">
    <figure class="h-60">
        <img src="/img/house1.jpg" alt="Card image" />
    </figure>
    <div class="card-body">
        <span>This card includes an image cover at the top.</span>
    </div>
</div>`}>
                    <div className="card">
                        <figure className="h-60">
                            <img src="/img/house1.jpg" alt="Card image" />
                        </figure>
                        <div className="card-body">
                            <span>This card includes an image cover at the top.</span>
                        </div>
                    </div>
                </Preview>

                <h4 id="center">Centered Content</h4>

                <Preview code={`<div class="card">
    <div class="card-body card-center">
        <div class="card-title">
            <h4 class="text-center">No Data Found.</h4>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 m-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
        </svg>
        <p class="text-center text-muted">Sorry! But we are unable to find any results matching 'mansion'.</p>
        <div class="card-actions">
            <button class="btn">Try Again</button>
        </div>
    </div>
</div>`}>
                    <div className="card">
                        <div className="card-body card-center">
                            <div className="card-title">
                                <h4 className="text-center">No Data Found.</h4>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10 m-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
                            </svg>
                            <p className="text-center text-muted">Sorry! But we are unable to find any results matching 'mansion'.</p>
                            <div className="card-actions">
                                <button className="btn">Try Again</button>
                            </div>
                        </div>
                    </div>
                </Preview>

                <h4 id="scrollable">Scrollable</h4>

                <Preview code={`<div class="card card-scroll h-84">
    <div class="card-header">
        <div class="card-title">
            <h5>Scrollable Content</h5>
        </div>
    </div>
    <div class="card-body">
        <p>This is a long content that will scroll...</p>
    </div>
</div>`}>
                    <div className="card card-scroll h-84">
                        <div className="card-header">
                            <div className="card-title">
                                <h5>Scrollable Content</h5>
                            </div>
                        </div>
                        <div className="card-body">
                            <p>This is a long content that will scroll...</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate.</p>
                            <p>Excepteur sint occaecat cupidatat non proident.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate.</p>
                            <p>Excepteur sint occaecat cupidatat non proident.</p>
                        </div>
                    </div>
                </Preview>

                <h4 id="sticky-header">Sticky Header</h4>

                <Preview code={`<div class="card">
    <div class="card-header card-sticky">
        <div class="card-title">
            <h5>Sticky Header</h5>
        </div>
    </div>
    <div class="card-body">
        <p>Header stays at top when scrolling...</p>
    </div>
</div>`}>
                    <div className="mb-4"></div>
                    <h3 className="text-muted">Other Content</h3>
                    <h5 className="text-muted">Opening act for the great play by Jean Pierre.</h5>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="text-muted">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="card">
                        <div className="card-header card-sticky">
                            <div className="card-title">
                                <h5>Sticky Header</h5>
                            </div>
                        </div>
                        <div className="card-body">
                            <p>Header stays at top when scrolling...</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate.</p>
                            <p>Excepteur sint occaecat cupidatat non proident.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate.</p>
                            <p>Excepteur sint occaecat cupidatat non proident.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate.</p>
                            <p>Excepteur sint occaecat cupidatat non proident.</p>
                        </div>
                    </div>
                    <div className="mb-8"></div>
                </Preview>

                <h4 id="sticky-footer">Sticky Footer</h4>

                <Preview code={`<div class="card">
    <div class="card-body">
        <p>Footer stays at bottom when scrolling...</p>
    </div>
    <div class="card-footer card-sticky">
        <div class="card-actions">
            <span>Sticky Footer</span>
        </div>
    </div>
</div>`}>
                    <div className="mb-8"></div>
                    <div className="card">
                        <div className="card-body">
                            <p>Footer stays at bottom when scrolling...</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate.</p>
                            <p>Excepteur sint occaecat cupidatat non proident.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate.</p>
                            <p>Excepteur sint occaecat cupidatat non proident.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate.</p>
                            <p>Excepteur sint occaecat cupidatat non proident.</p>
                            <p>Footer goes back to flow upon scrolling.</p>
                        </div>
                        <div className="card-footer card-sticky">
                            <div className="card-actions">
                                <span>Sticky Footer</span>
                            </div>
                        </div>
                    </div>
                    <div className="mb-8"></div>
                    <h3 className="text-muted">Other Content</h3>
                    <h5 className="text-muted">Closing act for the great play by Jean Pierre.</h5>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="text-muted">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Preview>

                <h4 id="join">Join</h4>

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
</div>`}>
                    <div className="join join-row">
                        <div className="card">
                            <figure className="h-60">
                                <img src="/img/house1.jpg" alt="Card image" />
                            </figure>
                            <div className="card-body">
                                <span>First card includes an image cover at the top.</span>
                            </div>
                        </div>
                        <div className="card">
                            <figure className="h-60">
                                <img src="/img/desk1.jpg" alt="Card image" />
                            </figure>
                            <div className="card-body">
                                <span>Second card includes an image cover at the top.</span>
                            </div>
                        </div>
                        <div className="card">
                            <figure className="h-60">
                                <img src="/img/loft1.jpg" alt="Card image" />
                            </figure>
                            <div className="card-body">
                                <span>Third card includes an image cover at the top.</span>
                            </div>
                        </div>
                    </div>
                </Preview>

                <PageFooterNav>
                    <PrevPageNav href="/components/button">Button</PrevPageNav>
                    <NextPageNav href="/components/checkbox">Checkbox</NextPageNav>
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
                                title: "Title",
                                href: "#title",
                            },
                            {
                                title: "Action Buttons",
                                href: "#actions",
                            },
                            {
                                title: "Header",
                                href: "#header",
                            },
                            {
                                title: "Subtitle",
                                href: "#subtitle",
                            },
                            {
                                title: "Icon",
                                href: "#icon",
                            },
                            {
                                title: "Footer",
                                href: "#footer",
                            },
                        ]
                    },
                    {
                        title: "Styles",
                        href: "#styles",
                        nested: [
                            {
                                title: "Border",
                                href: "#border",
                            },
                            {
                                title: "Flat",
                                href: "#flat",
                            },
                            {
                                title: "Gutter",
                                href: "#gutter",
                            },
                        ]
                    },
                    {
                        title: "Variants",
                        href: "#variants",
                        nested: [
                            {
                                title: "Image",
                                href: "#image",
                            },
                            {
                                title: "Centered Content",
                                href: "#center",
                            },
                            {
                                title: "Scrollable",
                                href: "#scrollable",
                            },
                            {
                                title: "Sticky Header",
                                href: "#sticky-header",
                            },
                            {
                                title: "Sticky Footer",
                                href: "#sticky-footer",
                            },
                            {
                                title: "Join",
                                href: "#join",
                            },
                        ]
                    },
                ]}
            />
        </>
    );
}

export default Card;