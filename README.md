# The Wedding Invitation Landing Page

A simple and elegant wedding invitation landing page built with Next.js 14, Tailwind CSS, and TypeScript.

## Features

- Responsive design that works on all devices
- Beautiful and elegant UI/UX
- Fast loading with Next.js 14 App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Modern components using Radix UI

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [Lucide React](https://lucide.dev/) - Beautiful SVG icons

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

## Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Project Structure

```
.
├── app/                 # Next.js 14 app directory (App Router)
│   ├── api/             # API routes (e.g., for RSVP)
│   └── page.tsx         # Main entry point for the page
├── components/          # Reusable React components
│   ├── ui/              # Basic UI elements from shadcn/ui
│   └── *.tsx            # Sectional components (e.g., hero, countdown)
├── context/             # React Context providers
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and library helpers (e.g., Prisma, utils)
├── prisma/              # Prisma schema, database, and migrations
├── public/              # Static assets
│   ├── ornaments/       # Decorative images
│   ├── music/           # Music files
│   └── *.jpeg           # Photos of the couple
├── styles/              # Global styles (deprecated, use app/globals.css)
├── .gitignore           # Files ignored by Git
├── components.json      # shadcn/ui configuration
├── DOKUMENTASI-STRUKTUR-DALAM-PROYEK.md # In-depth project documentation
├── next.config.mjs      # Next.js configuration
├── package.json         # Project dependencies and scripts
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS features
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - learn about TypeScript features

## Customization

You can customize this wedding invitation page by:

1. Modifying the content in `app/page.tsx`
2. Changing colors in `tailwind.config.ts`
3. Updating components in the `components/` directory
4. Adding your own images to `public/` directory

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.