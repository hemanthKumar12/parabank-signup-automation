import { Page } from '@playwright/test';

export class LoginPage {

constructor(private page: Page){}

async login(username:string){

await this.page.fill(
'input[name="usernames"]',
username
);

await this.page.fill(
'input[name="password"]',
'Password123'
);

await this.page.click(
'input[value="Log In"]'
);

}

}