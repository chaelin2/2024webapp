<template>
  <div>지도 {{ moveLat }} / {{ moveLng }}</div>

  <div class="btn btn-primary" @click="addPosition(state, lng, lat)">
    현재 위치 등록
  </div>
  <div>지도 {{ lng }} ///{{ lat }}</div>
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

  <div class="mb-5" id="map" style="width: 500px; height: 400px"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const latitude = ref(0);
const longitude = ref(0);

const moveLat = ref(0);
const moveLng = ref(0);

const lng = ref(0);
const lat = ref(0);

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
const handleImage = (e) => {
  const file = e.target.files[0];
  console.log(file);
  if (file) {
    userdata.value.image = URL.createObjectURL(file);
  }
};
const addPosition = (state, lng, lat) => {
  let uPosition = {
    userid: userdata.value.userid,
    password: userdata.value.password,
    username: userdata.value.username,
    lng: lng,
    lat: lat,
    image: userdata.value.image,
  };

  store.commit("addUser", uPosition);
  clearform();
};

onMounted(() => {
  if (!("geolocation" in navigator)) {
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      console.log(pos.coords.latitude, pos.coords.longitude);

      latitude.value = pos.coords.latitude;
      longitude.value = pos.coords.longitude;

      //   initMap();

      if (window.kakao && window.kakao.maps) {
        initMap();
      } else {
        const script = document.createElement("script");
        /* global kakao */
        script.onload = () => kakao.maps.load(initMap);
        script.src =
          "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=a46b620733890a2d0fcd38b96e043216";
        document.head.appendChild(script);
      }
    },
    (err) => {
      alert(err.message);
    }
  );
});

const initMap = () => {
  const container = document.getElementById("map");
  let options = {
    center: new kakao.maps.LatLng(latitude.value, longitude.value),
    level: 3,
  };

  let map = new kakao.maps.Map(container, options);

  var markerPosition = new kakao.maps.LatLng(latitude.value, longitude.value);
  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);

  //지도 중심좌표
  kakao.maps.event.addListener(map, "center_changed", function () {
    var latlng = map.getCenter();

    moveLat.value = latlng.getLat();
    moveLng.value = latlng.getLng();
  });
  // 지도를 클릭했을때 클릭한 위치에 마커를 추가하도록 지도에 클릭이벤트를 등록합니다
  kakao.maps.event.addListener(map, "click", function (mouseEvent) {
    // 클릭한 위치에 마커를 표시합니다
    addMarker(mouseEvent.latLng);
  });

  // 지도에 표시된 마커 객체를 가지고 있을 배열입니다
  var markers = [];

  // 마커 하나를 지도위에 표시합니다
  var latlng = map.getCenter();

  moveLat.value = latlng.getLat();
  moveLng.value = latlng.getLng();
  addMarker(new kakao.maps.LatLng(moveLat.value, moveLng.value));

  // 마커를 생성하고 지도위에 표시하는 함수입니다
  function addMarker(position) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: position,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 생성된 마커를 배열에 추가합니다
    markers.push(marker);
    console.log(position);
    newPosition(position);
  }

  function newPosition(position) {
    lng.value = position.getLng();
    lat.value = position.getLat();
  }
};
</script>

<style lang="scss" scoped></style>
