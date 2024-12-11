import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.externals.push({
      'three/addons/libs/draco/gltf/': 'null'
    });
    return config;
  }
};

export default nextConfig;
