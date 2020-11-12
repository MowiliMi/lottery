<template>
  <div id="app">
    <div id="main-header">
      <header>
        <app-header />
      </header>
    </div>
    <div id="main-content">
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AppHeader } from '@views/layout';

@Component({
  components: {
    'app-header': AppHeader,
  },
})
export default class Header extends Vue {}
</script>
