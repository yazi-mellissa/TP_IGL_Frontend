
---

#  Project Overview

The objective is to develop a Web application that allows users to search for scientific articles based on a list of keywords.

### User Features:

- **Search** in titles, keywords, authors, and full text for articles matching user-specified terms.
- **Filter** search results by:
  - Keywords
  - Authors
  - Institutions
  - Publication date range
- **View** details of each article, including:
  - Full text (as text and PDF)
  - Bibliographic references
- **Save favorite articles** for future reading.

### Admin Features:

- **Manage moderators** (add, edit, delete).
- **Upload PDFs** from a URL:
  - Extract text from PDFs (one or two-column layouts supported).
  - Analyze extracted text to obtain article metadata.
  - Index data into **Elasticsearch** for efficient searching.
- **Review and correct** extracted data if necessary.

---

# Frontend

**Frontend repository for the TP IGL project**

##  Specifications

- Developed using **Next.js** (React framework).
- Unused installed packages must be removed to keep the project lightweight and clean.

##  Running the Application

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000/](http://localhost:3000/) in your browser to see the application.

##  Code Conventions

- **Backend Access**:
  1. Use the **axios** instance configured in `src/pages/api/Api.js`.
  2. Save and group backend URLs inside `src/pages/api/Urls.js`.
  3. Write all data-fetching functions inside `src/pages/data/`.

- **Working with Git**:
  - Before starting a new feature, create a dedicated branch:
    ```bash
    git checkout -b "firstname/feature-name"
    ```
  - After completing the implementation, push your branch:
    ```bash
    git push origin "firstname/feature-name"
    ```
  - This ensures the `main` branch remains clean and stable.

- **Adding Images or Components**:
  - Create a folder named after the feature in:
    - `public/assets/` for images
    - `src/components/` for React components
  - If an image or component is shared across the project, place it directly under the main `assets` or `components` directory.

##  Project Folder Structure

- `public/assets/` — Images organized by feature.
- `src/components/` — React components organized by feature.
- `src/pages/api/`:
  - `Api.js` — Axios instance.
  - `Urls.js` — Backend endpoint links.
- `src/pages/data/` — Functions to fetch data from the backend.
- `src/pages/` — Web application pages and subfolders for Next.js dynamic routing.

---
