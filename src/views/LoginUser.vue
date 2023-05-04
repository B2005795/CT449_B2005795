<script>  
    import FormloginVue from "../components/Formlogin.vue";
    import toastsVue from "../components/toasts.vue";
    import HeaderShop from '@/components/HeaderShop.vue'
    export default {
        components: {
            FormloginVue,
            HeaderShop,
            toastsVue
        },
    };
</script>
<template>
   <div class="header">
        <HeaderShop></HeaderShop>
    </div>
<toastsVue></toastsVue>
<div class="body_admin mt-4"  >
  <h1 class="text-center">ĐĂNG NHẬP</h1>
<div class="h-100" >
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
   
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1 ">
        
          <FormloginVue></FormloginVue>
      </div>
    </div>
  </div>
</div>  
</div>

</template>
<style>
.body_admin{
    background-image: url('../assets/images/footer.jpg');
    font-size: 25px;
}
</style>