import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col justify-center text-white items-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="font-bold flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl justify-center items-center text-center">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Get Me A Chai
          </span>
          <span className="flex-shrink-0">
            <Image 
              className="invertImg animate-bounce" 
              src="/tea.gif" 
              width={60} 
              height={60}
              alt="tea"
            />
          </span>
        </div>
        
        <p className="text-center text-slate-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed">
          A crowdfunding platform for creators. Get funded by your fans and followers. Start now!
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
          <Link href={"/login"}>
            <button 
              type="button" 
              className="w-full sm:w-auto text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl hover:scale-105 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 text-center transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Here
            </button>
          </Link>

          <Link href={"/about"}>
            <button 
              type="button" 
              className="w-full sm:w-auto text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl hover:scale-105 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 text-center transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-gradient-to-r from-transparent via-white to-transparent h-px opacity-20 mx-4"></div>

      {/* Features Section */}
      <div className="text-white container mx-auto py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Your Fans can buy you a Chai
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto">
          <div className="item space-y-4 sm:space-y-6 flex flex-col items-center justify-center text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="relative">
              <Image 
                className="bg-gradient-to-br from-slate-400 to-slate-600 rounded-full p-3 sm:p-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300" 
                width={80} 
                height={80} 
                src="/man.gif" 
                alt="man"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full"></div>
            </div>
            <p className="font-bold text-lg sm:text-xl">Fans want to help</p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xs">
              Your fans are available for you to help you achieve your goals and dreams
            </p>
          </div>

          <div className="item space-y-4 sm:space-y-6 flex flex-col items-center justify-center text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="relative">
              <Image 
                className="bg-gradient-to-br from-slate-400 to-slate-600 rounded-full p-3 sm:p-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300" 
                width={80} 
                height={80} 
                src="/coin.gif" 
                alt="coin"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full"></div>
            </div>
            <p className="font-bold text-lg sm:text-xl">Secure Payments</p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xs">
              Get funded with secure and fast payment processing through trusted gateways
            </p>
          </div>

          <div className="item space-y-4 sm:space-y-6 flex flex-col items-center justify-center text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="relative">
              <Image 
                className="bg-gradient-to-br from-slate-400 to-slate-600 rounded-full p-3 sm:p-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300" 
                width={80} 
                height={80} 
                src="/group.gif" 
                alt="group"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full"></div>
            </div>
            <p className="font-bold text-lg sm:text-xl">Build Community</p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xs">
              Connect with your audience and build a supportive community around your work
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-gradient-to-r from-transparent via-white to-transparent h-px opacity-20 mx-4"></div>

      {/* Learn More Section */}
      <div className="text-white container mx-auto py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Learn More About Get Me A Chai
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* YouTube Video */}
          <div className="w-full lg:w-1/2 max-w-2xl">
            <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-2xl">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/QtaorVNAwbI?si=x9uTrfWcVYMLSQN5" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Project Description */}
          <div className="w-full lg:w-1/2 max-w-xl space-y-6">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 sm:p-8 backdrop-blur-sm border border-slate-700/50">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center lg:text-left bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Create Your Own Get Me A Chai
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Build your own crowdfunding platform just like this one! This project is created by <span className="font-semibold text-white"> CodeWithHarry </span> and comes with amazing features.
              </p>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-3">🚀 What You will Get:</h4>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-slate-300 text-sm sm:text-base">Complete Next.js 14 application with modern features</span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-slate-300 text-sm sm:text-base">Integrated Razorpay payment gateway</span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-slate-300 text-sm sm:text-base">MongoDB database integration</span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-slate-300 text-sm sm:text-base">NextAuth.js authentication system</span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-slate-300 text-sm sm:text-base">Responsive design with Tailwind CSS</span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-slate-300 text-sm sm:text-base">Complete source code and documentation</span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-slate-300 text-sm sm:text-base">Deploy ready with Vercel integration</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700">
                  <p className="text-xs sm:text-sm text-slate-400 text-center lg:text-left">
                    Learn modern web development while building a real-world project that can generate income!
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <a 
                href="https://www.youtube.com/watch?v=QtaorVNAwbI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button 
                  type="button" 
                  className="text-white bg-gradient-to-br from-red-500 to-red-600 hover:bg-gradient-to-bl hover:scale-105 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 text-center transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Watch Full Tutorial
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const metadata = {
    title: "Home - Get Me A Chai",
}