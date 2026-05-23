import { Page } from '@playwright/test';

export class RegisterPage {

constructor(private page: Page){}

async registerUser(username:string){

await this.page.waitForLoadState();

await this.page.fill(
'#customer\\.firstName',
'Hemanth'
);

await this.page.fill(
'#customer\\.lastName',
'Kumar'
);

await this.page.fill(
'#customer\\.address\\.street',
'Hyderabad'
);

await this.page.fill(
'#customer\\.address\\.city',
'Hyderabad'
);

await this.page.fill(
'#customer\\.address\\.state',
'TS'
);

await this.page.fill(
'#customer\\.address\\.zipCode',
'500001'
);

await this.page.fill(
'#customer\\.phoneNumber',
'9999999999'
);

await this.page.fill(
'#customer\\.ssn',
'111'
);

await this.page.fill(
'#customer\\.username',
username
);

await this.page.fill(
'#customer\\.password',
'Password123'
);

await this.page.fill(
'#repeatedPassword',
'Password123'
);

await this.page.click(
'input[value="Register"]'
);

}

}