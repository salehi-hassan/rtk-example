import React from "react";
import { render, screen, waitFor } from "../test-utils";
import { act } from "react-dom/test-utils";
import Posts from "./Posts";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("https://jsonplaceholder.typicode.com/posts", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: "Hassan",
          body: "is the best!!!",
        },
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders learn react link", async () => {
  let getByText;
  await act(async () => {
    ({ getByText } = render(<Posts />));
  });
  await waitFor(() => screen.getByText(/Hassan/));
  const linkElement = getByText(/Hassan/i);
  expect(linkElement).toBeInTheDocument();
});
