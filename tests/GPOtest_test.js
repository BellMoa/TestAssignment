Feature('loginAtForm');

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
    

//Before section
Before(({ I }) => {
    //Add default page
    I.amOnPage('login-page');
    
    

});

//Scenario that Use createde Data Set and GPO model(codeceptJS)

Data(accounts).Scenario('Test By GPO model and Data Set',({ I , current ,loginFormPage }) => {

    loginFormPage.loginAtForm(current.userLogin,current.userPassword);

});