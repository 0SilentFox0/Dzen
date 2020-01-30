<template>
  <div id="app">
    <div class="header">
      <div class="header__wrapper">
        <div class="header__name">GeoIP</div>
        <div class="dropdown">
          <button class="dropbtn">EN <span class="arrow"></span></button>
          <div class="dropdown-content">
            <a href="#">RU</a>
            <a href="#">EN</a>
          </div>
        </div>
      </div>
    </div>
    <Main />
  </div>
</template>

<script>
import Main from "@/components/Main";
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
.header {
  display: flex;
  align-items: center;
  height: 48px;
  width: 100%;
  background: #656bf2;
  color: white;
  font-family: Open Sans, sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
}

.header__wrapper {
  width: 70%;
  margin: auto;
  position: relative;
}

.header__name {
  font-weight: 800;
  margin: auto;
}

.arrow {
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 6px solid white;
  margin-left: 4px;
  padding-top: 4px;
}

.dropbtn {
  background: transparent;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  display: flex;
  align-items: center;
}

.dropdown {
  position: absolute;
  display: inline-block;
  right: -65px;
  top: -12px;
}

@media (max-width: 425px) {
  .dropdown {
    right: -20px;
  }
}

.dropdown-content {
  display: none;
  position: absolute;
  width: 56px;
  z-index: 1;
  background: #ffffff;
  box-shadow: 0px 20px 50px rgba(229, 229, 229, 0.8);
  border-radius: 8px;
  top: 40px;
  left: 18px;
}

.dropdown-content a {
  font-family: Open Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #000000;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:focus {
  color: #656bf2;
}

.dropdown:hover .dropdown-content {
  display: block;
}

button:focus,
button:focus-within {
  box-shadow: none !important;
  outline: none;
}
</style>


