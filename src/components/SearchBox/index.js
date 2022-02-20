import React, { useState, useEffect, useCallback, useRef } from "react";
import CustomerData from "../../api/index";
import { debounce } from "lodash";
import { Collapse } from "bootstrap";
import { BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";

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
    <>
      <div className="row w-100">
        <div className="col-md-12 px-0 mx-0">
          <div className="search-box">
            <input
              className="search-box__input"
              onChange={debouncedChangeHandler}
              ref={inputRef}
              type="text"
              placeholder="Search (Client Name / Policy Number)"
            />
          </div>
        </div>
      </div>
      <div className="search-box-wrapper">
        <div className="row">
          <div className="col-md-12 px-0 mx-0">
            <div className="collapse" id="collapseExample">
              {result.map((customer) => {
                return (
                  <div className="card card-body shadow">
                    <div className="row mb-2">
                      <div className="col-md-12">
                        {customer.customerName} {customer.customerSurname}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 d-flex align-items-center">
                        <div className="phone-number d-flex align-items-center">
                          <BsFillTelephoneFill />
                          <span className="mx-2">{customer.customerphone}</span>
                        </div>
                        <div className="mail-adress d-flex align-items-center mx-5">
                          <BsFillEnvelopeFill />
                          <span className="mx-2">{customer.customerEmail}</span>
                        </div>
                      </div>
                      <div className="col-md-6 d-flex">
                        <div className="policy-number">
                          Policy No: {customer.customerPolicyNumber}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBox;
