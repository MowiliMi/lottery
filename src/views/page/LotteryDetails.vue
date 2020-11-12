<template>
  <a-row>
    <a-col :xs="24" :sm="24" :md="24" :lg="{ span: 16, offset: 4 }" :xl="{ span: 12, offset: 6 }">
      <div class="lotteries-details">
        <div class="lotteries-details--name">{{ lottery }}</div>
        <div class="lotteries-details--results-title">{{ $t('components.lotteryDetails.winningResults') }}</div>
        <div class="lotteries-details--results-head">
          <div class="lotteries-details--results-head-date">{{ $t('components.lotteryDetails.date') }}</div>
          <div class="lotteries-details--results-head-jackpot">{{ $t('components.lotteryDetails.jackpot') }}</div>
          <div class="lotteries-details--results-head-numbers">
            {{ $t('components.lotteryDetails.winningNumbers') }}
          </div>
        </div>
        <div v-if="$apollo.loading" class="loading">{{ $t('global.loading') }}</div>
        <div v-else class="lotteries-details--results-body" v-for="(draw, index) of draws" :key="`draw-${index}`">
          <div class="lotteries-details--results-body-date">{{ new Date(draw.date) | formatShortDate }}</div>
          <div class="lotteries-details--results-body-jackpot">{{ draw.jackpot | currency }}</div>
          <div class="lotteries-details--results-body-numbers">
            <ul>
              <li v-for="(number, index) of draw.numbers" :key="index">{{ number }}</li>
              <li class="additional" v-for="(number, index) of draw.additionalNumbers" :key="`add-${index}`">
                {{ number }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { SmartQuery } from 'vue-apollo-decorator';
import { ILotteriesTypes, IDraw } from '@types';
import { Query } from '@api';

@Component({})
export default class LotteryDetails extends Vue {
  @Prop({ required: true, default: null }) lottery: ILotteriesTypes;

  @SmartQuery({
    query: Query.draws,
    variables() {
      return {
        limit: this.limit,
        lottery: this.lottery,
      };
    },
    update: (data) => data.draw.draws,
  })
  draws: IDraw[] | null = null;

  private limit = 100;
}
</script>
