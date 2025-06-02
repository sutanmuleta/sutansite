const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  basePath: isProd ? '/sutansite' : '',
  images: {
    unoptimized: true,
  },
};

export default config;
