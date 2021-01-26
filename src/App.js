import React from "react";
import ListOfData from "./component/listOfData/index";
import SearchBar from "./component/searchBar/index";
import Chart from "./component/chart/index";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <ListOfData>
        <SearchBar>
          <Chart />
        </SearchBar>
      </ListOfData>
    </div>
  );
}

export default App;
