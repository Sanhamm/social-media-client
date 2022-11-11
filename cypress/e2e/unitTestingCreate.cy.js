describe("Create", () => {
  const email = "test5764@noroff.no";
  const password = "test5764";

  it("Testing create item", () => {
    cy.visit("/");
    cy.login(email, password);
    cy.getLocalStorage("token");
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);

    cy.createPost("this is unit testing on creating an item i the API").then(
      (post) => {
        expect(post.id).to.not.be.undefined;
        cy.deletePost(post.id);
      }
    );
  });
});
