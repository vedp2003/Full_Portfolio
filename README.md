# Full Portfolio Project

https://vedpatel.vercel.app

This repository contains my full-stack portfolio project, showcasing frontend and backend implementations. It consists of two main components:

1. **Frontend (CS Portfolio)** - A React-based personal portfolio website.
2. **Backend (Sanity Backend)** - A Sanity CMS backend for managing portfolio content such as projects and skills. 

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

---

## 🚀 Running the Project Locally

Follow these steps to set up and run the project locally:

### **Prerequisites**
Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 16 or later)
- [npm](https://www.npmjs.com/) 
- [Sanity CLI](https://www.sanity.io/docs/getting-started-with-sanity-cli) (optional, but recommended)

---

1. **Clone the Repository**
    Clone the repository to your local machine:
    ```bash
    git clone https://github.com/vedp2003/Full_Portfolio.git
    cd Full_Portfolio
   
2. . **Set Up the Frontend (CS Portfolio)**:
   Navigate to the cs_portfolio directory, install dependencies, and Start the React development server:
   ```bash
   cd ../cs_portfolio
   npm install
   npm start

3. **Set Up the Backend (Sanity Backend)**:
   Navigate to the sanity_backend directory and Start the Sanity development server:
    ```bash
    cd ../sanity_backend
    npm install
    npx sanity dev
    
4. **Access Servers**:
  Access the frontend at http://localhost:3000
  Use the backend Studio at http://localhost:3333 to manage content


