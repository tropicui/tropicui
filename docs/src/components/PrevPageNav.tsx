import { Link } from "react-router";

interface PrevPageNavProps {
    href: string;
    children: React.ReactNode;
}

const PrevPageNav = (props: PrevPageNavProps) => {
    const { href, children } = props;

    return (
        <Link to="/components/accordion" className="card group flex items-center justify-self-start bg-blue-50 border border-blue-200 inset-ring active:inset-ring-2 inset-ring-base-background hover:border-blue-300 hover:bg-blue-100 active:border-blue-400 active:bg-blue-200 w-72 transition-all">
            <div className="card-body flex items-center gap-2 p-2">
                <div className="text-base-dense group-hover:text-base-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 transition-colors">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </div>
                <div className="flex flex-col items-start">
                    <div className="text-xs text-base-dense font-medium">PREV</div>
                    <div className="text-xl font-medium">{ children }</div>
                </div>
            </div>
        </Link>
    );
}

export default PrevPageNav;