<script>
import HeaderShop from '@/components/HeaderShop.vue'
import ProductService from '../services/Product.service'
import { mapState } from "pinia";
import { useAuthStore } from "@/stores/Auth.store";
import toastsVue from '../components/toasts.vue';
export default {
    
    components: {
        HeaderShop,
        toastsVue
    },
    computed: {
        ...mapState(useAuthStore, {
            currentUser: "user",
        }),
    },
    methods: {
        async retrieveProduct() {
            try {
                this.Products = await ProductService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
    },
    mounted() {
        this.retrieveProduct();
    },
}
</script>
<template>
    <div class="header">
        <HeaderShop></HeaderShop>
    </div>
    <toastsVue></toastsVue>
    

    <div class="container">
        <h4 class="mt-4 text-center">CỬA HÀNG LEN MIN</h4>
        <p>Với niềm đam mê về những món đồ handmade. Tôi đã mở cho bản thân một cửa hàng Len min với niềm đam mê 
            cũng mong muốn có thể chia sẻ nguồn năng lượng tích cực với mọi người xung quanh, tạo ra những món quà tặng đầy ý nghĩa. Khi mới bắt đầu tôi còn khá bỡ ngỡ 
            thiếu kinh nghiệm, gặp nhiều khó khăn trong những tháng đầu tiên. Nhưng nhờ sự ủng hộ của những người bạn, những người
            có cùng sở thích, cùng niềm đam mê mà chúng tôi đã thành công như hôm nay. Đều do sự yêu thích cùng ủng hộ của tất cả mọi người</p>
           <div class="row mt-4">
            <div class="card" style="width: 18rem;">
                <img src="../assets/images/GT/ao1.jpg" class="card-img-top" alt="...">
                </div>
                <div class="card" style="width: 18rem;">
                <img src="../assets/images/GT/tui1.jpg" class="card-img-top" alt="...">
              
                </div>
                <div class="card" style="width: 18rem;">
                <img src="../assets/images/GT/gau1.jpg" class="card-img-top" alt="...">
              
                </div>
                <div class="card" style="width: 18rem;">
                <img src="../assets/images/GT/hoa1.jpg" class="card-img-top" alt="...">
              
                </div>
           </div>
           <h4 class="mt-4 ">Hướng dẫn mua hàng</h4>
           <ul>
            <li>Quý khách có thể mua trực tiếp tại cửa hàng hoặc mua online</li>
            <li>Khi mua tại website quý khách phải đăng ký tài khoản thành viên</li>
           </ul>
           <p class="mt-4">Cùng khám phá cửa hàng nào <a href="/">Xem ngay</a></p>
        </div>
</template>