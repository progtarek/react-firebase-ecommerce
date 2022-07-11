import { Route, Routes } from "react-router";
import Layout from "./components/Navigation/Navigation.component";
import Home from "./routes/Home";

function Shop() {
  return <h1>Hello from the other side</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
