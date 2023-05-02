<script> 
import HeaderShop from '@/components/HeaderShop.vue';
import CartService from '../services/Cart.service';
import toastsVue from '../components/toasts.vue';
import toastsjs from '../assets/js/toasts.js'
import CartItem from "../components/CartItem.vue";
export default{
    data(){
      return{
          carts:[],
          toasts:{
              title:"",
              msg:"",
              type:"",
              duration:0
              },
      }
    },
    components:{
         HeaderShop,
         toastsVue,
         CartItem
     },
     methods:{
        getiduser(){
          const user =  JSON.parse(localStorage.getItem("user"));
          return user._id;
        },
        async getcarts(){
          try{
          this.carts = await CartService.get(this.getiduser());
          }catch(error){
            console.log(error);
          }
        },
        async delcart(index){
              this.toasts.title="Deleted",
              this.toasts.msg="Đã xóa sản phẩm",
              this.toasts.type="error",
              this.toasts.duration=2000
              this.toastsjs(); 
              await CartService.delete(this.carts[index]._id)
              this.refeshlistcart();  
        },
       toastsjs,
       refeshlistcart(){
         this.getcarts();
       },

      async registerproduct(){
         if(this.carts.length > 0){
           this.toasts.title = "Thành côngd",
          this.toasts.msg = "Đặt hàng thành công",
          this.toasts.type = "success",
          this.toasts.duration=2000,
         
          this.toastsjs();
          await CartService.deleteAll({})
          this.refeshlistcart();
         }else{
               this.toasts.title = "lỗi",
              this.toasts.msg = "Đặt hàng không thành công, vui lòng thêm sản phẩm vào giỏ hàng",
              this.toasts.type = "error",
              this.toasts.duration=3000,
              this.toastsjs();
         }
       },  
       async removeAllCart() {
      if (confirm("Bạn có chắc muốn xóa tất cả giỏ hàng")) {
        try {
          await CartService.deleteAll();
          this.refeshlistcart();
        } catch (error) {
          console.log(error);
        }
      }
    },
         total(){
           var total=0;
           for(var i in this.carts){
              total+=(this.carts[i].price*this.carts[i].quantity);
           }
            return total;
        }   
     },
      created(){
        this.refeshlistcart();
     },
}
</script>
<template>
  <HeaderShop></HeaderShop>
  <toastsVue></toastsVue>
    <section class="h-100 h-custom" >
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12">
        <div class="card card-registration card-registration-2" style="border-radius: 15px;">
          <div class="card-body p-0">
            <div class="row g-0">
              <div class="col-lg-8">
                <div class="p-5">
                  <div class="d-flex justify-content-between align-items-center mb-5">
                    <h2 class="fw-bold mb-0 text-black mx-auto text-center">Giỏ hàng của bạn</h2>
                    <!-- <h6 class="mb-0 text-muted">{{carts.length}} sản phẩm</h6> -->
                  </div>
                  
                  <!-- <hr class="my-4"> -->
                  <!-- <div class="d-flex justify-content-between mb-5"><h6>Tên sản phẩm</h6>
                  <h6>Giá</h6> 
                <h6>Quản lý</h6></div> -->
                  <hr class="my-4">
                  <CartItem :refeshlistcart="refeshlistcart" :carts="carts" @deleted:cartIndex="delcart"></CartItem>
                  <button class="btn btn-sm btn-danger" @click="removeAllCart">
          <i class="fas fa-trash"></i> Xóa tất cả
        </button>
                  <hr class="my-4">
                
                  <!-- <div class="pt-5">
                    <h6 class="mb-0 btn btn-outline-info"><router-link to="/" class="text-body"><i
                          class="fas fa-long-arrow-alt-left me-2 "></i>Trang chủ</router-link></h6>
                  </div> -->
                  <div class="d-flex justify-content-between mb-5">
                    <h5 class="text-dark">TỔNG TIỀN</h5>
                    <h5 class="text-dark">{{total()}}<span> VNĐ</span></h5>
                  </div>
                   <!-- <button type="button" class="btn btn-warning btn-block btn-lg"
                    data-mdb-ripple-color="white" @click="registerproduct()">Đặt hàng</button> -->
                </div>
              </div>
              <div class="col-lg-4 bg-grey">
                <div class="p-5">
                  <h3 class="d-flex fw-bold mb-5 mt-2 pt-1">ĐẶT HÀNG</h3>
                  <hr class="my-4">

                  <div class="d-flex justify-content-end mb-4">
                    <h6 class="text-uppercase"> {{carts.length}} Sản phẩm</h6>
                    
                    
                  </div>
                  <div class="d-flex justify-content-between mb-5">
                    <h6>Thành tiền</h6>
                    <h6  class=" d-flex justify-content-end"> {{total()}}<span> VNĐ</span></h6>
                  </div>
                 

                  <h5 class="text-uppercase mb-3"></h5>

                  <div class="mb-4 pb-2">
                    <select class="form-select" aria-label="Default select example" >
                      <option selected>---Hình thức thanh toán---</option>
                      <option value="1">Thanh toán tại cửa hàng</option>
                      <option value="2">Chuyển khoản</option>
                    
                    </select>
                  </div>
                  <div class="mb-4 pb-2">
                    <select class="form-select" aria-label="Default select example" >
                      <option selected>---Hình thức giao hàng---</option>
                      <option value="1">Giao hàng nhanh</option>
                      <option value="2">Giao hàng tiết kiệm</option>
                    
                    </select>
                  </div>
                  <!-- <div class="text-uppercase mb-3">
                    <h6>Ghi chú đơn hàng</h6>
                    <textarea name="" id="" cols="40" rows="3"></textarea>
                  </div> -->
                  <!-- <h5 class="text-uppercase mb-3"></h5>

                  <div class="mb-5">
                    <div class="form-outline">
                      <input type="text" id="form3Examplea2" class="form-control form-control-lg" />
                      <label class="form-label btn-sm" for="form3Examplea2">Nhập mã code</label>
                    </div>
                  </div> -->

                  <hr class="my-4">

                  <!-- <div class="d-flex justify-content-between mb-5">
                    <h5 class="text-uppercase">Thành tiền</h5>
                    <h5>{{total()}}<span> VNĐ</span></h5>
                  </div> -->

                  <button type="button" class="btn btn-warning btn-block btn-lg"
                    data-mdb-ripple-color="white" @click="registerproduct()">Đặt hàng</button>
                   
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<style scoped>
@media (min-width: 1025px) {
.h-custom {
height: 100%;
}
}

.card-registration .select-input.form-control[readonly]:not([disabled]) {
font-size: 1rem;
line-height: 2.15;
padding-left: .75em;
padding-right: .75em;
}

.card-registration .select-arrow {
top: 13px;
}

.bg-grey {
background-color: #a7c4c4;
}

@media (min-width: 992px) {
.card-registration-2 .bg-grey {
border-top-right-radius: 16px;
border-bottom-right-radius: 16px;
}
}

@media (max-width: 991px) {
.card-registration-2 .bg-grey {
border-bottom-left-radius: 16px;
border-bottom-right-radius: 16px;
}
}
</style>