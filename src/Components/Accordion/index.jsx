import { useState } from "react";
import data from "./data.js";
import "./style.css";
const Accordion = () => {
  const [selected, setSelected] = useState(0);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multipleSelect, setMultipleSelection] = useState([]);
  function setSingleData(currentId) {
    setSelected(currentId === selected ? null : currentId);
  }
  function setMultiSelection(currentId) {
    let cpyMultiple = [...multipleSelect];
    const findIndexOfCurrentId = cpyMultiple.indexOf(currentId);

    if (findIndexOfCurrentId == -1) {
      cpyMultiple.push(currentId);
    } else {
      cpyMultiple.splice(findIndexOfCurrentId, 1);
    }

    setMultipleSelection(cpyMultiple);
  }
  return (
    <>
      <div className="acc-wrapper">
        <button
          className="enableMultiSelection"
          onClick={() => {
            setEnableMultiSelection((prevValue) => !prevValue);
          }}
        >
          Enable Multi Selection
        </button>
        <div className="accordion">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item" key={dataItem.id}>
                <div
                  className="title"
                  onClick={() => {
                    if (enableMultiSelection) {
                      setMultiSelection(dataItem.id);
                    } else {
                      setSingleData(dataItem.id);
                    }
                  }}
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {enableMultiSelection
                  ? multipleSelect.indexOf(dataItem.id) !== -1 && (
                      <div className="acc-content">{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="acc-content">{dataItem.answer}</div>
                    )}
              </div>
            ))
          ) : (
            <p className="nodata">There is no data</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordion;
