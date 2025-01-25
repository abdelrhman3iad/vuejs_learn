const {createApp} = Vue;

createApp({
    data(){
        return{
            // name:'',
            age:15,
            // link:"http://www.google.com",
            // number:23,
            // numberTwo:1,
            // numberOne:1,
            // classing :''
            // font_size:''
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