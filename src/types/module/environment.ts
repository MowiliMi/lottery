export enum IEnvironmentLocales {
  EN = 'en',
}

export type IEnvironment = {
  production: boolean;
  locale: IEnvironmentLocales;
  api: {
    graphql: string;
  };
};
