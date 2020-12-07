Feature('loginAtForm');
//Before section
Before(({ I }) => {
    //Add default page
    I.amOnPage('login-page');
    //Add Data Set
    let accounts = new DataTable(['userLogin','userPassword']);
    accounts.add(['testuser','testuser']);
    accounts.add(['testuser1','Mae9iGei6m']);
    accounts.add(['elvin','13247']);
    accounts.add(['testuser1','Teechaep8a']);
    accounts.add(['testuser1','']);
    accounts.add(['','']);
    accounts.add(['','Mae9iGei6m']);
    accounts.add(['','1324']);
    const numberOfAccounts = 8;

});

Scenario('Test by GPO and Data set' ,({ I }) => {


});
