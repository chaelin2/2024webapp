<template>
   <div class="container secWrap">
      <h3>HOT&NEW</h3>
      <div class="cardWrap">
         <div class="card" v-for="(item, i) in data1" v-bind:key="i">
            <div class="imgWrap">
               <img v-bind:src="`./images/${item.img}`" alt="" />
            </div>
            <div class="cardText">
               <h1>{{ item.title }}</h1>
               <p>💕{{ item.num }}</p>
               <p>대여:{{ item.won }}</p>
            </div>
         </div>
      </div>
      <!-- <div class="v-force"></div>

      <ul>
         <li v-for="(item, index) in todos" v-bind:key="index">
            {{ item }}
         </li>
      </ul> -->
   </div>
</template>

<script>
export default {
   name: 'App',
   data() {
      return {
         todos: ['서울', '부산', '대구'],
         data1: [
            { title: '핸섬가이즈', num: '8.6', won: '11,000', img: 'handsome.jpg' },
            { title: '탈주', num: '8.6', won: '11,000', img: 'movie_image.jpg' },
            { title: '하이재킹', num: '8.7', won: '10,900', img: 'movie_image2.jpg' },
         ],
      };
   },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/style.scss';
.secWrap {
   padding: 5px 16px;
}

.cardWrap {
   display: flex;
   gap: 10px;
   .card {
      width: 212px;

      .imgWrap {
         width: 100%;
         overflow: hidden;
         border-radius: 10px;

         img {
            display: block;
            width: 100%;
            transition: 0.3s;
         }
         &:hover img {
            transform: scale(1.1);
         }
      }
      .cardText {
         padding: 5px;
      }
   }
}
</style>
