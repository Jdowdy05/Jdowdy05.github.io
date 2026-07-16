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

## Local preview

```sh
bundle install
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000/`.

## Deployment

Pushes to `main` build and deploy automatically through `.github/workflows/pages.yml`. Pull requests run the Jekyll build without deploying.
