<template>
   <div class="conWrap mb-10">
      <div class="container menu">
         <a href="#" class="on">영화</a>
         <a href="#">방송</a>
         <a href="#">랭킹</a>
         <a href="#">무료</a>
         <a href="#">이벤트</a>
         <a href="#">멤버십</a>
      </div>
   </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.conWrap {
   width: 100%;
   //    background-color: skyblue;
   border-bottom: 1px solid #888;

   .menu {
      display: flex;
      a {
         display: block;
         width: 100px;
         // background: pink;
         margin-right: 5px;
         font-weight: bold;
         position: relative;
         padding: 16px 0;
         padding-right: 40px;
      }
      @media screen and(max-width:560px) {
         a {
            padding-right: 15px;
         }
      }
      a.on:after,
      a:hover:after {
         content: '';
         position: absolute;
         display: block;
         width: 50px;
         height: 5px;
         bottom: -3px;
         left: 0;
         background-color: rgb(31, 211, 70);
      }
   }
}
</style>
