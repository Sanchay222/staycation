import Header from "./Header";
import Footer from "./Footer";  // Import the Footer component
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="py-4 px-8 flex flex-col min-h-screen max-w-8xl mx-auto">
      <Header />
      <main className="flex-grow">
        <Outlet />  
      </main>
      <Footer />
    </div>
  );
}
