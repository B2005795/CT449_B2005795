import {createRouter,createWebHistory } from "vue-router";
import ShopView from "@/views/ShopView.vue";

const routes = [
    {
        path: "/",
        name: "ShopMain",
        component: ShopView,
    },
    {
        path: "/search",
        name: "search",
        component: () => import("@/views/Search_t.vue"),
    },
    {
        path: "/Cart",
        name: "CartShop",
        component: () => import("@/views/CartShop.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/LoginUser.vue"),
    },
    {
        path: "/loginadmin",
        name: "loginadmin",
        component: () => import("@/views/LoginAdmin.vue"),
    },
    {
        path: "/logup",
        name: "Logup",
        component: () => import("@/views/Logup.vue"),
    },
    {
        path: "/details/:id",
        name: "details",
        component: () => import("@/views/DetailsProduct.vue"),
    },
    {
        path: "/addproduct",
        name: "addproduct",
        component: () => import("@/views/AddProduct.vue"),
    },
    {
        path: "/editproduct/:id",
        name: "editproduct",
        component: () => import("@/views/EditProduct.vue"),
    },
    {
        path: "/profile",
        name: "profile",
        component: () => import("@/views/UserProfile.vue"),
    },
    {
        path: "/admin",
        name: "admin",
        component: () => import("@/views/Adminview.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/user",
        name: "user",
        component: () => import("@/views/Userview.vue"),
    },
    {
        path: "/hoa",
        name: "hoa",
        component: () => import("@/views/Product_p.vue"),
    },
    {
        path: "/nguyenlieu",
        name: "nguyenlieu",
        component: () => import("@/views/Product_NL.vue"),
    },
    {
        path: "/mockhoa",
        name: "mockhoa",
        component: () => import("@/views/Product_MK.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;