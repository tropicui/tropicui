import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import CodeBlock from '../components/CodeBlock';
import TableOfContent from '../components/TableOfContent';
import Preview from "../components/Preview";
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";

function Theming() {
    const tocItems = [
        { title: "Overview", href: "#overview" },
        { title: "Built-in Themes", href: "#built-in-themes" },
        { title: "Theme Structure", href: "#theme-structure" },
        { title: "Color Variables", href: "#color-variables" },
        { title: "Creating Custom Themes", href: "#custom-themes" },
        {
            title: "Applying Themes",
            href: "#applying-themes",
            nested: [
                { title: "Entire Document", href: "#document" },
                { title: "Specific Container", href: "#container" }
            ]
        },
        { title: "Theme Switching", href: "#theme-switching" },
        {
            title: "Best Practices",
            href: "#best-practices",
            nested: [
                { title: "Colour Selection", href: "#colour-selection" },
                { title: "Theme Organisation", href: "#theme-organisation" },
                { title: "Performance", href: "#performance" }
            ]
        }
    ];

    return (
        <>
            <div className="pt-8">
                <Breadcrumb>
                    <BreadcrumbItem>GETTING STARTED</BreadcrumbItem>
                </Breadcrumb>

                <h2>Theming</h2>

                <h6>Learn how to customise and create themes for your TropicUI components.</h6>

                <div className="card card-gutter bg-gradient-to-t theme-dark:from-accent/40 from-accent-content to-transparent to-80% border border-accent">
                    <div className="card-body">
                        <div className="card-title">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                            </svg>
                            <h4>Theme System</h4>
                        </div>
                        <div>TropicUI uses CSS custom properties (CSS variables) to provide a flexible and powerful theming system that allows you to customise colours, spacing, and other design tokens.</div>
                    </div>
                </div>

                <h3 id="overview">Overview</h3>

                <p>TropicUI's theming system is built on CSS custom properties, making it easy to customise the appearance of components without modifying the core CSS. The system provides a consistent way to manage colours, spacing, borders, and other design tokens across your application.</p>

                <p>Key features of the theming system:</p>

                <ul className="list-disc list-inside mb-8">
                    <li><strong>CSS Custom Properties:</strong> All theme values are defined using CSS variables</li>
                    <li><strong>Multiple Themes:</strong> Support for light, dark, and custom themes</li>
                    <li><strong>Runtime Switching:</strong> Change themes dynamically using data attributes</li>
                    <li><strong>Extensible:</strong> Easy to create and customise your own themes</li>
                    <li><strong>Consistent:</strong> All components use the same design tokens</li>
                </ul>

                <h3 id="built-in-themes">Built-in Themes</h3>

                <p>TropicUI comes with several built-in themes that you can use out of the box:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="card card-border" data-theme="light">
                        <div className="card-body">
                            <div className="card-title">
                                <h4>Light Theme (Default)</h4>
                            </div>
                            <p className="text-base-dense">Clean, modern light theme with neutral colours</p>
                            <div className="flex gap-2 mt-4">
                                <div className="w-4 h-4 rounded bg-base-background"></div>
                                <div className="w-4 h-4 rounded bg-base"></div>
                                <div className="w-4 h-4 rounded bg-base-airy"></div>
                                <div className="w-4 h-4 rounded bg-base-border"></div>
                                <div className="w-4 h-4 rounded bg-base-dense"></div>
                                <div className="w-4 h-4 rounded bg-base-foreground"></div>
                            </div><div className="flex gap-2 mt-4">
                                <div className="w-4 h-4 rounded bg-primary"></div>
                                <div className="w-4 h-4 rounded bg-accent"></div>
                                <div className="w-4 h-4 rounded bg-success"></div>
                                <div className="w-4 h-4 rounded bg-warning"></div>
                                <div className="w-4 h-4 rounded bg-danger"></div>
                            </div>
                        </div>
                    </div>
                    <div className="card card-border" data-theme="dark">
                        <div className="card-body">
                            <div className="card-title">
                                <h4>Dark Theme</h4>
                            </div>
                            <p className="text-base-dense">Elegant dark theme with slate colours</p>
                            <div className="flex gap-2 mt-4">
                                <div className="w-4 h-4 rounded bg-base-background"></div>
                                <div className="w-4 h-4 rounded bg-base"></div>
                                <div className="w-4 h-4 rounded bg-base-airy"></div>
                                <div className="w-4 h-4 rounded bg-base-border"></div>
                                <div className="w-4 h-4 rounded bg-base-dense"></div>
                                <div className="w-4 h-4 rounded bg-base-foreground"></div>
                            </div>
                            <div className="flex gap-2 mt-4">
                                <div className="w-4 h-4 rounded bg-primary"></div>
                                <div className="w-4 h-4 rounded bg-accent"></div>
                                <div className="w-4 h-4 rounded bg-success"></div>
                                <div className="w-4 h-4 rounded bg-warning"></div>
                                <div className="w-4 h-4 rounded bg-danger"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 id="theme-structure">Theme Structure</h3>

                <p>Each theme in TropicUI follows a consistent structure using CSS custom properties. Here's an example of the dark theme structure:</p>

                <div className="card card-gutter">
                    <CodeBlock title="dark.css" lang="css">
{`@custom-variant theme-dark (&:where([data-theme=dark], [data-theme=dark] *));

[data-theme="dark"] {
    color-scheme: dark;

    --color-base-background: var(--color-slate-950);
    --color-base: var(--color-slate-900);
    --color-base-airy: var(--color-slate-800);
    --color-base-border: var(--color-slate-700);
    --color-base-dense: var(--color-slate-500);
    --color-base-foreground: var(--color-slate-300);

    --color-primary: var(--color-slate-500);
    --color-primary-content: var(--color-slate-200);
    --color-accent: var(--color-sky-600);
    --color-accent-content: var(--color-sky-200);
    --color-danger: var(--color-rose-700);
    --color-danger-content: var(--color-rose-200);
    --color-warning: var(--color-amber-600);
    --color-warning-content: var(--color-amber-200);
    --color-success: var(--color-emerald-600);
    --color-success-content: var(--color-emerald-200);

    --border: 1px;
    --radius: 0.5rem;
}`}
                    </CodeBlock>
                </div>

                <h3 id="color-variables">Colour Variables</h3>

                <p>TropicUI uses a comprehensive set of colour variables that define the visual hierarchy and semantic meaning of colours in your application:</p>

                <h4>Base Colours</h4>
                <p>These colours define the foundation of your theme:</p>

                <div className="card card-gutter card-border">
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Variable</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code className="tag">--color-base-background</code></td>
                                    <td>Canvas or document background colour.</td>
                                </tr>
                                <tr>
                                    <td><code className="tag">--color-base</code></td>
                                    <td>Main background colour for components.</td>
                                </tr>
                                <tr>
                                    <td><code className="tag">--color-base-airy</code></td>
                                    <td>Secondary background colour for components. Recommended to use sparingly.</td>
                                </tr>
                                <tr>
                                    <td><code className="tag">--color-base-border</code></td>
                                    <td>Border base colour for elements.</td>
                                </tr>
                                <tr>
                                    <td><code className="tag">--color-base-dense</code></td>
                                    <td>Darker base colour to highlight state changes.</td>
                                </tr>
                                <tr>
                                    <td><code className="tag">--color-base-foreground</code></td>
                                    <td>Base text colour.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h4>Semantic Colours</h4>
                <p>These colours have specific meanings and are used consistently across components:</p>

                <div className="card card-gutter card-border">
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Variable</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code className="tag">--color-primary</code></td>
                                    <td>Primary brand colour.</td>
                                </tr>
                                <tr>
                                    <td><code className="tag">--color-primary-content</code></td>
                                    <td>Text/icon colour on primary background.</td>
                                </tr>
                                <tr>
                                    <td><code className="tag">--color-accent</code></td>
                                    <td>Accent colour for highlights and interactive elements.</td>
                                </tr>
                                <tr>
                                    <td><code className="tag">--color-accent-content</code></td>
                                    <td>Text/icon colour on accent background.</td>
                                </tr>
                                <tr>
                                    <td><code className="tag">--color-danger</code></td>
                                    <td>Error and destructive actions.</td>
                                </tr>
                                <tr>
                                    <td><code className="tag">--color-danger-content</code></td>
                                    <td>Text/icon colour on danger background.</td>
                                </tr>
                                <tr>
                                    <td><code className="tag">--color-warning</code></td>
                                    <td>Warning and caution states.</td>
                                </tr>
                                <tr>
                                    <td><code className="tag">--color-warning-content</code></td>
                                    <td>Text/icon colour on warning background.</td>
                                </tr>
                                <tr>
                                    <td><code className="tag">--color-success</code></td>
                                    <td>Success and positive states.</td>
                                </tr>
                                <tr>
                                    <td><code className="tag">--color-success-content</code></td>
                                    <td>Text/icon colour on success background.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h3 id="custom-themes">Creating Custom Themes</h3>

                <p>Creating a custom theme is straightforward. You can create a new CSS file with your theme variables:</p>

                <div className="card card-gutter">
                    <CodeBlock title="atomic-theme.css" lang="css">
{`@custom-variant theme-atomic (&:where([data-theme=atomic], [data-theme=atomic] *));

[data-theme="atomic"] {
    color-scheme: light;

    /* Base colors */
    --color-base-background: var(--color-white);
    --color-base: var(--color-gray-50);
    --color-base-airy: var(--color-gray-100);
    --color-base-border: var(--color-gray-200);
    --color-base-dense: var(--color-gray-400);
    --color-base-foreground: var(--color-gray-600);

    /* Brand colors */
    --color-primary: var(--color-purple-600);
    --color-primary-content: var(--color-white);
    --color-accent: var(--color-pink-500);
    --color-accent-content: var(--color-white);

    /* Semantic colors */
    --color-danger: var(--color-red-600);
    --color-danger-content: var(--color-white);
    --color-warning: var(--color-yellow-500);
    --color-warning-content: var(--color-black);
    --color-success: var(--color-green-600);
    --color-success-content: var(--color-white);

    /* Spacing and borders */
    --border: 1px;
    --radius: 0.75rem;
}`}
                    </CodeBlock>
                </div>

                <p>Import the custom theme into your main CSS file after importing TropicUI:</p>

                <div className="card card-gutter">
                    <CodeBlock title="main.css" lang="css">
{`@import "tailwindcss";
@import "tropicui";
@import "./atomic-theme.css";`}
                    </CodeBlock>
                </div>

                <h3 id="applying-themes">Applying Themes</h3>

                <h4 id="document">Entire Document</h4>

                <p>To apply a theme to your application, you need to set the <code className="tag">data-theme</code> attribute on your HTML element:</p>

                <div className="card card-gutter">
                    <CodeBlock title="HTML">
{`<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Your content here -->
</body>
</html>`}
                    </CodeBlock>
                </div>

                <h4 id="container">Specific Container</h4>

                <p>You can also apply themes to specific containers:</p>

                <Preview code={`<div data-theme="dark">
    <div class="card card-gutter">
        <div class="card-body">
            <h4>Dark themed card</h4>
            <span>This card uses the dark theme.</span>
        </div>
    </div>
</div>

<div data-theme="light">
    <div class="card">
        <div class="card-body">
            <h4>Light themed card</h4>
            <span>This card uses the light theme.</span>
        </div>
    </div>
</div>`}/>

                <h3 id="theme-switching">Theme Switching</h3>

                <p>You can implement theme switching functionality using JavaScript. Here's a simple example:</p>

                <div className="card mb-8">
                    <CodeBlock title="theme-switcher.js" lang="js">
{`// Theme switcher function
function setTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('theme', themeName);
}

// Get saved theme or default to 'light'
function getTheme() {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = getTheme();
    setTheme(currentTheme);
});

// Theme toggle button
document.getElementById('theme-toggle').addEventListener('click', () => {
    const currentTheme = getTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});`}
                    </CodeBlock>
                </div>

                <h3 id="best-practices">Best Practices</h3>

                <p>Follow these best practices when working with TropicUI themes:</p>

                <h4 id="colour-selection">Colour Selection</h4>
                <ul className="list-disc list-inside mb-4">
                    <li>Ensure sufficient contrast between text and background colours</li>
                    <li>Use semantic colours consistently across your application</li>
                    <li>Test your theme in both light and dark modes</li>
                    <li>Consider accessibility guidelines when choosing colours</li>
                </ul>

                <h4 id="theme-organisation">Theme Organisation</h4>
                <ul className="list-disc list-inside mb-4">
                    <li>Keep all theme variables in a single CSS file</li>
                    <li>Use descriptive variable names</li>
                    <li>Group related variables together</li>
                    <li>Comment your theme structure for better maintainability</li>
                </ul>

                <h4 id="performance">Performance</h4>
                <ul className="list-disc list-inside mb-8">
                    <li>Use CSS custom properties for dynamic theming</li>
                    <li>Avoid inline styles for theme values</li>
                    <li>Consider using CSS-in-JS solutions for complex theming needs</li>
                    <li>Test theme switching performance on different devices</li>
                </ul>

                <PageFooterNav>
                    <PrevPageNav href="/installation">Installation</PrevPageNav>
                    <NextPageNav href="/content/typography">Typography</NextPageNav>
                </PageFooterNav>
            </div>
            <TableOfContent items={tocItems} />
        </>
    );
}

export default Theming;