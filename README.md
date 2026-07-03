# NoteHub

A React + TypeScript application for storing, creating, deleting and searching notes, built with Vite.

## Stack

- React + TypeScript + Vite
- TanStack Query (server state / caching)
- Axios (HTTP requests)
- Formik + Yup (form state & validation)
- React Paginate (pagination controls)
- use-debounce (debounced search)
- CSS Modules + modern-normalize

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Get a personal access token from the NoteHub API docs:
   https://notehub-public.goit.study/api/docs

3. Create a `.env` file in the project root (see `.env.example`):

   ```
   VITE_NOTEHUB_TOKEN=your_personal_token_here
   ```

4. Run the dev server:

   ```bash
   npm run dev
   ```

5. Build for production:

   ```bash
   npm run build
   ```

## Deployment (Vercel)

Add `VITE_NOTEHUB_TOKEN` as an environment variable in your Vercel project settings so the deployed app can reach the NoteHub backend.

## Project structure

- `src/types/note.ts` — shared `Note` / `NoteTag` types
- `src/services/noteService.ts` — `fetchNotes`, `createNote`, `deleteNote` (axios)
- `src/components/App` — app container (search, pagination, create-note button, note list, modal)
- `src/components/NoteList` — renders the note grid
- `src/components/Modal` — portal-based modal, closes on Escape / backdrop click
- `src/components/NoteForm` — Formik + Yup note creation form
- `src/components/Pagination` — React Paginate wrapper
- `src/components/SearchBox` — debounced search input
- `src/components/Loader`, `src/components/ErrorMessage` — request status UI
