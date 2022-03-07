describe("rpn calculator", () => {
  it("correctly adds integers", () => {
    // given
    calculatorIsOpened();

    // when
    add(2, 2);

    // then
    resultIs(4);
  });

  it("correctly subtracts integers", () => {
    // given
    calculatorIsOpened();

    // when
    subtract(5, 8);

    // then
    resultIs(-3);
  });

  it("correctly multiplies integers", () => {
    // given
    calculatorIsOpened();

    // when
    multiply(9, 6);

    // then
    resultIs(54);
  });
});

function calculatorIsOpened() {
  cy.visit("http://localhost:3000");
}

function add(left: number, right: number) {
  cy.get(".rpnInput").type(`${left} ${right} +`);
  cy.contains("=").click();
}

function resultIs(result: number) {
  cy.get(".screen").contains(result);
}

function multiply(left: number, right: number) {
  cy.get(".rpnInput").type(`${left} ${right} *`);
  cy.contains("=").click();
}

function subtract(left: number, right: number) {
  cy.get(".rpnInput").type(`${left} ${right} -`);
  cy.contains("=").click();
}
