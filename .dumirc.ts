import { defineConfig } from 'dumi';

const repo = `wumu-edit-table`;
export default defineConfig({
  outputPath: 'docs-dist',
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  themeConfig: {
    name: 'edit-table',
    logo: '/wumusenlin-logo.png',
    // footer: 'wumusenlin'
    prefersColor: { default: 'auto', switch: true },
    socialLinks: {
      github: 'https://github.com/wumusenlin/wumu-edit-table',
      zhihu: 'https://www.zhihu.com/people/zhang-sen-lin-66',
    },
    nprogress: true,
  },
  theme: { '@c-primary': '#1DA57A' },
  favicons: ['/edit-table.ico'],
});
