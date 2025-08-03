# Divya Karma - Spiritual Services & Guidance

A modern, responsive website for spiritual services and guidance, built with React and Tailwind CSS. This website showcases various spiritual services, testimonials, and provides an easy way for clients to connect.

## 🌟 Features

- **Modern Design**: Clean, professional interface with beautiful gradients and animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Spiritual Services Showcase**: Dedicated sections for different spiritual services
- **Client Testimonials**: Social proof with client testimonials and reviews
- **Contact Information**: Multiple ways for clients to get in touch
- **Professional Typography**: Uses Poppins font for a modern, readable appearance
- **Interactive Components**: Smooth animations and hover effects
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + Shadcn/ui
- **Routing**: React Router DOM
- **Font**: Poppins (Google Fonts)
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Package Manager**: npm/yarn

## 📁 Project Structure

```
divya-karma/
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/           # Reusable UI components
│   │   │   ├── Header.js     # Navigation header
│   │   │   ├── Hero.js       # Main landing section
│   │   │   ├── About.js      # About section
│   │   │   ├── Services.js   # Services showcase
│   │   │   ├── Media.js      # Media gallery
│   │   │   ├── Testimonials.js # Client testimonials
│   │   │   ├── Contact.js    # Contact information
│   │   │   └── Footer.js     # Footer section
│   │   ├── hooks/            # Custom React hooks
│   │   ├── lib/              # Utility functions
│   │   ├── App.js            # Main app component
│   │   ├── index.js          # App entry point
│   │   └── index.css         # Global styles
│   ├── package.json
│   └── tailwind.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/divya-karma.git
   cd divya-karma
   ```

2. **Navigate to the frontend directory**
   ```bash
   cd frontend
   ```

3. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   # or
   yarn install
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to view the website.

## 🎨 Customization

### Colors and Styling
The website uses Tailwind CSS with custom color variables. You can modify the colors in:
- `frontend/src/index.css` - CSS custom properties
- `frontend/tailwind.config.js` - Tailwind configuration

### Content Updates
- **Services**: Update content in `frontend/src/components/Services.js`
- **Testimonials**: Modify testimonials in `frontend/src/components/Testimonials.js`
- **Contact Info**: Update contact details in `frontend/src/components/Contact.js`
- **About Section**: Edit about content in `frontend/src/components/About.js`

### Images
Replace images in the components with your own spiritual service images. The current setup uses placeholder images from Unsplash.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner

## 🌐 Deployment

### Build for Production
```bash
cd frontend
npm run build
```

### Deploy Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use GitHub Actions for deployment
- **AWS S3**: Upload the `build` folder to S3

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- Email: [your-email@example.com]
- Phone: [your-phone-number]
- Website: [your-website-url]

## 🙏 Acknowledgments

- [Radix UI](https://www.radix-ui.com/) for accessible UI components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS framework
- [Lucide React](https://lucide.dev/) for beautiful icons
- [Unsplash](https://unsplash.com/) for placeholder images

---

**Divya Karma** - Bringing spiritual guidance and services to those seeking inner peace and enlightenment. ✨
