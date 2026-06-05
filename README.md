# 🍵 Get Me A Chai

[![Next.js](https://img.shields.io/badge/Next.js-15.5.0-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Razorpay](https://img.shields.io/badge/Razorpay-3395FF?style=for-the-badge&logo=razorpay&logoColor=white)](https://razorpay.com/)

> A modern crowdfunding platform for creators. Get funded by your fans and followers with secure payments through Razorpay integration.

## 🌟 Features

- 🔐 **Secure Authentication** - NextAuth.js integration with multiple providers
- 💳 **Payment Gateway** - Razorpay integration for secure transactions
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎨 **Modern UI** - Beautiful interface with Tailwind CSS v4
- 📊 **User Dashboard** - Manage campaigns and track donations
- 🔔 **Real-time Notifications** - React Toastify integration
- 📧 **Email Integration** - Nodemailer for transactional emails
- 🗃️ **Database** - MongoDB with Mongoose ODM
- 🚀 **Performance** - Built with Next.js 15 and Turbo Mode
- ☁️ **Cloud Ready** - Easy deployment on Vercel

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.5.0](https://nextjs.org/) with App Router
- **Frontend**: [React 19.1.0](https://reactjs.org/) with Server Components
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Database**: [MongoDB](https://mongodb.com/) with [Mongoose 8.18.0](https://mongoosejs.com/)
- **Authentication**: [NextAuth.js 4.24.11](https://next-auth.js.org/)
- **Payments**: [Razorpay 2.9.6](https://razorpay.com/)
- **Notifications**: [React Toastify 11.0.5](https://fkhadra.github.io/react-toastify/)
- **Email Service**: [Nodemailer 6.10.1](https://nodemailer.com/)
- **Build Tool**: [Turbopack](https://turbo.build/pack) for faster builds

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- [MongoDB](https://www.mongodb.com/) account or local installation

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/ChiragVasava/GET-ME-A-CHAI.git
cd get-me-a-chai
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# Authentication Providers (Add as needed)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

# Razorpay Configuration
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_public_razorpay_key_id

# Email Configuration
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_email_password

# Application URL
NEXT_PUBLIC_URL=http://localhost:3000
```

### 4. Database Setup

Make sure your MongoDB database is running and accessible. The application will automatically create necessary collections on first run.

### 5. Run the Application

```bash
# Development mode with Turbopack
npm run dev

# Production build
npm run build
npm run start

# Lint check
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
get-me-a-chai/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # User dashboard
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   └── page.js           # Home page
├── actions/               # Server actions
├── components/            # Reusable components
├── lib/                   # Utility functions
├── models/               # Database models
├── public/               # Static assets
├── .env.local           # Environment variables
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
└── README.md           # Project documentation
```

## ⚙️ Configuration

### Razorpay Setup

1. Create a [Razorpay](https://razorpay.com/) account
2. Navigate to Dashboard → Settings → API Keys
3. Generate Key ID and Key Secret
4. Add webhooks endpoint: `your-domain/api/webhooks/razorpay`
5. Update environment variables with your keys

### Authentication Setup

1. Configure OAuth providers in your respective developer consoles
2. Add callback URLs: `your-domain/api/auth/callback/[provider]`
3. Update environment variables with client credentials

### Email Configuration

1. Use Gmail, Outlook, or any SMTP service
2. For Gmail: Enable 2-FA and create an App Password
3. Update SMTP configuration in environment variables

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com/)
3. Add environment variables in Vercel dashboard
4. Deploy with one click

```bash
# Or deploy with Vercel CLI
npm i -g vercel
vercel
```

### Deploy on Other Platforms

The application can be deployed on:
- [Netlify](https://netlify.com/)
- [Railway](https://railway.app/)
- [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform/)
- [Heroku](https://heroku.com/)

## 📱 Usage

### For Creators

1. **Sign Up/Login** - Create account using email or social providers
2. **Setup Profile** - Add profile picture, cover image, and bio
3. **Configure Razorpay** - Add your Razorpay credentials
4. **Share Your Page** - Share your unique link with followers
5. **Track Donations** - Monitor payments in your dashboard

### For Supporters

1. **Visit Creator Page** - Use creator's unique link
2. **Make Donation** - Choose amount and add message
3. **Secure Payment** - Pay through Razorpay gateway
4. **Get Confirmation** - Receive payment confirmation

## 🛡️ Security Features

- **Data Validation** - Input validation on client and server
- **CSRF Protection** - Built-in NextAuth.js security
- **Environment Variables** - Sensitive data protection
- **Secure Headers** - Next.js security headers
- **Payment Security** - PCI-compliant Razorpay integration

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow ESLint configuration
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation when needed

## 📝 License

This project is licensed under the MIT License - see the 
[LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/ChiragVasava/GET-ME-A-CHAI.git) page
2. Create a new issue with detailed description
3. Join our community discussions

## 🙏 Acknowledgments

- [CodeWithHarry](https://www.youtube.com/@CodeWithHarry) for the inspiration and tutorial
- [Next.js Team](https://nextjs.org/) for the amazing framework
- [Vercel](https://vercel.com/) for hosting and deployment
- [Razorpay](https://razorpay.com/) for payment processing

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/ChiragVasava/GET-ME-A-CHAI?style=social)
![GitHub forks](https://img.shields.io/github/forks/ChiragVasava/GET-ME-A-CHAI?style=social)
![GitHub issues](https://img.shields.io/github/issues/ChiragVasava/GET-ME-A-CHAI)
![GitHub license](https://img.shields.io/github/license/ChiragVasava/GET-ME-A-CHAI)
![GitHub repo size](https://img.shields.io/github/repo-size/ChiragVasava/GET-ME-A-CHAI)
![GitHub last commit](https://img.shields.io/github/last-commit/ChiragVasava/GET-ME-A-CHAI)
![GitHub contributors](https://img.shields.io/github/contributors/ChiragVasava/GET-ME-A-CHAI)

## Screenshots

### Home Page
<img width="1920" height="2497" alt="Home" src="https://github.com/user-attachments/assets/fa81d79d-6719-4437-bf5c-567f1b802575" />

### About Page
<img width="1920" height="1985" alt="About" src="https://github.com/user-attachments/assets/078f3554-c08d-43bf-aaf1-c931ce8f3981" />

### User Page
<img width="1920" height="1715" alt="User" src="https://github.com/user-attachments/assets/34434647-59f3-4c40-8672-3a7b82a192b0" />

### Donating Page
<img width="1920" height="1080" alt="Donating" src="https://github.com/user-attachments/assets/78613f19-2f24-4fc0-83b8-2883e7478bd3" />

### Transaction Done Page
<img width="1920" height="1080" alt="Transaction Done" src="https://github.com/user-attachments/assets/8b97d837-6875-4f03-b1f7-13dc5602035d" />

---

<div align="center">

**[⭐ Star this repository if you found it helpful!](https://github.com/ChiragVasava/GET-ME-A-CHAI.git)**

Made with ❤️ by [Chirav Vasava](https://github.com/ChiragVasava)

</div>