import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

import './app.css'

export const App = () => {
  return (
    <>
      <Navbar />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
    </>
  );
};
