import { setupWorker, rest } from "msw";

const worker = setupWorker(
  // Provide request handlers
  rest.get("https://jsonplaceholder.typicode.com/posts", (req, res, ctx) => {
    return res(
      ctx.delay(1500),
      ctx.status(200),
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: "Mock Server Worker",
          body: "Unbelievable!!!",
        },
      ])
    );
  })
);

worker.start();

export default worker;
