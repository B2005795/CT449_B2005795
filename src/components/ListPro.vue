<script>
import ProductService from "../services/Product.service";
import toastjs from "../assets/js/toasts";
export default {
    data() {
        return {
            // toasts:{
            //     title:"",
            //     msg:"",
            //     type:"",
            //     duration:0
            //  },
        }
    },
    props: {
        products: Array,
        refeshlist: Function,
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        toastjs,
        async delproduct(id) {
            try {
                await ProductService.delete(id);
                this.refeshlist();
                this.toasts.title = "Success",
                    this.toasts.msg = "Đã xóa sản phẩm thành công",
                    this.toasts.type = "success",
                    this.toasts.duration = 2000
                this.toastjs();
            } catch (error) {
                console.log(error);
                this.toasts.title = "Warning",
                    this.toasts.msg = "Bạn chưa đăng nhập hoặc bạn không phải ADMIN",
                    this.toasts.type = "warn",
                    this.toasts.duration = 2000
                this.toastjs();
            }
        },
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        },
    }
}
</script>
<template>
    <div class="row">
        <div class="container">
            <!-- <div style="text-align: center; margin: 30px 0;" class="heading">
                <hr>
                <h3> SẢN PHẨM SHOP</h3>
                <h6>Những sản phẩm tự làm hot nhất</h6>
            </div> -->
            <div class="flex-row auto-mx text-center">
                <div class="d-sm-flex flex-wrap">
                    <div class="card m-1" style="width: 18rem;" v-for="(product, index) in products" :key="product._id"
                        @click="updateActiveIndex(index)">
                        <div class="wrapper-img">
                            <div class="image_slider">

                            <div class="image_item" v-for="img in product.img">
                                <img :src="img" class="card-img-top" alt="...">
                            </div>
                        </div>

                        <div class="card-body product">
                            <h5 class="card-title">{{ product.title }}</h5>
                            <h6 class="price">{{ product.price }} VNĐ</h6>
                            <router-link :to="{
                                name: 'details',
                                params: { id: product._id },
                            }">
                                <button type="button" class="btn btn-warning">Xem thêm</button>

                            </router-link>

                            </div>
                            <!-- </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- </div>
        </div> -->

    <!-- <div class="col-sm-3" >
                        <div class="card" style="width: 18rem;">
                            <div class="wrapper-img">
                                <div class="image_slider">
                                    <div class="image_item">
                                        <img :src=" product.img[0]" alt="img" width="150">
                                    </div>
                                </div>
                            </div>
                            <div class="card-body product">
                                <h5 class="card-title">{{product.title}}</h5>
                                <h6 class="price">{{ product.price }}VNĐ</h6>
                                <router-link :to="{
                                    name: 'details',
                                    params: { id: product._id },
                                }">
                                    <button type="button" class="btn btn-warning" @click="nextdetailsproduct">Xem
                                        thêm</button>
                                </router-link>
                            </div>
                        </div>
                    </div> -->
    <!-- <span>{{product.title}}</span>
            <span>{{ product.price }}</span>
            <span> {{product.categories}}</span>
            <p><img :src=" product.img[0]" alt="img" width="150"></p> -->
</template>
<style scoped>
.list-group-item:hover {
    background-color: #70b1b9;
    color: azure;
    font-size: 20px;
}

.wrapper-img {
    /* width: 280px;
    height: 280px; */
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
    width: 110px;
}

.text {
    color: #080808;
    font-size: 25px;
    position: absolute;
    top: 10px
}
</style>