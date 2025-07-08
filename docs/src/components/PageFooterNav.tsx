interface PageFooterNavProps {
  children: React.ReactNode;
}

function PageFooterNav(props: PageFooterNavProps) {
  return (
    <div className="grid grid-cols-2 gap-4 border-t border-base-border pt-12 mb-12">
        {props.children}
    </div>
  );
}

export default PageFooterNav;