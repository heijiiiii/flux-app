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
  transpilePackages: [
    'bcrypt-ts',
    'ai',
    '@supabase/supabase-js',
    '@vercel/functions',
    'resumable-stream',
    'zod',
    '@vercel/blob',
  ],
  webpack: (config, { isServer }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };

    config.module.rules.push({
      test: /\.m?js/,
      resolve: {
        fullySpecified: false,
      },
    });

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
  experimental: {
    esmExternals: 'loose',
  },
};

export default nextConfig;
