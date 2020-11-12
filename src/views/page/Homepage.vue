<template>
  <a-row :gutter="15">
    <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <div class="hello">{{ $t('components.hello.title') }}</div>
    </a-col>
    <a-col :xs="24" :sm="24" :md="24" :lg="{ span: 20, offset: 2 }" :xl="{ span: 16, offset: 4 }">
      <a-row :gutter="25">
        <div v-if="$apollo.loading" class="loading">{{ $t('global.loading') }}</div>
        <a-col v-else :xs="24" :sm="24" :md="12" :lg="12" :xl="12" v-for="lottery of deadlines" :key="lottery.type">
          <lotter-card
            :lottery="lottery.type"
            :jackpot="Number(lottery.jackpot)"
            :deadline="new Date(lottery.deadline)"
          />
        </a-col>
      </a-row>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { SmartQuery } from 'vue-apollo-decorator';
import { IDeadline, ILotteriesTypes } from '@types';
import { Query } from '@api';
import { ComponentLotteryCard } from '@components';

@Component({
  components: {
    'lotter-card': ComponentLotteryCard,
  },
})
export default class Homepage extends Vue {
  @SmartQuery({
    query: Query.deadlines,
    update({ deadlines }) {
      return deadlines.deadlines.filter((deadline: IDeadline) => this.lotteriesTypes.includes(deadline.type));
    },
  })
  deadlines: IDeadline[] | null = null;

  private lotteriesTypes = [ILotteriesTypes.EUROJACKPOT, ILotteriesTypes.DAILYMILLION];
}
</script>
