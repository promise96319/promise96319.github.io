<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <div class="footer" align="center">
        <a href="https://beian.miit.gov.cn/">
          鄂ICP备20002086号-1
        </a>
      </div>
    </template>
  </Layout>
</template>

<style>
.footer {
  padding: 32px;
  color: rgba(60, 60, 67, .78);
  font-weight: 400;
  border-top: 1px solid var(--vp-c-divider-light);
}
</style>
