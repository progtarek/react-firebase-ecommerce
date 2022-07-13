import { Route, Routes } from "react-router";
import { Categories } from "./Categories";
import { CategoryDetails } from "./CategoryDetails";

export const Shop = () => {
  return (
    <Routes>
      <Route index element={<Categories />} />
      <Route path=":category" element={<CategoryDetails />} />
    </Routes>
  );
};
