// UnoCSS config — adapted from antfu/antfu.me (MIT, Copyright (c) 2020-2021 Anthony Fu)
// https://github.com/antfu/antfu.me — keeps the Vitesse look (colors, fonts, shortcuts).
import {
  createLocalFontProcessor,
} from '@unocss/preset-web-fonts/local'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWebFonts,
  presetWind3,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'bg-base': 'bg-white dark:bg-black',
      'color-base': 'text-black dark:text-white',
      'border-base': 'border-[#8884]',
    },
    [/^btn-(\w+)$/, ([_, color]) => `op50 px2.5 py1 transition-all duration-200 ease-out no-underline! hover:(op100 text-${color} bg-${color}/10) border border-base! rounded`],
  ],
  rules: [
    [/^slide-enter-(\d+)$/, ([_, n]) => ({
      '--enter-stage': n,
    })],
  ],
  presets: [
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'height': '1.2em',
        'width': '1.2em',
        'vertical-align': 'text-bottom',
      },
    }),
    presetAttributify(),
    presetWind3(),
    presetWebFonts({
      fonts: {
        sans: 'Inter',
        mono: 'DM Mono',
        condensed: 'Roboto Condensed',
        wisper: 'Bad Script',
      },
      processors: createLocalFontProcessor(),
    }),
  ],
  transformers: [
    transformerDirectives(),
  ],
  safelist: [
    'i-ri-menu-2-fill',
    // project icons come from the data file (projects.ts) — safelist guarantees generation
    'i-carbon-flow',
    'i-carbon-chart-relationship',
    'i-carbon-document',
    'i-carbon-data-base',
    'i-carbon-code',
    'i-carbon-integration',
    'i-carbon-game-console',
    'i-carbon-terminal',
    'i-carbon-file-diff',
    'i-carbon-cloud-upload',
    'i-carbon-arrows-vertical',
    'i-carbon-diagram',
    'i-carbon-word-cloud',
    'i-carbon-cursor-1',
    'i-carbon-target',
    // language icons (LanguageList.vue, data-driven) — colored brand logos
    'i-logos-rust',
    'i-logos-javascript',
    'i-logos-typescript-icon',
    'i-logos-c',
    'i-logos-vue',
    'i-logos-c-plusplus',
    'i-logos-python',
    'i-logos-css-3',
    'i-logos-html-5',
    'i-logos-c-sharp',
    'i-logos-go',
    'i-logos-lua',
    'i-logos-sass',
    'i-logos-docker-icon',
    'i-logos-bash-icon',
    'i-simple-icons-powershell',
    'i-simple-icons-autohotkey',
    // stats icons (StatsList.vue)
    'i-simple-icons-github',
    'i-carbon-star',
    'i-carbon-user-multiple',
  ],
})
