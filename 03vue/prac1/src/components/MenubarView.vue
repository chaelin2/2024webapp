<template>
  <div class="conWrap">
    <div class="container menu">
      <ul>
        <li><a href="#">MEN</a></li>
        <li><a href="#">WOMAN</a></li>
        <li><a href="#">BAG</a></li>
        <li><a href="#">ACCESORY</a></li>
        <li>
          <a href="#"><img src="../assets/images/logo.png" alt="" /></a>
        </li>
        <li><a href="#">온라인단독</a></li>
        <li><a href="#">SALE</a></li>
        <li>
          <a href="#"><img src="../assets/images/search_ic.png" alt="" /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  display: block;
  flex-direction: row;

  height: 100px;
  width: 900px;

  ul {
    display: block;
    display: flex;
    width: 900px;
    align-items: center;
    // background: pink;
    // margin-right: 5px;
    // font-weight: bold;
    // position: relative;
    // padding: 16px 0;
    // padding-right: 40px;
  }
  ul a {
    width: 150px;
    margin-right: 5px;
    font-weight: bold;
    position: relative;
    padding: 16px 0;
    padding-right: 30px;
  }
  ul img {
    margin-right: 80px;
    display: block;
  }

  a.on:after,
  a:hover:after {
    content: "";
    position: absolute;
    display: block;
    width: 50px;
    height: 5px;
    // bottom: -3px;
    top: 5px;
    left: 0;

    background-color: #a71c20;
  }
}
</style>
