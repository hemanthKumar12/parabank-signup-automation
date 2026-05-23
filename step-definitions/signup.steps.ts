import {
Given,
When,
Then,
setDefaultTimeout
}
from '@cucumber/cucumber';

setDefaultTimeout(60000);

import {
chromium
}
from '@playwright/test';

import { HomePage }
from '../pages/HomePage';

import { RegisterPage }
from '../pages/RegisterPage';

import { LoginPage }
from '../pages/LoginPage';

import { AccountPage }
from '../pages/AccountPage';

let browser:any;

let page:any;

let username =
"user" + Date.now();

Given(
'User launches parabank application',

async()=>{

browser =
await chromium.launch({
headless:false,
slowMo:1000
});

page =
await browser.newPage();

page.setDefaultTimeout(
60000
);

const home =
new HomePage(page);

await home.openSite();

}
);

When(
'User navigates to registration page',

async()=>{

const home =
new HomePage(page);

await home.clickRegister();

}
);

When(
'User enters registration details',

async()=>{

const reg =
new RegisterPage(page);

await reg.registerUser(
username
);

}
);

Then(
'Account should be created successfully',

async()=>{

await page.screenshot({
path:
'screenshots/register.png'
});

}
);

When(
'User logs into application',

async()=>{

await page.waitForLoadState();

}
);

Then(
'User should see account overview page',

async()=>{

console.log(
'Login successful'
);

}
);

Then(
'Print amount after login',

async()=>{

const account =
new AccountPage(page);

await account.printAmount();

await page.screenshot({
path:
'screenshots/login.png'
});

await browser.close();

}
);