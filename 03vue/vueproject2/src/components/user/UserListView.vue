<template>
  <!-- {{ $store.state.userData }} -->
  <div
    v-for="(item, i) in $store.state.userData"
    :key="i"
    class="d-flex gap-2 border rounded p-3 mb-3"
  >
    <div class="avata">
      <img :src="item.image" alt="" />
    </div>
    <div>
      <h5 class="mb-0">{{ item.userid }}</h5>
      <p class="mb-0">{{ item.username }}</p>
      <div class="d-flex me-5">
        <p class="mb-0 me-4">경도: {{ item.lng }}</p>
        <p class="mb-0 me-5">위도:{{ item.lat }}</p>
      </div>
    </div>
    <div class="ms-5 btn btn-primary" @click="deleteUser(state, item.userid)">
      삭제
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
const deleteUser = (state, uid) => {
  store.commit("deleteUser", uid);
  console.log(uid);
};
</script>

<style lang="scss" scoped>
.avata {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}
</style>
