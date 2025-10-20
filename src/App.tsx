import "./styles/App.scss";
import Header from "./components/Header";
import Body from "./components/Body";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Hero />
        <Body />
        <Articles />
        <Footer />
      </div>
    </>
  );
}

export default App;
