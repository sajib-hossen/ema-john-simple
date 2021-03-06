import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import OrderReview from "./components/OrderReview/OrderReview";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/review" element={<OrderReview />}></Route>
          <Route path="/inventory" element={<Inventory />}></Route>
          <Route path="/placeorder" element={<PlaceOrder />}></Route>
          <Route path="/*" element={<PlaceOrder />}></Route>
        </Routes>
      </Router>

      {/* <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <OrderReview></OrderReview>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
