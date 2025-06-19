import React from "react";

interface BreadcrumbProps {
    children: React.ReactNode;
}

function Breadcrumb(props: BreadcrumbProps) {
    const { children } = props;
    
    return (
        <div className="flex gap-2 mb-4">
            {React.Children.map(children, (child, index) => [
                index !== 0 && <span key={`separator-${index}`} className="text-base-dense">/</span>,
                <span key={`item-${index}`}>
                    {child}
                </span>
            ])}
        </div>
    );
}

export default Breadcrumb;