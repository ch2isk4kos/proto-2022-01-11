import * as prismic from "@prismicio/client";

// Fill in your repository name
export const repositoryName = "proto-blog-2022-01-11";

export const client = prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  accessToken:
    "MC5ZMmhSaUJFQUFGNXdRZ3Yw.XO-_ve-_ve-_ve-_vUvvv73vv73vv73vv73vv73vv73vv71U77-977-9f3nvv73vv70Afu-_ve-_ve-_ve-_ve-_vTzvv71XfD0",

  // This defines how you will structure URL paths in your project.
  // Update the types to match the Custom Types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  routes: [
    {
      type: "article",
      path: "/articles",
    },
    // {
    //   type: "article",
    //   path: "/article/:id",
    // },
  ],
});

// export const posts = await client.getAllByType("article");

// console.log(posts);
