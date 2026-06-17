/**
 * 程缘琴 · Yuanqin Cheng 官方网站核心渲染引擎 (CodePen 专属 - 9大空间案例完美版)
 */

const SITE_DATA = {
    profile: {
        taglines: [
            "Cross-disciplinary Integrator",
            "Event Strategist",
            "Brand Growth Architect",
            "Government-Industry Connector",
            "Creative Systems Designer"
        ]
    },
    credentials: [
        {
            id: "maker-china",
            title: "第十届“创客中国”智能仿生机器人大赛",
            subtitle: "两江新区推介会 · 颁奖仪式现场总策划",
            tag: "国家级赛事 / 官方实录",
            metrics: "零失误高规格闭环交付 | 百万级立体曝光",
            desc: "精细化拆解顶层架构设计。高效统筹政企、产业方与参赛团队，实现“低预算撬动千倍溢出效应”的大赛总控标杆。",
            imgUrl: "https://i.ibb.co/VYgnfy1k/20260609115242-346-14.jpg",
            links: [
                { text: "新华财经官方报道", url: "https://bm.cnfic.com.cn/sharing/share/articleDetail/340653660713508864/1?date=1746607191000", icon: "fa-newspaper" },
                { text: "微信官方推介实录", url: "https://mp.weixin.qq.com/s/jypSAxkIBPQEcVcOaO5pBQ", icon: "fa-brands fa-weixin" }
            ]
        },
        {
            id: "robot-annual",
            title: "国家重点研发计划“智能机器人”重点专项年度会议",
            subtitle: "工信部产业发展促进中心 · 2024年度会议纪实",
            tag: "顶级产业智库 / 现场纪实",
            metrics: "极限成本重塑 | 高水准连办",
            desc: "颠覆行业传统百万级高昂报价，精细到分秒的流程总控。高效链接顶级专家学者，并为地方政府沉淀了长效智库台账。",
            imgUrl: "https://i.ibb.co/DfTY58rx/20260609115142-345-14.jpg",
            links: [
                { text: "高水平专家智库名录", url: "https://www.info-rae.cn/index.php/Academician/details_h?aid=1185", icon: "fa-graduation-cap" }
            ]
        }
    ],
    spaces: [
        { 
            title: "照母山天玺销售中心", 
            type: "顶级销售中心 / 空间美学", 
            desc: "极致精细的材质碰撞与光影渲染，解构未来人居的高端空间感官。", 
            imgUrl: "https://i.ibb.co/ynqz8rC1/2.png"
        },
        { 
            title: "重庆俊豪观棠府销售中心", 
            type: "艺术沙盘区 / 空间美学", 
            desc: "将建筑尺度与室内美学无缝融合，赋予空间自传播的内容破圈力。", 
            imgUrl: "https://i.ibb.co/5xsksgRV/6.png", 
            modalImgUrl: "https://i.ibb.co/5xsksgRV/6.png"
        },
        { 
            title: "大足 · 龙水湖酒店", 
            type: "高端奢华酒店 / 装置艺术", 
            desc: "依托空间艺术功底，赋予酒店大堂极致的情绪张力与视觉厚度。", 
            imgUrl: "https://s41.ax1x.com/2026/06/10/pmucfjs.jpg"
        },
        { 
            title: "石家庄 · 金科正定府", 
            type: "海派城市会客厅 / 空间美学", 
            desc: "兼顾人文气韵与商业营销动线，让设计方案实现1:1的高精度完美还原。", 
            imgUrl: "https://i.ibb.co/5X0dhRy9/WPS-1-333.png"
        },
        { 
            title: "北方新生活盛文锦州书城", 
            type: "文化商业空间 / 现象级地标", 
            desc: "解构并塑造极极具辨识度的现象级IP空间结构，引爆多维感官共鸣。", 
            imgUrl: "https://s41.ax1x.com/2026/06/10/pmusupd.png",
            modalImgUrl: "https://s41.ax1x.com/2026/06/10/pmusQXt.png"
        },
        { 
            title: "美学中心综合体", 
            type: "去售楼化生活美学中心", 
            desc: "打破传统地产边界，融入生活方式体验，达成空间价值的最大化溢出。", 
            imgUrl: "https://s41.ax1x.com/2026/06/10/pmucE7V.jpg"
        },
        { 
            title: "金科美邻汇商业", 
            type: "商业美陈 / 沉浸式情境空间", 
            desc: "精益预算控制下的美学奇迹，用创意设计穿透物理空间，引爆商业线下客流。", 
            imgUrl: "https://s41.ax1x.com/2026/06/10/pmus878.jpg",
            modalImgUrl: "https://s41.ax1x.com/2026/06/10/pmus1nP.jpg"
        },
        { 
            title: "金科邻里销售中心", 
            type: "社区型销售中心 / 空间美学", 
            desc: "打破空间沉闷感，用温暖而质朴的设计语汇，营造富有归属感的邻里美学生活场。", 
            imgUrl: "https://s41.ax1x.com/2026/06/10/pmugNV0.jpg"
        },
        { 
            title: "艺术装置成果辑", 
            type: "定制化先锋艺术 / 装置美陈", 
            desc: "精益雕琢结构与光影媒介，用极极具视觉冲击力的先锋艺术艺术装置穿透物理空间。", 
            imgUrl: "https://s41.ax1x.com/2026/06/10/pmuc4un.png"
        }
    ],
    miniProjects: [
        { 
            title: "机器人年会长廊视觉美陈总控", 
            tag: "空间美陈 × 秩序总控", 
            desc: "针对高规格峰会特定长廊进行空间美学叙事布局，在极短时效内达成高纯度政企形象传达。" 
        },
        { 
            title: "智能仿生机器人学术 Seminar 研讨", 
            tag: "中智院学术专场", 
            desc: "高效链接两江新区管委会与学术泰斗，解构政策台账，完成数场零偏差高精尖闭环内部研讨会流程总控。" 
        },
        { 
            title: "2025世界智能产业博览会机器人产业展区统筹负责人", 
            tag: "国家级展会 × 闭环运营", 
            desc: "负责企业招展、产业资源协调、现场运营及多方协同管理。面对复杂项目环境成功达成招展目标并攻坚多项突发问题，最终推动展区实现高质量落地、100%项目交付与零投诉运营。" 
        }
    ],
    metrics: [
        { val: "100+", label: "企业资源" },
        { val: "90+", label: "行业专家" },
        { val: "10+", label: "政府部门" },
        { val: "150万+", label: "累计节约成本" },
        { val: "155万+", label: "全媒体曝光" },
        { val: "100%", label: "项目交付率" },
        { val: "0", label: "重大投诉" },
        { val: "标准型", label: "工具包沉淀" }
    ]
};

