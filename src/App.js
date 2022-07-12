import { Route, Routes } from "react-router";
import Layout from "./components/Navigation/Navigation.component";
import Home from "./routes/Home";
import { Auth } from "./routes/Auth";
import { Shop } from "./routes/Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Auth />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
