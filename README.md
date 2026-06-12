# ResumeCraft

A modern, full-featured resume generator built as a capstone project. Create professional resumes with multiple templates, live preview, and PDF export — all in your browser.

![ResumeCraft](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-blue)

## Features

- **5 Professional Templates** — Modern, Classic, Creative, Minimal, and Executive designs
- **Live Preview** — See your resume update in real-time as you type
- **PDF Export** — Download a print-ready PDF with one click
- **Auto-Save** — Progress saved automatically in browser localStorage
- **Dark Mode** — Toggle between light and dark themes
- **Sample Data** — Load example resume to explore features
- **Responsive** — Works on desktop, tablet, and mobile
- **No Sign-Up** — Start building immediately, no account required

## Sections

- Personal Information (name, contact, summary)
- Work Experience (multiple entries with dates and descriptions)
- Education (degrees, institutions, GPA)
- Skills (with proficiency levels)
- Projects & Certifications

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Router** for navigation
- **html2canvas + jsPDF** for PDF generation
- **Lucide React** for icons

## Project Structure

```
src/
├── components/
│   ├── forms/          # Form components for each resume section
│   ├── layout/         # Layout wrapper with header/footer
│   └── templates/      # 5 resume template renderers
├── context/            # Resume state management
├── pages/              # Home, Templates, Builder pages
├── types/              # TypeScript types and sample data
└── utils/              # PDF export utilities
```

## Usage

1. Visit the **Home** page to learn about features
2. Browse **Templates** and pick your favorite design
3. Open the **Builder** to fill in your details section by section
4. Preview your resume live on the right panel
5. Click **Download PDF** when ready

## License

MIT — Built as a capstone project.
