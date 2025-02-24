# Cash Calendar

Cash Calendar is a simple web application designed to help you track your expenses and income efficiently. It is built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

This project uses pnpm as the package manager. To install pnpm, run the following command:

```bash
npm install -g pnpm
```

Alternatively, you can follow the installation instructions on the [official website](https://pnpm.io/installation).

Once pnpm is installed, you can install the project dependencies by running:

```bash
pnpm install
```

To start the development server, use the following command:

```bash
pnpm dev
```

## Deploy on Vercel

The project is deployed on Vercel. However, since Vercel's free plan does not support GitHub organizations, the deployment is managed through a secondary repository hosted on GitLab.

### Deployment Instructions

- Add the Gitlab remote repository:

```bash
git remote add gitlab git@gitlab.com:jilgue/cash-calendar.git
```

- Push the changes to Gitlab:

```bash
git push gitlab main
```
