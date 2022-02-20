import React from "react";
import SearchBox from "../../components/SearchBox";

function HomePage() {
  return (
    <div className="homepage-wrapper h-100">
      <div className="container h-100 d-flex flex-column align-items-center px-3 py-3">
        <SearchBox />
      </div>
    </div>
  );
}

export default HomePage;
