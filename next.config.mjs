/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'avatar.vercel.sh',
      },
      {
        hostname: 'v3.fal.media',
      },
      {
        hostname: 'fal.media',
      },
    ],
  },
  eslint: {
    // 빌드 과정에서 경고를 표시하지만 빌드를 중단하지 않음
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
