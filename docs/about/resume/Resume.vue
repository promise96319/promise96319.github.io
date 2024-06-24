<script setup lang="ts">
import Section from './Section.vue'
import Li from './Li.vue'
</script>

<template>
  <article mx-auto max-w-1000px p-16>
    <h1 font-700 font-size-8>
      秦光辉
    </h1>

    <Section title="基本信息">
      <ul grid="~ cols-[1fr_1fr] gap-x-8">
        <Li>学历：西安交通大学 本科学历</Li>
        <Li>专业：能源与动力工程</Li>
        <Li>邮箱：1248975357@qq.com</Li>
        <Li>电话：13125142026</Li>
        <!-- <Li>工作经验：3年前端开发（2年 Vue / 1年 React）</Li> -->
        <Li>博客：https://www.qinguanghui.com/</Li>
        <Li>Github：https://github.com/promise96319</Li>
      </ul>
    </Section>

    <Section title="个人优势">
      <ul flex-col gap-1>
        <Li>熟悉 Vue/React，研究过其实现原理，具备多个相关项目实战经验。Vue源码笔记、React源码笔记</Li>
        <Li>了解 Webpack/Rollup/Vite 基本原理。Webpack源码笔记</Li>
        <Li>熟悉 Vue/熟悉常见算法、数据结构、网络协议、设计模式。</Li>
        <Li>从 0 到 1 负责过多个项目，具备较强的自学能力与解决问题的能力。</Li>
        <Li>态度勤恳，做事认真负责，遇到困难能主动专研解决。</Li>
      </ul>
    </Section>

    <Section title="工作经历">
      <h3>
        青藤云安全
        <datetime>
          （2021年12月 ~ 至今）
        </datetime>
        基础架构组 - 前端开发
      </h3>
      <p>负责公司内部组件库的开发与维护。</p>
    </Section>

    <Section title="项目经验">
      hea
    </Section>
  </article>
</template>
