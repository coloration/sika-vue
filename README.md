# Coloration Sika Vue

a simple component library system boilerplate for Vue

## Startup

``` bash
$ yarn add @coloration/sika-vue
```

```js
// main.js
import '@coloration/sika-vue/dist/sika.css'
```

in component 

``` html
<template>
<ThemeProvider theme="theme-hack">
  <Box title="Some Value for Something">
    <Bar 
      :value="[199, 2345, 320, 440, 897, 1200]"
      :category="['c1', 'c2', 'c3', 'c4', 'c5', 'c6']">
  </Box>
</ThemeProvider>
</template>
<script>
import { ThemeProvider, Box, Bar } from '@coloration/sika-vue'
export default {
  components: { ThemeProvider, Box, Bar }
}
</script>
```



## Dependencies

- [x] Vue@2.x
- [x] @vue/composition-api


## Features

- System
  - [x] ThemeProvider
  - [] LocaleProvider
  
- Components
  - [x] Box: a simple component

- Chart
  - [x] Bar: a demo chart