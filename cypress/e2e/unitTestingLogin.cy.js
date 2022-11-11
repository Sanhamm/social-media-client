describe("login", () => {
  const email = "test5764@noroff.no";
  const password = "test5764";
  it("loads", () => {
    cy.visit("/");
    cy.login(email, password);

    cy.getLocalStorage("token").then((token) => {
      expect(token.length).to.not.be.null;
    });
  });
});
