import React from "react";
import ListOfData from "./component/listOfData/index";
import SearchBar from "./component/searchBar/index";
import TrucksName from "./component/trucksName/index";
import Orders from "./component/orders/index";

function App() {
  return (
    <div>
      <ListOfData>
        <SearchBar>
          <TrucksName />
          <Orders />  
        </SearchBar>
      </ListOfData>
    </div>
  );
}

export default App;
