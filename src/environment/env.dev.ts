import { IEnvironment, IEnvironmentLocales } from '@types';

const development: IEnvironment = {
  production: false,
  locale: IEnvironmentLocales.EN,
  api: {
    graphql: 'http://localhost:8010/graphql',
  },
};

export { development };
