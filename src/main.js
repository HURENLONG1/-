import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';


import { Button, Carousel,  CarouselItem, Dialog, Message, MessageBox, Loading, Form, FormItem, Input, InputNumber, Row,  Col, Card,} from 'element-ui'

Vue.use(Button);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Dialog);
Vue.use(Loading.directive);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(InputNumber);
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.config.productionTip = false
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
