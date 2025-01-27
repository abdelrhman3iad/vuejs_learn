const {createApp} = Vue;

const app_root1 = createApp({
    data(){
        return{
            age : 20,
        }
    },
    
}).mount('#app-root');

const app_root2 = createApp({
    data(){

    },
    methods:{
        increaseAge(){
            app_root1.age++;
        }
    }
}).mount("#app-root-2");