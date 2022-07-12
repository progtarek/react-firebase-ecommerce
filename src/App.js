import { Route, Routes } from "react-router";
import Layout from "./components/Navigation/Navigation.component";
import Home from "./routes/Home";
import { Auth } from "./routes/Auth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Auth />} />
      </Route>
    </Routes>
  );
}

export default App;
