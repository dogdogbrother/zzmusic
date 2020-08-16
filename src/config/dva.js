import {create} from 'dva-core';
import models from '@/models/index';

const app = create({
  onError() {
    // ...
  },
});
models.forEach((model) => {
  app.model(model);
});
app.start();

export default app._store;