import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import { ILotteriesTypes } from '../../src/types';
import ComponentLotteryCard from '../../src/components/module/LotteryCard.vue';
import i18n from '../../src/locales';
import '../../src/filters';

describe('LotteryDetails', () => {
  it('renders props.lottery when passed', () => {
    const lottery = ILotteriesTypes.EUROJACKPOT;
    const wrapper = shallowMount(ComponentLotteryCard, {
      i18n,
      mocks: {
        $t: () => '',
        Homepage: () => '',
      },
      propsData: {
        lottery,
        jackpot: 1000,
        deadline: Date.now(),
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    expect(wrapper.find('.lotteries-card--name').text()).toEqual(lottery);
  });
});
