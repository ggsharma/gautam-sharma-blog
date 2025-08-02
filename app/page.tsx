import Link from "next/link";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Gautam Sharma
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          Systems Engineer & Performance Optimizer
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          I build high-performance systems, optimize GPU computing, and create
          machine learning libraries from scratch.
        </p>
      </div>

      {/* Engineering Focus */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            What I Do
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">
                High-performance C++ systems
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-green-500 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">
                GPU computing with CUDA
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-purple-500 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">
                Machine learning libraries
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-orange-500 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">
                Distributed systems & gRPC
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "C++",
              "CUDA",
              "Python",
              "gRPC",
              "Machine Learning",
              "Systems Programming",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Recent News Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          Recent News
        </h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                Coming Soon
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                I'll be sharing updates about my latest projects, research, and
                engineering insights here.
              </p>
            </div>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm">
              Soon
            </span>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="text-center">
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/about"
            className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
          >
            About Me
          </Link>
          <Link
            href="https://github.com/ggsharma"
            target="_blank"
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
