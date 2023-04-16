import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="bg-primary">
      <Header />

      <div>{children}</div>

      <Footer />
    </div>
  );
}

export default Layout;
