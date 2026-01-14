# Portofolio Website

This repository contains a simple static website (HTML, CSS, JS).

How to publish to GitHub Pages (recommended):

1. **Use your OWN GitHub repository** (per assignment instructions): create a new repo under your account (https://github.com/new).
2. Add that repo as the remote and push:

   ```bash
   git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. The included GitHub Actions workflow (`.github/workflows/deploy-pages.yml`) will auto-deploy the site to GitHub Pages on each push to `main`.
4. Wait a minute or two after the workflow finishes, then visit the Pages URL shown in your repository settings or in the Pages section of the repository.

Notes:
- Keep only one CSS file (`css/style.css`) and one JS file (`js/script.js`) as required.
- If you prefer, you can also enable GitHub Pages manually in the repo Settings → Pages (choose `gh-pages` or `main` depending on your preference), but the workflow above automates deployment.
