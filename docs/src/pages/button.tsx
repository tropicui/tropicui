import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import TableOfContent from "../components/TableOfContent";
import Preview from "../components/Preview";
import PageFooterNav from "../components/PageFooterNav";
import PrevPageNav from "../components/PrevPageNav";
import NextPageNav from "../components/NextPageNav";

function Button() {
    return (
        <>
            <div className="pt-8">
                <div className="grid grid-flow-col gap-4 mb-12">
                    <div>
                        <button className="btn btn-primary hidden">Button</button>
                        <button className="
                            flex items-center justify-center
                            bg-neutral-100 active:bg-neutral-200
                            border border-neutral-200 rounded-md hover:border-neutral-300
                            focus-visible:outline-2 outline-accent outline-offset-0
                            inset-ring inset-ring-white
                            text-primary
                            h-10
                            px-3">Button</button>
                    </div>
                    <div>
                        <button className="
                            flex items-center justify-center
                            bg-primary
                            border border-primary rounded-md
                            focus-visible:outline-2 outline-accent outline-offset-0
                            inset-ring inset-ring-primary-content active:inset-ring-2
                            text-primary-content
                            h-10
                            px-3">Button</button>
                    </div>
                    <div>
                        <button className="
                            flex items-center justify-center
                            bg-neutral-100 active:bg-neutral-200
                            border border-neutral-200 rounded-md hover:border-neutral-300
                            focus-visible:outline-2 outline-accent outline-offset-0
                            inset-ring inset-ring-white
                            text-primary
                            h-10
                            px-3">Button</button>
                    </div>
                    <div data-theme="dark" className="bg-base-background p-4">
                        <button className="
                            flex items-center justify-center
                            bg-neutral-800 active:bg-neutral-900
                            border border-neutral-700 rounded-md hover:border-neutral-600
                            focus-visible:outline-2 outline-accent outline-offset-0
                            inset-ring inset-ring-black
                            text-primary
                            h-10
                            px-3">Button</button>
                        <button className="
                            flex items-center justify-center
                            bg-slate-800 active:bg-slate-900
                            border border-slate-700 rounded-md hover:border-slate-600
                            focus-visible:outline-2 outline-accent outline-offset-0
                            inset-ring inset-ring-black
                            text-primary
                            h-10
                            px-3">Button</button>
                    </div>
                    <div>
                        <button className="
                            flex items-center justify-center
                            bg-neutral-700 active:bg-neutral-500
                            border border-neutral-600 rounded-md hover:border-neutral-400
                            focus-visible:outline-2 outline-accent outline-offset-0
                            inset-ring inset-ring-white
                            text-neutral-100
                            h-10
                            px-3">Button</button>
                    </div>
                </div>
                <div className="grid grid-flow-col gap-4 bg-base-background mb-16">
                    <div>
                        <button className="
                            flex items-center justify-center
                            bg-[color-mix(in_oklab,var(--color-base),var(--color-black)_2%)] active:bg-[color-mix(in_oklab,var(--color-base),var(--color-black)_5%)]
                            border border-[color-mix(in_oklab,var(--color-base),var(--color-black)_8%)] rounded-md hover:border-[color-mix(in_oklab,var(--color-base),var(--color-black)_14%)]
                            focus-visible:outline-2 outline-accent outline-offset-0
                            inset-ring inset-ring-white
                            text-primary
                            h-10
                            px-3">Button</button>
                    </div>
                    <div>
                        <button className="
                            flex items-center justify-center
                            bg-[color-mix(in_oklab,var(--color-base-foreground)_8%,transparent)] active:bg-[color-mix(in_oklab,var(--color-base-foreground)_16%,transparent)]
                            border border-[color-mix(in_oklab,var(--color-base-foreground)_16%,transparent)] rounded-md hover:border-[color-mix(in_oklab,var(--color-base-foreground)_32%,transparent)]
                            focus-visible:outline-2 outline-accent outline-offset-0
                            inset-ring inset-ring-white
                            text-primary
                            h-10
                            px-3">Button</button>
                    </div>
                    <div>
                        <button className="
                            flex items-center justify-center
                            bg-[color-mix(in_oklab,var(--color-primary)_8%,transparent)] active:bg-[color-mix(in_oklab,var(--color-primary)_16%,transparent)]
                            border border-[color-mix(in_oklab,var(--color-primary)_16%,transparent)] rounded-md hover:border-[color-mix(in_oklab,var(--color-primary)_32%,transparent)]
                            focus-visible:outline-2 outline-accent outline-offset-0
                            inset-ring inset-ring-white
                            text-primary
                            h-10
                            px-3">Button</button>
                    </div>
                    <div>
                        <button className="
                            flex items-center justify-center
                            bg-[color-mix(in_oklab,var(--color-accent)_8%,transparent)] active:bg-[color-mix(in_oklab,var(--color-accent)_16%,transparent)]
                            border border-[color-mix(in_oklab,var(--color-accent)_16%,transparent)] rounded-md hover:border-[color-mix(in_oklab,var(--color-accent)_32%,transparent)]
                            focus-visible:outline-2 outline-accent outline-offset-0
                            inset-ring inset-ring-white
                            text-primary
                            h-10
                            px-3">Button</button>
                    </div>
                    <div>
                        <button className="
                            flex items-center justify-center
                            bg-[color-mix(in_oklab,var(--color-success)_8%,transparent)] active:bg-[color-mix(in_oklab,var(--color-success)_16%,transparent)]
                            border border-[color-mix(in_oklab,var(--color-success)_16%,transparent)] rounded-md hover:border-[color-mix(in_oklab,var(--color-success)_32%,transparent)]
                            focus-visible:outline-2 outline-accent outline-offset-0
                            inset-ring inset-ring-white
                            text-primary
                            h-10
                            px-3">Button</button>
                    </div>
                    <div>
                        <button className="
                            flex items-center justify-center
                            bg-[color-mix(in_oklab,var(--color-warning)_8%,transparent)] active:bg-[color-mix(in_oklab,var(--color-warning)_16%,transparent)]
                            border border-[color-mix(in_oklab,var(--color-warning)_16%,transparent)] rounded-md hover:border-[color-mix(in_oklab,var(--color-warning)_32%,transparent)]
                            focus-visible:outline-2 outline-accent outline-offset-0
                            inset-ring inset-ring-white
                            text-primary
                            h-10
                            px-3">Button</button>
                    </div>
                    <div>
                        <button className="
                            flex items-center justify-center
                            bg-[color-mix(in_oklab,var(--color-danger)_8%,transparent)] active:bg-[color-mix(in_oklab,var(--color-danger)_16%,transparent)]
                            border border-[color-mix(in_oklab,var(--color-danger)_16%,transparent)] rounded-md hover:border-[color-mix(in_oklab,var(--color-danger)_32%,transparent)]
                            focus-visible:outline-2 outline-accent outline-offset-0
                            inset-ring inset-ring-white
                            text-primary
                            h-10
                            px-3">Button</button>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="grid grid-flow-col gap-4 bg-neutral-900 mb-16" data-theme="dark">
                    <div>
                        <button className="
                            flex items-center justify-center
                            bg-[color-mix(in_oklab,var(--color-base),var(--color-black)_2%)] active:bg-[color-mix(in_oklab,var(--color-base),var(--color-black)_5%)]
                            border border-[color-mix(in_oklab,var(--color-base),var(--color-black)_8%)] rounded-md hover:border-[color-mix(in_oklab,var(--color-base),var(--color-black)_14%)]
                            focus-visible:outline-2 outline-accent outline-offset-0
                            inset-ring inset-ring-white
                            text-primary
                            h-10
                            px-3">Button</button>
                    </div>
                    <div>
                        <button className="
                            flex items-center justify-center
                            bg-[color-mix(in_oklab,var(--color-base-foreground)_8%,transparent)] active:bg-[color-mix(in_oklab,var(--color-base-foreground)_16%,transparent)]
                            border border-[color-mix(in_oklab,var(--color-base-foreground)_16%,transparent)] rounded-md hover:border-[color-mix(in_oklab,var(--color-base-foreground)_32%,transparent)]
                            focus-visible:outline-2 outline-accent outline-offset-0
                            inset-ring inset-ring-white
                            text-primary
                            h-10
                            px-3">Button</button>
                    </div>
                    <div>
                        <button className="
                            flex items-center justify-center
                            bg-[color-mix(in_oklab,var(--color-primary)_8%,transparent)] active:bg-[color-mix(in_oklab,var(--color-primary)_16%,transparent)]
                            border border-[color-mix(in_oklab,var(--color-primary)_16%,transparent)] rounded-md hover:border-[color-mix(in_oklab,var(--color-primary)_32%,transparent)]
                            focus-visible:outline-2 outline-accent outline-offset-0
                            inset-ring inset-ring-white
                            text-primary
                            h-10
                            px-3">Button</button>
                    </div>
                    <div>
                        <button className="
                            flex items-center justify-center
                            bg-[color-mix(in_oklab,var(--color-accent)_8%,transparent)] active:bg-[color-mix(in_oklab,var(--color-accent)_16%,transparent)]
                            border border-[color-mix(in_oklab,var(--color-accent)_16%,transparent)] rounded-md hover:border-[color-mix(in_oklab,var(--color-accent)_32%,transparent)]
                            focus-visible:outline-2 outline-accent outline-offset-0
                            inset-ring inset-ring-white
                            text-primary
                            h-10
                            px-3">Button</button>
                    </div>
                    <div>
                        <button className="
                            flex items-center justify-center
                            bg-[color-mix(in_oklab,var(--color-success)_8%,transparent)] active:bg-[color-mix(in_oklab,var(--color-success)_16%,transparent)]
                            border border-[color-mix(in_oklab,var(--color-success)_16%,transparent)] rounded-md hover:border-[color-mix(in_oklab,var(--color-success)_32%,transparent)]
                            focus-visible:outline-2 outline-accent outline-offset-0
                            inset-ring inset-ring-white
                            text-primary
                            h-10
                            px-3">Button</button>
                    </div>
                    <div>
                        <button className="
                            flex items-center justify-center
                            bg-[color-mix(in_oklab,var(--color-warning)_8%,transparent)] active:bg-[color-mix(in_oklab,var(--color-warning)_16%,transparent)]
                            border border-[color-mix(in_oklab,var(--color-warning)_16%,transparent)] rounded-md hover:border-[color-mix(in_oklab,var(--color-warning)_32%,transparent)]
                            focus-visible:outline-2 outline-accent outline-offset-0
                            inset-ring inset-ring-white
                            text-primary
                            h-10
                            px-3">Button</button>
                    </div>
                    <div>
                        <button className="
                            flex items-center justify-center
                            bg-[color-mix(in_oklab,var(--color-danger)_8%,transparent)] active:bg-[color-mix(in_oklab,var(--color-danger)_16%,transparent)]
                            border border-[color-mix(in_oklab,var(--color-danger)_16%,transparent)] rounded-md hover:border-[color-mix(in_oklab,var(--color-danger)_32%,transparent)]
                            focus-visible:outline-2 outline-accent outline-offset-0
                            inset-ring inset-ring-white
                            text-primary
                            h-10
                            px-3">Button</button>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="grid grid-flow-col gap-4 bg-base-background mb-12" data-theme="dark">
                    <div>
                        
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <PageFooterNav>
                    <PrevPageNav href="/components/accordion">Accordion</PrevPageNav>
                    <NextPageNav href="/components/avatar">Avatar</NextPageNav>
                </PageFooterNav>
            </div>
        </>
    )
}

export default Button;