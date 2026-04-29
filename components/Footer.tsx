export default function Footer() {
  return (
    <footer className="bg-black border-t border-purple-500/20 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        <div>
          <h2 className="text-2xl font-bold">
            New <span className="text-purple-400">Era</span>
          </h2>

          <p className="text-gray-400 mt-2">
            Premium Branding & Creative Design Studio
          </p>
        </div>

        <div className="text-gray-400 text-sm">
          © 2026 New Era. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}