<script setup lang="ts">
import DocumentVue from './Document.vue'

const html = `
  <h3>Heading</h3>
  
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Vivamus ex risus, dapibus eget cursus et, rhoncus 
    non lacus. Nam laoreet commodo velit, ut dictum tellus 
    dictum vel. Mauris dignissim sem sodales, 
    tristique nulla laoreet, faucibus tortor. Donec cursus 
    libero ut diam tempus.
    non lacus. Nam laoreet commodo velit, ut dictum tellus 
    dictum vel. Mauris dignissim sem sodalesnon lacus. Nam laoreet commodo velit, ut dictum tellus 
    dictum vel. Mauris dignissim sem sodales, 
    tristique nulla laoreet, faucibus tortor. Donec cursus 
    libero ut diam tempus.non lacus. Nam laoreet commodo velit, ut dictum tellus 
    dictum vel. Mauris dignissim sem sodales, non lacus. Nam laoreet commodo velit, ut dictum tellus 
    dictum vel. Mauris dignissim sem sodales, 
    tristique nulla laoreet, faucibus tortor. Donec cursus 
    libero ut diam tempus.non lacus. Nam laoreet commodo velit, ut dictum tellus 
    dictum vel. Mauris dignissim sem sodales, 
    tristique nulla laoreet, faucibus tortor. Donec cursus 
    libero ut diam tempus.
    tristique nulla laoreet, faucibus tortor. Donec cursus 
    libero ut diam tempus. 
    tristique nulla laoreet, faucibus tortor. Donec cursus 
    libero ut diam tempus.non lacus. Nam laoreet commodo velit, ut dictum tellus 
    dictum vel. Mauris dignissim sem sodales, 
    tristique nulla laoreet, faucibus tortor. Donec cursus 
    libero ut diam tempus.non lacus. Nam laoreet commodo velit, ut dictum tellus 
    dictum vel. Mauris dignissim sem sodales, 
    tristique nulla laoreet, faucibus tortor. Donec cursus 
    libero ut diam tempus.non lacus. Nam laoreet commodo velit, ut dictum tellus 
    dictum vel. Mauris dignissim sem sodales, 
    tristique nulla laoreet, faucibus tortor. Donec cursus 
    libero ut diam tempus.non lacus. Nam laoreet commodo velit, ut dictum tellus 
    dictum vel. Mauris dignissim sem sodales, 
    tristique nulla laoreet, faucibus tortor. Donec cursus 
    libero ut diam tempus.
  </p>
  
  <br/><br/>
  
  <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" />
  
  <p>
    Curabitur convallis ultricies lorem sed egestas. 
    Donec dapibus condimentum fringilla. Vestibulum ante 
    ipsum primis in faucibus orci luctus et ultrices posuere 
    cubilia curae; Sed condimentum consectetur ligula. 
    Donec vulputate maximus urna id commodo. Suspendisse 
    tempus mi nibh, eu cursus enim pulvinar id. Aenean 
    eu egestas dolor. Suspendisse in ipsum eu 
    velit tempus maximus quis a odio. Donec eget 
    justo semper, efficitur urna nec, tincidunt sem. 
    Proin condimentum diam blandit tempus egestas. 
    Pellentesque tempor, libero at tincidunt eleifend, lectus 
    diam condimentum mauris, eget commodo risus urna 
    semper massa. Phasellus placerat dapibus lacus, 
    in maximus felis pulvinar in. Etiam elementum, ante 
    non viverra convallis, turpis ipsum molestie enim, 
    a vestibulum odio elit ac ipsum. Nam non elit augue. 
    Phasellus commodo vel velit a suscipit.
  </p>
  
  <br />
  <br />

  <p>
    Phasellus interdum dignissim orci, eget laoreet felis egestas sed. 
    Ut tincidunt, sem blandit volutpat aliquet, magna sapien elementum ante, 
    dignissim porttitor elit enim a libero. Praesent ultricies ex a 
    lacinia aliquet. Fusce egestas lacus sit amet elit dignissim, 
    vel volutpat libero malesuada. Aliquam eget magna viverra, blandit 
    dolor non, molestie nibh. Nullam non enim ipsum. Class aptent taciti 
    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
    Aliquam erat volutpat. Duis egestas augue a ultrices porttitor. 
    Aenean faucibus sollicitudin odio sed facilisis. 
    Aliquam augue lacus, tempor a ex eu, tincidunt tincidunt urna.
  </p>

  <br />
  <br />

  <p>
    Phasellus interdum dignissim orci, eget laoreet felis egestas sed. 
    Ut tincidunt, sem blandit volutpat aliquet, magna sapien elementum ante, 
    dignissim porttitor elit enim a libero. Praesent ultricies ex a 
    lacinia aliquet. Fusce egestas lacus sit amet elit dignissim, 
    vel volutpat libero malesuada. Aliquam eget magna viverra, blandit 
    dolor non, molestie nibh. Nullam non enim ipsum. Class aptent taciti 
    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
    Aliquam erat volutpat. Duis egestas augue a ultrices porttitor. 
    Aenean faucibus sollicitudin odio sed facilisis. 
    Aliquam augue lacus, tempor a ex eu, tincidunt tincidunt urna. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Vivamus ex risus, dapibus eget cursus et, rhoncus 
    non lacus. Nam laoreet commodo velit, ut dictum tellus 
    dictum vel. Mauris dignissim sem sodales, 
    tristique nulla laoreet, faucibus tortor. Donec cursus 
    libero ut diam tempus.
  </p>
`

const config = {
  pixelsPerInch: 96,
  pageHeightInCentimeter: 29.7,
  pageMarginBottomInCentimeter: 2
}
</script>

<template>
  <DocumentVue :config="config" :html="html" />
</template>

<style scoped></style>
