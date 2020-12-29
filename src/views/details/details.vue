<template>
  <div class="details">
    <div class="welcome">欢迎{{user}}</div>
    <el-carousel height="220px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img :src="img" alt />
      </el-carousel-item>
    </el-carousel>
    <div
      class="goodsname"
      v-loading="loading1"
      element-loading-text="正在加载中..."
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    >{{goods.goods_name}}</div>
    <p
      style="border: 1px solid red; margin: 10px auto;width: 80%; text-align: center"
    >价格：￥{{goods.goods_price}}</p>
    <p
      style="border: 1px solid red; margin: 10px auto;width: 80%; text-align: center"
    >类别：{{goods.cat_one_id}}、{{goods.cat_two_id}}</p>

    <div class="buy">
      <el-button type="danger" icon="el-icon-shopping-cart-1" circle class="btn1" @click="btn1"></el-button>
      <el-button type="danger" class="btn2" @click="btn2">立即购</el-button>
      <el-button type="warning" class="btn3" @click="btn3">加入购</el-button>
      
    </div>
    <Footer></Footer>

    <div class="introduce" v-html="goods.goods_introduce"></div>

    <el-dialog
      :title="buy"
      :visible.sync="dialogVisible"
      width="90%"
      top="40vh"
      v-loading="loading"
      :element-loading-text="'正在'+buy"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    >
      <span style="margin-bottom: 10px">{{goods.goods_name}}</span>
      <p style="border: 1px solid #cccccc; margin-bottom: 10px">价格：￥{{goods.goods_price}}</p>
      <p
        style="border: 1px solid #cccccc; margin-bottom: 10px"
      >类别：{{goods.cat_one_id}}、{{goods.cat_two_id}}</p>
      <p style="border: 1px solid #cccccc; margin-bottom: 10px">
        购买数量：
        <input type="number" v-model="cart_number" min="0" />
        <button style="width:25px" @click="add">+</button>
        <button style="width:25px" @click="sub">-</button>
      </p>
      <p>总价：{{goods.goods_price*cart_number}}</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="putIn">{{buy}}</el-button>
      </span>
    </el-dialog>
    <div>
      
    </div>
  </div>
  
</template>

<script>
import Footer from "../../components/footer/footer"
import userapi from "../../api/userapi";
export default {
  data() {
    return {
      img: "",
      goods: {},
      dialogVisible: false,
      cart_number: "",
      loading: false,
      loading1: false,
      buy: "",
      user: ''
    };
  },

  components: {
    Footer,
  },

  methods: {
    btn1() {
      console.log(1);
    },
    btn2() {
      this.buy = "立即购买";
      this.dialogVisible = true;
    },
    btn3() {
      this.buy = "加入购物车";
      this.dialogVisible = true;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    add() {
      this.cart_number++;
      console.log(this.cart_number);
    },
    sub() {
      this.cart_number--;
      if (this.cart_number < 0) {
        this.cart_number = 0;
        this.$message({
          message: "不能再少了哦",
          type: "warning",
        });
      }
      console.log(this.cart_number);
    },
    putIn() {
      if (this.buy === "加入购物车") {
        if (this.cart_number === 0) {
          this.$message({
            message: "当前0件商品，不能添加到购物车",
            type: "warning",
          });
          return;
        } else {
          this.loading = true;
          userapi
            .putIn(
              this.goods.goods_name,
              this.goods.goods_id,
              this.goods.goods_price,
              this.goods.goods_small_logo,
              this.goods.cat_one_id,
              this.cart_number
            )
            .then((response) => {
              console.log(response.data);
              if (response.data.error === 0 || response.data.error === 1) {
                let number = this.cart_number;
                this.$message({
                  message: "已经将" + number + "件商品加入购物车",
                  type: "warning",
                });
              }
              console.log(this.cart_number);
              this.loading = false;
              this.dialogVisible = false;
            });
        }
      } else {
        if (this.cart_number === 0) {
           this.$message({
            message: "请选择商品数量",
            type: "warning",
          });
        } else {
          this.loading = true;
          let self = this;
          setTimeout(function () {
            self.loading = false;
            self.$message({
              message: "购买成功",
              type: "success",
            });
            self.dialogVisible = false;
          }, 3000);
        }
      }
    },
  },

  created() {
    this.user = document.cookie.slice(9);
    this.loading1 = true;
    var hash = location.hash.slice(1);
    userapi.todetails(JSON.parse(hash)).then((response) => {
      this.loading1 = false;
      this.img = response.data.data.goods_big_logo;
      this.goods = response.data.data;
      this.cart_number = Number(this.goods.cart_number + 1);
      console.log(this.goods);
      console.log(this.img);
    });
  },
};
</script>

<style lang="less">
.welcome {
  width: 100%;
  height: 40px;
  background-color: red;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.goodsname {
  width: 95%;
  //   margin-top: 5px;
  margin: 5px auto;
}
.introduce {
  margin-top: 10px;
  border-top: 2xp solid #cccccc;
  overflow: hidden;
}
.details {
  position: relative;
  .buy {
    width: 100%;
    position: fixed;
    // top: 600px;
    left: 20%;
    bottom: 50px;
    margin: auto;

    // display: flex;
    .el-button {
      flex: 1;
    }
    .btn1 {
      width: 50px;
    }
  }
}


</style>