import logo from "./logo.svg";
import "./App.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: "counter",
  initialState: { num: 0 },
  reducers: {
    up: (state, action) => {
      console.log("test");
      state.num += action.payload;
    },
  },
});

const counterStore1 = createSlice({
  name: "counter",
  initialState: { num1: 100 },
  reducers: {
    up: (state, action) => {
      console.log("test1");
    },
  },
});

const store = configureStore({
  reducers: {
    counter: counterStore.reducer,
    counter1: counterStore1.reducer,
  },
});

function ChildOne() {
  const dispatch = useDispatch();
  const num = useSelector((state) => state.counter.num);
  const num1 = useSelector((state) => state.counter1.num1);

  // const num = useSelector((state) => {
  //   return state.counter.num;
  // });

  return (
    <div>
      child{num}/ {num1}
      <button
        onClick={() => {
          dispatch(counterStore.actions.up(1));
        }}
      >
        click
      </button>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <div>
        <div>test</div>
        <ChildOne />
      </div>
    </Provider>
  );
}

export default App;
