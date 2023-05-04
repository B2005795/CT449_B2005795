<script> 
    import * as yup from "yup";
    import { Form, Field, ErrorMessage } from "vee-validate";
    import AuthService from "../services/Auth.service";
    import toast from "../assets/js/toasts";
    import HeaderShop from '@/components/HeaderShop.vue'
    import toastsVue from "../components/toasts.vue";
    export default {
        components: {
            Form,
            Field,
            ErrorMessage,
            HeaderShop,
            toastsVue
        },
        data() {
        const Logupform = yup.object().shape({
            name: yup
            .string()
            .required("Vui lòng nhập tên.")
            .min(2, "Tên phải ít nhất 2 ký tự."),
            email: yup
            .string()
            .required("Vui lòng nhập email.")
            .email("E-mail không đúng.")
            .max(50, "E-mail tối đa 50 ký tự."),
           pwd: yup
            .string()
            .required("Mật khẩu phải có giá trị.")
            });
            return {
            Logupform,
            message:"Đăng ký thành công",
            usernew:{
                username:"",
                email:"",
                password:"",
            },
            toasts:{
              title:"",
              msg:"",
              type:"",
              duration:0
                 },
            };
        },
        methods:{
          toast,
            async postuser(){
                try{
                  await AuthService.createsignup(this.usernew);
                   this.toasts.title="Thành công",
                  this.toasts.msg="Đăng ký thành công",
                  this.toasts.type="success",
                  this.toasts.duration=2000
                  this.toast();
                  setTimeout(()=>{
                    this.$router.push({name:"login"});
                  },2000);
                }catch(erorr){
                  console.log(erorr);
                  this.toasts.title="Lỗi",
                  this.toasts.msg="Thông tin bạn nhập đã được đăng ký",
                  this.toasts.type="error",
                  this.toasts.duration=2000
                  this.toast();
                }
            }
        }
    };
</script>

<template>
  <div class="header">
        <HeaderShop></HeaderShop>
    </div>
<toastsVue></toastsVue>
<section class="body_admin mt-4">
  <div class="container py-4">
    <!-- <div class="row g-0 align-items-center">
      <div class="col-lg-6 mb-5 mb-lg-0">
        <div class="card cascading-right" style="
            background: hsla(0, 0%, 100%, 0.55);
            backdrop-filter: blur(30px);
            "> -->
          <!-- <div class="card-body p-5 shadow-5 "> -->
            <h2 class="fw-bold mb-5 text-center">ĐĂNG KÝ TÀI KHOẢN</h2>
            <div class="h-100" >
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1 ">
            <Form :validation-schema="Logupform">
              <div class="form-outline mb-3 shadow-5">
                 <label class="form-label fw-bold" for="name">Họ và tên</label>
                 <Field 
                        id="name"
                        name="name"
                        placeholder="Nhập tên đăng ký"
                        type="text"
                        class="form-control form-control-lg"
                        v-model="usernew.username"/>
                    <ErrorMessage name="name" class="text-danger"/> 
              </div>
                <div class="mb-3">
                  <label class="form-label fw-bold" for="email">Email</label>
                  <div class="form-outline">
                      <Field 
                        id="email"
                        name="email"
                        placeholder="Nhập email đăng ký"
                        type="email"
                        class="form-control form-control-lg"
                        v-model="usernew.email"
                    />
                    <ErrorMessage name="email" class="text-danger" /> 
                  </div>
                </div>
              <div class="form-outline mb-3">
                <label class="form-label fw-bold" for="pwd">Mật khẩu</label>
                    <Field 
                        id="pwd"
                        name="pwd"
                        placeholder="Nhập mật khẩu"
                        type="password"
                        class="form-control form-control-lg"
                        v-model="usernew.password"
                    />
                    <ErrorMessage name="pwd" class="text-danger" /> 
              </div>
              <!-- <div class="form-check d-flex justify-content-center mb-4">
                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                <label class="form-check-label" for="form2Example33">
                  
                </label>
              </div> -->
              <!-- Submit button -->
              <button type="button" class="btn btn-info btn-lg mb-4" @click="postuser()">
               ĐĂNG KÝ
              </button>
              <p>Nếu bạn đã có tài khoản <router-link to="/login"> Đăng nhập</router-link></p>

            </Form>
          </div>
          </div>
        </div>
      </div>
      <!-- <div class="col-lg-6 mb-5 mb-lg-0">
        <img src="../assets/images/footer.jpg" class="w-100 rounded-4 shadow-4"
          alt="..." />
      </div> -->
    </div>
  <!-- </div> -->
  <!-- Jumbotron -->
</section>
<!-- Section: Design Block -->
</template>
 <!-- <style scoped  >
    .cascading-right {
      margin-right: -50px;
    }
    @media (max-width: 991.98px) {
      .cascading-right {
        margin-right: 0;
      }
    }
  </style> -->
  <style>
.body_admin{
    background-image: url('../assets/images/footer.jpg');
    font-size: 25px;
}
</style>
