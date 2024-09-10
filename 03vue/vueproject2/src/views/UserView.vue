<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h3>User List</h3>
        <UserListView />
      </div>
      <div class="col-md-6">
        <h3>User sign</h3>
        <UserSignView />
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <MapView />
      </div>
      <div class="col-md-6">
        <ListMap />
      </div>
    </div>
  </div>
</template>

<script setup>
import UserListView from "../components/user/UserListView.vue";
import UserSignView from "../components/user/UserSignView.vue";
import MapView from "../components/user/MapView.vue";
import ListMap from "../components/user/ListMap.vue";
</script>

<style lang="scss" scoped></style>
