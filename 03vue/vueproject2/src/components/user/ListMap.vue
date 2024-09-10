<template>
  <div></div>

  <div class="mb-5" id="map2" style="width: 600px; height: 400px"></div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
const store = useStore();
const latitude = ref(0);
const longitude = ref(0);
let len = store.state.userData.length;
var markers = [];
let num = 0;

onMounted(() => {
  if (!("geolocation" in navigator)) {
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      console.log(pos.coords.latitude, pos.coords.longitude);

      latitude.value = 33.450701;
      longitude.value = 127;

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
  const container = document.getElementById("map2");
  let options = {
    center: new kakao.maps.LatLng(
      store.state.userData[0].lng,
      store.state.userData[0].lat
    ),
    level: 14,
  };

  let map = new kakao.maps.Map(container, options);
  // markers = [];
  var markerPosition = new kakao.maps.LatLng(
    store.state.userData[0].lng,
    store.state.userData[0].lat
  );
  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);

  len = store.state.userData.length;
  for (let i = 0; i < len; i++) {
    num++;
    // console.log(i);
    addMarker(
      new kakao.maps.LatLng(
        store.state.userData[i].lng,
        store.state.userData[i].lat
      )
    );
  }
  watch(
    () => {
      return store.state.userData;
    },
    (newval) => {
      for (var i = 0; i < newval.length; i++) {
        console.log(newval[i].lng);
        console.log(newval[i].lat);
        addMarker(new kakao.maps.LatLng(newval[i].lat, newval[i].lng));
        marker.setMap(map);
      }
    },
    { deep: true }
  );
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
  }
};
</script>

<style lang="scss" scoped></style>
