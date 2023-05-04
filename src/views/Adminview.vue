<script>

import ListUser from "../components/ListUser.vue";
import UserService from "../services/User.service";
import toastsVue from "../components/toasts.vue";
import ProductService from "../services/Product.service";
import ListProduct from "../components/ListProduct.vue";
import Productcard from "../components/Productcard.vue";
import Usercard from "../components/Usercard.vue";
import toast from "../assets/js/toasts";
import Headeradmin from "../components/headeradmin.vue";
import inputSearch from "../components/inputSearch.vue";

export default {
    data() {
        return {
            users: [],
            products: [],
            activeIndex: -1,
            activeUser: -1,
            searchText: "",
            toasts: {
                title: "Lỗi",
                msg: "Bạn không phải ADMIN, không có quyền truy cập trang này.",
                type: "warn",
                duration: 3000
            },
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
        Headeradmin,
        ListUser,
        ListProduct,
        toastsVue,
        Productcard,
        Usercard,
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
    <Headeradmin></Headeradmin>
    <toastsVue></toastsVue>
    <div class="header text-center mt-4" style="background-image: url(../assets/images/footer.jpg);">
        <!-- <h2>QUẢN TRỊ VIÊN</h2> -->
    </div>
    <div class="main_admin container mt-4">
        <!-- <div class="list_users w-50" >
                <div class="user_heading">
                    <h4>DANH SÁCH NGƯỜI DÙNG</h4>
                
                </div>
                    <div class="list_item_user  d-flex " id="user">
                        <ListUser :users="users" :refeshlist="getall" v-model:activeUser="activeUser"></ListUser>
                           <div class="card_product border border-light  text-dark"  style="padding: 30px;"  v-if="getindexuser">  
                            <h5>Chi tiết người dùng</h5>
                            <Usercard :users="getindexuser"></Usercard>
                        </div>
                    </div> 
            </div> -->

        <div class="list_products row">
            <div class="mt-3 col-8">
                <inputSearch v-model="searchText" />
            </div>
            <div class="product_heading">
                <h4 class="text-center col-6 mt-4">DANH SÁCH SẢN PHẨM</h4>
            </div>
            <div class="list_item_product col-6" id="product">
                <ListProduct v-if="filteredProductsCount > 0" :products="filteredProducts" v-model:activeIndex="activeIndex">
                </ListProduct>
            </div>
            <div class="card_product  text-dark col-4" style="padding: 30px;" v-if="getindex">
                <h4>Chi tiết sản phẩm</h4>
                <Productcard :products="getindex"></Productcard>
                <router-link :to="{
                        name: 'editproduct',
                        params: { id: getindex._id },
                    }">
                   
                    <p class="text-dark mt-4 text">
                        <i class="bi bi-pencil-square text-warning"></i> Chỉnh sửa</p>
                </router-link>
            </div>

            <router-link to="/addproduct">
                <button class="btn btn-info mt-4 fw-bold text-white">Thêm sản phẩm</button>
            </router-link>
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
.text{
    font-size: 20px;
}
</style>