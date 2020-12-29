<template>
  <div>
    <el-row>
      <el-col :span="24" class="footer">
        <div class="grid-contentbg-purple-dark">
          <div @click="tohome">
            <p class></p>

            <router-link to="/">
              <i class="el-icon-s-home"></i>
              <p>首页</p>
            </router-link>
          </div>
          <div @click="tocard">
            <router-link to="/details">
              <i class="el-icon-shopping-bag-1"></i>
              <p>购物车</p>
            </router-link>
          </div>
          <div @click="tome">
            <router-link to="/">
              <i class="el-icon-user-solid"></i>
              <p>我的</p>
            </router-link>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
        changeColor: false
    };
  },
  methods: {
    tohome() {
        console.log(1);
    },
    tocard() {
      console.log(2);
    },
    tome() {
      console.log(3);
    },
  },
};
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.grid-contentbg-purple-dark {
  display: flex;
  //   justify-content: space-between;
  .changeColor {background: lightgreen;}
  div {
    flex: 1;
    font-size: 18px;
    color: white;
    text-align: center;
  }
  .tabs-active {
    color: black;
  }
  i {
    list-style: none;
    color: white;
  }
  p {
    color: whitesmoke;
    list-style: none;
  }
}
</style>