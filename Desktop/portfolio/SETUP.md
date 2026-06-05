# 🚀 Portfolio Setup & Run Guide

## Getting Started

Your professional animated portfolio is ready! Follow these steps to run it locally.

### Step 1: Install Dependencies
Open terminal/command prompt in the portfolio folder and run:
```bash
npm install
```

This will install all required packages:
- React
- Framer Motion (animations)
- Tailwind CSS (styling)
- Vite (build tool)
- React Icons

### Step 2: Start Development Server
```bash
npm run dev
```

The portfolio will automatically open in your browser at `http://localhost:3000`

### Step 3: Customize for Your Profile

#### Update Your Information
1. **Hero Section** - `src/components/Hero.jsx`
   - Change your name and title
   - Update your professional summary
   - Add your social media links

2. **About Section** - `src/components/About.jsx`
   - Write your bio
   - Add your experience
   - Update skills highlights

3. **Projects Section** - `src/components/Projects.jsx`
   - Replace example projects with your real projects
   - Add project descriptions
   - Link to your GitHub repos and live demos

4. **Skills Section** - `src/components/Skills.jsx`
   - Update your tech stack categories
   - Modify your experience stats

5. **Contact Section** - `src/components/Contact.jsx`
   - Update your contact information
   - Add your real email
   - Link social profiles

### Step 4: Customize Colors & Theme

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#6366f1',      // Main color (change this)
  secondary: '#ec4899',    // Accent color (change this)
}
```

### Step 5: Build for Production
When ready to deploy:
```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## 🌐 Deploy Your Portfolio

### Option 1: Vercel (Easiest)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and select your repository
4. Vercel automatically detects it's a Vite project
5. Click Deploy!

Your portfolio is now live at: `your-username.vercel.app`

### Option 2: Netlify
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Deploy!

### Option 3: GitHub Pages
1. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/portfolio/',
  // ... rest of config
})
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio"
```

3. Deploy using:
```bash
npm run build
# Then push the dist folder to gh-pages branch
```

## 📝 Quick Customization Checklist

- [ ] Update your name in Hero section
- [ ] Add your real projects
- [ ] Update skills
- [ ] Add contact information
- [ ] Change colors to match your brand
- [ ] Add profile picture
- [ ] Test on mobile devices
- [ ] Deploy to live server

## ⚡ Performance Tips

- Images should be optimized (<100KB each)
- Animations are GPU-accelerated
- All code is minified and optimized
- Average load time: < 2 seconds

## 🆘 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- --port 3001
```

**Changes not showing?**
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server (Ctrl+C, then npm run dev)

**Build fails?**
```bash
npm install  # Reinstall dependencies
npm run build  # Try building again
```

## 📚 File Structure Reminder

```
portfolio/
├── src/
│   ├── components/        # All React components
│   ├── hooks/            # Custom React hooks
│   ├── App.jsx           # Main app component
│   └── index.css         # Global styles
├── index.html            # HTML entry point
├── package.json          # Dependencies
└── vite.config.js        # Build config
```

## 🎨 Advanced Customization

### Add More Sections
Create a new file in `src/components/` and import it in `App.jsx`

### Modify Animations
Edit Framer Motion properties in each component:
```jsx
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.8 }}
```

### Change Fonts
Update `index.css` to import custom fonts from Google Fonts

## 🎯 Next Steps

1. **Add a real profile picture** - Replace emoji with your photo
2. **Connect contact form** - Use Formspree or EmailJS
3. **Add Google Analytics** - Track visitor stats
4. **Set up custom domain** - Point your domain to deployed site
5. **Add blog section** - Showcase your writing

## 💪 You're All Set!

Your professional portfolio is ready to impress companies and clients. 

Good luck with your career! 🚀

For questions, refer to the main README.md or component files.
