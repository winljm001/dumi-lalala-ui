import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'hj-components-rn',
  favicon: './assets/logo.jpg',
  logo: './assets/logo.jpg',
  outputPath: 'docs-dist',
  mode: 'site',
  // 菜单配置
  navs: [
    null,
    { title: 'GitHub', path: 'https://github.com/hjfruit/hj-components-rn' },
  ],
  // more config: https://d.umijs.org/config
});
