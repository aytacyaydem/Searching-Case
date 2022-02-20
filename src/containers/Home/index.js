import React from "react";
import SearchBox from "../../components/SearchBox";

function HomePage() {
  return (
    <div className="homepage-wrapper h-100">
      <div className="container h-100 d-flex flex-column align-items-center px-3 py-3">
        <div className="row main-row w-100 h-100 overflow-auto">
          <div className="col-md-12 px-0 mx-0">
            <SearchBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
