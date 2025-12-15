
# Crypto Checkout Widget

A small, embeddable crypto checkout widget built with Next.js. This repository contains the widget host application (for demo and development) and a tiny client script you can drop into any site to embed the widget via an iframe.

## Features

- Lightweight embed script served from `public/checkout-widget.js`.
- Responsive iframe with rounded corners.
- Demo/host built with Next.js (app directory).

## Quick Start

1. Install dependencies and run the app locally:

```bash
npm install
npm run dev
```

2. Build for production:

```bash
npm run build
npm start
```

## Embedding the Widget

Include the script and add a container element where you want the widget to appear. The provided `public/checkout-widget.js` will inject an iframe pointing to the hosted checkout page.

HTML example:

```html
<div id="crypto-checkout"></div>
<script src="/checkout-widget.js"></script>
```

The script will create a full-viewport iframe inside the `#crypto-checkout` element by default. You can modify `public/checkout-widget.js` to change the iframe `src` or adjust styling to fit your layout.

## Project Structure

- `public/checkout-widget.js` — client embed script that injects the iframe.
- `src/app` — Next.js app (Pages/routes and global styles).
- `src/components/checkout` — UI components used by the checkout pages.
- `src/data` and `src/types` — sample data and TypeScript types.

## Development Notes

- The demo uses Next.js (app router). Edit components under `src/components/checkout` and the checkout page under `src/app/checkout/page.tsx`.
- To change the widget endpoint, update the `iframe.src` value in `public/checkout-widget.js`.

## Contributing

Contributions and improvements are welcome. Open an issue or PR with a clear description of changes.

## License

MIT — feel free to use and adapt the widget for your projects.

## Contact

Questions or feature requests — open an issue in this repo.
