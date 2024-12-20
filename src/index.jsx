import { makeServer } from './mock/server';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}
