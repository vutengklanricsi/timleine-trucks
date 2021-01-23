import React from "react";
import ListOfData from "./component/listOfData/index";
import SearchBar from "./component/searchBar/index";
import TrucksName from "./component/trucksName/index";
import Fwef from "./fwef";

function App() {
  return (
    <div>
      <ListOfData>
        <SearchBar>
          <TrucksName />
        </SearchBar>
      </ListOfData>
      <Fwef />
    </div>
  );
}

export default App;
