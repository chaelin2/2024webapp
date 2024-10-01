<template>
  <div>
    <NavbarView />
    <SearchbarView @searchCity="searchCity" />
    <WeatherView :data="weatherData" />
    <HistoryWeather />

    <!-- {{ weatherData }} -->
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import NavbarView from "./components/NavbarView.vue";
import SearchbarView from "./components/SearchbarView.vue";
import WeatherView from "./components/WeatherView.vue";
import HistoryWeather from "./components/HistoryWeather.vue";
import axios from "axios";

const weatherData = ref({
  icon: "icon",
  temp: 0,
  text: "text",
  location: "location",
  city: "jeju",
});

const getWeather = async () => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.value.city}&appid=4eedfeb184dc7cb08af6c0bd529c48b9`
  );
  console.log(res.data);

  weatherData.value.icon = res.data.weather[0].icon;
  weatherData.value.temp = res.data.main.temp;
  weatherData.value.text = res.data.weather[0].description;
  weatherData.value.location = res.data.sys.country;
  weatherData.value.city = res.data.name;
};

onMounted(() => {
  getWeather();
});

const searchCity = (city) => {
  console.log(city);
  weatherData.value.city = city;
  getWeather();
};

const getHistory = async () => {
  const res1 = await axios.get(
    `https://history.openweathermap.org/data/2.5/history/city?lat=41.85&lon=-87.65&appid=4eedfeb184dc7cb08af6c0bd529c48b9`
  );
  console.log(res1.data);
};
onMounted(() => {
  getHistory();
});
</script>

<style lang="scss" scoped></style>
