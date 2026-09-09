# Jordan Dowdy — personal website

Personal academic and robotics portfolio built with Jekyll and hosted at `https://jdowdy05.github.io`.

## Edit content

- Profile and social links: `_data/profile.yml`
- Navigation: `_data/navigation.yml`
- Current work: `_data/current_work.yml`
- Projects: `_data/projects.yml`
- Publications: `_data/publications.yml`
- Page copy: the Markdown files in the repository root

To add a downloadable CV, place the PDF in `assets/files/` and set `cv_pdf` in `_config.yml` to its site-relative path.

## Restore the Current Work page

The page is temporarily unpublished. Its content remains in `current-work.md` and `_data/current_work.yml`.

1. Remove `published: false` from `current-work.md` (or change it to `true`).
2. Uncomment the Current Work entry in `_data/navigation.yml`.
3. Remove the Liquid comment wrapper around the Current work button in `projects.md`.
4. Push to `main` to republish the page and its links.

The homepage's previously removed Current directions section stays removed.

## Local preview

```sh
bundle install
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000/`.

## Deployment

Pushes to `main` build and deploy automatically through `.github/workflows/pages.yml`. Pull requests run the Jekyll build without deploying.
