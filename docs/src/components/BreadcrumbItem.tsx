import { Link } from "react-router";

interface BreadcrumbItemProps {
    href?: string;
    children: React.ReactNode;
}

function BreadcrumbItem(props: BreadcrumbItemProps) {
    const { href, children } = props;

    if (href) {
        return (
            <Link to={href} className="btn btn-link btn-accent font-medium">{children}</Link>
        );
    }

    return (
        <span className="text-base-dense font-semibold">{children}</span>
    );
}

export default BreadcrumbItem;