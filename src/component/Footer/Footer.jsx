import React from 'react'

function Footer () {
  return (
   <footer className="bg-[#0d1117] text-gray-400 py-8 mt-10 text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-xl text-white mb-2">Crypto Price Tracker</h2>
    <p>
      Powered by{" "}
      <a
        href="https://www.coingecko.com/"
        target="_blank"
        className="text-blue-400 hover:underline"
      >
        CoinGecko API
      </a>
    </p>
    <div className="mt-4 space-x-4">
      <a href="https://github.com/your-repo" className="hover:text-blue-400">GitHub</a>
      <span>|</span>
      <a href="https://yourportfolio.com" className="hover:text-blue-400">About Developer</a>
    </div>
    <p className="text-sm mt-4 text-gray-500">© 2025 Crypto Tracker. All rights reserved.</p>
  </div>
</footer>

  )
}

export default Footer;