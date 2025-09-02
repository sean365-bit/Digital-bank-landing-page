import "./styles/_main.scss";
import Header from "./components/Header";
import Body from "./components/Body";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Body />
        <Articles />
        <Footer />
      </div>
    </>
  );
}

export default App;
