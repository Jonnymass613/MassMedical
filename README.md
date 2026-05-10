# MedEdu Pro - Online Medical Education Platform

A subscription-based educational platform featuring a three-tier curriculum (Medical, Nursing, and High School) with multimedia resources.

## 🚀 Features

- **Three-Tier System**:
  - **Medical Tier**: Advanced content for medical students (Gross Anatomy, Physiology, Pathology).
  - **Nursing Tier**: Essential BSN curriculum (Fundamentals, Health Assessment).
  - **High School Tier**: Science foundation courses (AP Biology, AP Chemistry).
- **Multimedia Learning**: Each course includes Explanatory Videos, Detailed Diagrams, Lesson Slideshows, and Concept Mind Maps.
- **Subscription Management**: Mock authentication and tier-based content filtering.
- **Modern UI**: Responsive design built with Next.js 16, React 19, and Tailwind CSS 4.

## 🛠️ Local Setup & Running

To run this project on your own computer or from your GitHub:

### Prerequisites
- [Node.js](https://nodejs.org/) (Version 18.17 or later recommended)
- npm (installed with Node.js)

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd <repository-name>
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### 4. Build for Production
```bash
npm run build
npm run start
```

## 🌐 Deployment

The easiest way to deploy this site is using [Vercel](https://vercel.com):
1. Push your code to a GitHub repository.
2. Connect your GitHub account to Vercel.
3. Import the repository and click **Deploy**.

## 📝 Project Structure
- `/app`: Next.js App Router pages and routes.
- `/components`: Reusable UI components (Navbar, etc.).
- `/context`: React Context for Auth and Subscription state.
- `/lib`: Data structures and curriculum content.
- `/public`: Static assets.
