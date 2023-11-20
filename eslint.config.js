import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    'node_modules',
    '**/node_modules/**',
    'dist',
    '**/dist/**',

    // TODO: 暂时禁用 markdown 里的一些问题
    'docs/vue/**',
    // 'docs/leetcode/',
  ],
  markdown: true,
  jsx: true,
})
