<script>
import SliderShop from '@/components/SliderShop.vue'
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
        <h4 class="mt-4">Liên hệ với chúng tôi</h4>
            <ul>
                
                <li>SĐT: 0935678789</li>
                <li>Email: B1909880_CT449@gmail.com</li>
                <li>Địa chỉ: Đường 3/2, Xuân Khánh,Ninh Kiều, Cần Thơ</li>
            </ul>
            <h4>Địa chỉ văn phòng</h4>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62860.40232483723!2d105.71439050261898!3d10.035404978446016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0883fbc944b83%3A0x77fc34233e5e1320!2zTmluaCBLaeG7gXUsIEPhuqduIFRoxqEsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1681841207587!5m2!1svi!2s" width="400" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
</template>