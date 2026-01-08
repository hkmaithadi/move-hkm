---
description: How to update and deploy the Move website
---

# How to Publish Changes

Whenever you make changes to your code (editors, text, images, etc.) and want them to appear on `movecommunity.net`, follow these steps:

1.  **Make your changes** and save your files.
2.  **Test locally** (optional but recommended):
    Reading the local dev server: `npm run dev`
3.  **Deploy**:
    Run this single command in your terminal:
    ```powershell
    npm run deploy
    ```
    
    This command will:
    - Build your project (optimize it for the web).
    - Automatically upload the new version to GitHub.

4.  **Wait**: It usually takes 1-3 minutes for the changes to show up on the live website.

## Important Note
You should also save your source code changes to GitHub (for backup) periodically:
git add .
git commit -m "Description of changes"
git pull origin main
git push origin main
```
