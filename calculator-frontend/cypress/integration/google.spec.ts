describe("google", () => {
  it("shows up", () => {
    // given
    browserIsOpened();

    // when
    visitGoogle();

    // then
    googleShowsUp();
  });

  it("returns el passion as the first result when searching for it", () => {
    // given
    googleIsOpened();

    // when
    searchFor("el passion");

    // then
    firstResultIs("EL Passion");
  });
});

function browserIsOpened() {}

function visitGoogle() {
  cy.visit("http://google.com");
  cy.contains("Zgadzam się").click();
}

function googleShowsUp() {
  cy.get("img[alt='Google']").should("exist");
}

function googleIsOpened() {
  visitGoogle();
  googleShowsUp();
}

function searchFor(query: string) {
  cy.get("input[title='Szukaj']").type(query);
  cy.get("input[value='Szukaj w Google']").first().click();
}

function firstResultIs(result: string) {
  cy.get("div[data-hveid]").first().contains(result);
}
