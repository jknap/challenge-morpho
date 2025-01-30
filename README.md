# Challenge Morpho

This is a challenge for Morpho.
Here is the link to the [case-study](https://morpho-labs.notion.site/Case-Study-Developing-a-Vault-info-card-13dd69939e6d80b5a781c50d6ce7b0f8)
Here is the link to the [Figma](https://www.figma.com/design/W3179bRFYxMfBrLE3ENlXA/Frontend-Case-Study---Jean-Knapik?m=auto&t=emHKDDwtcRnL2HiS-1)

## Features

### Core

- [Next.js](https://nextjs.org/) - React framework for production-grade applications
- [TypeScript](https://www.typescriptlang.org/) - Static type checking
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

### UI & Components

- [Radix UI](https://www.radix-ui.com/) with [shadcn/ui](https://ui.shadcn.com/) - Accessible component system
- [Lucide React](https://lucide.dev/) - Beautiful and consistent icons
- [Storybook](https://storybook.js.org/) - UI component development and documentation

### Data Management

- [TanStack Query](https://tanstack.com/query/latest) - Powerful data synchronization

### Development Tools

- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting
  - Includes VSCode format-on-save settings
  - Import sorting via `@trivago/prettier-plugin-sort-imports`
- [Jest](https://jestjs.io/) - Testing framework
- [Husky](https://typicode.github.io/husky/) - Git hooks for code quality
- [Knip](https://github.com/webpro/knip) - Find unused files, dependencies and exports in your TypeScript/JavaScript project

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run prettier-check` - Check code formatting
- `npm test` - Run tests
- `npm run storybook` - Start Storybook server
- `npm run build-storybook` - Build Storybook for deployment

## VSCode Configuration

This project includes recommended VSCode settings for format-on-save functionality. Make sure you have the following extensions installed:

- ESLint
- Prettier

The project will automatically format your code on save and sort your imports.

## Contributing

1. Ensure you have Husky hooks installed:

```bash
npm run prepare
```

2. Make your changes
3. Create a pull request
