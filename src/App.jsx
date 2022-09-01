import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";

import './app.css'

export const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer />
    </>
  );
};
