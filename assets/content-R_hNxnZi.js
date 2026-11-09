import{A as e,C as t,R as n,S as r,T as i,V as a,_ as o,bt as s,et as c,j as l,k as u,ot as d,q as f,w as p,xt as m,y as h,yt as g,z as _}from"./useApi-CROJJdhE-B72jAbld.js";import{t as v}from"./_plugin-vue_export-helper-BDNMzG2s.js";import{t as y}from"./WrapperPost-DXqYwlQd.js";import{t as b}from"./projects-CtmpOPiX.js";var x=[{name:`Rust`,bytes:989852,percent:28.5},{name:`JavaScript`,bytes:951454,percent:27.3},{name:`TypeScript`,bytes:682712,percent:19.6},{name:`C`,bytes:326541,percent:9.4},{name:`Vue`,bytes:131924,percent:3.8},{name:`C++`,bytes:125608,percent:3.6},{name:`Python`,bytes:54815,percent:1.6},{name:`CSS`,bytes:42942,percent:1.2},{name:`HTML`,bytes:26136,percent:.8},{name:`AutoHotkey`,bytes:26087,percent:.7},{name:`C#`,bytes:20804,percent:.6},{name:`Go`,bytes:19454,percent:.6},{name:`Lua`,bytes:17766,percent:.5},{name:`GLSL`,bytes:17252,percent:.5},{name:`PowerShell`,bytes:10757,percent:.3},{name:`SCSS`,bytes:8335,percent:.2},{name:`Dockerfile`,bytes:4478,percent:.1},{name:`Shell`,bytes:3922,percent:.1},{name:`WGSL`,bytes:3612,percent:.1},{name:`Hurl`,bytes:3481,percent:.1},{name:`Makefile`,bytes:3310,percent:.1},{name:`HLSL`,bytes:2789,percent:.1},{name:`Assembly`,bytes:2557,percent:.1},{name:`CMake`,bytes:1493,percent:0},{name:`Batchfile`,bytes:788,percent:0}],S={class:`max-w-xl space-y-1.5 text-sm`},C={class:`w-24 shrink-0 text-left`},ee={class:`h-1.5 flex-1 overflow-hidden rounded-full bg-[#8882]`},w={class:`w-12 shrink-0 text-right opacity-60 tabular-nums`},T=v(l({__name:`LanguageList`,setup(e){let t={Rust:`i-logos-rust`,JavaScript:`i-logos-javascript`,JavaScript:`i-logos-javascript`,TypeScript:`i-logos-typescript-icon`,C:`i-logos-c`,Vue:`i-logos-vue`,"C++":`i-logos-c-plusplus`,Python:`i-logos-python`,CSS:`i-logos-css-3`,HTML:`i-logos-html-5`,"C#":`i-logos-c-sharp`,Go:`i-logos-go`,Lua:`i-logos-lua`,SCSS:`i-logos-sass`,Dockerfile:`i-logos-docker-icon`,Shell:`i-logos-bash-icon`,PowerShell:`i-simple-icons-powershell`,AutoHotkey:`i-simple-icons-autohotkey`,Other:`i-ri-more-2-fill`},n={Rust:`#CE422B`,JavaScript:`#F0DB4F`,TypeScript:`#3178C6`,C:`#A8B9CC`,Vue:`#42B883`,"C++":`#00599C`,Python:`#3776AB`,CSS:`#663399`,HTML:`#E34F26`,"C#":`#512BD4`,Go:`#00ADD8`,Lua:`#2C2D72`,PowerShell:`#5391FE`,SCSS:`#CC6699`,Dockerfile:`#2496ED`,Shell:`#4EAA25`},o=(()=>{let e=x.filter(e=>e.percent>=1.5),t=x.filter(e=>e.percent<1.5);return t.length&&e.push({name:`Other`,bytes:t.reduce((e,t)=>e+t.bytes,0),percent:Math.round(t.reduce((e,t)=>e+t.percent,0)*10)/10}),e})();return(e,c)=>(_(),i(`div`,S,[(_(!0),i(h,null,a(d(o),e=>(_(),i(`div`,{key:e.name,class:`flex items-center gap-3`},[t[e.name]?(_(),i(`span`,{key:0,class:g([`shrink-0`,t[e.name]]),style:s(t[e.name].startsWith(`i-simple`)?{color:n[e.name]}:void 0)},null,6)):p(``,!0),r(`span`,C,m(e.name),1),r(`div`,ee,[r(`div`,{class:`h-full rounded-full`,style:s({width:`${e.percent}%`,background:n[e.name]||`#888`})},null,4)]),r(`span`,w,m(e.percent)+`%`,1)]))),128))]))}}),[[`__scopeId`,`data-v-e3d27131`]]),E={class:`flex flex-wrap justify-start gap-x-2 gap-y-2`},D={class:`font-medium`},O={class:`opacity-60`},k={class:`font-medium`},A={class:`opacity-60`},j=v(l({__name:`StatsList`,props:{extra:{}},setup(e){let t=c(null);n(async()=>{try{let[e,n]=await Promise.all([fetch(`https://api.github.com/users/Etavioxy`).then(e=>e.json()),fetch(`https://api.github.com/users/Etavioxy/repos?per_page=100&visibility=public`).then(e=>e.json())]),r=n.filter(e=>!e.fork);t.value={repos:e.public_repos,stars:r.reduce((e,t)=>e+t.stargazers_count,0),followers:e.followers}}catch{}});let o=[{label:`公开仓库`,key:`repos`,icon:`i-simple-icons-github`},{label:`Stars`,key:`stars`,icon:`i-carbon-star`},{label:`关注者`,key:`followers`,icon:`i-carbon-user-multiple`}];return(n,s)=>(_(),i(`div`,E,[(_(),i(h,null,a(o,e=>r(`span`,{key:e.key,class:`pill inline-flex items-center gap-1.5`},[r(`span`,{class:g([`opacity-70`,e.icon])},null,2),r(`span`,D,m(t.value?.[e.key]??`–`),1),r(`span`,O,m(e.label),1)])),64)),(_(!0),i(h,null,a(e.extra,e=>(_(),i(`span`,{key:e.label,class:`pill inline-flex items-center gap-1.5`},[r(`span`,{class:g([`opacity-70`,e.icon])},null,2),r(`span`,k,m(e.value),1),r(`span`,A,m(e.label),1)]))),128))]))}}),[[`__scopeId`,`data-v-62c6290e`]]),M=`# LLM

- [《动手学深度学习》 — 动手学深度学习 2.0.0 documentation](https://zh.d2l.ai/index.html) · 在线书
  #LLM #DL 深度学习开源教材（中文版）
- [无需RL基础理解 PPO 和 GRPO - 知乎](https://zhuanlan.zhihu.com/p/27704969958) · 博客
  #RL #PPO PPO 与 GRPO 强化学习算法通俗解读
- [Recursive Language Models](https://arxiv.org/pdf/2512.24601) · 2025 · 论文
  #LLM #Context 递归式语言模型（quasi-infinite context）

# Agents

- [SWE-bench: Can Language Models Resolve Real-World GitHub Issues?](https://arxiv.org/abs/2310.06770) · 2023 · 论文
  #Agent #Benchmark 真实 GitHub Issue 的代码智能评测基准
- [AI Coding Agent Benchmarks & Leaderboard | Artificial Analysis](https://artificialanalysis.ai/agents/coding-agents) · 榜单
  #Agent #Benchmark AI Coding Agent 评测榜单
`,N=`# Unity

- [Unity游戏引擎发展史（The History of Unity）](https://blog.csdn.net/tealcwu/article/details/138864270) · 博客
  #Unity #History Unity 引擎演进历史
- [Unity 协程(Coroutine)原理与用法详解 - 心之凌儿](https://www.cnblogs.com/xinzhilinger/p/14718527.html) · 博客
  #Unity #Coroutine Unity 协程实现原理
- [Unity的内存管理与性能优化 - 知乎](https://zhuanlan.zhihu.com/p/362941227) · 博客
  #Unity #Memory Unity 内存管理与性能
- [Garbage collector overview - Unity 手册](https://docs.unity3d.com/cn/2023.2/Manual/performance-garbage-collector.html) · 文档
  #Unity #GC Unity GC 概览
- [How the URP unlocks games for you - 知乎](https://zhuanlan.zhihu.com/p/105941187) · 博客
  #Unity #URP URP 渲染管线解读
- [Unity-Technologies/EntityComponentSystemSamples](https://github.com/Unity-Technologies/EntityComponentSystemSamples) · 2018 · 开源
  #Unity #ECS DOTS ECS 官方示例
- [DOTS 实例化着色器 - Unity 手册](https://docs.unity3d.com/cn/2022.1/Manual/dots-instancing-shaders.html) · 文档
  #Unity #DOTS DOTS Instancing 着色器说明

# Unreal

- [UE5 -- 引擎运行流程（从main到BeginPlay） - 知乎](https://zhuanlan.zhihu.com/p/577433224) · 博客
  #Unreal #Startup UE5 启动到 BeginPlay 的完整流程
- [The Unreal Engine Game Framework: From int main() to BeginPlay](https://www.youtube.com/watch?v=IaU2Hue-ApI) · 视频
  #Unreal #Gameplay UE Game Framework 运行流程
- [UE -- UBT、UHT与反射基本理解 - 知乎](https://zhuanlan.zhihu.com/p/400473355) · 博客
  #Unreal #Build UBT/UHT 构建工具与反射机制
- [《InsideUE4》GamePlay架构（十一）Subsystems - 知乎](https://zhuanlan.zhihu.com/p/158717151) · 博客
  #Unreal #Architecture UE Subsystem 架构解读
- [[UnrealOpenDay2020]深入GAS架构设计 | EpicGames 大钊](https://www.bilibili.com/video/BV1zD4y1X77M/) · 2020 · 视频
  #Unreal #GAS UE Gameplay Ability System 架构

# Bevy

- [bevy/crates/bevy_pbr/src/pbr_material.rs](https://github.com/bevyengine/bevy/blob/5058f8a9/crates/bevy_pbr/src/pbr_material.rs#L35-L779) · 2020 · 开源
  #Bevy #PBR Bevy PBR 材质实现源码
- [bevy/crates/bevy_pbr/src/render/pbr_types.wgsl](https://github.com/bevyengine/bevy/blob/5058f8a9/crates/bevy_pbr/src/render/pbr_types.wgsl#L5-L31) · 2020 · 开源
  #Bevy #PBR Bevy PBR 渲染数据结构（WGSL）

# Engines

- [游戏引擎盘点：主流引擎市场份额及横向对比 - 网易游学](https://game.academy.163.com/course/careerArticle?course=420&isMaster=0) · 博客
  #Engine #Market 主流游戏引擎盘点与对比
- [我想谈谈自研游戏引擎的价值究竟在何处 - 知乎](https://zhuanlan.zhihu.com/p/488398948) · 博客
  #Engine #SelfMade 自研引擎价值讨论
- [全球最大游戏SaaS公司连亏19年教训 - 网易订阅](https://www.163.com/dy/article/IHRE8C6B0552NZ1I.html) · 博客
  #Engine #Business 引擎 SaaS 商业模式教训
- [BoomingTech/Piccolo](https://github.com/BoomingTech/Piccolo) · 2022 · 开源
  #Engine #GAMES104 GAMES104 迷你游戏引擎
- [Falling Everything engine by Nolla Games](https://nollagames.com/fallingeverything/) · 官网
  #Engine #Physics Noita 同源物理引擎
- [PieKing1215/FallingSandEngine](https://github.com/PieKing1215/FallingSandEngine) · 2021 · 开源
  #Engine #Rust Rust 重写的 falling sand 引擎
- [turanszkij/WickedEngine](https://github.com/turanszkij/WickedEngine) · 2015 · 开源
  #Engine #Rendering 现代图形 3D 引擎
- [GAMES104 游戏引擎课程](https://space.bilibili.com/512313464/channel/collectiondetail?sid=292637) · 视频
  #Engine #Course GAMES104 引擎课视频合集

# Animation

- [UE4 UE5 骨骼动画 高级运动系统 (ALSV4) - 知乎](https://zhuanlan.zhihu.com/p/518724305) · 博客
  #Animation #ALS UE 高级运动系统 ALSV4
- [UE5的动画蓝图（Lyra工程） - 知乎](https://zhuanlan.zhihu.com/p/517368184) · 博客
  #Animation #Blueprint UE5 Lyra 动画蓝图
- [Introducing Learned Motion Matching - Ubisoft](https://www.ubisoft.com/en-us/studio/laforge/news/6xXL85Q3bF2vEj76xmnmIu/introducing-learned-motion-matching) · 文档
  #Animation #MotionMatching 学习式运动匹配
- [如何让Unreal Engine的FAnimNode_RigidBody支持TriangleMesh碰撞体 - 知乎](https://zhuanlan.zhihu.com/p/640971909) · 博客
  #Animation #Physics RigidBody 动画节点碰撞体扩展
- [games105 计算机角色动画 - Bilibili](https://www.bilibili.com/video/BV1GG4y1p7fF/) · 视频
  #Animation #IK GAMES105 课程（含 IK 数学）
- [foocker/CharacterAnimation - GAMES105 学习笔记](https://github.com/foocker/CharacterAnimation) · 2023 · 开源
  #Animation #GAMES105 GAMES105 学习笔记
- [Fitting the World: A Biomechanical Approach to Foot IK - GDC Vault](https://www.gdcvault.com/play/1023316/Fitting-the-World-A-Biomechanical) · 视频
  #Animation #IK 刺客信条 Foot IK 实现
- [游戏开发的动画生态系统 - Epic Developer Community](https://dev.epicgames.com/community/learning/courses/zPp/unreal-engine-a241b2/l4p0/unreal-engine-1fa96e) · 文档
  #Animation #Ecosystem 游戏动画生态介绍
- [UE5 FullBodyIK学习 - 知乎](https://zhuanlan.zhihu.com/p/381469750) · 博客
  #Animation #IK UE5 FullBody IK 学习
- [Physics Animation in Uncharted 4: A Thief's End](https://www.youtube.com/watch?v=7S-_vuoKgR4) · 视频
  #Animation #Physics 神秘海域4 物理动画分享
- [运动扭曲与全身IK（英文直播） - Bilibili](https://www.bilibili.com/video/BV1Nv411N72B/) · 视频
  #Animation #IK 运动扭曲与全身 IK
- [Cascadeur - AI 辅助关键帧动画软件](https://cascadeur.com/) · 官网
  #Animation #DCC AI 辅助关键帧动画工具

# Terrain

- [Terrain Rendering in Frostbite - Andersson](https://media.contentapi.ea.com/content/dam/eacom/frostbite/files/chapter5-andersson-terrain-rendering-in-frostbite.pdf) · 2007 · 论文
  #Terrain #Frostbite 寒霜引擎地形渲染
- [Terrain in Battlefield 3 (GDC 2012)](https://media.contentapi.ea.com/content/dam/eacom/frostbite/files/gdc12-terrain-in-battlefield3.pdf) · 2012 · 论文
  #Terrain #Frostbite 战地3 地形渲染
- [盘点原神中的国家地貌风景 - Bilibili 专栏](https://www.bilibili.com/read/cv12829603/) · 博客
  #Terrain #OpenWorld 原神地貌风景盘点
- [kurtkuehnert/bevy_terrain](https://github.com/kurtkuehnert/bevy_terrain) · 2022 · 开源
  #Terrain #Bevy Bevy 地形渲染插件
- [Unreal Engine地形系统辨析(一) - 知乎](https://zhuanlan.zhihu.com/p/72454591) · 博客
  #Terrain #Unreal UE 地形系统解析
- [Unreal Engine地形系统辨析(二) - 知乎](https://zhuanlan.zhihu.com/p/72894855) · 博客
  #Terrain #Unreal UE 地形系统解析
- [Unreal Engine地形系统辨析(三) - 知乎](https://zhuanlan.zhihu.com/p/84531142) · 博客
  #Terrain #Unreal UE 地形系统解析
- [Unreal Engine的地形草管理系统的缺陷分析报告 - 知乎](https://zhuanlan.zhihu.com/p/149771853) · 博客
  #Terrain #Foliage UE 地形植被管理缺陷
- [在地形贴图混合时使用六边形平铺 | ZZNEWCLEAR13](https://zznewclear13.github.io/posts/use-hex-tiling-for-terrain-texture-blending/) · 博客
  #Terrain #Texturing 地形贴图六边形平铺混合
- [TerrainRenderingInFarCry5 - wolfand11](https://wolfand11.github.io/blogs/graphics/TerrainRenderingInFarCry5.html) · 博客
  #Terrain #FarCry5 孤岛惊魂5 地形渲染总结
- [ue4.26 virtual heightfield mesh初探 - 知乎](https://zhuanlan.zhihu.com/p/341366000) · 博客
  #Terrain #VHM UE Virtual Heightfield Mesh
- [Fast Hydraulic Erosion of Procedural Generated Terrain (CMU 15-618)](https://patiltanma.github.io/15618-FinalProject/) · 博客
  #Terrain #Erosion 程序化地形快速水力侵蚀
- [[UFSH2023]三角洲行动 端手一体地形渲染方案 - 徐云翰](https://www.bilibili.com/video/BV1MC4y1Y7ft/) · 2023 · 视频
  #Terrain #Unreal 三角洲行动地形渲染方案

# PCG

- [【GDC搬运】2018年 育碧在孤岛惊魂5中的程序化开放世界地图构建 - Bilibili](https://www.bilibili.com/video/BV1ZK4y1j7sj/) · 2018 · 视频
  #PCG #OpenWorld 孤岛惊魂5 程序化世界构建
- [PCG——程序化地形生成（1） - 落单的毛毛虫](https://www.cnblogs.com/mmc1206x/p/18014879) · 2024 · 博客
  #PCG #Houdini Houdini 程序化地形生成

# Culling

- [Chapter 19 Acceleration Algorithms 加速算法 - wolai](https://www.wolai.com/q4hLtwuXRJHtc8rytjmQQa#5TV58FDa2CkBMYgFMWq2YF) · 在线书
  #Culling #Acceleration 空间加速算法
- [游戏中的剔除技术（一）遮挡剔除 - 知乎](https://zhuanlan.zhihu.com/p/363277669) · 博客
  #Culling #Occlusion 游戏遮挡剔除技术
- [《刺客信条：大革命》同屏上万NPC是如何实现的 - Bilibili](https://www.bilibili.com/video/BV1cR4y1E7RN/) · 视频
  #Culling #NPC 刺客信条同屏 NPC 实现

# Network

- [No. You're not going to add multiplayer later. - r/gamedev](https://www.reddit.com/r/gamedev/comments/1n5yixm/no_youre_not_going_to_add_multiplayer_later/) · 博客
  #Network #Multiplayer 关于"以后再加多人"的劝告
- [UnrealEngine - 网络同步入门 - lawliet9](https://www.cnblogs.com/lawliet12/p/17306303.html) · 博客
  #Network #Unreal UE 网络同步入门
- [网络游戏研发，该选帧同步还是状态同步？ - CSDN](https://blog.csdn.net/zhangxiaofan666/article/details/113174663) · 博客
  #Network #Sync 帧同步 vs 状态同步对比

# Tricks

- [NoelFB/Celeste](https://github.com/NoelFB/Celeste) · 2018 · 开源
  #Gameplay #Indie 蔚蓝 Celeste 源码
- [Crafting A Tiny Open World: A Short Hike Postmortem](https://www.youtube.com/watch?v=ZW8gWgpptI8) · 视频
  #Gameplay #Indie A Short Hike 开发复盘
`,P=`# GI

- [基于 Probe 的实时全局光照方案（Probe-based Global Illumination） - KillerAery](https://www.cnblogs.com/KillerAery/p/16828304.html) · 2022 · 博客
  #GI #Probe Probe 类实时全局光照（DDGI / RTXGI / Screen Space Probe）方案梳理
- [RTX Global Illumination (RTXGI) | NVIDIA](https://developer.nvidia.com/rtx/ray-tracing/rtxgi) · 文档
  #GI #RTXGI NVIDIA 官方 RTXGI 全局光照方案与资料

# Shadows

- [实时光线追踪（1）Denoising: Spatio-Temporal Filtering - KillerAery](https://www.cnblogs.com/KillerAery/p/16634627.html) · 2022 · 博客
  #RT #Denoise 实时光线追踪降噪（时空滤波）原理
- [实时光线追踪（3）Software Ray Tracing - KillerAery](https://www.cnblogs.com/KillerAery/p/17491201.html) · 2023 · 博客
  #RT #Software 软件光追（Software Ray Tracing）方案
- [虚幻引擎中的虚拟阴影贴图 | UE 5.7 文档](https://dev.epicgames.com/documentation/zh-cn/unreal-engine/virtual-shadow-maps-in-unreal-engine) · 2025 · 文档
  #Shadow #VSM 虚幻虚拟阴影贴图官方文档
- [简单实现 UE5 中的 VirtualShadowMap 与性能对比](https://qiutang98.github.io/post/%E5%9B%BE%E5%BD%A2%E7%A1%AC%E4%BB%B6api/ue5%E7%9A%84virtualshadowmap%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86%E4%B8%8E%E6%80%A7%E8%83%BD%E5%AF%B9%E6%AF%94/) · 2022 · 博客
  #Shadow #VSM UE5 VirtualShadowMap 实现原理与性能对比

# Fluids

- [screenSpaceMeshes.pdf - Matthias Müller](https://matthias-research.github.io/pages/publications/screenSpaceMeshes.pdf) · 2007 · 论文
  #Fluid #SPH 屏幕空间流体表面重建（Screen Space Meshes）
- [Screen space fluid rendering with curvature flow - van der Laan](https://dl.acm.org/doi/10.1145/1507149.1507164) · 2009 · 论文
  #Fluid #SPH 屏幕空间流体渲染（curvature flow 方法）
- [Reconstructing surfaces of particle-based fluids using anisotropic kernels](https://dl.acm.org/doi/10.1145/2421636.2421641) · 2013 · 论文
  #Fluid #SPH 各向异性核的粒子流体表面重建
- [液体渲染：一种屏幕空间方法 - 知乎](https://zhuanlan.zhihu.com/p/38280537) · 博客
  #Fluid 屏幕空间液体渲染的中文解读
- [使用和视锥体对齐的 3D 纹理来渲染体积雾 - ZZNEWCLEAR13](https://zznewclear13.github.io/posts/create-volumetric-fog-using-view-aligned-3d-texture/) · 2022 · 博客
  #Fog #Volume 视锥对齐 3D 纹理的体积雾渲染

# NeRF/3DGS

- [GAMES Webinar 310：对话 3DGS（Talk+Panel）](https://www.bilibili.com/video/BV1n5411v7tZ/) · 2024 · 视频
  #3DGS 3DGS 三维表达之争的专家对话
- [3D Gaussian Splatting 简单入门 - CSDN](https://blog.csdn.net/su_zy_/article/details/134226262) · 2023 · 博客
  #3DGS 3D Gaussian Splatting 入门知识
- [threestudio: A unified framework for 3D content creation](https://github.com/threestudio-project/threestudio) · 2023 · 开源
  #3DGS #NeRF 3D 内容生成统一框架（含 3DGS / NeRF）

# GPU APIs

- [A Comparison of Modern Graphics APIs - alain.xyz](https://alain.xyz/blog/comparison-of-modern-graphics-apis) · 2021 · 博客
  #API #Vulkan 现代图形 API（Vulkan / D3D12 / Metal）对比
- [yuphin/Lumen: Vulkan Raytracing framework](https://github.com/yuphin/Lumen) · 2020 · 开源
  #API #RT Vulkan 光追框架（双向路径追踪）
- [SaschaWillems/Vulkan: Vulkan 示例](https://github.com/SaschaWillems/Vulkan) · 2015 · 开源
  #API #Vulkan 覆盖面广的 Vulkan 示例合集
- [Render graphs and Vulkan — a deep dive - Maister](https://themaister.net/blog/2017/08/15/render-graphs-and-vulkan-a-deep-dive/) · 2017 · 博客
  #API #RenderGraph Render Graph 架构深度解析
- [游戏引擎随笔 0x16：现代图形 API 的 UAV Counter - 知乎](https://zhuanlan.zhihu.com/p/330852688) · 博客
  #API #GPU 现代图形 API 的 UAV Counter 机制

# Physics

- [PositionBasedDynamics - InteractiveComputerGraphics](https://github.com/InteractiveComputerGraphics/PositionBasedDynamics) · 2015 · 开源
  #Physics #PBD 位置动力学（PBD）开源实现
- [Solid Simulation with Oriented Particles - Matthias Müller](https://matthias-research.github.io/pages/publications/orientedParticles.pdf) · 2007 · 论文
  #Physics #Particle 定向粒子固体模拟
- [Real Time Dynamic Fracture with Volumetric Approximate Convex Decompositions](https://matthias-research.github.io/pages/publications/fractureSG2013.pdf) · 2013 · 论文
  #Physics #Fracture 实时动态破坏（VACD 体积近似凸分解）
- [XPBD 论文解读 - 知乎](https://zhuanlan.zhihu.com/p/406652407) · 博客
  #Physics #XPBD XPBD（扩展位置动力学）论文解读
- [A Moving Least Squares Material Point Method - MLS-MPM](https://yuanming.taichi.graphics/publication/2018-mlsmpm/mls-mpm-cpic.pdf) · 2018 · 论文
  #Physics #MPM 移动最小二乘物质点法（MLS-MPM）
- [Determinism | Rapier](https://rapier.rs/docs/user_guides/rust/determinism/) · 文档
  #Physics #Determinism Rapier 物理引擎确定性说明

# PBRT

- [Physically Based Rendering: From Theory to Implementation - pbrt-v4](https://pbr-book.org/4ed/contents) · 在线书
  #PBRT #Rendering 基于物理的渲染在线书（pbrt-v4）
- [Understanding The Math Behind ReSTIR DI - 知乎](https://zhuanlan.zhihu.com/p/591979133) · 博客
  #ReSTIR #Sampling ReSTIR DI 背后的数学
- [Disney BSDF 深度解析 - 知乎](https://zhuanlan.zhihu.com/p/407007915) · 博客
  #BSDF #Material Disney BSDF 模型深度解析

# Geometry

- [四元数を用いた三次元回転計算の幾何学的意味 - Qiita](https://qiita.com/HMMNRST/items/0a4ab86ed053c770ff6a) · 2016 · 博客
  #Math 四元数旋转的几何意义
- [计算机图形学基础 - 信号处理 - 知乎](https://zhuanlan.zhihu.com/p/462412734) · 博客
  #Math #Sampling 图形学信号处理基础
- [zeux/meshoptimizer: Mesh optimization library](https://github.com/zeux/meshoptimizer) · 2016 · 开源
  #Geometry #Mesh 网格优化库（简化 / 顶点缓存）
- [CWF: Consolidating Weak Features in High Quality Mesh Simplification](https://ruixu.me/html/CWF/index.html) · 2023 · 论文
  #Geometry #Simplify 高质量网格简化（弱特征巩固）
`,F=`# Memory

- [mattconte/tlsf: Two-Level Segregated Fit memory allocator](https://github.com/mattconte/tlsf) · 2015 · 开源
  #Memory #Allocator TLSF 两级分离适配内存分配器
- [TLSF——一种简单高效的内存池实现 - 知乎](https://zhuanlan.zhihu.com/p/658922989) · 博客
  #Memory #Allocator TLSF 内存池实现原理
- [Native memory - Unity 手册](https://docs.unity3d.com/cn/2023.2/Manual/performance-native-allocators.html) · 文档
  #Memory #Unity Unity 原生内存分配器说明
- [并行计算的内存架构 - python-parallel-programming-cookbook](https://python-parallel-programmning-cookbook.readthedocs.io/zh-cn/latest/chapter1/02_The-parallel-computing-memory-architecture.html) · 在线书
  #Memory #Parallel 并行计算内存架构

# Threads

- [Codemaxi 的个人主页 - 掘金](https://juejin.cn/user/1047163961900152/posts) · 博客
  #Threads 多线程/并发文章合集
- [C++ 多线程：原子类型(std::atomic) - 掘金](https://juejin.cn/post/7086226046931959838) · 博客
  #Threads #Atomic C++ 原子类型详解
- [高速缓存与一致性专栏索引 - 知乎](https://zhuanlan.zhihu.com/p/136300660) · 博客
  #Cache #Coherence 高速缓存与一致性专栏
- [如何使用屏障指令 - 知乎](https://zhuanlan.zhihu.com/p/346352307) · 博客
  #Barrier CPU 屏障指令用法
- [内存屏障（Memory Barrier）究竟是个什么鬼？ - 知乎](https://zhuanlan.zhihu.com/p/125737864) · 博客
  #Barrier 内存屏障原理
- [弱 vs 强 内存模型 - 知乎](https://zhuanlan.zhihu.com/p/141696954) · 博客
  #MemoryModel 弱/强内存模型对比
- [Turning Our Single-Threaded Server into a Multithreaded Server - Rust Book](https://doc.rust-lang.org/book/ch20-02-multithreaded.html) · 文档
  #Threads #Rust Rust 多线程服务器实践
- [Rust Atomics and Locks — Chapter 3. Memory Ordering](https://marabos.nl/atomics/memory-ordering.html) · 在线书
  #Atomic #Rust Rust 原子操作与内存序
- [Vulkan multithreading 示例 - SaschaWillems/Vulkan](https://github.com/SaschaWillems/Vulkan/blob/master/examples/multithreading/multithreading.cpp) · 开源
  #Threads #Vulkan Vulkan 多线程示例
- [Vulkan threadpool - SaschaWillems/Vulkan](https://github.com/SaschaWillems/Vulkan/blob/master/base/threadpool.hpp) · 开源
  #Threads #Vulkan Vulkan 线程池实现
- [UE4/UE5的TaskGraph - 知乎](https://zhuanlan.zhihu.com/p/408012121) · 博客
  #Threads #Unreal UE 多线程任务系统
- [C++ 中的 Fiber：了解基础知识 - agraphicsguynotes](https://agraphicsguynotes.com/posts/fiber_in_cpp_understanding_the_basics/) · 博客
  #Threads #Fiber C++ Fiber 基础
- [图形引擎实战：Native RenderPass原理及URP应用 - CSDN](https://blog.csdn.net/qq_41166022/article/details/131479543) · 博客
  #Rendering #Perf 移动端切换 RenderTarget 的性能开销
- [[UOD2022]多线程渲染 | Epic 刘炜 - Bilibili](https://www.bilibili.com/video/BV1sP4y117Dg) · 视频
  #Threads #Rendering UE 多线程渲染
- [计算机核心思想系列【2】高性能&高复杂度程序的关键：并发 - Bilibili](https://www.bilibili.com/video/BV1foLGzdEmB/) · 视频
  #Threads #Concurrency 并发核心思想

# Hardware

- [GPU硬件架构、运行机制 | CALL1CE](https://call1ce.github.io/posts/GPU%E7%A1%AC%E4%BB%B6%E6%9E%B6%E6%9E%84-%E8%BF%90%E8%A1%8C%E6%9C%BA%E5%88%B6/) · 博客
  #GPU #Architecture GPU 硬件架构与运行机制
- [AoS and SoA - 维基百科](https://en.wikipedia.org/wiki/AoS_and_SoA) · 文档
  #DataLayout 数组结构体 vs 结构体数组
- [浅谈手机处理器SoC的制造工艺以及构成和工作原理 - Bilibili](https://www.bilibili.com/opus/587787444359990197) · 视频
  #SoC SoC 制造工艺与工作原理
- [英伟达GPU的warp和AMD的wavefront到底是什么，彻底弄懂SIMT和SIMD - 知乎](https://zhuanlan.zhihu.com/p/32454171154) · 博客
  #GPU #SIMT warp/wavefront 与 SIMT/SIMD
- [SIMD＜SIMT＜SMT: NVIDIA GPU的并行机制 - CSDN](https://blog.csdn.net/u013613650/article/details/120352612) · 博客
  #GPU #Parallel SIMD/SIMT/SMT 并行机制
`,I=`# Blogs

- [ZZNEWCLEAR13 久石奏](https://zznewclear13.github.io/) · 博客
  #Graphics 图形学博客（体积渲染/地形）
- [FlyAndNotDown Blog | 离开世界前，一切都是过程](https://www.flyandnotdown.com/) · 博客
  #Blog 个人博客
- [欢迎~♪ - Stalo's Note](https://km.stalomeow.com/) · 博客
  #Graphics 图形学笔记
- [YangWC's Blog](https://yangwc.com/) · 博客
  #Graphics 图形学博客
- [【关于我】 - KillerAery - 博客园](https://www.cnblogs.com/KillerAery/p/17508282.html) · 博客
  #Graphics KillerAery 图形学博客
- [ExplosionEngine/Explosion: 现代跨平台游戏引擎](https://github.com/ExplosionEngine/Explosion) · 2020 · 开源
  #Engine 跨平台游戏引擎（WIP）
- [Nikucyan/Notes_of_Graphics: GAMES103 笔记](https://github.com/Nikucyan/Notes_of_Graphics) · 2021 · 开源
  #Graphics GAMES103 物理模拟笔记
- [Nikucyan/ARG: Alternate Reality Games](https://github.com/Nikucyan/ARG) · 2021 · 开源
  #Game ARG 仓库
- [SlimeYummy](https://github.com/SlimeYummy) · 博客
  #Physics #Rust 确定性物理引擎（Rust）

# Misc

- [Pico撤退、Meta巨亏，VR产业还能苦撑多久？ - 新浪财经](https://finance.sina.com.cn/china/2023-11-18/doc-imzuzutp2396548.shtml) · 2023 · 博客
  #VR VR 产业现状
`,L=`# Compilers

- [AST explorer](https://astexplorer.net/) · 在线工具
  #AST #Parser 在线 AST 解析与浏览
- [Etavioxy/astexplorer](https://github.com/Etavioxy/astexplorer) · 2026 · 开源
  #AST #Tooling 自用 fork，添加 clang/roslyn 支持

# Rust

- [Rust makes you feel like a GENIUS](https://www.youtube.com/watch?v=0rJ94rbdteE) · 视频
  #Rust 快速认识 Rust 的独特设计
- [析构函数 - Rust 参考手册 中文版](https://rustwiki.org/zh-CN/reference/destructors.html#temporary-lifetime-extension) · 文档
  #Rust #Memory 析构与临时生命周期

# C++/C#

- [C++中的Overload、Override和Overwrite - VictoKu](https://www.cnblogs.com/kuliuheng/p/4107012.html) · 博客
  #C++ #OOP 重载/覆盖/隐藏的辨析
- [MoreEffectiveCpp_快学笔记 - 飞书云文档](https://qppw4bc6rk.feishu.cn/wiki/wikcnuaqT43nix9cnfzpxTvYjxe) · 文档
  #C++ More Effective C++ 快学笔记

# FFI

- [The Rustonomicon - FFI章节](https://doc.rust-lang.org/nomicon/ffi.html) · 文档
  #FFI #Rust Rust 与 C 互操作官方文档
- [基础FFI教程 - CSDN](https://blog.csdn.net/pumpkin84514/article/details/149079700) · 博客
  #FFI FFI 基础入门
- [dtolnay/cxx: C++/Rust 混合编程](https://github.com/dtolnay/cxx) · 2019 · 开源
  #FFI #Rust 安全的 C++/Rust 互操作

# Languages

- [JavaScript 黑历史 - 那些只有 1% 的人知道的特性 - 知乎](https://zhuanlan.zhihu.com/p/486975868) · 博客
  #JS JavaScript 冷门特性
- [Lua VS Javascript benchmarks](https://programming-language-benchmarks.vercel.app/lua-vs-javascript) · 在线工具
  #Lua #JS Lua 与 JS 性能对比
- [Lua5.4源代码剖析 - 知乎专栏](https://www.zhihu.com/column/c_1595011738562494465) · 博客
  #Lua Lua5.4 源码剖析专栏
- [Unity 之Burst 底层原理 - 知乎](https://zhuanlan.zhihu.com/p/623274986) · 博客
  #C# #Burst Unity Burst 编译原理
- [【Unity WebGL】让JS比C#还快 —— Puer-WebGL 性能优化实录 - 知乎](https://zhuanlan.zhihu.com/p/646932579) · 博客
  #JS #Unity Unity WebGL 性能优化
- [游戏编程模式](https://gpp.tkchu.me/) · 在线书
  #Patterns 游戏编程模式（中文在线书）
`,R=`---
title: _template
date: 2026-10-21
duration: 3min
repositories: https://github.com/Etavioxy/friction-skills
draft: true
---

[[toc]]

:::warning
This is a draft post, the content may be incomplete. Please check back later.
:::

## 约定

- 文件名即 URL：\`content/posts/<slug>.md\` → \`/posts/<slug>\`
- frontmatter 必填 \`title\`、\`date\`；\`date\` 决定列表排序，同年条目上方压一层淡描边年份
- \`duration\` 是手填的阅读时长，\`repositories\` 是文章对应的仓库（可写一个 URL 或 URL 数组），两者都渲染在标题下的日期行，列表页不显示
- \`draft: true\` 不进列表；\`lang: zh\` 在标题前加「中文」标记
- 下划线开头的文件只能通过路由直接打开，不出现在列表、没有任何链接指向它
- 正文里 \`[[toc]]\` 展开成左侧浮动目录，标题自动带锚点；可以直接写组件标签与内嵌 HTML
- \`:::warning\` 是提示块；\`$…$\` 与 \`$$…$$\` 渲染成公式；\` \`\`\`mermaid \` 代码块画成图

## 渲染基线

这一段往下是基线样例，用来比对排版：标题层级、列表、引用、代码块、表格、中英混排。

### 三级标题

正文段落，含 \`行内代码\`、**加粗**、*斜体*，以及一个[外链](https://github.com/Etavioxy)。

- 无序列表第一项
- 无序列表第二项，比较长的一行，看看换行后的行高和缩进是否正常，中文与 English 混排时字距会不会松。

1. 有序列表第一项
2. 有序列表第二项

> 引用块：看看左侧的边线与灰度。

\`\`\`ts
// 代码块：检查等宽字体、背景、横向滚动
export function noop(): void {
  // nothing
}
\`\`\`

| 层级 | 含义 |
|---|---|
| S | 从 0 独立交付 |
| A | 生产环境用过 |

---

分隔线之后的收尾段落。
`,te=`---
title: Agent Harness Friction 理论
date: 2026-08-17
duration: 4min
repositories: https://github.com/Etavioxy/friction-skills
lang: zh
---

> [English Version](/posts/harness-friction)

"Agent = Model + Harness"。模型负责推理，Harness 负责让它真正完成任务——文件系统、代码执行、规划。

这套 skills 的目的就是让 Harness 自动迭代。

## 定义

Friction 是任务循环中遇到的系统性卡点。

用一个极限公式来描述 Harness 的迭代：

$$\\text{Agent} = \\lim_{\\Delta(\\text{Harness}) \\to 0} \\left( \\text{Model} + \\text{Harness} - \\Delta(\\text{Harness}) \\right)$$

描述 Agent 在特殊领域的表现，理想的 Harness 是可以支撑完整任务链条的，不过因为 Harness 的不足，会产生 $\\Delta$。

**定义（摩擦来源）**：

$$\\text{Friction} \\triangleq \\Delta(\\text{Harness})$$

宏观上，我们定义 Friction，如果 Agent 在任务中因为 Harness 的错误和模糊性，导向了错误的结果，说明发生了 Friction。

对于一个已知的 goal + harness，同一个卡点会反复出现，直到它的根因被处理。因此，Friction 是系统的属性，是模型对于 goal 的失效模式，也是 Harness 改进的归因。

通常当任务复杂性增大时，Agent 需要同时处理更多的任务泛化，Friction 会变得不可忽视。

**一个推论公式**：（Friction = 实际累积成本与最优成本之差）

$$\\text{Friction} = \\sum_{i} \\left( c_{\\text{actual}}(a_i) - c_{\\text{optimal}}(a_i) \\right)$$

这和强化学习（RL）的 regret 概念比较类似。（在整个学习过程中，因为"不知道最优策略"而做出的次优决策，所累积的总损失）

因此对于一个确定性任务来说，零 friction（regret = 0），即 Agent 平滑运行在能力范围内的环境中，则 agent 必然 one-shot 完成交付。

当然，回到微观层面，Friction 具体可以包括：

- 项目依赖保证与实际体验不符（DbC）
- 工具链缺少阻止错误或恢复的机制（Fault Tolerance）
- 操作错误所暴露的系统性缺口（Seam）

Friction 会导致 Agent 浪费太多上下文在和自身任务不相关的尝试上，找不到正确解法，影响问题的进度和解决结果，由于注意力机制的问题，还会导致 Lost in the middle。

## 这些 Skills 做了什么？

使用 RLM (Recursive Language Model) 的思路对 Friction 进行启发式分析，固化成具体流程。

### \`friction-lifecycle\`: 生命周期

我会要求 Agent 将 Skills 当做知识库，做 Context RAG 管理。由于 Harness 包括 Context Engineering 和 Tool Contracts，可以用 tag 来说明这两项，标记为 \`skill-gap\` 和 \`upstream-issue\`。

每个 friction 都走一条有状态的调查路径，状态由 tag 记录：

\`\`\`mermaid
flowchart LR
    start["确认 friction"] --> u["undecided"]
    u --> sg["skill-gap"]
    sg --> sf["skill-fixed"]
    u --> ui["upstream-issued"]
    ui --> ucf["upstream-candidate-fixed"]
    ucf --> uf["upstream-fixed"]
    u --> r["resolved"]
    sg --> r
    uf --> r
\`\`\`

- **skill-gap**：可见 Skill 信息有缺口——在 \`skills/.skill-gaps\` 独立仓库创建 gap 文件并立即提交
- **upstream-issued**：friction 有上游归属——派 agent 调查、登记 issue、推进候选修复
- **resolved**：不存在未完成路径

### \`friction-problem-solver\`: RLM 递归

让 agent 调用 subagent，并告知他相关情况。天然分离了 Friction 和自身的上下文。

subagent 会协助 agent 对 Friction 定性，如果需要落 issue，则会对明确的 issue 进行 sandbox 尝试。相关的流程也一样固化为 skills。

见 \`issue-lifecycle\`（issue 生命周期） 和 \`issue-worktree-sandbox\`（用 worktree 进行 friction 解决尝试）。

在设计中，归纳了7个 skills 设计原则如下：（我整理了数学形式化抽象，暂时没有补充数学推导）

1. 心智负担小 → 状态空间 · 信息熵 · 认知复杂度
2. 渐进推进 → 有限状态搜索 · 状态门 · 启发式展开 · 剪枝
3. 执行稳定性 → 有限状态机 · 检查点 · 可恢复转换
4. 沙盒性 → 集合隔离 · 可写集不相交 · 边界不变量
5. 不过度约束 → 可行解空间 · 约束最小化 · 可满足性
6. 不越权 → 权限格 · 访问控制 · 权威状态不变量
7. 可信度 → 证据链图 · 来源层级 · 贝叶斯更新

## 设计 Harness 框架的自我收敛

关于 DbC 和 Seam 的思考（暂时没有 skill 流程）：

DbC：Design by Contract（契约式设计）
Seam：capability seam

### seam 是 friction 的归因点

seam 的组成是：Definition，Provider，Consumer。

friction 先于 seam 存在。

通过 seam 的能力模型可以引导 agent 理解 friction。每个 Tool 应该提供一个 model-facing schema，作为 seam 接口方便 agent 分析 friction。

subagent 可以定义在 Tool schema 中，作为 rlm.query(ctx) 而存在。一种多 agent 协作的方法。

## 参考

- [Effective Harnesses for Long Running Agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) Anthropic
- Recursive Language Model（[arxiv 2512.24601](https://arxiv.org/abs/2512.24601)）
- [Design by Contract](https://en.wikipedia.org/wiki/Design_by_contract) — Bertrand Meyer（《Object-Oriented Software Construction》，1997）
- Language model harnesses are compositional generalizers [blog](https://alexzhang13.github.io/blog/2026/harness/)
- DeepSeek Harness 官方教程 [Three-role capability design](https://deepseek-harness.github.io/deepseek-harness/develop/practice/)
`,z=`---
title: A Theory of Friction in Agent Harnesses
date: 2026-08-17
duration: 4min
repositories: https://github.com/Etavioxy/friction-skills
lang: en
---

> [中文 Chinese Version](/posts/harness-friction-zh)

This document explains what the friction skills do. For installation and usage, see [\`README.md\`](https://github.com/Etavioxy/friction-skills/blob/main/README.md). This repo also ships [\`drafts.md\`](https://github.com/Etavioxy/friction-skills/blob/main/skills/friction-lifecycle/drafts.md), which records the full design reasoning process.

"Agent = Model + Harness". The model is responsible for reasoning; the Harness is what actually gets the job done — file system, code execution, planning.

The purpose of these skills is to make the Harness iterate on itself.

## Definition

Friction is a systematic blocker encountered in the task loop.

A limit formula describes the iteration of the Harness:

$$\\text{Agent} = \\lim_{\\Delta(\\text{Harness}) \\to 0} \\left( \\text{Model} + \\text{Harness} - \\Delta(\\text{Harness}) \\right)$$

It describes how an Agent behaves in a specific domain: an ideal Harness can support the complete task chain, but because the Harness falls short, a $\\Delta$ appears.

**Definition (source of friction)**:

$$\\text{Friction} \\triangleq \\Delta(\\text{Harness})$$

At the macro level, we define Friction as follows: if an Agent is led to a wrong result by errors and ambiguities in the Harness, then Friction has occurred.

For a known goal + harness, the same blocker recurs until its root cause is handled. Therefore, Friction is a property of the system, a failure mode of the model with respect to the goal, and the attribution target for Harness improvement.

Usually, as task complexity grows, the Agent must handle more task generalization at once, and Friction becomes non-negligible.

**A corollary formula**: (Friction = the difference between the actual cumulative cost and the optimal cost)

$$\\text{Friction} = \\sum_{i} \\left( c_{\\text{actual}}(a_i) - c_{\\text{optimal}}(a_i) \\right)$$

This is quite similar to the regret concept in reinforcement learning (RL): the total loss accumulated over the learning process from suboptimal decisions made because the optimal policy is unknown.

Therefore, for a deterministic task, zero friction (regret = 0) — the Agent runs smoothly within an environment inside its capability range — implies the agent necessarily delivers in one shot.

Of course, at the micro level, Friction concretely includes:

- project dependency guarantees not matching the actual experience (DbC)
- toolchains lacking mechanisms that prevent errors or recover from them (Fault Tolerance)
- systematic gaps exposed by operational errors (Seam)

Friction makes the Agent waste too much context on attempts unrelated to its own task, so it fails to find the correct solution, hurting progress and outcomes; due to attention-mechanism issues, it can also cause Lost in the middle.

## What do these skills do?

Use the RLM (Recursive Language Model) idea to heuristically analyze Friction and solidify it into concrete procedures.

### \`friction-lifecycle\`: the lifecycle

I ask the Agent to treat the Skills as a knowledge base and do Context RAG management. Since the Harness includes Context Engineering and Tool Contracts, two tags describe these two aspects, marked as \`skill-gap\` and \`upstream-issue\`.

Every friction follows a stateful investigation path, and the state is recorded by tags:

\`\`\`mermaid
flowchart LR
    start["confirm friction"] --> u["undecided"]
    u --> sg["skill-gap"]
    sg --> sf["skill-fixed"]
    u --> ui["upstream-issued"]
    ui --> ucf["upstream-candidate-fixed"]
    ucf --> uf["upstream-fixed"]
    u --> r["resolved"]
    sg --> r
    uf --> r
\`\`\`

- **skill-gap**: the visible Skill information has a gap — create a gap file in the separate \`skills/.skill-gaps\` repo and commit it immediately
- **upstream-issued**: the friction has an upstream owner — dispatch an agent to investigate, register an issue, and push a candidate fix
- **resolved**: no unfinished path remains

### \`friction-problem-solver\`: RLM recursion

The agent calls a subagent and briefs it on the situation. This naturally separates Friction from its own context.

The subagent helps the agent characterize the Friction; if an issue needs to be filed, it attempts the fix in a sandbox for the identified issue. Those procedures are likewise solidified into skills.

See \`issue-lifecycle\` (issue lifecycle) and \`issue-worktree-sandbox\` (using a worktree to attempt friction fixes).

In the design, seven skill-design principles are summarized as follows (I have organized the mathematical formalization; I have not yet added mathematical derivations):

1. low mental burden → state space · information entropy · cognitive complexity
2. incremental progress → finite state search · state gates · heuristic expansion · pruning
3. execution stability → finite state machine · checkpoints · recoverable transitions
4. sandboxing → set isolation · disjoint writable sets · boundary invariants
5. not over-constrained → feasible solution space · constraint minimization · satisfiability
6. no overreach → permission lattice · access control · authority-state invariants
7. credibility → evidence-chain graph · source hierarchy · Bayesian updates

## Self-convergence of the Harness framework design

Thoughts on DbC and Seam (no skill procedures yet):

DbC: Design by Contract
Seam: capability seam

### seam is the attribution point of friction

A seam is composed of: Definition, Provider, Consumer.

Friction exists before the seam does.

The capability model of a seam can guide the agent to understand friction. Every Tool should provide a model-facing schema as the seam interface, so the agent can analyze friction.

A subagent can be defined inside a Tool schema, existing as \`rlm.query(ctx)\`. One way of multi-agent collaboration.

## References

- [Effective Harnesses for Long Running Agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) Anthropic
- Recursive Language Model ([arxiv 2512.24601](https://arxiv.org/abs/2512.24601))
- [Design by Contract](https://en.wikipedia.org/wiki/Design_by_contract) — Bertrand Meyer (*Object-Oriented Software Construction*, 1997)
- Language model harnesses are compositional generalizers [blog](https://alexzhang13.github.io/blog/2026/harness/)
- DeepSeek Harness official tutorial [Three-role capability design](https://deepseek-harness.github.io/deepseek-harness/develop/practice/)
`,B=`---
title: Blog
description: Etavioxy 的长文：vision 与工程复盘
---

<ListPosts type="blog" />
`,V=`---
title: SAP Skills 分层设计与 Docs Driven
date: 2026-08-17
duration: 3min
repositories: https://github.com/Etavioxy/sap-skills
lang: zh
---

> [English Version](/posts/sap-skills)

[No Silver Bullet](https://en.wikipedia.org/wiki/No_Silver_Bullet)（Fred Brooks，1986）指出，软件开发的复杂性分为两类：

- **essential complexity**（本质复杂度，问题本身固有的）
- **accidental complexity**（偶然复杂度，实现方式带来的）

Agent 已经帮我们解决了大部分偶然复杂度问题，但是本质复杂度并不会随着智能的提升而彻底被解决。

面对这个问题，我设计 SAP 来将软件本质的复杂性按层级归纳。

## 阶段设计

\`\`\`mermaid
flowchart LR
    ideas --DDD--> concepts --> spec
    spec --> docs
    spec --fail-fast--> experiments
    docs --docs-driven--> structure --> src
    structure --> elegant["elegant code"]

    spec --> tech["tech-stack"]
    spec --真数据流--> insight["concrete-insight"]
    experiments --- brain["brainstorming"]
    experiments --- story["story"]
    experiments --- cases["cases"]
    experiments --- validation["validation"]
    src --- run["first runthrough"]
    src --- reinforce["reinforce"]
    reinforce --强化测试--> tf["test framework"]
    reinforce --沙盒重构--> sb["sandboxing"]

    structure -.- experiments
    src -.- plan["plan & acceptance"]
\`\`\`

**领域模型** 和AI对齐领域模型描述。在concept中使用**例子x概念矩阵**，来确保领域模型和真实故事的互相验证。

概念过程结束后，确认技术栈和目录结构，完成一个最薄的 spec，此时才定下基调。

**fail-fast**（尽早暴露错误）——让失败在发生时立即显现，而不是被掩盖/延迟，体现在两点：

1. **具体化**：直接看到数据链路，是更有效的，所以在 spec1 之后，需要让 agent 生成一个 concrete-insight.md，展示真实数据流。
2. **实验**：对于困难的部分用实验提前进行编码实战检验。发挥 agent 的 one-shot 能力，设立严格的自动化测试，或者快速原型。 这里也可参考 mattpocock 的 /prototype skill

关于实验的说明：
- 实验应该最好是能让 agent 自己评估的，在实验之前应该有一个预期。
- 对于太过样板的内容（比如稳定框架上的试验，或者github有现成参考），不需要实验。

实验设置在正式 src（完整编码）之前。实验可以分摊 blast radius 和未知性，当agent做出实验，不需要管理他实验过程的提交有多少 dirty 尝试，在整合时只需要汲取它最后的结果即可。

spec 第二阶段：用 docs-driven 的形式做开发项目的准备。

Why not spec-driven？

一个spec文件无法承载过多决定，spec的职责抽象为：技术栈，文件夹层级（包括代码位置的边界划分），技术选型决策。

## Skills

结合 mattpocock skills，可以保证开发各阶段的质量。 常用的有：

- 对齐 → /grill-me
- 交接 → /to-handoff, /to-ticket
- 反馈 → /tdd, /code-review

另外，为了固化流程，我增加了一些辅助 skill：

- goals-gate-approver：生成 user-goals.md 记录，每行一条约束，约束控制 agent 给出更好计划
- plan-analysis-matrix：先和 agent 对齐痛点，然后生成特性各异方案对比，选型时用
- report-from-websearch：编写报告的格式规范，用引用和格式来限制 agent 产出优秀搜索报告，通常用 subagent 配合此 skill
- structure-design：集合多种官方脚手架和推荐目录结构，使用排除避免 agent 生成平铺等低级结构的倾向

找到一个好方案需要 trade-off，当前已有的求解域，就类似一个**高维凸包**，约束和方案对比 skill 比较像线性规划求解器。

## 参考

- DDD：[Domain-Driven Design: Tackling Complexity in the Heart of Software](https://www.amazon.co.uk/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215)（Eric Evans，2003）
- docs-driven：[Docs-Driven Development Is Half-Right](https://docsio.co/blog/docs-driven-development)
- blast radius：[Just Talk to It](https://steipete.me/posts/just-talk-to-it/) steipete（OpenClaw 作者）
`,H=`---
title: SAP Skills Layered Design and Docs-Driven Development
date: 2026-08-17
duration: 3min
repositories: https://github.com/Etavioxy/sap-skills
lang: en
---

> [中文 Chinese Version](/posts/sap-skills-zh)

This document explains why sap-skills exists. For usage and installation, see [\`README.md\`](https://github.com/Etavioxy/sap-skills/blob/main/README.md).

[No Silver Bullet](https://en.wikipedia.org/wiki/No_Silver_Bullet) (Fred Brooks, 1986) points out that software complexity comes in two kinds:

- **essential complexity** (inherent to the problem itself)
- **accidental complexity** (introduced by the way we implement it)

Agents have already solved most of the accidental complexity for us — but essential complexity will not disappear as models get smarter.

So I designed SAP to organize the essential complexity of software by layers.

## Stage design

\`\`\`mermaid
flowchart LR
    ideas --DDD--> concepts --> spec
    spec --> docs
    spec --fail-fast--> experiments
    docs --docs-driven--> structure --> src
    structure --> elegant["elegant code"]

    spec --> tech["tech-stack"]
    spec --real data flow--> insight["concrete-insight"]
    experiments --- brain["brainstorming"]
    experiments --- story["story"]
    experiments --- cases["cases"]
    experiments --- validation["validation"]
    src --- run["first runthrough"]
    src --- reinforce["reinforce"]
    reinforce --hardened testing--> tf["test framework"]
    reinforce --sandboxed refactoring--> sb["sandboxing"]

    structure -.- experiments
    src -.- plan["plan & acceptance"]
\`\`\`

Align the **domain model** and its description with the AI. In concepts, use an **examples × concepts matrix** so the domain model and real stories validate each other.

After the concept phase, confirm the tech stack and directory structure, and write a minimal spec — that is when the tone is set.

**fail-fast** (surface errors early) — make failures visible the moment they happen, instead of masked or delayed. It shows up in two places:

1. **Concretization**: seeing the actual data path directly is more effective, so right after spec1, have the agent generate a \`concrete-insight.md\` that shows the real data flow.
2. **Experiments**: for the hard parts, use experiments to prove them out in code ahead of time. Leverage the agent's one-shot ability: set up strict automated tests, or build a quick prototype. The \`/prototype\` skill from mattpocock is a good reference here.

On experiments:

- An experiment should ideally be something the agent can evaluate by itself — there should be an expectation set before the experiment.
- Overly boilerplate content (e.g. experiments on a stable framework, or things with existing references on GitHub) does not need an experiment.

Experiments sit before the real src (full coding). They absorb blast radius and uncertainty: when the agent runs experiments, you don't need to manage how many dirty commits the process produced — when integrating, just take the final result.

Phase two of spec: prepare development with a **docs-driven** approach.

Why not spec-driven?

A single spec file cannot carry that many decisions. The spec's responsibility is abstracted to: tech stack, folder hierarchy (including boundary separation of where code lives), and technology selection decisions.

## Skills

Combined with mattpocock skills, quality at each stage of development is ensured. The common ones:

- Alignment → /grill-me
- Handoff → /to-handoff, /to-ticket
- Feedback → /tdd, /code-review

To solidify the process, I also added some helper skills:

- goals-gate-approver: generates a \`user-goals.md\` record, one constraint per line; constraints steer the agent toward better plans
- plan-analysis-matrix: align on pain points with the agent first, then generate a comparison of plans with different characteristics, for the selection stage
- report-from-websearch: format spec for writing reports — citations and format constrain the agent to produce quality search reports, usually used with a subagent
- structure-design: collects official scaffolds and recommended directory structures; uses exclusions to steer the agent away from low-grade structures like flat layouts

Finding a good plan takes trade-offs. The current solution space is like a **high-dimensional convex hull**; the constraints and plan-comparison skills behave like a linear-programming solver.

## References

- DDD: [Domain-Driven Design: Tackling Complexity in the Heart of Software](https://www.amazon.co.uk/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215) (Eric Evans, 2003)
- docs-driven: [Docs-Driven Development Is Half-Right](https://docsio.co/blog/docs-driven-development)
- blast radius: [Just Talk to It](https://steipete.me/posts/just-talk-to-it/) by steipete (author of OpenClaw)
`,U=Object.assign({"../../content/bookmarks/agent.md":M,"../../content/bookmarks/games.md":N,"../../content/bookmarks/graphics.md":P,"../../content/bookmarks/os.md":F,"../../content/bookmarks/other.md":I,"../../content/bookmarks/programming.md":L}),W=Object.assign({"../../content/posts/_template.md":R,"../../content/posts/harness-friction-zh.md":te,"../../content/posts/harness-friction.md":z,"../../content/posts/index.md":B,"../../content/posts/sap-skills-zh.md":V,"../../content/posts/sap-skills.md":H}),G=0;for(let e of Object.values(U))for(let t of e.split(`
`))/^-\s+\[[^\]]+\]\(/.test(t)&&G++;var K=0;for(let[e,t]of Object.entries(W)){let n=e.split(`/`).pop();if(n===`index.md`||n.startsWith(`_`))continue;let r=t.split(`---`)[1]||``;/^draft:\s*true$/m.test(r)||K++}var q={bookmarks:G,posts:K,projects:Object.values(b).flat().length},J={class:`prose m-auto`},Y=[`href`],X={class:`leading-loose`},Z=[`href`],Q={class:`mt-8`},ne={class:`mt-10`},$=`Etavioxy@foxmail.com`,re=v(l({__name:`Home`,setup(t){let n=[{label:`项目`,value:q.projects,icon:`i-carbon-cube`},{label:`书签`,value:q.bookmarks,icon:`i-carbon-bookmark`},{label:`文章`,value:q.posts,icon:`i-carbon-document`}].filter(e=>e.value!==0),o=[{name:`ambery`,link:`https://github.com/ambery-ai/ambery`,image:`https://raw.githubusercontent.com/ambery-ai/ambery/master/app/src-tauri/icons/128x128.png`},{name:`friction-skills`,link:`https://github.com/Etavioxy/friction-skills`,icon:`i-carbon-chart-relationship`},{name:`structual-solver`,link:`https://github.com/Etavioxy/structual-solver`,icon:`i-carbon-diagram`},{name:`fast_reader`,link:`https://github.com/Etavioxy/fast_reader`,icon:`i-carbon-data-base`},{name:`proc-mw`,link:`https://github.com/Etavioxy/proc-mw`,icon:`i-carbon-code`}];return(t,c)=>(_(),i(`div`,J,[c[3]||=r(`p`,null,` Hi, I'm Etavioxy 👋 Building the good games and real-time engines, tinkering with playground projects. Mostly Rust and TypeScript. `,-1),r(`p`,null,[c[0]||=u(` Reach me at `,-1),r(`a`,{class:`font-mono text-sm opacity-70 hover:opacity-100`,href:`mailto:${$}`},m($),8,Y)]),r(`p`,X,[c[1]||=u(` Works: `,-1),(_(),i(h,null,a(o,e=>r(`a`,{key:e.name,class:`magic-link`,href:e.link,target:`_blank`,rel:`noopener`},[e.image?(_(),i(`span`,{key:0,class:`magic-link-image`,style:s({backgroundImage:`url(${e.image})`})},null,4)):e.icon?(_(),i(`span`,{key:1,class:g([`magic-link-image`,e.icon])},null,2)):p(``,!0),u(` `+m(e.name),1)],8,Z)),64))]),r(`div`,Q,[e(j,{extra:d(n)},null,8,[`extra`])]),c[4]||=r(`div`,{class:`mt-10`},[r(`h2`,{class:`text-sm opacity-40 mb-3`},`GitHub Activity`),r(`img`,{src:`https://gitlyy.vercel.app/api/contribution?username=Etavioxy&hide_border=true`,alt:`GitHub contribution graph`,loading:`lazy`})],-1),r(`div`,ne,[c[2]||=r(`h2`,{class:`text-sm opacity-40 mb-3`},`语言分布`,-1),e(T)])]))}}),[[`__scopeId`,`data-v-de3ab237`]]),ie={class:`prose m-auto slide-enter-content`},ae={__name:`index`,setup(n){let i={title:`Etavioxy`,description:`Etavioxy — projects, tools and experiments built with AI agents`,meta:[{property:`og:title`,content:`Etavioxy`},{name:`twitter:title`,content:`Etavioxy`},{name:`description`,content:`Etavioxy — projects, tools and experiments built with AI agents`},{property:`og:description`,content:`Etavioxy — projects, tools and experiments built with AI agents`},{name:`twitter:description`,content:`Etavioxy — projects, tools and experiments built with AI agents`}]};return o({title:`Etavioxy`,meta:[{property:`og:title`,content:`Etavioxy`},{name:`twitter:title`,content:`Etavioxy`},{name:`description`,content:`Etavioxy — projects, tools and experiments built with AI agents`},{property:`og:description`,content:`Etavioxy — projects, tools and experiments built with AI agents`},{name:`twitter:description`,content:`Etavioxy — projects, tools and experiments built with AI agents`}]}),(n,a)=>{let o=re,s=y;return _(),t(s,{frontmatter:i},{default:f(()=>[r(`div`,ie,[e(o)])]),_:1})}}};export{ae as default};