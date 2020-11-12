import { IEnvironment, IEnvironmentLocales } from '@types';

const production: IEnvironment = {
  production: true,
  locale: IEnvironmentLocales.EN,
  api: {
    graphql: 'http://localhost:8010/graphql',
  },
};

export { production };
