import { ReactNode } from "react";

import UserSideBar from "../components/UserSideBar";

interface UserLayoutProps {
  children: ReactNode;
}

function UserLayout({ children }: UserLayoutProps) {
  return (
    <main className="bg-primary-dark grid grid-cols-5 h-auto md:h-screen">
      <div className="col-span-1">
        <UserSideBar />
      </div>
      <div className="col-span-5 md:col-span-4 pl-[10vw] md:pl-0 block">
        {children}
      </div>
    </main>
  );
}

export default UserLayout;
