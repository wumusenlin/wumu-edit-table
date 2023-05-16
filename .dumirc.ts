import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'edit-table',
    logo: '/wumusenlin-logo.png',
    // footer: 'wumusenlin'
    prefersColor: { default: 'auto', switch: true },
    socialLinks: {
      github: 'https://github.com/wumusenlin/wumu-edit-table',
      zhihu: 'https://www.zhihu.com/people/zhang-sen-lin-66',
    },
  },
  theme: { '@c-primary': '#1DA57A' },
  favicons: ['/edit-table.ico'],
});
