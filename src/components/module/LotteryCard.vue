<template>
  <div class="lotteries-card">
    <div class="lotteries-card--name">{{ lottery }}</div>
    <div class="lotteries-card--jackpot">{{ jackpot | currency }}</div>
    <div class="lotteries-card--date">{{ deadline | formatDate }}</div>
    <router-link :to="{ name: 'Lottery', params: { lottery } }">
      {{ $t('components.lotteryCard.seeDetails') }}
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { ILotteriesTypes } from '@types';

@Component({})
export default class ComponentLotteryCard extends Vue {
  @Prop({ required: true, default: null }) lottery: ILotteriesTypes;
  @Prop({ required: true, default: 0 }) jackpot: number;
  @Prop({ required: true, default: null }) deadline: Date;
}
</script>
