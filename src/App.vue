<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
img {
  width: 100%;
  height: 100%;
}
ul {
  li {
    width: 5px;
    height: 10px;
    border-radius: 50%;
    margin-right: 20px;
  }
}
  .footer {
    height: 50px;
    width: 100%;
    background-color: cornflowerblue;
    position: fixed;
    bottom: 0;  
  }
</style>
