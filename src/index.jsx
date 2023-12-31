import { Fragment, render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";

import { Header } from "./components/Header.jsx";
import { Home } from "./pages/Home/index.jsx";
import { Product } from "./pages/Product/index.jsx";
import { NotFound } from "./pages/_404.jsx";
import "./style.css";
import { h } from "preact";

export function App() {
  return (
    <LocationProvider>
      <main>
        <Router>
          <Route path="/kupeczki-elias/" component={Home} />
          <Route default component={NotFound} />
        </Router>
      </main>
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app"));
