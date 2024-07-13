import { ReactNode } from "react";

import PageFooter from "../components/PageFooter";
import PageHeader from "../components/PageHeader";

interface PageLayoutProps {
  children: ReactNode;
}

function PageLayout({ children }: PageLayoutProps) {
  return (
    <main className="bg-primary-dark block w-screen xl:w-auto">
      <PageHeader />
      {children}
      <PageFooter />
    </main>
  );
}

export default PageLayout;
