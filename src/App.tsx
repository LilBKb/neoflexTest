import "./App.css";
import { Footer } from "./components/footer/Footer";
import Header from "./components/header/Header";
import Catalog from "./pages/Catalog/catalog";

function App() {
  return (
    <>
      <Header />
      <Catalog />
      <Footer />
    </>
  );
}

export default App;
