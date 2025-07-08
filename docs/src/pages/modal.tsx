import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import Preview from "../components/Preview";
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";
import TableOfContent from "../components/TableOfContent";

function Modal() {

    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>COMPONENT</BreadcrumbItem>
                </Breadcrumb>

                <h2>Modal</h2>

                <h6>A flexible, customizable modal dialog component with various sizes and configuration.</h6>

                <h3 id="usage">Usage</h3>

                <h4 id="basic">Basic</h4>

                <Preview code={`<dialog class="modal card">
    <div class="card-body">
        <div class="card-title">
            <h5>Modal Title</h5>
        </div>
        <p>This is a basic modal dialog. You can put any content here.</p>
    </div>
</dialog>

<button class="btn" onclick="document.querySelector('.modal').showModal()">Open Modal</button>`}/>

                <h4 id="backdrop-dismiss">Backdrop Dismiss</h4>

                <p>Use the <code className="tag">modal-dismiss-backdrop</code> class on <code className="tag">&lt;form method="dialog"&gt;</code> to allow closing the modal by clicking outside of it.</p>

                <Preview code={`<dialog class="modal card">
    <div class="card-body">
        <div class="card-title">
            <h5>Backdrop Dismissible Modal</h5>
        </div>
        <p>Close the modal by clicking outside of it.</p>
    </div>
    <form method="dialog" class="modal-dismiss-backdrop">
        <button>close</button>
    </form>
</dialog>

<button class="btn" onclick="document.querySelector('.modal').showModal()">Open Modal</button>`}/>

                <h5 id="button-dismiss">Button Dismiss</h5>

                <Preview code={`<dialog class="modal card card-center">
    <div class="card-body">
        <div class="card-title">
            <h5>Dismissible Modal</h5>
        </div>
        <p>Close the modal by pressing the button.</p>
        <form method="dialog">
            <div class="card-actions">
                <button class="btn">Close Modal</button>
            </div>
        </form>
    </div>
</dialog>

<button class="btn" onclick="document.querySelector('.modal').showModal()">Open Modal</button>`}/>

                <h5 id="static-backdrop">Static Backdrop</h5>

                <p>Add an empty <code className="tag">modal-static</code> class element to prevent closing on backdrop with a rebounce animation instead.</p>

                <div className="alert alert-outline mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                    <span>Additionally, use the <code className="tag">closedby="none"</code> attribute to prevent modal from being closed by pressing the <code className="tag">ESC</code> key in Chrome.</span>
                </div>

                <Preview code={`<dialog class="modal card" closedby="none">
    <div class="modal-static"></div>
    <div class="card-body">
        <div class="card-title">
            <h5>Static Modal</h5>
        </div>
        <p>This modal cannot be closed by clicking outside.</p>
    </div>
</dialog>

<button class="btn" onclick="document.querySelector('.modal').showModal()">Open Static Modal</button>`}/>

                <h3 id="sizes">Sizes</h3>

                <h4 id="small">Small</h4>

                <Preview code={`<dialog class="card modal modal-sm">
    <div class="card-body">
        <div class="card-title">
            <h5>Small Modal</h5>
        </div>
        <p>This is a small modal dialog.</p>
        <form method="dialog">
            <div class="card-actions">
                <button class="btn">Close Modal</button>
            </div>
        </form>
    </div>
</dialog>

<button class="btn" onclick="document.querySelector('.modal').showModal()">Open Small Modal</button>`}/>

                <h4 id="large">Large</h4>

                <Preview code={`<dialog class="modal modal-lg card">
    <div class="card-body">
        <div class="card-title">
            <h5>Large Modal</h5>
        </div>
        <p>This is a large modal dialog with more space for content.</p>
        <form method="dialog">
            <div class="card-actions">
                <button class="btn">Close Modal</button>
            </div>
        </form>
    </div>
</dialog>

<button class="btn" onclick="document.querySelector('.modal').showModal()">Open Large Modal</button>`}/>

                <h4 id="extra-large">Extra Large</h4>

                <Preview code={`<dialog class="modal modal-xl card">
    <div class="card-body">
        <div class="card-title">
            <h5>Extra Large Modal</h5>
        </div>
        <p>This is an extra large modal dialog.</p>
        <form method="dialog">
            <div class="card-actions">
                <button class="btn">Close Modal</button>
            </div>
        </form>
    </div>
</dialog>

<button class="btn" onclick="document.querySelector('.modal').showModal()">Open XL Modal</button>`}/>

                <h4 id="2xl">2XL</h4>

                <Preview code={`<dialog class="modal modal-2xl card">
    <div class="card-body">
        <div class="card-title">
            <h5>2XL Modal</h5>
        </div>
        <p>This is the largest modal size available.</p>
        <form method="dialog">
            <div class="card-actions">
                <button class="btn">Close Modal</button>
            </div>
        </form>
    </div>
</dialog>

<button class="btn" onclick="document.querySelector('.modal').showModal()">Open 2XL Modal</button>`}/>

                <h4 id="focus">Focus (Full Screen)</h4>

                <Preview code={`<dialog class="modal modal-focus card">
    <div class="card-body">
        <div class="card-title">
            <h5>Focus Modal</h5>
        </div>
        <p>This modal takes up the full screen, perfect for immersive experiences or complex workflows that need maximum space.</p>
        <form method="dialog">
            <div class="card-actions">
                <button class="btn">Close Modal</button>
            </div>
        </form>
    </div>
</dialog>

<button class="btn" onclick="document.querySelector('.modal').showModal()">Open Focus Modal</button>`}/>

                <h3 id="positioning">Positioning</h3>

                <h4 id="top">Top</h4>

                <Preview code={`<dialog class="modal modal-top card">
    <div class="card-body">
        <div class="card-title">
            <h5>Top Modal</h5>
        </div>
        <p>This modal slides down from the top of the screen.</p>
        <form method="dialog">
            <div class="card-actions">
                <button class="btn">Close Modal</button>
            </div>
        </form>
    </div>
</dialog>

<button class="btn" onclick="document.querySelector('.modal').showModal()">Open Top Modal</button>`}/>

                <h4 id="bottom">Bottom</h4>

                <Preview code={`<dialog class="modal modal-bottom card">
    <div class="card-body">
        <div class="card-title">
            <h5>Bottom Modal</h5>
        </div>
        <p>This modal slides up from the bottom of the screen.</p>
        <form method="dialog">
            <div class="card-actions">
                <button class="btn">Close Modal</button>
            </div>
        </form>
    </div>
</dialog>

<button class="btn" onclick="document.querySelector('.modal').showModal()">Open Bottom Modal</button>`}/>

                <h4 id="leading">Leading</h4>

                <p>Align the modal to the leading edge of the screen with respect to the document text direction.</p>

                <Preview code={`<dialog class="modal modal-start card">
    <div class="card-body">
        <div class="card-title">
            <h5>Leading Modal</h5>
        </div>
        <p>This modal slides in from the leading edge of the screen.</p>
        <form method="dialog">
            <div class="card-actions">
                <button class="btn">Close Modal</button>
            </div>
        </form>
    </div>
</dialog>

<button class="btn" onclick="document.querySelector('.modal').showModal()">Open Leading Modal</button>`}/>

                <h4 id="trailing">Trailing</h4>

                <p>Align the modal to the trailing edge of the screen with respect to the document text direction.</p>

                <Preview code={`<dialog class="modal modal-end card">
    <div class="card-body">
        <div class="card-title">
            <h5>Trailing Modal</h5>
        </div>
        <p>This modal slides in from the trailing edge of the screen.</p>
        <form method="dialog">
            <div class="card-actions">
                <button class="btn">Close Modal</button>
            </div>
        </form>
    </div>
</dialog>

<button class="btn" onclick="document.querySelector('.modal').showModal()">Open Trailing Modal</button>`}/>

                <h4 id="top-leading">Top Leading</h4>

                <Preview code={`<dialog class="modal modal-top-start card">
    <div class="card-body">
        <div class="card-title">
            <h5>Top Leading Modal</h5>
        </div>
        <p>This modal slides in from the top leading edge of the screen.</p>
        <form method="dialog">
            <div class="card-actions">
                <button class="btn">Close Modal</button>
            </div>
        </form>
    </div>
</dialog>

<button class="btn" onclick="document.querySelector('.modal').showModal()">Open Top Leading Modal</button>`}/>

                <h4 id="bottom-leading">Bottom Leading</h4>

                <Preview code={`<dialog class="modal modal-bottom-start card">
    <div class="card-body">
        <div class="card-title">
            <h5>Bottom Leading Modal</h5>
        </div>
        <p>This modal slides in from the bottom leading edge of the screen.</p>
        <form method="dialog">
            <div class="card-actions">
                <button class="btn">Close Modal</button>
            </div>
        </form>
    </div>
</dialog>

<button class="btn" onclick="document.querySelector('.modal').showModal()">Open Bottom Leading Modal</button>`}/>

                <h4 id="top-trailing">Top Trailing</h4>

                <Preview code={`<dialog class="modal modal-top-end card">
    <div class="card-body">
        <div class="card-title">
            <h5>Top Trailing Modal</h5>
        </div>
        <p>This modal slides in from the top trailing edge of the screen.</p>
        <form method="dialog">
            <div class="card-actions">
                <button class="btn">Close Modal</button>
            </div>
        </form>
    </div>
</dialog>

<button class="btn" onclick="document.querySelector('.modal').showModal()">Open Top Trailing Modal</button>`}/>

                <h4 id="bottom-trailing">Bottom Trailing</h4>

                <Preview code={`<dialog class="modal modal-bottom-end card">
    <div class="card-body">
        <div class="card-title">
            <h5>Bottom Trailing Modal</h5>
        </div>
        <p>This modal slides in from the bottom trailing edge of the screen.</p>
        <form method="dialog">
            <div class="card-actions">
                <button class="btn">Close Modal</button>
            </div>
        </form>
    </div>
</dialog>

<button class="btn" onclick="document.querySelector('.modal').showModal()">Open Bottom Trailing Modal</button>`}/>

                <h4 id="left">Left</h4>

                <Preview code={`<dialog class="modal modal-left card">
    <div class="card-body">
        <div class="card-title">
            <h5>Left Modal</h5>
        </div>
        <p>This modal slides in from the left side of the screen.</p>
        <form method="dialog">
            <div class="card-actions">
                <button class="btn">Close Modal</button>
            </div>
        </form>
    </div>
</dialog>

<button class="btn" onclick="document.querySelector('.modal').showModal()">Open Left Modal</button>`}/>

                <h4 id="right">Right</h4>

                <Preview code={`<dialog class="modal modal-right card">
    <div class="card-body">
        <div class="card-title">
            <h5>Right Modal</h5>
        </div>
        <p>This modal slides in from the right side of the screen.</p>
        <form method="dialog">
            <div class="card-actions">
                <button class="btn">Close Modal</button>
            </div>
        </form>
    </div>
</dialog>

<button class="btn" onclick="document.querySelector('.modal').showModal()">Open Right Modal</button>`}/>

                <h4 id="top-left">Top Left</h4>

                <Preview code={`<dialog class="modal modal-top-left card">
    <div class="card-body">
        <div class="card-title">
            <h5>Top Left Modal</h5>
        </div>
        <p>This modal slides in from the top left edge of the screen.</p>
        <form method="dialog">
            <div class="card-actions">
                <button class="btn">Close Modal</button>
            </div>
        </form>
    </div>
</dialog>

<button class="btn" onclick="document.querySelector('.modal').showModal()">Open Top Left Modal</button>`}/>

                <h4 id="top-right">Top Right</h4>

                <Preview code={`<dialog class="modal modal-top-right card">
    <div class="card-body">
        <div class="card-title">
            <h5>Top Right Modal</h5>
        </div>
        <p>This modal slides in from the top right edge of the screen.</p>
        <form method="dialog">
            <div class="card-actions">
                <button class="btn">Close Modal</button>
            </div>
        </form>
    </div>
</dialog>

<button class="btn" onclick="document.querySelector('.modal').showModal()">Open Top Right Modal</button>`}/>

                <h4 id="bottom-left">Bottom Left</h4>

                <Preview code={`<dialog class="modal modal-bottom-left card">
    <div class="card-body">
        <div class="card-title">
            <h5>Bottom Left Modal</h5>
        </div>
        <p>This modal slides in from the bottom left edge of the screen.</p>
        <form method="dialog">
            <div class="card-actions">
                <button class="btn">Close Modal</button>
            </div>
        </form>
    </div>
</dialog>

<button class="btn" onclick="document.querySelector('.modal').showModal()">Open Bottom Left Modal</button>`}/>

                <h4 id="bottom-right">Bottom Right</h4>

                <Preview code={`<dialog class="modal modal-bottom-right card">
    <div class="card-body">
        <div class="card-title">
            <h5>Bottom Right Modal</h5>
        </div>
        <p>This modal slides in from the bottom right edge of the screen.</p>
        <form method="dialog">
            <div class="card-actions">
                <button class="btn">Close Modal</button>
            </div>
        </form>
    </div>
</dialog>

<button class="btn" onclick="document.querySelector('.modal').showModal()">Open Bottom Right Modal</button>`}/>

                <h3 id="variants">Variants</h3>

                <h4 id="scrollable">Scrollable</h4>

                <Preview code={`<dialog class="modal card card-scroll">
    <div class="card-header">
        <div class="card-title">
            <h5>Scrollable Modal</h5>
        </div>
    </div>
    <div class="card-body">
        <p>The long body text is scrollable in this modal.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="card-footer">
        <div class="grow"></div>
        <form method="dialog">
            <div class="card-actions">
                <button class="btn">Close Modal</button>
            </div>
        </form>
    </div>
</dialog>

<button class="btn" onclick="document.querySelector('.modal').showModal()">Open Scrollable Modal</button>`}/>

                <h4 id="stacking">Stacking</h4>

                <Preview code={`<dialog class="modal card" id="modal1">
    <div class="card-header">
        <div class="card-title">
            <h5>First Modal</h5>
        </div>
    </div>
    <div class="card-body">
        <p>The stacking modal.</p>
        <dialog class="modal card" id="modal2">
            <div class="card-header">
                <div class="card-title">
                    <h5>Second Stacking Modal</h5>
                </div>
            </div>
            <div class="card-body">
                <p>The stacking modal 2.</p>
                <dialog class="modal card" id="modal3">
                    <div class="card-header">
                        <div class="card-title">
                            <h5>Third Stacking Modal</h5>
                        </div>
                    </div>
                    <div class="card-body">
                        <p>The stacking modal 3.</p>
                    </div>
                    <div class="card-footer">
                        <div class="grow"></div>
                        <form method="dialog">
                            <div class="card-actions">
                                <button class="btn">Close Modal</button>
                            </div>
                        </form>
                    </div>
                </dialog>
                <button class="btn" onclick="document.getElementById('modal3').showModal()">Open 3rd Stacking Modal</button>
            </div>
            <div class="card-footer">
                <div class="grow"></div>
                <form method="dialog">
                    <div class="card-actions">
                        <button class="btn">Close Modal</button>
                    </div>
                </form>
            </div>
        </dialog>
        <button class="btn" onclick="document.getElementById('modal2').showModal()">Open 2nd Stacking Modal</button>
    </div>
    <div class="card-footer">
        <div class="grow"></div>
        <form method="dialog">
            <div class="card-actions">
                <button class="btn">Close Modal</button>
            </div>
        </form>
    </div>
</dialog>

<button class="btn" onclick="document.getElementById('modal1').showModal()">Open 1st Modal</button>`}/>

                <h3 id="examples">Examples</h3>

                <h4 id="alert">Alert Dialog</h4>

                <Preview code={`<dialog class="modal modal-sm card card-center">
    <div class="modal-static"></div>
    <div class="card-header">
        <div class="card-title">
            <h5>Alert</h5>
        </div>
        <div class="card-actions">
            <form method="dialog">
                <button class="btn btn-icon btn-clear">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </form>
        </div>
    </div>
    <div class="card-body">
        <div class="text-success">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </div>
        <p>Your action has been saved.</p>
        <form method="dialog">
            <div class="card-actions">
                <button class="btn btn-primary w-32">Ok</button>
            </div>
        </form>
    </div>
</dialog>

<button class="btn btn-primary" onclick="document.querySelector('.modal').showModal()">Save</button>`}/>


                <h4 id="confirmation">Confirmation Dialog</h4>

                <Preview code={`<dialog class="modal modal-sm card">
    <div class="modal-static"></div>
    <div class="card-header">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
        </svg>
        <div class="card-title">
            <h5>Confirm Action</h5>
        </div>
    </div>
    <div class="card-body">
        <p>Are you sure you want to delete this item? This action cannot be undone.</p>
    </div>
    <div class="card-footer">
        <div class="grow"></div>
        <form method="dialog">
            <div class="card-actions">
                <button class="btn btn-danger">Delete</button>
                <button class="btn btn-secondary" onclick="this.closest('.modal').close()">Cancel</button>
            </div>
        </form>
    </div>
</dialog>

<button class="btn btn-danger" onclick="document.querySelector('.modal').showModal()">Delete Item</button>`}/>

                <PageFooterNav>
                    <PrevPageNav href="/docs/components/menu">Menu</PrevPageNav>
                    <NextPageNav href="/docs/components/popover">Popover</NextPageNav>
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
                            title: "Backdrop Dismiss",
                            href: "#backdrop-dismiss",
                        },
                        {
                            title: "Button Dismiss",
                            href: "#button-dismiss",
                        },
                        {
                            title: "Static Backdrop",
                            href: "#static-backdrop",
                        },
                    ]
                },
                {
                    title: "Sizes",
                    href: "#sizes",
                    nested: [
                        {
                            title: "Small",
                            href: "#small",
                        },
                        {
                            title: "Large",
                            href: "#large",
                        },
                        {
                            title: "Extra Large",
                            href: "#extra-large",
                        },
                        {
                            title: "2XL",
                            href: "#2xl",
                        },
                        {
                            title: "Focus",
                            href: "#focus",
                        },
                    ]
                },
                {
                    title: "Positioning",
                    href: "#positioning",
                    nested: [
                        {
                            title: "Top",
                            href: "#top",
                        },
                        {
                            title: "Bottom",
                            href: "#bottom",
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
                            title: "Top Leading",
                            href: "#top-leading",
                        },
                        {
                            title: "Top Trailing",
                            href: "#top-trailing",
                        },
                        {
                            title: "Bottom Leading",
                            href: "#bottom-leading",
                        },
                        {
                            title: "Bottom Trailing",
                            href: "#bottom-trailing",
                        },
                        {
                            title: "Left",
                            href: "#left",
                        },
                        {
                            title: "Right",
                            href: "#right",
                        },
                        {
                            title: "Top Left",
                            href: "#top-left",
                        },
                        {
                            title: "Top Right",
                            href: "#top-right",
                        },
                        {
                            title: "Bottom Left",
                            href: "#bottom-left",
                        },
                        {
                            title: "Bottom Right",
                            href: "#bottom-right",
                        },
                    ]
                },
                {
                    title: "Variants",
                    href: "#variants",
                    nested: [
                        {
                            title: "Scrollable",
                            href: "#scrollable",
                        },
                        {
                            title: "Stacking",
                            href: "#stacking",
                        },
                    ]
                },
                {
                    title: "Examples",
                    href: "#examples",
                    nested: [
                        {
                            title: "Alert Dialog",
                            href: "#alert",
                        },
                        {
                            title: "Confirmation Dialog",
                            href: "#confirmation",
                        },
                    ]
                },
            ]}/>
        </>
    )
}

export default Modal;