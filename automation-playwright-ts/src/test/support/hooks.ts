import { Before, After } from '@cucumber/cucumber';
import { CustomWorld } from './world';
import { ApiWorld } from './world.api'; // nếu bạn đã có ApiWorld riêng

Before(async function (this: CustomWorld | ApiWorld) {
  // Chạy trước mỗi scenario, nếu cần
});

After(async function (this: CustomWorld | ApiWorld) {
  if (this instanceof CustomWorld) {
    // UI test → đóng browser
    if (this.browser) {
      await this.closeBrowser();
    }
  }
  // API test → không cần close browser
});