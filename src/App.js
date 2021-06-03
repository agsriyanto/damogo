import "./App.css";
import {
  Home,
  Banner,
  Demo,
  Blog,
  Kerjasama,
  Restoran,
  Supplier,
  Footer,
} from "./Containers";

function App() {
  return (
    <div className="App">
      <Home />
      <Banner />
      <Demo />
      <Blog />
      <Kerjasama />
      <Restoran />
      <Supplier />
      <Footer />
    </div>
  );
}

export default App;
