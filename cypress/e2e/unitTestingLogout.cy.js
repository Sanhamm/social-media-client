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

  it("clears token when logging out", () => {
    cy.logout();
    cy.removeLocalStorage("token");
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
  });
});
