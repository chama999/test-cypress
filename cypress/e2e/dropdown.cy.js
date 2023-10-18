import { dropdownPageElements, openDropdownPage } from "../pages/dropdown.page";

describe("Dropdown test case", () => {

    beforeEach(() => {
        openDropdownPage()
        cy.wait(1000)

    })

    context("Select option 1 and validate text value, then select option 2 and validate text as well", () => {
        it("Select option 1 using id and validate by text", () => {
            cy.get(dropdownPageElements.dropdown).select(dropdownPageElements.firstOptionById)
            cy.wait(200)
            cy.get(dropdownPageElements.dropdown).contains(dropdownPageElements.firstOptionByText)
        })

        it("select option 2 by text and validate by value", () => {
            cy.get(dropdownPageElements.dropdown).select(dropdownPageElements.secondOptionByText)
            cy.wait(200)
            cy.get(dropdownPageElements.dropdown).should("have.value", dropdownPageElements.secondOptionByValue)
        })
    })

    afterEach(() => { cy.screenshot()})
})