// DOM 加载完毕初始化渲染
document.addEventListener("DOMContentLoaded", () => {
    initTypingEffect();
    renderCredentials();
    renderMiniModules();
    renderSpaces();
    renderMetrics();
    initRevealObserver();
});

// 打字机动态动效
function initTypingEffect() {
    const taglines = SITE_DATA.profile.taglines;
    let line = 0, char = 0, deleting = false;
    const tagEl = document.getElementById('dynamic-tagline');

    function type() {
        if (!tagEl) return;
        const fullText = taglines[line];
        tagEl.innerText = deleting ? fullText.substring(0, char - 1) : fullText.substring(0, char + 1);
        char = deleting ? char - 1 : char + 1;
        
        let speed = deleting ? 30 : 60;
        if (!deleting && char === fullText.length) { 
            speed = 2000; 
            deleting = true; 
        } else if (deleting && char === 0) { 
            deleting = false; 
            line = (line + 1) % taglines.length; 
            speed = 500; 
        }
        setTimeout(type, speed);
    }
    setTimeout(type, 500);
}

// 渲染核心成果卡片 (Credentials)
function renderCredentials() {
    const container = document.getElementById('credentials-container');
    if (!container) return;
    container.innerHTML = ''; 

    SITE_DATA.credentials.forEach((item) => {
        let linksHtml = '';
        if (item.links && item.links.length > 0) {
            linksHtml = `<div class="flex flex-col gap-2 pt-3 border-t border-white/5 mt-3">`;
            item.links.forEach(lnk => {
                linksHtml += `
                    <a href="${lnk.url}" target="_blank" class="inline-flex items-center gap-1.5 text-xs text-goldAccent hover:text-white transition-colors font-medium">
                        <i class="${lnk.icon.includes('fa-') ? lnk.icon : 'fa-solid ' + lnk.icon}"></i> ${lnk.text} &rarr;
                    </a>
                `;
            });
            linksHtml += `</div>`;
        }

        container.innerHTML += `
            <div class="premium-glass overflow-hidden group flex flex-col justify-between reveal-element active" style="background: rgba(18, 18, 35, 0.65);">
                <div class="aspect-[16/10] overflow-hidden relative bg-black/40">
                    <img src="${item.imgUrl}" alt="${item.title}" class="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-all duration-700">
                    <span class="absolute top-4 left-4 bg-black/80 text-[9px] text-goldAccent tracking-widest uppercase px-2 py-1 border border-goldAccent/20">${item.tag}</span>
                </div>
                <div class="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div class="space-y-3">
                        <h3 class="font-serif text-lg text-sandWarm tracking-wide leading-snug">${item.title}</h3>
                        <p class="text-[11px] text-gray-400 font-light">${item.subtitle}</p>
                        <div class="text-goldAccent text-[11px] tracking-wider bg-goldAccent/5 py-1 px-2.5 block border-l border-goldAccent/40">${item.metrics}</div>
                        <p class="text-gray-300 text-xs font-light leading-relaxed">${item.desc}</p>
                    </div>
                    <div>
                        ${linksHtml}
                        <div class="pt-3">
                            <button onclick="window.openModal('${item.id}')" class="text-[9px] tracking-widest uppercase text-gray-300 hover:text-goldAccent transition-colors flex items-center gap-1 bg-transparent border-none cursor-pointer p-0">
                                查看实录大图 <i class="fa-solid fa-expand text-[8px]"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

// 渲染轻量项目模块 (MiniProjects)
function renderMiniModules() {
    const container = document.getElementById('mini-projects-container');
    if (!container) return;
    container.innerHTML = '';
    SITE_DATA.miniProjects.forEach(p => {
        container.innerHTML += `
            <div class="p-5 bg-white/[0.02] border border-white/5 hover:border-goldAccent/20 transition-all duration-300 reveal-element active">
                <span class="text-[8px] tracking-widest text-goldAccent border border-goldAccent/20 px-1.5 py-0.5 inline-block mb-2 font-medium bg-goldAccent/5">${p.tag}</span>
                <h5 class="text-xs font-serif text-sandWarm tracking-wide font-medium">${p.title}</h5>
                <p class="text-[11px] text-gray-400 mt-2 leading-relaxed font-light">${p.desc}</p>
            </div>
        `;
    });
}

// 渲染 9 大空间美学案例 (Spaces)
function renderSpaces() {
    const container = document.getElementById('spaces-container');
    if (!container) return;
    container.innerHTML = '';
    SITE_DATA.spaces.forEach((g, idx) => {
        container.innerHTML += `
            <div onclick="window.openSpaceModal(${idx})" class="premium-glass overflow-hidden group min-h-[260px] flex flex-col justify-end p-6 relative cursor-pointer reveal-element active">
                <div class="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-85 transition-all duration-700 z-0" style="background-image: url('${g.imgUrl}');"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
                <div class="relative z-20 space-y-1">
                    <span class="text-[9px] uppercase tracking-widest text-goldAccent block font-sans">${g.type}</span>
                    <h4 class="font-serif text-base text-sandWarm tracking-wide group-hover:text-goldAccent transition-colors leading-snug">${g.title}</h4>
                </div>
            </div>
        `;
    });
}

// 渲染量化指标 (Metrics)
function renderMetrics() {
    const container = document.getElementById('metrics-container');
    if (!container) return;
    container.innerHTML = '';
    SITE_DATA.metrics.forEach(m => {
        container.innerHTML += `
            <div class="p-4 bg-white/[0.01] border border-white/5 reveal-element active">
                <div class="font-serif text-2xl text-goldAccent font-light tracking-tight">${m.val}</div>
                <div class="text-[9px] text-gray-400 uppercase tracking-wider font-sans mt-1">${m.label}</div>
            </div>
        `;
    });
}

// 弹窗底层数据组装方法与防御性过滤
function setupAndDisplayModal(tag, title, subtitle, metrics, detail, imgUrl) {
    const elements = {
        'modal-tag': tag,
        'modal-title': title,
        'modal-subtitle': subtitle,
        'modal-metrics': metrics,
        'modal-detail': detail
    };
    
    // 安全赋值文本
    Object.keys(elements).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerText = elements[id] || '';
    });

    // 安全赋值图片
    const imgEl = document.getElementById('modal-image');
    if (imgEl) imgEl.src = imgUrl || '';

    // 唤醒弹窗动效
    const modal = document.getElementById('premium-modal');
    if (modal) {
        modal.classList.remove('hidden');
        setTimeout(() => { modal.classList.add('opacity-100'); }, 40);
        document.body.classList.add('overflow-hidden');
    }
}

// ==========================================
// 挂载至全局 Window 对象，防止 CodePen 作用域隔离报错
// ==========================================

window.toggleMenu = function() { 
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('hidden'); 
};

window.openModal = function(id) {
    const data = SITE_DATA.credentials.find(c => c.id === id);
    if (!data) return;
    setupAndDisplayModal(data.tag, data.title, data.subtitle, data.metrics, data.desc, data.imgUrl);
};

window.openSpaceModal = function(index) {
    const data = SITE_DATA.spaces[index];
    if (!data) return;
    const targetImg = data.modalImgUrl ? data.modalImgUrl : data.imgUrl;
    setupAndDisplayModal("空间美学完工选辑 / SPACES", data.title, data.type, "1:1 实体空间成果证明", data.desc, targetImg);
};

window.closeModal = function() {
    const modal = document.getElementById('premium-modal');
    if (!modal) return;
    modal.classList.remove('opacity-100');
    setTimeout(() => { modal.classList.add('hidden'); }, 400);
    document.body.classList.remove('overflow-hidden');
};

function initRevealObserver() {
    document.querySelectorAll('.reveal-element').forEach(el => el.classList.add('active'));
}
