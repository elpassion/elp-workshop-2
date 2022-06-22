describe("github", () => {
  it("returns user data for specified username", () => {
    apiIsAvailable();

    // when
    const request = getUser("michalwarda");

    // then
    idIs(request, 8479334);
  });
});

function apiIsAvailable() {
  // it's always available
}

function getUser(username: string): any {
  return cy.request("GET", `https://api.github.com/users/${username}`);
}

async function idIs(request: any, id: number) {
  await request.then((response: any) => {
    expect(response.body.id).to.eql(id);
  });
}
