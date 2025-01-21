import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/catalog">
            <CatalogPage />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
