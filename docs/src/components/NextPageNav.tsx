import { Link } from "react-router";

interface NextPageNavProps {
    href: string;
    children: React.ReactNode;
}

const NextPageNav = (props: NextPageNavProps) => {
    const { href, children } = props;

    return (
        <Link to={ href } className="card group flex items-center justify-self-end bg-base border border-base-border inset-ring active:inset-ring-2 inset-ring-base-background hover:border-base-curb hover:bg-base-airy active:border-base-dense active:bg-base-border w-full max-w-72 transition-all">
            <div className="card-body flex items-center justify-between gap-2 px-4 py-2">
                <div className="flex flex-col items-start">
                    <div className="text-xs text-base-dense font-medium">NEXT</div>
                    <div className="text-xl font-medium">{ children }</div>
                </div>
                <div className="text-base-dense group-hover:text-base-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 transition-colors">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>
        </Link>
    );
}

export default NextPageNav;