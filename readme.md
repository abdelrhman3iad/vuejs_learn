installation :
	<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
_________________________________________
retrive vue class in main/app script :
	const { createApp } = Vue ;
	createApp({
	data(){
		variables:value,
	},
	methods:{
	},
	computed:{
	}
	}).mount("#app-root");
_________________________________________
data binding: 
	v-bind:(any attribute)
_________________________________________
events:
	v-on:click= / @click=

	v-on:dblclick= / @dblclick=

	v-on:keyup= / @keyup=

	v-on:keydown= / @keydown=
_________________________________________
events modifiers:

	v-on:click.once= / @click.once=

	v-on:click.prevent= / @click.prevent=

	v-on:keyup.alt.enter= / @click.alt.enter=
_________________________________________
two way binding:
	v-model=
_________________________________________
methods fired all at once:
	methods:{
	}
_________________________________________
methods each fired at calling:
	computed:{
	}
_________________________________________
conditions:
	v-if=
	v-else-if=
	v-else=
	v-show=
_________________________________________