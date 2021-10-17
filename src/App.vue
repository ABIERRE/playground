<template>
  <Header />
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Organisms/Header.vue'
export default defineComponent({
  name: 'App',
  components: {
    Header
  }
})
</script>

<style>
@import url(https://fonts.googleapis.com/earlyaccess/mplus1p.css);
@font-face {
  font-family: "Yu Gothic";
  src: local("Yu Gothic Medium");
  font-weight: 100;
  font-display: swap;
}
@font-face {
  font-family: "Yu Gothic";
  src: local("Yu Gothic Medium");
  font-weight: 200;
  font-display: swap;
}
@font-face {
  font-family: "Yu Gothic";
  src: local("Yu Gothic Medium");
  font-weight: 300;
  font-display: swap;
}
@font-face {
  font-family: "Yu Gothic";
  src: local("Yu Gothic Medium");
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: "Yu Gothic";
  src: local("Yu Gothic Bold");
  font-weight: bold;
  font-display: swap;
}

html, body {
  width: 100vw;
  height: 100vh;
  background: none;
  margin: 0;
  padding: 0;
}

#app {
  font-family: "TsukuARdGothic-Regular", "M PLUS 1p", "Yu Gothic", sans-serif;
  display: block;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  height: 0 auto;
  padding-top: 40px;
  background: #fcfcfc;
}
</style>
