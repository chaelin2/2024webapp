<template>
  <div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="userid"
        v-model="userdata.userid"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="password"
        v-model="userdata.password"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="username"
        v-model="userdata.username"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="lng"
        v-model="userdata.lng"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="lat"
        v-model="userdata.lat"
      />
    </div>
    <div class="input-group mb-3">
      <input
        type="file"
        class="form-control"
        id="fileform"
        @change="handleImage"
        accept="image/*"
      />
      <label class="input-group-text" for="fileform">Upload</label>
    </div>
    <div class="btn btn-primary" @click="addUser">회원가입</div>
  </div>
  {{ userdata }}
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const userdata = ref({
  userid: null,
  password: null,
  username: null,
  lng: null,
  lat: null,
  image: null,
});

const clearform = () => {
  userdata.value.userid = null;
  userdata.value.password = null;
  userdata.value.username = null;
  userdata.value.lng = null;
  userdata.value.lat = null;
  userdata.value.image = null;
};

const addUser = () => {
  let uData = {
    userid: userdata.value.userid,
    password: userdata.value.password,
    username: userdata.value.username,
    lng: userdata.value.lng,
    lat: userdata.value.lat,
    image: userdata.value.image,
  };
  store.commit("addUser", uData);
  clearform();
};

const handleImage = (e) => {
  const file = e.target.files[0];
  console.log(file);
  if (file) {
    userdata.value.image = URL.createObjectURL(file);
  }
};
</script>

<style lang="scss" scoped></style>
