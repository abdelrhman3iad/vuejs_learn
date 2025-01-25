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
            // students :[
            //     {
            //         // id:1,
            //         name:"ahmed",
            //         age:20
            //     },
            //     {
            //         // id:2,
            //         name:"mostafa",
            //         age:15
            //     },
            //     {
            //         // id:3,
            //         name:"sayed",
            //         age:32
            //     },
            //     {
            //         // id:4,
            //         name:"kamal",
            //         age:12
            //     },
            // ]
        products: [
            {
                id: 1,
                name: "Wireless Mouse",
                price: 29.99,
                description: "A sleek and ergonomic wireless mouse with long battery life.",
                image: "https://placehold.co/400/orange/white",
                inStock: true,
                category: "Accessories",
            },
            {
                id: 2,
                name: "Gaming Keyboard",
                price: 49.99,
                description: "A mechanical keyboard with customizable RGB lighting.",
                image: "https://placehold.co/400/orange/white",
                inStock: true,
                category: "Accessories",
            },
            {
                id: 3,
                name: "Smartphone",
                price: 699.99,
                description: "A high-performance smartphone with a stunning display.",
                image: "https://placehold.co/400/orange/white",
                inStock: false,
                category: "Electronics",
            },
            {
                id: 4,
                name: "Bluetooth Headphones",
                price: 59.99,
                description: "Noise-canceling headphones with a comfortable fit.",
                image: "https://placehold.co/400/orange/white",
                inStock: true,
                category: "Audio",
            },
            {
                id: 5,
                name: "4K Monitor",
                price: 299.99,
                description: "A 27-inch 4K monitor with vibrant colors and sharp resolution.",
                image: "https://placehold.co/400/orange/white",
                inStock: false,
                category: "Electronics",
            },
            ],
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