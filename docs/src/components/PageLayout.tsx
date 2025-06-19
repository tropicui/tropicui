interface PageLayoutProps {
    children: React.ReactNode;
}

function PageLayout(props: PageLayoutProps) {
    return (
        <div className="grid grid-cols-[1fr_auto] gap-4 min-h-dvh">
            {props.children}
        </div>
    )
}

export default PageLayout;