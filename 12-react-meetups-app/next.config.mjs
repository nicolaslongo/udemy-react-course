// This should obviusly be improved and its a hack in order to 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dynamic-media.tacdn.com',
        port: '',
        pathname: '/media/photo-o/**',
      },
      {
        protocol: 'https',
        hostname: 'turismo.buenosaires.gob.ar',
        port: '',
        pathname: '/sites/turismo/files/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/wikipedia/commons/**',
      },
    ],
  },
};

export default nextConfig;
