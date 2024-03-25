import React from 'react';

import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null); // selected === the selected item
  console.log("the selected item is " + selected);

  const [enableMultiSelect, setMultiSelect] = useState(false);
  const [Multi, setMulti] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId); // getcurrentid = 1 ===
  }
  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...Multi];

    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);
    setMulti(copyMultiple);
    console.log(copyMultiple);
  }

  return (
    <div className="wrapper">
      <div>
        <button
          onClick={() => {
            setMultiSelect(!enableMultiSelect);
          }}
        >
          {enableMultiSelect === true ? "disable multi" : "enable multi"}
        </button>
        {data.length > 0 ? ( // if data found
          data.map(
            (
              dataItem // map the data
            ) => (
              <div className="item">
                <div
                  onClick={
                    enableMultiSelect == true //
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="title"
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>

                {enableMultiSelect === true
                  ? Multi.indexOf(dataItem.id) !== -1 && (
                      <div className="content">{dataItem.answer} </div>
                    )
                  : selected === dataItem.id && (
                      <div className="content">{dataItem.answer}</div>
                    )}
                {/* {selected === dataItem.id ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null} */}
              </div>
            )
          )
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
}
