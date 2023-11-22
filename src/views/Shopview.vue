<script>
import SliderShop from '@/components/SliderShop.vue'
import HeaderShop from '@/components/HeaderShop.vue'
import toastsVue from "../components/toasts.vue";
import ProductService from "../services/Product.service";
import ListProduct from "../components/ListProduct.vue";
import Productcard from "../components/Productcard.vue";

import toast from "../assets/js/toasts";

import inputSearch from "../components/inputSearch.vue";
import ListPro from "../components/ListPro.vue";
export default {
    data() {
        return {
            users: [],
            products: [],
            activeIndex: -1,
            activeUser: -1,
            searchText: "",

        }
    },
    watch: {
        searchText() {
            this.activeIndex = -1;
        },
    },
    computed: {
        productStrings() {
            return this.products.map((product) => {
                const { title, desc, img, categories, size, color, price } = product;
                return [title, desc, img, categories, size, color, price].join("");
            });
        },
        filteredProducts() {
            if (!this.searchText) return this.products;
            return this.products.filter((_product, index) =>
                this.productStrings[index].includes(this.searchText)
            );
        },
        activeProduct() {
            if (this.activeIndex < 0) return null;
            return this.filteredProducts[this.activeIndex];
        },
        filteredProductsCount() {
            return this.filteredProducts.length;
        },


        getindex() {
            if (this.activeIndex != -1) {
                const list = document.querySelectorAll(".product-item");
                list.forEach(element => {
                    element.classList.remove("active");
                });
                list[this.activeIndex].classList.add("active");
                return this.products[this.activeIndex];
            }
        },
        getindexuser() {
            if (this.activeUser != -1) {
                const list = document.querySelectorAll(".user-item");
                list.forEach(element => {
                    element.classList.remove("active");
                });
                list[this.activeUser].classList.add("active");
                return this.users[this.activeUser];
            }
        }
    },
    components: {
        HeaderShop,
        SliderShop,

        ListProduct,
        toastsVue,
        Productcard,
        ListPro,
        inputSearch
    },
    methods: {
        toast,
        async getall() {
            try {
                this.products = await ProductService.getAll();
                this.users = await UserService.getAll();
            } catch (error) {
                console.log(error);
                this.toast();
                setTimeout(() => {
                    this.$router.push({ name: "ShopMain" });
                }, 1000);
            }
        },
    },
    created() {
        this.getall();
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
    <div class="header text-center mt-4" style="background-image: url(../assets/images/footer.jpg);">
        <!-- <h2>QUẢN TRỊ VIÊN</h2> -->
    </div>
    <!-- <div class="main_admin container mt-4"> -->

        <div class=" row ">

<h4 class="text-center">DANH MỤC SẢN PHẨM</h4>
<div class="col-sm-3">
    <div class="d-sm-flex flex-wrap" id="hoa">
        <div class="card m-1" style="width: 18rem;">
            <div class="wrapper-img">
                <!-- <div class="image_slider"> -->
                <a href="/hoa">
                    <div class="image_item">
                        <img src="../assets/images/GT/sach_1.jpg" class="card-img-top" alt="...">
                        <h3 class="text text-center" style="color: white;"> Sách tham khảo</h3>
                    </div>
                </a>
                <!-- </div> -->
            </div>
        </div>
    </div>

</div>

<div class="col-sm-3">
    <div class="d-sm-flex flex-wrap" id="NL">
        <div class="card m-1">
            <div class="wrapper-img">
                <!-- <div class="image_slider"> -->
                <a href="/nguyenlieu">
                    <div class="image_item">
                        <h2 class="text text-center" style="color: white;">Sách giải trí</h2>
                        <img src="../assets/images/GT/sach_2.jpg" class="card-img-top" alt="...">
                    </div>
                </a>
                <!-- </div> -->
            </div>
        </div>
    </div>

</div>
<div class="col-sm-3">
    <div class="d-sm-flex flex-wrap" id="NL">
        <div class="card m-1">
            <div class="wrapper-img">
                <!-- <div class="image_slider"> -->
                <a href="/nguyenlieu">
                    <div class="image_item">
                        <h3 class="text text-center" style="color: white;">Sách nước ngoài</h3>
                        <img src="../assets/images/GT/sach_3.jpg" class="card-img-top" alt="...">
                    </div>
                </a>
                <!-- </div> -->
            </div>
        </div>
    </div>

</div>
<div class="col-sm-3">
    <div class="d-sm-flex flex-wrap" id="NL">
        <div class="card m-1">
            <div class="wrapper-img">
                <!-- <div class="image_slider"> -->
                <a href="/nguyenlieu">
                    <div class="image_item">
                        <h3 class="text text-center" style="color: white;">Sách nước ngoài</h3>
                        <img src="../assets/images/GT/sach_1.jpg" class="card-img-top" alt="...">
                    </div>
                </a>
                <!-- </div> -->
            </div>
        </div>
    </div>

</div>



        <div class=" row">
            <div class="container">
            <div style="text-align: center; margin: 30px 0;" class="heading">
              
              <h3> SẢN PHẨM HD BOOKSTORE</h3>
          </div>
            <div class="container">
                <inputSearch v-model="searchText" />
            </div>
            <!-- <div class="product_heading">
                <h4 class="text-center col-6 mt-4">DANH SÁCH SẢN PHẨM</h4>
            </div> -->
            <div class="container mt-4" id="product">
                <ListPro v-if="filteredProductsCount > 0" :products="filteredProducts" v-model:activeIndex="activeIndex">
                </ListPro>
                xem thêm
            </div>
            <!-- <div class="card_product  text-dark col-4" style="padding: 30px; " id="product">
                <h4>Chi tiết sản phẩm</h4>
                <Productcard v-if="filteredProductsCount > 0" :products="filteredProducts" v-model:activeIndex="activeIndex"></Productcard>
               
            </div> -->

</div>
        </div>
    </div>
</template>
<style scoped>
.list_item_product,
.list_item_user {
    max-height: 500px;
    overflow-y: scroll;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

#product::-webkit-scrollbar,
#user::-webkit-scrollbar {
    width: 6px;
    background-color: #F5F5F5;
}

.text {
    font-size: 20px;
}
</style>
<style scoped>
.list-group-item:hover {
    background-color: #70b1b9;
    color: azure;
    font-size: 20px;
}

.wrapper-img {
    width: 280px;
    height: 280px;
    overflow: hidden;
}

/* .image_slider {
    display: flex;
    transition: all .8s ease;

} */

/* .image_slider:hover {
    transform: translateX(-100%);
} */

.image_item {
    flex: 1 0 100%;
}

.text {
    color: #080808;
    font-size: 25px;
    position: absolute;
    top: 10px
}
</style>