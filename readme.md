# Vue.js Quick Reference Guide

---

## 📦 Installation

Add the Vue.js library to your project with the following script:

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

---

## 🚀 Initializing Vue

Use the following script to create a Vue application and mount it to your HTML element:

```javascript
const { createApp } = Vue;

createApp({
  data() {
    return {
      variables: value, // Replace `value` with your default data
    };
  },
  methods: {
    // Define your methods here
  },
  computed: {
    // Define computed properties here
  },
}).mount("#app-root"); // Replace `#app-root` with your desired element ID
```

---

## 🔗 Data Binding

Use the `v-bind` directive to bind attributes dynamically:

```html
v-bind:(attribute)
```

**Example:**

```html
<img v-bind:src="imageSrc" alt="Dynamic Image" />
```

---

## 🎯 Event Handling

### Common Events

- `v-on:click=` / `@click=`
- `v-on:dblclick=` / `@dblclick=`
- `v-on:keyup=` / `@keyup=`
- `v-on:keydown=` / `@keydown=`

### Example:

```html
<button @click="handleClick">Click Me</button>
```

---

## 🔄 Two-Way Binding

Synchronize data between the input and the Vue instance using `v-model`:

```html
<input v-model="inputValue" placeholder="Type something" />
```

---

## 🔁 Creating Components

Vue components allow you to create reusable blocks of functionality.

### Example:

#### HTML:

```html
<div id="app-root">
  <my_component></my_component>
</div>
```

#### JavaScript:

```javascript
const { createApp } = Vue;

const my_component = {
  template: `
    <h2>I am {{ age }} years old</h2>
    <button @click="changeAge">Increase Age</button>
  `,
  data() {
    return {
      age: 22, // Local state for the component
    };
  },
  methods: {
    changeAge() {
      this.age++;
    },
  },
};

createApp({
  components: {
    my_component,
  },
}).mount("#app-root");
```

### Key Points:

1. **Components Are Reusable**: Define a component once and reuse it anywhere in your app.
2. **Encapsulation**: Components have their own data and methods, isolated from the parent instance.

---

## 🔁 Sharing Data Across Multiple Instances

Vue components and instances are isolated by default, but you can share data between them using a shared JavaScript object. This allows for synchronization of state across components or instances.

### Example:

#### HTML:

```html
<div id="app-root">
  <my_component></my_component>
</div>

<div id="app-root2">
  <my_component></my_component>
</div>
```

#### JavaScript:

```javascript
const { createApp } = Vue;

// Shared data object
const data = {
  age: 22, // Shared state
};

// Component definition
const my_component = {
  template: `
    <h2>I am {{ age }} years old</h2>
    <button @click="changeAge">Increase Age</button>
  `,
  data() {
    return data; // Bind the component's data to the shared object
  },
  methods: {
    changeAge() {
      this.age++;
    },
  },
};

// First Vue instance
const app_root1 = createApp({
  components: {
    my_component,
  },
}).mount("#app-root");

// Second Vue instance
const app_root2 = createApp({
  components: {
    my_component,
  },
}).mount("#app-root2");
```

### Key Points:

1. **Shared Data**: Both instances (`app_root1` and `app_root2`) and all components (`my_component`) use the same `data` object. Updating `age` in one place reflects everywhere.
2. **Avoid Overusing**: Sharing data directly between instances is simple but can lead to tight coupling. Use this for simple cases or prototyping. For larger apps, consider a state management library like **Pinia** or **Vuex**.

---

## 🛠️ Event Modifiers

Modify event behavior with these modifiers:

- `v-on:click.once=` / `@click.once=` → Trigger event only once
- `v-on:click.prevent=` / `@click.prevent=` → Prevent default behavior
- `v-on:keyup.alt.enter=` / `@keyup.alt.enter=` → Trigger when both `Alt` and `Enter` are pressed

**Example:**

```html
<form @submit.prevent="submitForm">
  <button type="submit">Submit</button>
</form>
```

---

Feel free to extend this guide with more examples as you explore Vue.js!
