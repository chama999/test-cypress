const loginPageElements = {
    title: "h3", //byTag
    inputUsername: "#username",
    inputPassword: "#password",
    loginButton: `button[type="submit"]`,
    successMessage: ".flash.success",
    errorMessage: ".flash.error"
}

function openLoginPage() {
    cy.visit(Cypress.env("loginPage"))
}

function login(user, password) {
    cy.get(loginPageElements.inputUsername).type(user)
    cy.get(loginPageElements.inputPassword).type(password)
}

function loginWithoutPassword(user) {
    cy.get(loginPageElements.inputUsername).type(user)
}

function clickLoginButton() {
    cy.get(loginPageElements.loginButton).click()
}

export {
    openLoginPage,
    login,
    clickLoginButton,
    loginPageElements,
    loginWithoutPassword
}