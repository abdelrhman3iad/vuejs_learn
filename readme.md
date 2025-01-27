Here's your updated README with a new section on **nested loops (`v-for`)**, including explanations and examples:

````markdown
# Vue.js Quick Reference Guide

---

## 📦 Installation

Add the Vue.js library to your project with the following script:

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```
````

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

## 🔄 Two-Way Binding

Synchronize data between the input and the Vue instance using `v-model`:

```html
<input v-model="inputValue" placeholder="Type something" />
```

---

## 🔁 List Rendering (`v-for`)

Use the `v-for` directive to render a list of items dynamically. It iterates over an array or object.

### Syntax:

```html
<div v-for="(item, index) in items" :key="index">{{ item }}</div>
```

### Example:

#### Array of Strings:

```javascript
data() {
  return {
    fruits: ["Apple", "Banana", "Cherry"]
  };
}
```

```html
<ul>
  <li v-for="(fruit, index) in fruits" :key="index">
    {{ index + 1 }}. {{ fruit }}
  </li>
</ul>
```

#### Array of Objects:

```javascript
data() {
  return {
    products: [
      { id: 1, name: "Laptop", price: 1000 },
      { id: 2, name: "Phone", price: 500 },
      { id: 3, name: "Tablet", price: 300 }
    ]
  };
}
```

```html
<ul>
  <li v-for="product in products" :key="product.id">
    {{ product.name }} - ${{ product.price }}
  </li>
</ul>
```

---

## 🔁 Nested Loops (`v-for` with nested data)

You can use `v-for` inside another `v-for` to loop over nested arrays or objects. Each loop iterates through its respective data.

### Example:

#### Nested Arrays:

```javascript
data() {
  return {
    categories: [
      {
        name: "Electronics",
        items: ["Laptop", "Phone", "Tablet"],
      },
      {
        name: "Clothing",
        items: ["Shirt", "Pants", "Jacket"],
      },
    ],
  };
}
```

```html
<div v-for="(category, index) in categories" :key="index">
  <h3>{{ category.name }}</h3>
  <ul>
    <li v-for="(item, i) in category.items" :key="i">{{ item }}</li>
  </ul>
</div>
```

#### Nested Objects:

```javascript
data() {
  return {
    products: [
      {
        id: 1,
        name: "Laptop",
        description: "High-performance laptop",
        colors: ["red", "blue", "green"],
        price: 1000,
      },
      {
        id: 2,
        name: "Phone",
        description: "Latest smartphone",
        colors: ["black", "white"],
        price: 800,
      },
    ],
  };
}
```

```html
<div class="container">
  <div v-for="product in products" :key="product.id" class="card">
    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>
    <div class="colors">
      <span
        v-for="(color, index) in product.colors"
        :key="index"
        :style="{ backgroundColor: color }"
        class="color-box"
      ></span>
    </div>
    <p>Price: ${{ product.price }}</p>
  </div>
</div>
```

### Notes:

- Always use the `:key` attribute to improve rendering performance.
- Use nested loops responsibly to avoid performance issues with large datasets.

---

## ✨ Methods & Computed Properties

### Methods (Manually Triggered)

Define methods that are executed when explicitly called or triggered by events:

```javascript
methods: {
  greet() {
    console.log("Hello, Vue!");
  }
}
```

### Computed Properties (Dynamic Reactions)

Define properties that automatically update based on reactive data:

```javascript
computed: {
  reversedText() {
    return this.text.split('').reverse().join('');
  }
}
```

---

## 🧩 Conditional Rendering

- **`v-if`** → Render content if a condition is true
- **`v-else-if`** → Render content if the previous `v-if` condition was false and this one is true
- **`v-else`** → Render content if all previous conditions are false
- **`v-show`** → Toggle visibility without removing the element from the DOM

**Example:**

```html
<div v-if="isLoggedIn">Welcome back!</div>
<div v-else>Please log in.</div>
```

---

Feel free to extend this guide with more examples as you learn!

```

```
