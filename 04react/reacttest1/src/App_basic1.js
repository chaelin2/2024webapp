import React, { useState } from "react";
import "./index.css";
import logo from "./logo.svg";

function App() {
  let text = "hello";
  const [box, setBox] = useState("han");
  const [num, setNum] = useState(0);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState("안녕하세요");
  let [shop, setShop] = useState(["사과", "복숭아", "바나나"]);
  
  return (
    <>
      <div
        className="container"
        style={{ background: "orange", fontSize: "20px" }}
      >
        <div>{text}</div>
        <div>t</div>
        <p>{box}</p>
        {num}
        <button
          onClick={() => {
            setNum(10);
          }}
        >
          값변화
        </button>
        <button
          onClick={() => {
            // alert("test");

            setBox("changeHan");
          }}
        >
          값 변화
        </button>
      </div>
      {/* <img src={logo} /> */}
      {shop.map(function (item, i) {
        return (
          <>
            <div key={i}>{item}</div>
          </>
        );
      })}

      {modal == true ? <Modal title={title} image="test1" /> : null}
      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        모달
      </button>


    </>
  );
}

function Modal(props) {
  return (
    <>
      <div className="Modal">
        <h3>공지사항{props.title}</h3>
        <p>상세내용{props.image}</p>
      </div>
    </>
  );
}

function Modal1(props){
return(
  <>
   <p>rrerererer</p>
  </>
)
}

export default App;
