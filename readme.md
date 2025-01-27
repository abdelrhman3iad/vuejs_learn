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

## 🔁 Using Refs in Vue

Vue's `ref` attribute allows you to access and manipulate DOM elements or child components directly. It's useful for cases where you need fine-grained control over the DOM.

### Example:

#### HTML:

```html
<div id="app-root">
  <input type="text" ref="myInput" placeholder="Enter your age" />
  <p>My age is: {{ age }}</p>
  <button @click="getAge">Submit</button>
</div>
```

#### JavaScript:

```javascript
const { createApp } = Vue;

createApp({
  data() {
    return {
      age: 20, // Initial value for age
    };
  },
  methods: {
    getAge() {
      // Access the input element via its ref and update the age
      this.age = this.$refs.myInput.value;
    },
  },
}).mount("#app-root");
```

### Key Points:

1. **Accessing DOM Elements**: Use `this.$refs.<refName>` to access the element.
2. **Direct Manipulation**: While Vue prefers declarative programming, `refs` provide a way to directly manipulate the DOM if necessary.
3. **Best Practices**:
   - Use `refs` sparingly. Whenever possible, rely on Vue's declarative bindings (`v-model`, `v-bind`, etc.).
   - Avoid complex logic with `refs`. They are meant for simple DOM access or manipulation.

### Example Scenario:

You might use `refs` to focus an input field:

```javascript
methods: {
  focusInput() {
    this.$refs.myInput.focus(); // Set focus on the input element
  },
}
```

---

## 🔁 Creating Multiple Vue Instances

Vue allows you to create multiple instances of the framework on a single page. This can be useful for modularizing your app or when you want specific components to behave independently.

### Example:

#### Setting Up Two Instances:

```html
<div id="app-root">
  <p>{{ age }}</p>
</div>

<div id="app-root-2">
  <button @click="increaseAge">Increase</button>
</div>
```

#### JavaScript:

```javascript
const { createApp } = Vue;

// First instance
const appRoot1 = createApp({
  data() {
    return {
      age: 20,
    };
  },
}).mount("#app-root");

// Second instance
const appRoot2 = createApp({
  methods: {
    increaseAge() {
      appRoot1.age++; // Access and modify data in the first instance
    },
  },
}).mount("#app-root-2");
```

### Key Points:

1. **Data Sharing**: While instances are isolated by default, you can access one instance's data or methods within another by referencing the instance variable (e.g., `appRoot1.age`).
2. **Scenarios for Multiple Instances**:
   - When you want to keep different parts of the app independent.
   - When integrating Vue with non-Vue code (e.g., a legacy project).
3. **Best Practices**:
   - Use shared state management solutions like Vuex or Pinia for complex interactions instead of relying on multiple instance variables.
   - Ensure instance IDs (`#app-root`, `#app-root-2`) are unique.

---

Feel free to extend this guide with more examples as you explore Vue.js!
