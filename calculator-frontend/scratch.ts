// GOOGLE

import { ILogic } from "./src/logic.interface";

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

// Calculator

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

function multiply(left: number, right: number) {
  cy.get(".buttonBox").within(() => {
    cy.contains(left).click();
    cy.contains("*").click();
    cy.contains(right).click();
    cy.contains("=").click();
  });
}

function subtract(left: number, right: number) {
  cy.get(".buttonBox").within(() => {
    cy.contains(left).click();
    cy.contains("-").click();
    cy.contains(right).click();
    cy.contains("=").click();
  });
}

function resultIs(result: number) {
  cy.get(".screen").contains(result);
}

// Github

function getUser(username: string): any {
  return cy.request("GET", `http://api.github.com/users/${username}`);
}

function apiIsAvailable() {}

async function idIs(request: any, id: number) {
  await request.then((response: any) => {
    expect(response.body.id).to.eql(id);
  });
}

export const logic: ILogic = {
  add(left: number, right: number): number {},
  subtract(left: number, right: number): number {},
  multiply(left: number, right: number): number {},
};
