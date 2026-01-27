# Nishath J P - DevOps Portfolio

A modern, professional portfolio website showcasing cloud engineering and DevOps expertise.

## 🚀 Features

- **Modern Dark Theme** - Terminal-inspired UI with DevOps aesthetics
- **Responsive Design** - Optimized for all devices
- **Smooth Animations** - Professional transitions and effects
- **Interactive Components** - Engaging user experience
- **Performance Optimized** - Fast loading and smooth scrolling

## 📋 Sections

1. **Hero** - Introduction with certifications and social links
2. **About** - Terminal-style about section with education details
3. **Skills** - Categorized technical skills with proficiency levels
4. **Certifications** - AWS, Azure, and Red Hat certifications
5. **Projects** - Detailed showcase of Edge-Cloud project with architecture
6. **Experience** - Timeline of internships and work experience
7. **Contact** - Contact form and information

## 🛠️ Technologies Used

- React 18
- React Icons
- Framer Motion (for animations)
- Custom CSS with CSS Variables
- Responsive Grid & Flexbox layouts

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/nishath/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Certifications.js
│   │   ├── Projects.js
│   │   ├── Experience.js
│   │   └── Contact.js
│   ├── App.js
│   ├── App.css
│   └── index.js
└── package.json
```

## 🎨 Customization

### Colors
Edit CSS variables in `src/App.css`:
```css
:root {
  --bg-primary: #0a192f;
  --accent-primary: #64ffda;
  --accent-secondary: #00d9ff;
  /* ... more colors */
}
```

### Content
Update personal information in component files:
- Hero section: `src/components/Hero.js`
- Skills: `src/components/Skills.js`
- Projects: `src/components/Projects.js`
- Experience: `src/components/Experience.js`
- Contact: `src/components/Contact.js`

## 🚀 Deployment

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify

### Deploy to Vercel
1. Connect your GitHub repository
2. Vercel will auto-detect React and deploy

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Run: `npm run deploy`

## 📝 Key Features to Update

Before deploying, update:
- [ ] Personal information (name, email, phone)
- [ ] Social media links (LinkedIn, GitHub)
- [ ] Resume PDF file in `public/resume.pdf`
- [ ] Project GitHub links
- [ ] Certification verification links
- [ ] Contact form backend (connect to a form service like Formspree or EmailJS)

## 🔧 Form Integration

The contact form currently shows a success message. To integrate with a backend:

1. **Using Formspree**:
```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

2. **Using EmailJS**:
Install EmailJS and configure in `Contact.js`

3. **Custom Backend**:
Create an API endpoint and update the `handleSubmit` function

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Nishath J P**
- AWS Certified Solutions Architect - Associate
- Microsoft Certified: Azure Administrator Associate
- Red Hat Certified System Administrator

---

**Built with React and a passion for DevOps** ☁️ 💻 🚀
