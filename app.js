const {createApp} = Vue;

createApp({
    data(){
        return{
            // name:'',
            // age:15,
            // link:"http://www.google.com",
            // number:23,
            // numberTwo:1,
            // numberOne:1,
            // classing :''
            // font_size:''
            students :[
                {
                    // id:1,
                    name:"ahmed",
                    age:20
                },
                {
                    // id:2,
                    name:"mostafa",
                    age:15
                },
                {
                    // id:3,
                    name:"sayed",
                    age:32
                },
                {
                    // id:4,
                    name:"kamal",
                    age:12
                },
            ]
        };
    },
    // methods:{
        // sayHi(name){
        //     return "good morning "+name;
        // },
        // sayShit:function(age){
        //     return age * 2 ;
        // },
        // myFunction(){
        //     return this.number*5;
        // },
        // keyboardFunction(){
        //     console.log("ahmed");
        // }
        // formMethod(){
        //     console.log(this.name);
        // },
        // functionOne(){
        //     console.log("haha")
        //     return this.numberOne *5;
        // },
        // functionTwo(){
        //     console.log("sxsx")
        //     return this.numberTwo -5;
        // }
    // },
    // computed:{
    //     functionOne(){
    //         console.log("haha")
    //         return this.numberOne *5;
    //     },
    //     functionTwo(){
    //         console.log("sxsx")
    //         return this.numberTwo -5;
    //     }
    // }
}).mount('#app-root')