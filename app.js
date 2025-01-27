const {createApp} = Vue;
// const data = {
//     age:22
// }
// const my_component = 
// {
//     template:`
//     <h2>ana {{age}} sana</h2>
//     <button @click=changeAge>increament</button>`,
//     data(){
//         return data
//     },
//     methods:{
//         changeAge(){
//             this.age++;
//         }
//     }
// }


// const app_root1 = createApp({
//     data(){
//         return{
//         }
//     },
//     methods:{
//     },
//     components:{
//         my_component,
//     }
// }).mount('#app-root');



// const app_root2 = createApp({
//     data(){
//         return{
//         }
//     },
//     methods:{
//     },
//     components:{
//         my_component,
//     }
// }).mount('#app-root2');

const app = createApp({
    data(){
        return {
            // id:'',
            company : []
        }
    },
    methods:{

        async fetchCompany(){
            try{
            const id = this.$refs.idInput.value; 
            const response = await axios.get(`https://admin.wowws.net/api/company/${id}`,{
                headers:{
                    'Accept-Language':'en',
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                }
            });
            this.company = response.data;
            // console.log(this.company);
        }
        catch(error){
            console.log('error fetching data ',error);
        }
        }
    }
    // mounted(){
    //     this.fetchUsers();
    // }
}).mount('#app-root3');
// app.mount('#app-root3');
