import React from "react";

interface BreadcrumbProps {
    children: React.ReactNode;
}

function Breadcrumb(props: BreadcrumbProps) {
    const { children } = props;
    
    return (
        <>
            <div className="breadcrumb">
                <ul>
                {React.Children.map(children, (child, index) => [
                    <li key={`item-${index}`}>
                        {child}
                    </li>
                ])}
                </ul>
            </div>
            <div className="mb-4"></div>
        </>
    );
}

export default Breadcrumb;