import { Given, Then} from "cypress-cucumber-preprocessor/steps";
import login from "../pages/login_page";

Given("User navigates to {string} webpage", (url) => {
    login.open_webpage(url)
});
Then("User navigates to create account page",()=>{
    login.open_signin_page()
})
Then("User enters first name as {string}, last name as {string}",(first_name,last_name)=>{
    login.enter_name(first_name,last_name)
})
Then("User enters email as {string}, password as {string} and creates an account",(email,password)=>{
    login.enter_email_password(email,password)
})
Then("User does logout and navigates to login page",()=>{
    login.logout()
})
Then("User logins with email as {string} and password as {string}",(email,password)=>{
    login.relogin(email,password)
})
