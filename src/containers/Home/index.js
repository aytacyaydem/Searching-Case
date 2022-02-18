import React from "react";
import SearchBox from "../../components/SearchBox";

function HomePage() {
  return (
    <div className="homepage-wrapper h-100">
      <div className="container h-100 d-flex flex-column align-items-center">
        <div className="row w-100 ">
          <div className="col-md-12 px-0 mx-0">
            <SearchBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
