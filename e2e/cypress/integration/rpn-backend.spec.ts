describe("rpn calculator", () => {
  it("correctly adds integers", () => {
    // given
    calculatorIsOpened();

    // when
    const request = add(2, 2);

    // then
    resultIs(request, 4);
  });

  it("correctly subtracts integers", () => {
    // given
    calculatorIsOpened();

    // when
    const request = subtract(5, 8);

    // then
    resultIs(request, -3);
  });

  it("correctly multiplies integers", () => {
    // given
    calculatorIsOpened();

    // when
    const request = multiply(9, 6);

    // then
    resultIs(request, 54);
  });
});

function calculatorIsOpened() {}

function add(
  left: number,
  right: number
): Cypress.Chainable<Cypress.Response<any>> {
  return cy.request("POST", `http://localhost:3001/rpn/calculate`, {
    calculation: `${left} ${right} +`,
  });
}

async function resultIs(request: any, result: number) {
  await request.then((response: any) => {
    expect(response.body).to.eql({ result: result.toString() });
  });
}

function multiply(left: number, right: number) {
  return cy.request("POST", `http://localhost:3001/rpn/calculate`, {
    calculation: `${left} ${right} *`,
  });
}

function subtract(left: number, right: number) {
  return cy.request("POST", `http://localhost:3001/rpn/calculate`, {
    calculation: `${left} ${right} -`,
  });
}
