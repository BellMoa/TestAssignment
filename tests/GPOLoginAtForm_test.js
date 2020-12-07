Feature('login');

Before(({ I }) => {
    I.amOnPage('login-page');
});

Scenario('test something', ({ I }) => {
    I.wait(1);
});
