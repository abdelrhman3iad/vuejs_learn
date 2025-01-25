````markdown
# Vue.js Quick Reference Guide

## Installation

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```
````

---

## Retrieve Vue Class in Main/App Script

```javascript
const { createApp } = Vue;
createApp({
  data() {
    return {
      variables: value,
    };
  },
  methods: {
    // Define methods here
  },
  computed: {
    // Define computed properties here
  },
}).mount("#app-root");
```

---

## Data Binding

```html
v-bind:(any attribute)
```

---

## Events

### Single Events

- `v-on:click=` / `@click=`
- `v-on:dblclick=` / `@dblclick=`
- `v-on:keyup=` / `@keyup=`
- `v-on:keydown=` / `@keydown=`

---

## Event Modifiers

- `v-on:click.once=` / `@click.once=`
- `v-on:click.prevent=` / `@click.prevent=`
- `v-on:keyup.alt.enter=` / `@keyup.alt.enter=`

---

## Two-Way Binding

```html
v-model=
```

---

## Methods

### Methods Fired All at Once

```javascript
methods: {
  // Define methods that are triggered manually or in response to events
}
```

### Methods Each Fired at Calling

```javascript
computed: {
  // Define properties that are computed dynamically based on data changes
}
```

---

## Conditions

- `v-if=`
- `v-else-if=`
- `v-else=`
- `v-show=`

```

```
