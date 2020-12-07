Feature('login');

Before(({ I }) => {

    I.amOnPage('login-page');

});

Scenario('Checking the login form when using an existing user', ({ I }) => {
    I.fillField('log' , 'testuser');
    I.fillField('pwd', 'testuser');
    I.checkOption('rememberme');
    I.click('wp-submit');
    I.saveScreenshot('FirstUserSuccess.png');
    I.waitForClickable('#site-footer > div > a');
});
