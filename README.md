# omm-ui

Angular UI components and styles shared across the LOX apps (`dox`,
`b24-energy`, `private-assets`). Built with `ng-packagr`; **never published to a
registry** — other projects install it straight from git.

## Install

```bash
npm i omm-ui@github:andelz/omm-ui-dist#v0.0.1
```

`andelz/omm-ui-dist` holds nothing but the built package: every release is one
commit plus an immutable `vX.Y.Z` tag, cut by
[`scripts/release-omm-ui.js`](https://github.com/andelz/dox/blob/master/scripts/release-omm-ui.js)
in the source repo. Always pin the tag — a branch reference re-resolves on every
`npm install` and will silently move consumers onto a new version.

Peer dependencies are not installed for you:

```bash
npm i @angular/cdk @angular/aria @ngx-translate/core lucide-angular
npm i pdfjs-dist @hyzyla/pdfium          # see "PDF viewer" below
```

The library targets **Angular 21** and `@ngx-translate/core` 17. There is no
`@ngx-translate` fallback: components use `TranslatePipe` in their templates and
`ConfirmService` injects `TranslateService`, so the provider must exist in the
consuming app.

### Alternatives to the git install

- **Tarball** — `npm run pack:omm-ui` in the dox repo writes
  `dist/omm-ui-<version>.tgz`; install it with `npm i ../path/to/omm-ui-<version>.tgz`.
  Useful for a one-off hand-off or an air-gapped build.
- **GitHub Packages** — if you would rather have a real registry, the same build
  output can be published to `npm.pkg.github.com` under a scoped name
  (`@andelz/omm-ui`). That buys proper semver ranges and deduping, at the cost of
  a `NODE_AUTH_TOKEN` in every consumer and CI job.
- **Local development** — point a consumer at a working copy with
  `"omm-ui": "file:../dox/dist/omm-ui"` and re-run `ng build omm-ui` after each
  change. Prefer this over `npm link`, which needs `preserveSymlinks` in the
  consumer's Angular build.

## Styles

The SCSS layer ships inside the package under `omm-ui/styles/`. Add
`node_modules` to the Sass load path in the consumer's `angular.json`:

```jsonc
"stylePreprocessorOptions": { "includePaths": ["node_modules"] }
```

then, in the app's global stylesheet:

```scss
@use 'omm-ui/styles/omm-ui';
```

`omm-ui.scss` pulls in the design tokens, typography, form, dialog, toast,
tooltip, pane, scrollbar, aria and responsive partials. Individual partials can
be used on their own — `@use 'omm-ui/styles/tokens'` — when an app only needs the
custom properties.

## PDF viewer

`PdfViewer` renders through PDFium in a Web Worker (`PdfiumWorkerEngine`, the
default), with a main-thread PDFium engine and a pdf.js `PdfRenderService` as
fallbacks. Both `@hyzyla/pdfium` and `pdfjs-dist` are declared as peers and must
be installed even if the app never mounts the viewer: they are reached through
dynamic `import()` inside the bundle, and the bundler resolves those specifiers
whether or not the code path runs.

Their runtime assets have to be served by the consuming app — copy them in
`angular.json`:

```jsonc
"assets": [
  { "glob": "pdf.worker.min.mjs", "input": "node_modules/pdfjs-dist/build", "output": "/assets/" },
  { "glob": "pdfium.wasm", "input": "node_modules/@hyzyla/pdfium/dist", "output": "/assets/" }
]
```

## Translations

Component strings are extracted from the library source as well as the app's.
Point `ngx-translate-extract` at both, the way the dox scripts do:

```bash
ngx-translate-extract --input ./src ./node_modules/omm-ui --output ./src/assets/i18n/{en,de}.json --clean --format json
```

## Working on the library

Inside the dox workspace `omm-ui` resolves to its source, not the built package
(`tsconfig.json` maps `omm-ui` → `projects/omm-ui/src/public-api.ts`, and
`stylePreprocessorOptions.includePaths` points at `projects/omm-ui`), so changes
are picked up by `ng serve` without a rebuild.

```bash
npm run start:playground   # component playground
npm run test:omm-ui        # unit tests
npm run build:omm-ui       # ng-packagr build → dist/omm-ui
npm run release:omm-ui -- patch   # build, version, tag and push to the dist repo
```

See [Sharing omm-ui](https://github.com/andelz/dox#sharing-omm-ui) for the
release flow.
