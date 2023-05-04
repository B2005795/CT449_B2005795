<script>
import SliderShop from '@/components/SliderShop.vue'
import HeaderShop from '@/components/HeaderShop.vue'
import ProductService from '../services/Product.service'
import { mapState } from "pinia";
import { useAuthStore } from "@/stores/Auth.store";
import toastsVue from '../components/toasts.vue';
export default {
    data() {
        return {
            Products: [],
        }
    },
    components: {
        HeaderShop,
        SliderShop,
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
    <div class="slider">
        <SliderShop></SliderShop>
    </div>

    <!-- <div style="margin: 20px 100px;">
        <div style="text-align: center; margin: 30px 0;" class="heading">
            <h3>TOP SẢN PHẨM SHOP</h3>
            <h6>Những sản phẩm tự làm hot nhất</h6>
        </div>
        <div class="flex-row auto-mx text-center">
            <div class="d-sm-flex flex-wrap" id="hoa">
                <div class="card m-1" style="width: 18rem;" v-for="item in Products" v-show="item.categories === 'Hoa'">
                    <div class="wrapper-img">
                        <div class="image_slider">
                            <div class="image_item" v-for="img in item.img">
                                <img :src="img" class="card-img-top" alt="...">
                            </div>
                        </div>
                    </div>
                    <div class="card-body product">
                        <h5 class="card-title">{{ item.title }}</h5>
                        <h6 class="price">{{ item.price }} VNĐ</h6>
                        <router-link :to="{
                            name: 'details',
                            params: { id: item._id },
                        }">
                            <button type="button" class="btn btn-warning">Xem thêm</button>

                        </router-link>

                    </div>

                </div>
            </div> -->
            <div class="container">
            <div style="text-align: center; margin: 30px 0;" class="heading">

                <h3>SẢN PHẨM SHOP</h3>
              <H4>Danh mục: Nguyên vật liệu</H4>
            </div>
            <div class="d-sm-flex flex-wrap" id="NL">
                <div class="card m-1" style="width: 18rem;" v-for="item in Products" v-show="item.categories === 'NL'">
                    <div class="wrapper-img">
                        <div class="image_slider">
                            <div class="image_item" v-for="img in item.img">
                                <img :src="img" class="card-img-top" alt="...">
                            </div>
                        </div>
                    </div>
                    <div class="card-body product">
                        <h5 class="card-title">{{ item.title }}</h5>
                        <h6 class="price">{{ item.price }}VNĐ</h6>
                        <router-link :to="{
                            name: 'details',
                            params: { id: item._id },
                        }">
                            <button type="button" class="btn btn-warning" @click="nextdetailsproduct">Xem thêm</button>
                        </router-link>
                    </div>
                </div>
            </div>
            <hr>
            <!-- <div style="text-align: center; margin: 30px 0;" class="heading">
                <h3>TOP MÓC KHÓA HOT</h3>
                <h6>Những sản phẩm móc khóa dễ thương</h6>
            </div>
            <div class="d-sm-flex flex-wrap" id="mockhoa">
                <div class="card m-1" style="width: 18rem;" v-for="item in Products"
                    v-show="item.categories === 'Tho' || item.categories === 'tui'">
                    <div class="wrapper-img">
                        <div class="image_slider">
                            <div class="image_item" v-for="img in item.img">
                                <img :src="img" class="card-img-top" alt="...">
                            </div>
                        </div>
                    </div>
                    <div class="card-body product">
                        <h5 class="card-title">{{ item.title }}</h5>
                        <h6 class="price">{{ item.price }}VNĐ</h6>
                        <router-link :to="{
                            name: 'details',
                            params: { id: item._id },
                        }">
                            <button type="button" class="btn btn-warning" @click="nextdetailsproduct">Xem thêm</button>
                        </router-link>
                    </div>
                </div>
            </div> -->
        <!-- </div>
    </div> -->
    <div>
    </div>
    </div>
</template>
<style scoped>   .wrapper-img {
       width: 100%;
       height: 100%;
       overflow: hidden;
   }

   .image_slider {
       display: flex;
       transition: all .8s ease;

   }

   /* .image_slider:hover {
       transform: translateX(-100%);
   } */

   .image_item {
       flex: 1 0 100%;
   }</style>