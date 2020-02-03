<template>
  <header>
    <div class="header">
      <div class="header__wrapper">
        <div class="header__name">GeoIP</div>
        <div class="dropdown">
          <button class="dropbtn">
            {{ this.$i18n.locale }} <span class="arrow"></span>
          </button>
          <div class="dropdown-content">
            <a @click="() => (this.$i18n.locale = 'ru')">RU</a>
            <a href="#" @click="() => (this.$i18n.locale = 'en')">EN</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
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

.header__name {
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 25px;
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
  text-transform: uppercase;
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

.dropdown-content a:focus,
.dropdown-content a:hover {
  color: #656bf2;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
