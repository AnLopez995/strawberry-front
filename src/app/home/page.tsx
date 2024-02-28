import Body from "./components/body";
import Footer from "./components/footer";
import Header from "./components/header";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
