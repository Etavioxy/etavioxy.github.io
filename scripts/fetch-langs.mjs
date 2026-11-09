// 构建时抓取语言分布：GitHub Languages API 聚合（公开非 fork 仓库，按字节占比）
// 用法：node scripts/fetch-langs.mjs  → 生成 src/data/languages.json
import { execFileSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'

const gh = args => JSON.parse(execFileSync('gh', ['api', ...args], { encoding: 'utf-8' }))

const repos = gh(['users/Etavioxy/repos?per_page=100&visibility=public', '--jq', '[.[] | select(.fork==false)]'])

const totals = {}
for (const r of repos) {
  const langs = gh([`repos/Etavioxy/${r.name}/languages`, '--jq', '.'])
  for (const [lang, n] of Object.entries(langs))
    totals[lang] = (totals[lang] || 0) + n
}

const total = Object.values(totals).reduce((a, b) => a + b, 0)
const data = Object.entries(totals)
  .map(([name, bytes]) => ({ name, bytes, percent: Math.round(bytes / total * 1000) / 10 }))
  .sort((a, b) => b.bytes - a.bytes)

writeFileSync('src/data/languages.json', JSON.stringify(data, null, 2) + '\n')
console.log(`✓ ${data.length} 种语言 → src/data/languages.json（共 ${total.toLocaleString()} bytes）`)
