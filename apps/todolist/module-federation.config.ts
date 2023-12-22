import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'todolist',
  exposes: {
    './Routes': 'apps/todolist/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
