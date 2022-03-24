describe("github", () => {
  it("returns user data for specified username", () => {
    // given
    apiIsAvailable();

    // when
    const request = getUser("michalwarda");

    // then
    idIs(request, 8479334);
  });
});

function getUser(username: string): any {
  return cy.request("GET", `http://api.github.com/users/${username}`);
}

function apiIsAvailable() {}

async function idIs(request: any, id: number) {
  await request.then((response: any) => {
    expect(response.body.id).to.eql(id);
  });
}
