// 移植自 antfu/antfu.me · scripts/slugify.ts（MIT, Copyright (c) Anthony Fu）
// markdown-it-anchor 默认的 slugify 会丢掉非 ASCII 字符，中文标题需要自己的实现。
import { remove } from 'diacritics'

// eslint-disable-next-line no-control-regex
const rControl = /[\u0000-\u001F]/g
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g

export function slugify(str: string): string {
  return (
    remove(str)
      // 控制字符
      .replace(rControl, '')
      // 特殊字符换成连字符
      .replace(rSpecial, '-')
      // 合并连续分隔符
      .replace(/-{2,}/g, '-')
      // 去掉首尾分隔符
      .replace(/^-+|-+$/g, '')
      // 不以数字开头（CSS id 选择器需要）
      .replace(/^(\d)/, '_$1')
      .toLowerCase()
  )
}
