import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import Preview from "../components/Preview";
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";
import TableOfContent from "../components/TableOfContent";

function Table() {
    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>COMPONENT</BreadcrumbItem>
                </Breadcrumb>

                <h2>Table</h2>

                <h6>A flexible table component for displaying structured data with consistent styling and various layout options.</h6>

                <h3 id="usage">Usage</h3>

                <h4 id="basic">Basic</h4>

                <Preview code={`<table class="table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>Admin</td>
        </tr>
        <tr>
            <td>Jane Smith</td>
            <td>jane@example.com</td>
            <td>User</td>
        </tr>
        <tr>
            <td>Bob Johnson</td>
            <td>bob@example.com</td>
            <td>Moderator</td>
        </tr>
    </tbody>
</table>`}/>

                <h4 id="form-controls">Form Controls</h4>

                <Preview code={`<table class="table">
    <thead>
        <tr>
            <th><input type="checkbox" class="checkbox checkbox-accent"></th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><input type="checkbox" class="checkbox checkbox-accent"></td>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td><span class="badge badge-success">Active</span></td>
            <td>
                <button class="btn btn-sm btn-primary">Edit</button>
                <button class="btn btn-sm btn-soft">Delete</button>
            </td>
        </tr>
        <tr>
            <td><input type="checkbox" class="checkbox checkbox-accent"></td>
            <td>Jane Smith</td>
            <td>jane@example.com</td>
            <td><span class="badge badge-warning">Pending</span></td>
            <td>
                <button class="btn btn-sm btn-primary">Edit</button>
                <button class="btn btn-sm btn-soft">Delete</button>
            </td>
        </tr>
        <tr>
            <td><input type="checkbox" class="checkbox checkbox-accent"></td>
            <td>Bob Johnson</td>
            <td>bob@example.com</td>
            <td><span class="badge badge-error">Inactive</span></td>
            <td>
                <button class="btn btn-sm btn-primary">Edit</button>
                <button class="btn btn-sm btn-soft">Delete</button>
            </td>
        </tr>
    </tbody>
</table>`}/>

                <h4 id="icons">Icons</h4>

                <Preview code={`<table class="table">
    <thead>
        <tr>
            <th>User</th>
            <th>Email</th>
            <th>Department</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <div class="flex items-center gap-3">
                    <div class="avatar avatar-sm">
                        <img src="/docs/img/user1.jpg" alt="User avatar" />
                    </div>
                    <span>John Doe</span>
                </div>
            </td>
            <td>john@example.com</td>
            <td>
                <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                    </svg>
                    <span>Engineering</span>
                </div>
            </td>
            <td>
                <div class="tag">
                    <span class="status status-sm status-round status-success"></span>
                    Active
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="flex items-center gap-3">
                    <div class="avatar avatar-sm">
                        <img src="/docs/img/user1.jpg" alt="User avatar" />
                    </div>
                    <span>Jane Smith</span>
                </div>
            </td>
            <td>jane@example.com</td>
            <td>
                <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                    </svg>
                    <span>Marketing</span>
                </div>
            </td>
            <td>
                <div class="tag">
                    <span class="status status-sm status-round status-warning"></span>
                    Pending
                </div>
            </td>
        </tr>
    </tbody>
</table>`}/>

                <h4 id="card">Card</h4>

                <Preview code={`<div class="card card-border">
    <table class="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John Doe</td>
                <td>john@example.com</td>
                <td>Admin</td>
            </tr>
            <tr>
                <td>Jane Smith</td>
                <td>jane@example.com</td>
                <td>User</td>
            </tr>
            <tr>
                <td>Bob Johnson</td>
                <td>bob@example.com</td>
                <td>Moderator</td>
            </tr>
        </tbody>
    </table>
    <div class="card-footer">
        <span class="text-muted">3 of 30 entries</span>
        <div class="grow"></div>
        <div class="card-actions">
            <button class="btn btn-clear" disabled>Prev</button>
            <button class="btn btn-clear">Next</button>
        </div>
    </div>
</div>`}/>

                <h3 id="variants">Variants</h3>

                <h4 id="hover">Hover</h4>

                <Preview code={`<table class="table table-hover">
    <thead>
        <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Category</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                Laptop Pro
                <div class="text-xs text-muted">Apple</div>
            </td>
            <td>$1,299</td>
            <td>15</td>
            <td>Electronics</td>
        </tr>
        <tr>
            <td>
                Wireless Mouse
                <div class="text-xs text-muted">Logitech</div>
            </td>
            <td>$29</td>
            <td>45</td>
            <td>Accessories</td>
        </tr>
        <tr>
            <td>
                Mechanical Keyboard
            </td>
            <td>$89</td>
            <td>23</td>
            <td>Accessories</td>
        </tr>
        <tr>
            <td>
                Monitor 4K
                <div class="text-xs text-muted">Dell</div>
            </td>
            <td>$399</td>
            <td>8</td>
            <td>Electronics</td>
        </tr>
    </tbody>
</table>`}/>

                <h4 id="striped">Striped</h4>

                <Preview code={`<table class="table table-striped">
    <thead>
        <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>#ORD-001</td>
            <td>Alice Johnson</td>
            <td>2024-01-15</td>
            <td class="text-right">$156.99</td>
            <td><span class="badge badge-success">Completed</span></td>
        </tr>
        <tr>
            <td>#ORD-002</td>
            <td>Bob Wilson</td>
            <td>2024-01-16</td>
            <td class="text-right">$89.50</td>
            <td><span class="badge badge-warning">Processing</span></td>
        </tr>
        <tr>
            <td>#ORD-003</td>
            <td>Carol Davis</td>
            <td>2024-01-17</td>
            <td class="text-right">$234.75</td>
            <td><span class="badge badge-success">Completed</span></td>
        </tr>
        <tr>
            <td>#ORD-004</td>
            <td>David Brown</td>
            <td>2024-01-18</td>
            <td class="text-right">$0.00</td>
            <td><span class="badge badge-error">Cancelled</span></td>
        </tr>
        <tr>
            <td>#ORD-005</td>
            <td>Eva Martinez</td>
            <td>2024-01-19</td>
            <td class="text-right">$445.00</td>
            <td><span class="badge badge-success">Completed</span></td>
        </tr>
    </tbody>
</table>`}/>

                <h4 id="borderless">Borderless</h4>

                <Preview code={`<table class="table table-borderless">
    <thead>
        <tr>
            <th>Feature</th>
            <th>Basic</th>
            <th>Pro</th>
            <th>Enterprise</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Storage</td>
            <td>10 GB</td>
            <td>100 GB</td>
            <td>Unlimited</td>
        </tr>
        <tr>
            <td>Users</td>
            <td>1</td>
            <td>10</td>
            <td>Unlimited</td>
        </tr>
        <tr>
            <td>Support</td>
            <td>Email</td>
            <td>Email + Chat</td>
            <td>24/7 Phone</td>
        </tr>
        <tr>
            <td>Price</td>
            <td>Free</td>
            <td>$9/month</td>
            <td>$29/month</td>
        </tr>
    </tbody>
</table>`}/>

                <h4 id="compact">Compact</h4>

                <Preview code={`<table class="table table-compact text-sm">
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>001</td>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>Admin</td>
            <td>
                <div class="tag tag-sm">
                    <span class="status status-xs status-round status-success"></span>
                    Active
                </div>
            </td>
            <td>
                <button class="btn btn-xs btn-clear btn-primary">Edit</button>
            </td>
        </tr>
        <tr>
            <td>002</td>
            <td>Jane Smith</td>
            <td>jane@example.com</td>
            <td>User</td>
            <td>
                <div class="tag tag-sm">
                    <span class="status status-xs status-round status-warning"></span>
                    Pending
                </div>
            </td>
            <td>
                <button class="btn btn-xs btn-clear btn-primary">Edit</button>
            </td>
        </tr>
        <tr>
            <td>003</td>
            <td>Bob Johnson</td>
            <td>bob@example.com</td>
            <td>Moderator</td>
            <td>
                <div class="tag tag-sm">
                    <span class="status status-xs status-round"></span>
                    Inactive
                </div>
            </td>
            <td>
                <button class="btn btn-xs btn-clear btn-primary">Edit</button>
            </td>
        </tr>
        <tr>
            <td>004</td>
            <td>Alice Brown</td>
                        <td>alice@example.com</td>
            <td>User</td>
            <td>
                <div class="tag tag-sm">
                    <span class="status status-xs status-round status-danger"></span>
                    Suspended
                </div>
            </td>
            <td>
                <button class="btn btn-xs btn-clear btn-primary">Edit</button>
            </td>
        </tr>
        <tr>
            <td>005</td>
            <td>Charlie Wilson</td>
            <td>charlie@example.com</td>
            <td>Admin</td>
            <td>
                <div class="tag tag-sm">
                    <span class="status status-xs status-round status-warning"></span>
                    Pending
                </div>
            </td>
            <td>
                <button class="btn btn-xs btn-clear btn-primary">Edit</button>
            </td>
        </tr>
    </tbody>
</table>`}/>

                <PageFooterNav>
                    <PrevPageNav href="/components/tab">Tab</PrevPageNav>
                    <NextPageNav href="/components/tag">Tag</NextPageNav>
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
                                title: "Form Controls",
                                href: "#form-controls",
                            },
                            {
                                title: "Icons",
                                href: "#icons",
                            },
                            {
                                title: "Card",
                                href: "#card",
                            },
                        ]
                    },
                    {
                        title: "Variants",
                        href: "#variants",
                        nested: [
                            {
                                title: "Hover",
                                href: "#hover",
                            },
                            {
                                title: "Striped",
                                href: "#striped",
                            },
                            {
                                title: "Borderless",
                                href: "#borderless",
                            },
                            {
                                title: "Compact",
                                href: "#compact",
                            },
                        ]
                    },
                ]}
            />
        </>
    );
}

export default Table;