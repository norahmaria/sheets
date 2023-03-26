<template>
  <button @click="print">Click me</button>
  <div class="document" ref="document">
    <div
      v-for="(page, index) in pageContents"
      class="page"
      ref="pages"
      v-html="page"
      :key="index"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

export interface DocumentProps {
  html: string

  config: {
    pixelsPerInch: number
    pageHeightInCentimeter: number
    pageMarginBottomInCentimeter: number
  }
}

const props = defineProps<DocumentProps>()

onMounted(() => {
  applyPageBreaks()
})

const pageContents = ref([props.html])

const document = ref<HTMLDivElement>()

const print = async () => {
  await fetch('http://localhost:3000/convert', {
    method: 'POST',
    body: JSON.stringify({
      html: document.value?.innerHTML,
      devicePixelRatio: window.devicePixelRatio
    }),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
}

const pages = ref<HTMLDivElement[]>([])

const applyPageBreaks = () => {
  applyAutomaticPageBreaks()
}

const applyAutomaticPageBreaks = () => {
  if (!document.value) {
    return
  }

  let inchPerCentimeter = 0.393701

  let pageHeightInInch = props.config.pageHeightInCentimeter * inchPerCentimeter
  let pageHeightInPixels = Math.ceil(pageHeightInInch * props.config.pixelsPerInch)

  let pageMarginBottomInInch = props.config.pageMarginBottomInCentimeter * inchPerCentimeter
  let pageMarginBottomInPixels = Math.ceil(pageMarginBottomInInch * props.config.pixelsPerInch)

  for (let p = 0; p < pages.value.length; p++) {
    const page = pages.value[p]

    const coords = page.getBoundingClientRect()

    const snippets = page.querySelectorAll('*')

    if (page.clientHeight > pageHeightInPixels) {
      console.log('over')

      page.insertAdjacentHTML('afterend', '<div class="page" />')

      for (let s = snippets.length - 1; s >= 0; s--) {
        const snippetCoords = snippets[s].getBoundingClientRect()

        if (snippetCoords.bottom - coords.top + pageMarginBottomInPixels > pageHeightInPixels) {
          page.nextElementSibling?.insertBefore(snippets[s], page.nextElementSibling.firstChild)
        }
      }

      // pages[p].insertAdjacentHTML('afterend', '<div class="page"></div>')
      // pageCoords = pages[p].getBoundingClientRect()
      // snippets = pages[p].querySelectorAll('h1, h2, h3, h4, h5, h6, p, ul, ol')
      // for (var s = snippets.length - 1; s >= 0; s--) {
      //   snippetCoords = snippets[s].getBoundingClientRect()
      //   if (snippetCoords.bottom - pageCoords.top + pageMarginBottomInPixels > pageHeightInPixels) {
      //     const nextElem = pages[p].nextElementSibling
      //     if (nextElem) {
      //       nextElem.insertBefore(snippets[s], nextElem.firstChild)
      //     }
      //   }
      // }
      // pages = document.value.querySelectorAll('.page')
    }
  }
}
</script>

<style lang="scss"></style>
