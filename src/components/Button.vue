<template>
  <button type="submit" @click="clickCallback" :disabled="disabled">
    {{ this.$props.text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    clickCallback: {
      type: Function,
      default: () => {}
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
button:focus,
button:focus-within {
  box-shadow: none !important;
  outline: none;
}

button {
  background: #ff5252;
  opacity: 0.85;
  border: none;
  border-radius: 8px;
  width: 254px;
  height: 48px;
  font-family: Open Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
}

button:hover {
  box-shadow: 0px 0px 20px rgba(255, 108, 108, 0.7);
  cursor: pointer;
}

@media (max-width: 425px) {
  button {
    width: 100%;
  }
}

button:disabled {
  background: #e6e6e6;
  opacity: 0.85;
}

button:disabled:hover {
  box-shadow: none;
}
</style>
