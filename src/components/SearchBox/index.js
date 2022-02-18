import React, { useState, useEffect, useCallback, useRef } from "react";
import CustomerData from "../../api/index";
import { debounce } from "lodash";
import { Collapse } from "bootstrap";

function SearchBox() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);
  const inputRef = useRef(null);

  const debouncedChangeHandler = useCallback(
    debounce(() => {
      setValue(inputRef.current.value);
    }, 600),
    []
  );

  useEffect(() => {
    var myCollapse = document.getElementById("collapseExample");
    var bsCollapse = new Collapse(myCollapse, { toggle: false });
    if (value.length) {
      handleSearch();
      bsCollapse.show();
    } else {
      bsCollapse.hide();
    }
  }, [value]);

  const handleSearch = () => {
    const customersToShow = CustomerData.filter((customer) => {
      if (customer.customerName.toLowerCase().includes(value.toLowerCase())) {
        return true;
      } else if (customer.customerPolicyNumber.includes(value)) {
        return true;
      }
      return false;
    });
    setResult(customersToShow);
  };
  return (
    <div className="search-box-wrapper">
      <div className="search-box">
        <input
          className="search-box__input"
          onChange={debouncedChangeHandler}
          ref={inputRef}
          type="text"
          placeholder="Search (Client Name / Policy Number)"
        />
      </div>
      <div className="collapse" id="collapseExample">
        {result.map((customer) => {
          return (
            <div className="card card-body">
              <div>{customer.customerName}</div>
              <div>{customer.customerPolicyNumber}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchBox;
