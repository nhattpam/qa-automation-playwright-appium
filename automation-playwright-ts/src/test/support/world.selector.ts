import { setWorldConstructor, IWorldOptions } from '@cucumber/cucumber';
import { CustomWorld } from './world';
import { ApiWorld } from './world.api';

setWorldConstructor(function (options: IWorldOptions) {
  const tags = ((options as any).pickle?.tags || []).map((tag: any) => tag.name);

  if (tags.includes('@api')) {
    return new ApiWorld(options);
  }
  return new CustomWorld(options);
});
