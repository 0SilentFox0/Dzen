<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from "@/containers/Main";

export default {
  name: "App",
  components: { Main }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
}

button:focus,
button:focus-within {
  box-shadow: none !important;
  outline: none;
}
</style>


