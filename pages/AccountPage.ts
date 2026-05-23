import { Page } from '@playwright/test';

export class AccountPage {

constructor(private page: Page){}

async printAmount(){

await this.page.click(
'text=Accounts Overview'
);

await this.page.waitForSelector(
'#accountTable'
);

const amount =
await this.page
.locator(
'#accountTable tbody tr td'
)
.nth(1)
.textContent();

console.log(
'Displayed Amount:',
amount
);

}

}