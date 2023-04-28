
<script>    
import { mapState } from "pinia";
import { useAuthStore } from "@/stores/Auth.store";
import HeaderShop from "../components/HeaderShop.vue";
import EditUser from "../components/EditUser.vue";
import toastsVue from "../components/toasts.vue";
export default {
	data(){
		return{
			checkedit:false,
		}
	},
	components:{
		HeaderShop,
		EditUser,
		toastsVue
	},
	computed: {
		...mapState(useAuthStore, {
			currentUser: "user",
		}),
	},
	methods:{
		showedit(){
			if(!this.checkedit){
				this.checkedit=true;
			}
			else{
				this.checkedit=false;
			}
		},

	}
};
</script>
<template>
	<HeaderShop></HeaderShop>
	<toastsVue></toastsVue>
	<div style="display: flex;">
	<div v-if="currentUser" style="margin: 100px;">
		<div class="row text-center">
			<div class="container text-center">
		
			<h3 class="text-center">
				THÔNG TIN NGƯỜI DÙNG
			</h3>
	
		<hr>
				<p class="text-break"> 
					<strong>Họ tên người dùng:</strong>
					{{ currentUser.username }}
				</p>
				<p>
					<strong>Email:</strong>
					{{ currentUser.email }}
				</p>
			</div>
		</div>
		<div class="auto-mx text-center">
			<router-link to="/" >
			<button class="btn btn-info">Trở về</button>
		</router-link>
		<button class="btn btn-warning" style="margin-left: 20px;" @click="showedit">Chỉnh sửa thông tin</button>
		</div>
	</div>
	<div v-if="checkedit" style="display: flex;flex-direction: column;justify-content: center;">
			<EditUser :user="currentUser"></EditUser>
	</div>	
</div>
</template>

