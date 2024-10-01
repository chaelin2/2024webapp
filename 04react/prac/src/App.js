import React, { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  let [num, setNum] = useState(0);
  let [arr, setArr] = useState(["사", "과", "오", "렌", "지"]);
  let [inp, setInp] = useState("");
  return (
    <div className="con" style={{ fontSize: "30px" }}>
      {modal == true ? <Modal /> : null}
      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        ddd
      </button>
      {num}
      <button
        onClick={() => {
          setNum(++num);
        }}
      >
        num++
      </button>

      {arr.map(function (item, i) {
        return (
          <>
            <div key={i}>{item}</div>
          </>
        );
      })}

      <input
        onChange={(e) => {
          setInp(e.target.value);
        }}
        value={inp}
      />
      <button
        onClick={() => {
          let copy = [...arr, inp];
          setArr(copy);
          setInp("");
        }}
      >
        추가
      </button>
    </div>
  );
}

function Modal() {
  return (
    <>
      <h3>asasas</h3>
    </>
  );
}
export default App;
