import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";

export const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer dateStart="16/08/2022" dateEnd="19/10/2022"/>
    </>
  );
};
