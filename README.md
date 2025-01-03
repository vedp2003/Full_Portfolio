# Full Portfolio Project

This repository contains a full-stack portfolio project, showcasing frontend and backend implementations. It consists of two main components:

1. **Frontend (CS Portfolio)** - A React-based personal portfolio website.
2. **Backend (Sanity Backend)** - A Sanity CMS backend for managing portfolio content such as projects, skills, and contact information.

---

## 📁 Folder Structure

### `/cs_portfolio`
This folder contains the frontend React application.

- **Technologies Used**:
  - React.js
  - SCSS for styling
  - Framer Motion for animations
  - Tailwind CSS for utility-first styling
  - React TypeAnimation for dynamic text effects
  - React-icons for social icons

- **Key Features**:
  - Dynamic content fetching from the Sanity backend.
  - Smooth animations with Framer Motion.
  - Responsive design for all devices.
  - Sections include:
    - **About Me**: Personal introduction and highlights.
    - **Projects**: List of projects managed via the Sanity CMS.
    - **Skills**: Categorized skills with a modern layout.
    - **Contact**: Contact form integrated with backend support.

---

### `/sanity_backend`
This folder contains the Sanity CMS backend setup.

- **Technologies Used**:
  - Sanity CMS for content management
  - TypeScript for type safety
  - Modular schema for flexible content management

- **Key Features**:
  - **Schemas**:
    - `project.ts`: Defines the structure for portfolio projects.
    - `skill.ts`: Defines categories and skills.
    - `contact.ts`: Captures contact form submissions.
  - API integration for dynamic content delivery to the frontend.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or above)
- **npm** or **yarn**
- **Sanity CLI** (for backend management)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd FULL_PORTFOLIO
