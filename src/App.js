import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';



function App() {
  return (
    <div>
      <Router>
      <Route>
      <Header></Header>
      </Route>
        <Switch>
        <Route exact path= '/'>
          <Shop/>
        </Route>
        <Route exact path= '/shop'>
          <Shop/>
        </Route>
        <Route exact path= '/review'>
          <OrderReview/>
        </Route>
        <Route path= '/inventory'>
          <Inventory/>
        </Route>
        <Route path= '/placeOrder'>
          <PlaceOrder/>
        </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
