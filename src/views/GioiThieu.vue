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
        <h4 class="mt-4 text-center">HD BookStore</h4>
        <p>Chào mừng bạn đến với HD BookStore - điểm đến lý tưởng cho những đam mê sách! Chúng tôi tự hào là nơi bạn có thể khám phá và sở hữu những tác phẩm văn học tuyệt vời nhất từ mọi thể loại. HD BookStore cam kết mang đến trải nghiệm mua sắm sách trực tuyến độc đáo, thuận tiện và đầy hứng thú.
</p>
           <div class="row mt-4">
            <div class="card" style="width: 18rem;">
                <img src="../assets/images/GT/sach_1.jpg" class="card-img-top" alt="...">
                </div>
                <div class="card" style="width: 18rem;">
                <img src="../assets/images/GT/sach_2.jpg" class="card-img-top" alt="...">
              
                </div>
                <div class="card" style="width: 18rem;">
                <img src="../assets/images/GT/sach_3.jpg" class="card-img-top" alt="...">
              
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