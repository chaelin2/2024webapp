import { createStore } from "vuex";

export default createStore({
  state: {
    userData: [
      {
        userid: "hanyong5",
        password: "123",
        username: "홍길동",
        lng: "35",
        lat: "127",
        image: "https://picsum.photos/100",
      },
      {
        userid: "ttomi",
        password: "123",
        username: "김유신",
        lng: "40",
        lat: "127",
        image: "https://picsum.photos/100",
      },
      {
        userid: "test",
        password: "123",
        username: "감강찬",
        lng: "37",
        lat: "127",
        image: "https://picsum.photos/100",
      },
    ],
  },
  mutations: {
    addUser(state, payload) {
      state.userData.push(payload);
    },
    deleteUser(state, id) {
      const index1 = state.userData.findIndex((p) => p.userid === id);
      state.userData.splice(index1, 1);
    },

    addList(state, lng, lat) {
        
    },
  },
});
