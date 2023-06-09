import { defineConfig } from 'dumi';

const repo = `wumu-edit-table`;
const publicPath = process.env.NODE_ENV === 'production' ? `/${repo}/` : '/';
export default defineConfig({
  outputPath: 'docs-dist',
  base: publicPath,
  publicPath: publicPath,
  themeConfig: {
    name: 'edit-table',
    logo: `${publicPath}wumusenlin-logo.png`,
    prefersColor: { default: 'light', switch: false },
    socialLinks: {
      github: 'https://github.com/wumusenlin/wumu-edit-table',
      zhihu: 'https://www.zhihu.com/people/zhang-sen-lin-66',
    },
    nprogress: true,
  },
  theme: { '@c-primary': '#1DA57A' },
  favicons: [`${publicPath}edit-table.ico`],
});
