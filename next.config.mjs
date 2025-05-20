/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: '*.swell.store',
      },
    ],
  },
  transpilePackages: ['@geist-ui/react'],
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
  eslint: {
    // 빌드 과정에서 경고를 표시하지만 빌드를 중단하지 않음
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 타입 오류가 있어도 빌드 진행
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
