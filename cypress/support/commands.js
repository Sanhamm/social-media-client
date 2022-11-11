import { login, logout, createPost, deletePost } from "../../src/js/api/index";

Cypress.Commands.add("login", async (email, password) => {
  await login(email, password);
});

Cypress.Commands.add("logout", () => {
  logout();
});

Cypress.Commands.add("createPost", async (title, body, media, tags) => {
  let post = await createPost(title, body, media, tags);
  return post;
});

Cypress.Commands.add("deletePost", async (id) => {
  await deletePost(id);
});
