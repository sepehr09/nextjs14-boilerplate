# Nextjs13-boilerplate

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Tools we used in this project

- [Next.js](https://nextjs.org/) to build the app
- [typescript](https://www.typescriptlang.org/) to write code
- [tailwindcss](https://tailwindcss.com/) to style
- [eslint](https://eslint.org/) to lint code
- [pretter](https://prettier.io/) to format code
- [husky](https://typicode.github.io/husky/#/) to run git hooks
- [commitlint](https://commitlint.js.org/#/) to lint commit message
- [validate-branch-name](https://www.npmjs.com/package/validate-branch-name) to validate branch names

## Commitlint

we use [commitlint](https://commitlint.js.org/#/) to have a conventional commit messages. also we integrate that with `husky` to force all team members to follow the rules.
so in order to make a commit message you must follow the rules described in [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional).
