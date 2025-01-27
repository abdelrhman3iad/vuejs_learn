const {createApp} = Vue;

const app_root1 = createApp({
    data(){
        return{
            age : 20,
        }
    },
    methods:{
        getAge(){
            this.age = this.$refs.myInput.value;
        }
    }
}).mount('#app-root');
