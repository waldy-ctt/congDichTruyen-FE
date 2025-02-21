import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

export default {
    content:{
        files: [],
        extract
    },
    plugins:[
        fluid
    ],
  // ...
  theme: {
    screens, // Tailwind's default screens, in `rem`
    fontSize, // Tailwind's default font sizes, in `rem` (including line heights)
    extend: {
      screens: {
        xs: '20rem'
      }
    }
  },
  // ...
}