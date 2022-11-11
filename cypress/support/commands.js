import { login, logout, createPost } from "../../src/js/api/index";

Cypress.Commands.add("login", async (email, password) => {
  await login(email, password);
});

Cypress.Commands.add("logout", () => {
  logout();
});

Cypress.Commands.add("postMaker", async (title, body, media, tags) => {
  let post = await createPost(title, body, media, tags);
  return post;
});
