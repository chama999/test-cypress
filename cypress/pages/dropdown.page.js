const dropdownPageElements = {
    title: "h3", //byTag
    dropdown: "#dropdown", //byId
    firstOptionByText: "Option 1",
    firstOptionById: 1,
    firstOptionByValue: "1",
    secondOptionByText: "Option 2",
    secondOptionById: 2,
    secondOptionByValue: "2",
    defaultOptionByText: "Please select an option",
    defaultOption1ById: 0,
}

function openDropdownPage() {
    cy.visit(Cypress.env("dropdownPage"))
}

export {
    dropdownPageElements,
    openDropdownPage
}