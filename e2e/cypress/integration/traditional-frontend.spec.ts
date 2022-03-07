describe("addition", () => {
  it("correctly adds integers", () => {
    // given
    calculatorIsOpened();

    // when
    add(2, 2);

    // then
    resultIs(4);
  });
});

function calculatorIsOpened() {
  cy.visit("http://localhost:3000");
  cy.get(".calculator").should("exist");
}

function add(left: number, right: number) {
  cy.get(".buttonBox").within(() => {
    cy.contains(left).click();
    cy.contains("+").click();
    cy.contains(right).click();
    cy.contains("=").click();
  });
}

function resultIs(result: number) {
  cy.get(".screen").contains(result);
}
