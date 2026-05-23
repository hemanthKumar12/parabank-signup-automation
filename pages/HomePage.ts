import { Page } from '@playwright/test';

export class HomePage {

constructor(private page: Page){}

async openSite(){

await this.page.goto(
'https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC',
{
waitUntil:'domcontentloaded',
timeout:60000
}
);

}

async clickRegister(){

await this.page.locator(
'text=Register'
).click();

}

}