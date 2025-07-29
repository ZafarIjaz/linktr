# Linktree Clone - Atomic Design

A beautiful Linktree clone built with Next.js, Tailwind CSS, and Atomic Design principles. This project provides a modern, responsive landing page where you can showcase all your important links in one place.

## 🎯 Features

- ✨ **Modern Design**: Clean and beautiful UI with glass morphism effects
- 📱 **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Fast**: Built with Next.js for optimal performance
- 🎨 **Customizable**: Easy to customize colors, links, and styling
- 🔗 **Social Links**: Pre-configured social media links with hover effects
- 🌈 **Gradient Background**: Beautiful gradient background with smooth animations
- 🏗️ **Atomic Design**: Well-structured component architecture following Atomic Design principles

## 🏗️ Atomic Design Structure

This project follows the Atomic Design methodology, organizing components into five distinct levels:

### Atoms
Basic building blocks that can't be broken down further:
- **Button**: Reusable button component with variants
- **Icon**: Handles both emoji and SVG icons
- **Avatar**: Profile picture component with fallback

### Molecules
Simple combinations of atoms:
- **LinkCard**: Combines Button and Icon atoms
- **SocialLink**: Social media link with icon

### Organisms
Complex UI components composed of molecules:
- **ProfileSection**: User profile with avatar and bio
- **LinkList**: Collection of link cards
- **Footer**: Social links and attribution

### Templates
Page-level objects that place components into a layout:
- **LinktreeTemplate**: Main layout combining all organisms

### Pages
Specific instances of templates with real content:
- **LinktreePage**: Contains actual data and uses the template

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Architecture**: Atomic Design Pattern
- **Icons**: Custom SVG icons for social media platforms

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd linktr
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Updating Links

Edit the `links` array in `src/components/pages/LinktreePage.tsx`:

```typescript
const [links] = useState([
  {
    id: 1,
    title: 'My Website',
    url: 'https://yourwebsite.com',
    icon: '🌐'
  },
  // Add more links...
]);
```

### Updating Profile Information

Edit the `profile` object in `src/components/pages/LinktreePage.tsx`:

```typescript
const profile = {
  username: '@yourusername',
  bio: 'Your bio description here',
  location: '📍 Your Location',
  status: '💼 Your Status'
};
```

### Customizing Components

Each component level can be customized independently:

- **Atoms**: Modify basic building blocks in `src/components/atoms/`
- **Molecules**: Update component combinations in `src/components/molecules/`
- **Organisms**: Change complex components in `src/components/organisms/`
- **Templates**: Adjust layouts in `src/components/templates/`
- **Pages**: Update data and content in `src/components/pages/`

### Adding New Components

Follow the atomic design pattern:

1. **Atoms**: Create basic UI elements
2. **Molecules**: Combine atoms for simple functionality
3. **Organisms**: Build complex components from molecules
4. **Templates**: Create page layouts
5. **Pages**: Add real content and data

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page component
├── components/
│   ├── atoms/               # Basic building blocks
│   │   ├── Button.tsx
│   │   ├── Icon.tsx
│   │   └── Avatar.tsx
│   ├── molecules/           # Simple component combinations
│   │   ├── LinkCard.tsx
│   │   └── SocialLink.tsx
│   ├── organisms/           # Complex UI components
│   │   ├── ProfileSection.tsx
│   │   ├── LinkList.tsx
│   │   └── Footer.tsx
│   ├── templates/           # Page layouts
│   │   └── LinktreeTemplate.tsx
│   ├── pages/               # Page instances
│   │   └── LinktreePage.tsx
│   └── index.ts             # Component exports
└── types/
    └── index.ts             # TypeScript interfaces
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

You can deploy this project to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Follow the atomic design pattern for new components
4. Make your changes
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by [Linktree](https://linktr.ee)
- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Architecture based on [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
