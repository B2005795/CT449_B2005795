<script>  

import * as yup from "yup";
    import { Form, Field, ErrorMessage } from "vee-validate";
    import { mapActions } from "pinia";
    import { useAuthStore } from "@/stores/Auth.store";
    import toast from "../assets/js/toasts";
    export default {
        components: {
            Form,
            Field,
            ErrorMessage,
        },
        data() {
        const Loginform = yup.object().shape({
            username: yup
            .string()
            .required("Vui lòng nhập tên")
            .min(2, "Tên phải ít nhất 2 ký tự."),
           password: yup
            .string()
            .required("Vui lòng nhập mật khẩu")
            });
            return {
           
            toasts:{
                    title:"Lỗi",
                    msg:"Tên đăng nhập hoặc tài khoản không đúng!",
                    type:"warn",
                    duration:2000
                 },
            }
        },
        methods:{
            toast,
            showPwd(){
            if(document.querySelector("#checkpwd").checked == true){
                  document.querySelector("#pwd").type = 'text';
            }else{
                  document.querySelector("#pwd").type = 'password';
            }
          },
          	...mapActions(useAuthStore, ["login"]),
            async handleLogin(user) {
              try {
                await this.login(user);
                location.href='http://localhost:8001/admin';
              } catch (error) {
                this.toast();
                console.log(error);
              }
            },
        },
    };
</script>
<template >
<toastsVue></toastsVue>
<h1 style="margin-top: 100px ; margin-left: 100px;" class="text-center">ĐĂNG NHẬP ADMIN</h1>
<div class="h-100 ">
  <div class="container-fluid h-custom login">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="../assets/images/bg_login.png"
          class="img-fluid" alt="Sample image">
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        
        <Form :validation-schema="Loginform" @submit="handleLogin">
        
        <div class="form-outline mb-4 shadow-5 ">
          <label class="form-label fw-bold" for="username">Tên đăng nhập</label>
          <Field 
              id="name"
              placeholder="Nhập tên đăng nhập"
              name="username"
              type="text"
              class="form-control form-control-lg"
          />
          <ErrorMessage name="username" class="text-danger" />
        </div>

        <!-- Password input -->
        <div class="form-outline mb-3">
          <label class="form-label fw-bold" for="pwd">Mật khẩu</label>
           <Field 
              id="pwd"
              placeholder="Nhập mật khẩu"
              name="password"
              type="password"
              class="form-control form-control-lg"
          />
          <ErrorMessage name="password" class="text-danger"/>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <!-- Checkbox -->
          <!-- <div class="form-check mb-0">
            <input class="form-check-input me-2" type="checkbox" value="" id="checkpwd" @click="showPwd()" />
            <label class="form-check-label" for="checkpwd">
              Hiện thị mật khẩu
            </label>
          </div> -->
        </div>
        <div class="text-center tex t-lg-start mt-4 pt-2">
            <button class="btn btn-primary btn-lg"
              style="padding-left: 2.5rem; padding-right: 2.5rem;">ĐĂNG NHẬP</button>
       
        </div>
      </Form>
      </div>
    </div>
  </div>
</div>  

</template>
<!-- <style>
.login{
    background-image: url('../assets/images/bg_login.png');
    width: 100%;
      height: 100%;
      position: inherit;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      background-attachment: fixed; 
}
</style> -->