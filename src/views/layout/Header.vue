<template>
  <a-row :gutter="{ xs: 5, sm: 5, md: 16, lg: 15, xl: 15 }">
    <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <router-link :to="{ name: 'Homepage' }" class="logo">
        <img :src="require('@assets/images/logo.png')" alt="" />
        <span class="name">{{ $t('global.name') }}</span>
      </router-link>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class AppHeader extends Vue {}
</script>
