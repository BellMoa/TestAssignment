const { I } = inject();

module.exports = {

  locators:
  {
    loginField: '//*[@id="user_login"]',
    passwordField: '//*[@id="user_pass"]'
  },

  checkBox: '//*[@id="rememberme"]',
  button: '//*[@id="wp-submit"]',



  loginAtForm(login,password)
  {
    I.fillField(this.locators.loginField,login);
    I.fillField(this.locators.passwordField,password);
    I.checkOption(this.checkBox);
    I.click(this.button);
    I.wait(1)
  }

}
