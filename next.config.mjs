/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 🔹 ESSA LINHA ativa o modo estático (gera a pasta "out")

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // evita problemas com imagens no Netlify
  },
}

export default nextConfig
