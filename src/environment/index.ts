import { IEnvironment } from '@types';
import { development } from './env.dev';
import { production } from './env.prod';

let env: IEnvironment;

process.env.NODE_ENV === 'production' ? (env = production) : (env = development);

console.log('env => ', env);

export { env };
