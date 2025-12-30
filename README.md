# Full Stack Course Learning App

A premium dark-themed course management application built with React, featuring a Spotify/Apple-inspired design language. Track your progress through Full Stack development lessons and labs with an elegant, modern interface.

## Live Demo

**[View Live App →](https://dev-zone-a1b2.netlify.app)**

## Screenshots

> Add screenshots here by placing images in a `screenshots` folder and referencing them below:
>
> ```markdown
> ![Home Page](./screenshots/home.png)
> ![Progress Tracking](./screenshots/progress.png)
> ![Lesson Cards](./screenshots/lessons.png)
> ```

**To capture screenshots:**
1. Open the [live demo](https://dev-zone-a1b2.netlify.app)
2. Take screenshots of:
   - Main page with progress bar
   - Expanded lesson categories
   - Completed vs incomplete lessons
   - Search functionality
   - Mobile responsive view

## Features

- **Premium Dark Theme**: Spotify/Apple-inspired design with deep blacks (#000, #121212) and subtle grays
- **Progress Tracking**: Visual progress bar with localStorage persistence
- **Lesson Management**:
  - Collapsible category sections
  - Mark lessons as complete/incomplete
  - Direct links to lesson videos
- **Search Functionality**: Filter lessons by topic or number
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Glass Morphism**: Subtle backdrop blur effects on cards
- **Smooth Animations**: Micro-interactions with 200ms transitions
- **Green Accents**: Spotify green (#1DB954) for progress and completed items

## Tech Stack

- **React 19** - UI framework
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Inter Font** - Apple-style typography
- **localStorage** - Client-side progress persistence

## Design Principles

- Clean, minimalist design with whitespace
- Slim, elegant progress bars (1.5px height like Apple Music)
- Thin stroke icons (stroke-[1.5])
- Rounded corners (8-12px)
- No excessive gradients - sleek and dark
- Subtle hover effects and micro-animations

## Installation

```bash
# Clone the repository
git clone https://github.com/Captain-Automation/fullstack-intro-course.git

# Navigate to project directory
cd fullstack-intro-course

# Install dependencies
npm install
```

## Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

The dev server will start at `http://localhost:5173`

## Project Structure

```
course-learning-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CategoryCard.jsx      # Collapsible lesson category
│   │   ├── LabsSection.jsx       # Labs display section
│   │   ├── LessonButton.jsx      # Individual lesson item
│   │   ├── ProgressBar.jsx       # Course progress tracker
│   │   └── ResourceLinks.jsx     # External resource links
│   ├── data/
│   │   └── courseData.js         # Course content data
│   ├── App.jsx                   # Main app component
│   ├── App.css                   # App-specific styles
│   ├── index.css                 # Global styles
│   └── main.jsx                  # App entry point
├── index.html
├── netlify.toml                  # Netlify deployment config
├── tailwind.config.js
└── vite.config.js
```

## Deployment

This app is deployed on Netlify with continuous deployment from the main branch.

```bash
# Deploy to Netlify
npx netlify-cli deploy --prod
```

**Live URL**: https://dev-zone-a1b2.netlify.app

## Customization

### Adding New Lessons

Edit `src/data/courseData.js` to add new lessons, categories, or labs:

```javascript
export const courseCategories = [
  {
    id: 'category-1',
    titleHe: 'Category Name',
    lessons: [
      {
        id: 'lesson-1',
        lesson: 1,
        topic: 'Lesson Topic',
        link: 'https://lesson-url.com'
      }
    ]
  }
];
```

### Changing Colors

Update colors in component files:
- Progress/Completed: `#1DB954` (Spotify green)
- Background: `#000000`, `#121212`, `#181818`
- Borders: `gray-800`, `gray-700`
- Text: `white`, `gray-300`, `gray-400`

## License

© 2025 Full Stack Course - All rights reserved

## Built With

Made with React, Tailwind CSS, and Claude Code
