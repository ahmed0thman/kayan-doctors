# AGENTS.md

## Project

Clinic-management dashboard (doctor's office) built with Create React App 5 + TypeScript. Frontend-only: **there is no backend**. All data is mocked or hardcoded.

## Commands

- Use **yarn** (yarn.lock), not npm. Node 24.16.0 (see `.nvmrc`).
- `yarn start` — dev server on :3000
- `yarn build` — production build; also runs ESLint and is the de-facto lint gate
- `yarn test` — CRA jest, but **no test files exist**
- No lint/typecheck scripts defined. For typechecking run `npx tsc --noEmit` (tsconfig is strict).

## No backend / login

- Login is hardcoded in `src/Pages/Account/LogIn/Login.tsx`: username `admin`, password `123qwe`.
- Auth is persisted in `localStorage['activeUser']`; `RequiredAuth` (`src/Settings/authentication/RequiredAuth.tsx`) guards every route except `/login`. Data like patients/medicines is not fetched from an API.
- To sign in during manual testing, use `admin` / `123qwe`.

## Language & RTL

- UI strings go through `react-localization` (`src/Settings/localization/strings.ts`). **Add every new string to both `ar.ts` and `en.ts`**, then call via `strings.<key>`.
- Active language lives in `localStorage['Lan']` (default `'en'`) and the redux `language` slice. `document.dir` is set to `rtl`/`ltr` in `RequiredAuth`.
- Directional CSS lives in `src/assets/css/rtl.css`; design tokens in `vars.css`. Don't inline directional styles.

## Adding a page

- All routes are registered in one file: `src/Settings/router/router.tsx` (`createBrowserRouter`). Wrap each page as `<RequiredAuth><Layout><Page/></Layout></RequiredAuth>`.
- Child routes reuse a parent shell by rendering children: e.g. `<Easy><OldPatient /></Easy>`, `<BarChart><Inputs /></BarChart>`, `<Messages><Received /></Messages>`. Follow that pattern rather than duplicating the shell.
- Detail routes carry the patient code in the URL, e.g. `/examination/new/:code`, `/patients/archive/:code` — read via `useParams`.

## Layout conventions

- Pages: `src/Pages/<Feature>/`, often with per-screen subfolders and a local `types.ts`.
- Shared UI: `src/Components/` (DataGrid, Gallery, ModalWarningDelete, PatientInfoCard, PrescriptionForm, etc.).
- Redux: store at `src/Settings/store/store.ts`; slices under `src/Settings/store/features/<feature>/`.
- Grids use ag-grid via `src/Components/DataGrid/DataGrid.tsx` (locale files `arEG.ts`/`enUS.ts` in the same folder).
- Styling mix: Bootstrap 5 (+ react-bootstrap, imported globally in `index.tsx`) and MUI v6 (material, x-charts, x-date-pickers) side by side. `react-date-range` and `dayjs` are also in use.

## Gotchas

- `src/assets/libs/` is vendored third-party JS/CSS and is excluded from ESLint — do not edit it.
- Some icons are imported with the CRA `require('...svg').default` pattern; keep it for consistency.
- `public/_redirects` (`/* /index.html 200`) is the Netlify SPA fallback — deploy target is Netlify.
- `REACT_APP_URL_Publish` (`.env`, `.env.production`, both `/`) prefixes `<Link>` `to` props in the header.
- `dom-to-image` is used without types; its ambient module is declared in `src/types/domToImg.d.ts` (already included via tsconfig).
