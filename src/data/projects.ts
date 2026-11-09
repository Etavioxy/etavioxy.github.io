export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  name: string
  link: string
  desc: string
  icon?: string
  links?: ProjectLink[]
}

/**
 * Site content — project gallery.
 * desc 直接引用各 GitHub 仓库 description 原文，不翻译不发明。
 * 分组（用户定序，英文 ≤15 字符）：Workflow / Agent / Libraries /
 * Graphics / Game / Developing Tools / UI Components / Utilities / Plugins / ACM。
 */
export const projects: Record<string, Project[]> = {
  Workflow: [
    {
      name: 'sap-skills',
      link: 'https://github.com/Etavioxy/sap-skills',
      desc: 'Start A Project Skills.',
      icon: 'i-carbon-flow',
    },
    {
      name: 'friction-skills',
      link: 'https://github.com/Etavioxy/friction-skills',
      desc: 'friction ≜ Δ(harness) — record, investigate, and fix friction',
      icon: 'i-carbon-chart-relationship',
    },
    {
      name: 'my-agents-md',
      link: 'https://github.com/Etavioxy/my-agents-md',
      desc: 'My personal AGENTS.md and skill conventions',
      icon: 'i-carbon-document',
    },
  ],
  Agent: [
    {
      name: 'ambery',
      link: 'https://github.com/ambery-ai/ambery',
      desc: 'An anticipatory pet agent for models, on your desktop.',
      icon: 'i-carbon-integration',
    },
  ],
  Libraries: [
    {
      name: 'fast_reader',
      link: 'https://github.com/Etavioxy/fast_reader',
      desc: 'A drop-in replacement for easy_reader — buffered bidirectional line navigation for huge files, matching CLI throughput',
      icon: 'i-carbon-data-base',
      links: [
        { label: 'crates.io', href: 'https://crates.io/crates/fast_reader' },
        { label: 'docs.rs', href: 'https://docs.rs/fast_reader' },
      ],
    },
    {
      name: 'proc-mw',
      link: 'https://github.com/Etavioxy/proc-mw',
      desc: 'Rust middleware: production Service semantics × runtime hot-reload, zero cost in Release',
      icon: 'i-carbon-code',
    },
  ],
  Graphics: [
    {
      name: 'structual-solver',
      link: 'https://github.com/Etavioxy/structual-solver',
      desc: 'The Finals-style structural destruction solver',
      icon: 'i-carbon-diagram',
    },
  ],
  Game: [
    {
      name: 'ave',
      link: 'https://github.com/Etavioxy/ave',
      desc: 'AIGC-in-games experiments on Bevy',
      icon: 'i-carbon-game-console',
    },
  ],
  'Developing Tools': [
    {
      name: 'terminal-demo-recording',
      link: 'https://github.com/Etavioxy/terminal-demo-recording',
      desc: 'AI-driven terminal demo recording — TCP transparent proxy → asciinema .cast',
      icon: 'i-carbon-terminal',
    },
    {
      name: 'codediff-universe-path',
      link: 'https://github.com/Etavioxy/codediff-universe-path',
      desc: 'Semantic diff scoping for AI agents — blast radius via universe-path',
      icon: 'i-carbon-file-diff',
    },
  ],
  'UI Components': [
    {
      name: 'word-cloud-ts',
      link: 'https://github.com/Etavioxy/word-cloud-ts',
      desc: 'Word cloud generator in TypeScript',
      icon: 'i-carbon-word-cloud',
    },
  ],
  Utilities: [
    {
      name: 'MiraiMouse',
      link: 'https://github.com/Etavioxy/MiraiMouse',
      desc: '用ahk脚本写的鼠标(小键盘)驱动',
      icon: 'i-carbon-cursor-1',
    },
    {
      name: 'obsidian-publisher',
      link: 'https://github.com/Etavioxy/obsidian-publisher',
      desc: 'Publish Obsidian vaults to the web',
      icon: 'i-carbon-cloud-upload',
    },
  ],
  Plugins: [
    {
      name: 'vscode-scroll-padding',
      link: 'https://github.com/Etavioxy/vscode-scroll-padding',
      desc: 'Scroll padding for VSCode, used by neovim plugin',
      icon: 'i-carbon-arrows-vertical',
    },
  ],
  ACM: [
    {
      name: 'DP-handouts',
      link: 'https://github.com/szuacm/DP-handouts',
      desc: 'DP handouts powered by reveal.js',
      icon: 'i-carbon-target',
      links: [
        { label: 'Slides', href: 'https://szuacm.github.io/DP-handouts' },
      ],
    },
  ],
}
