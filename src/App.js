import { Route, Routes } from "react-router";
import Layout from "./components/Navigation/Navigation.component";
import Home from "./routes/Home";
import { Auth } from "./routes/Auth";
import { Shop } from "./routes/Shop";
import { Checkout } from "./routes/Checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Auth />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
