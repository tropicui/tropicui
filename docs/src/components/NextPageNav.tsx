import { Link } from "react-router";

interface NextPageNavProps {
    href: string;
    children: React.ReactNode;
}

const NextPageNav = (props: NextPageNavProps) => {
    const { href, children } = props;

    return (
        <Link to={ href } className="card group flex items-center justify-self-end bg-base border border-base-border inset-ring-2 inset-ring-base-background hover:border-base-curb active:bg-base-airy w-72 transition-all">
            <div className="card-body flex items-center justify-between gap-2 px-4 py-2">
                <div className="flex flex-col items-start">
                    <div className="text-xs text-base-dense font-medium">NEXT</div>
                    <div className="text-xl font-medium">{ children }</div>
                </div>
                <div className="text-base-dense group-hover:text-base-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 transition-colors">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>
        </Link>
    );
}

export default NextPageNav;