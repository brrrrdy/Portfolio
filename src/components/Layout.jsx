import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopNav from "./TopNav";
import Footer from "./Footer";

function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location]);

  return (
    <div className="app">
      <TopNav />
      <main>
        <Outlet />
      </main>
      {location.pathname !== "/" && <Footer />}
    </div>
  );
}

export default Layout;
