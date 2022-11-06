import {} from "react-router-dom";
import { Footer, Header } from "./components";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <HomePage />
      </div>
      <Footer />
    </>
  );
}

export default App;
