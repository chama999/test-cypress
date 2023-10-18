import { loginPageElements, login, clickLoginButton, openLoginPage, loginWithoutPassword } from "../pages/login.page";

describe("Login Scenario", () => {

    beforeEach(() => {
        openLoginPage()
    });

        it("Login with valid credentials", () => {
            login("tomsmith", "SuperSecretPassword!");
            clickLoginButton();
            cy.url().should('include', '/secure');
            cy.get(loginPageElements.successMessage).should('be.visible')
        });


        it("Login with invalid credentials", () => {
            login("wrongUser", "worngPassword!");
            clickLoginButton();
            cy.url().should('not.include', '/secure');
            cy.get(loginPageElements.errorMessage).should('be.visible')
            cy.get(loginPageElements.errorMessage).contains("Your username is invalid!")
        });

        it("Login with an empty password", () => {
            loginWithoutPassword("tomsmith");
            clickLoginButton();
            cy.url().should('not.include', '/secure');
            cy.get(loginPageElements.errorMessage).should('be.visible')
            cy.get(loginPageElements.errorMessage).contains("Your password is invalid!")
        });

        afterEach(() => { cy.screenshot()})

});