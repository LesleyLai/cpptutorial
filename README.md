# C++ Tutorial

A work in progress C++ tutorial website in its early stage. It is currently served at [https://cpptutorial.netlify.app](https://cpptutorial.netlify.app).

## Quickstart

You can build and start a development server by running the following commands:

```sh
$ git clone https://github.com/LesleyLai/cpptutorial
$ yarn install
$ yarn start
```

Visit `http://localhost:8000/` to view the website.

## Content Contribution

Write `.mdx` files in `content` folder. [Mdx](https://mdxjs.com/) is Markdown documents with React components interoperbility.

## Website Development

The website is built on top of [ReactJs](https://reactjs.org/), [Typescript](https://www.typescriptlang.org/), and [GatsbyJS](https://www.gatsbyjs.org/).
It use [Emotion](https://emotion.sh/docs/introduction) as a CSS-in-JS library.
You certainly don't need to be an expert in any of those technologies to contribute (I am not myself).

### File Structure

```txt
── content
│   ├── glossary
│   └── pages
└── src
    ├── components // Where React components resides
    ├── styles // Global styles
    ├── templates // Page generation template for gatsby
    ├── types // Global accessible Typescript types
    └── utils
```

### Static Site Generation

`src/gatsby-node.ts` contains the logics of page generation.
Note that `gatsby-node.js` is a dummy file that just imports `src/gatsby-node.ts` and re-export it.
Since Gatsby.js does not understand the importance of `src/gatsby-node.ts`, you need to run `yarn clean` manually every time after modifying `src/gatsby-node.ts`.

### Tests

This repository uses [Jest](https://jestjs.io/) for unit testing and [StoryBook](https://storybook.js.org/) for visual testing.

## License

This repository is released under the MIT license.
