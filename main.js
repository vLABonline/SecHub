// 社群資料 - 按分類組織
const communitiesData = {
    government: [
        {
            name: 'ACW SOUTH 數位產業署沙崙資安服務基地',
            description: '數位發展部數位產業署所屬沙崙資安服務基地，提供資安產業發展所需的場域、設備與服務，促進資安產業聚落形成與發展。',
            logo: './images/acw-south.png',
            links: { homepage: '#' }
        }
    ],
    international: [
        {
            name: 'Cloud Security Alliance (CSA) Taiwan Chapter',
            description: 'CSA 台灣分會致力於推廣雲端安全最佳實踐，提供雲端安全研究、教育訓練與認證服務。',
            logo: './images/csa.png',
            links: { homepage: '#' }
        },
        {
            name: 'Open Web Application Security Project (OWASP) Taiwan Chapter',
            description: 'OWASP 台灣分會，致力於提升網路應用程式安全，推廣資安最佳實踐，定期舉辦技術研討會與工作坊。',
            logo: './images/owasp.png',
            links: { homepage: 'https://owasp.org' }
        },
        {
            name: 'The Honeynet Project Taiwan Chapter',
            description: 'Honeynet Project 台灣分會，專注於蜜罐技術研究與威脅情報分析，提升資安防護能力。',
            logo: './images/honeynet.png',
            links: { homepage: '#' }
        }
    ],
    education: [
        {
            name: 'Hack The Box',
            description: '全球知名線上資安學習平台，提供實戰演練環境、CTF 競賽與資安技能認證，培育資安專業人才。',
            logo: './images/hackthebox.png',
            links: { homepage: 'https://www.hackthebox.com' }
        }
    ],
    security: [
        { name: 'Agile HR', description: 'Agile HR 社群，推廣敏捷人資管理概念，結合科技與人力資源管理，提升組織效能。', logo: './images/agile-hr.png', links: { homepage: '#' } },
        { name: 'AWS User Group Taiwan', description: 'AWS 台灣使用者社群與 AWS 開發者社群，分享 AWS 雲端技術、最佳實踐與應用案例。', logo: './images/aws-ug.png', links: { homepage: '#' } },
        { name: 'DevSecOps Taiwan', description: 'DevSecOps 台灣社群，推廣開發、資安與維運整合的文化與實踐，提升軟體開發安全性。', logo: './images/devsecops.png', links: { homepage: '#' } },
        { name: 'Google Developer Groups Kaohsiung (GDG Kaohsiung)', description: 'GDG 高雄分會，專注於 Google 技術生態系統，定期舉辦技術講座、工作坊與開發者交流活動。', logo: './images/gdg-kaohsiung.png', links: { homepage: 'https://gdg.community.dev/gdg-kaohsiung/' } },
        { name: 'Taiwan Agile Tribe (TAT) 台灣敏捷部落', description: '台灣敏捷部落，推廣敏捷開發方法與實踐，促進敏捷社群交流與知識分享。', logo: './images/tat.png', links: { homepage: '#' } },
        { name: 'Taiwan Cyber Security Alliance (TWCSA) 台灣數位安全聯盟', description: '台灣數位安全聯盟，匯聚資安產業、學術與政府力量，推動資安產業發展與人才培育。', logo: './images/twcsa.png', links: { homepage: '#' } },
        { name: 'Open Culture Foundation (OCF) 財團法人開放文化基金會', description: '開放文化基金會，推廣開源文化、數位人權與公民科技，促進資訊自由與知識共享。', logo: './images/ocf.png', links: { homepage: 'https://ocf.tw' } },
        { name: 'vLAB Online 台灣路由網路實驗中心', description: 'vLAB Online，台灣路由網路實驗中心，專注於網路安全技術研究與實作，提供線上學習與實驗環境。', logo: './images/vlab.png', links: { homepage: 'https://vlab.online' } },
        { name: 'SmartEraNewLife 智慧時代新生活 AI & 資安玩家村', description: '智慧時代新生活社群，探討 AI 人工智慧與資訊安全的應用與發展，打造科技玩家交流平台。', logo: './images/smartera.png', links: { homepage: '#' } },
        { name: '網通人（專管網路通不通）', description: '網通人社群，專注於網路通訊技術與管理，分享網路架構、故障排除與最佳實踐經驗。', logo: './images/netman.png', links: { homepage: '#' } }
    ]
};

const linkLabels = {
    homepage: '官網',
    facebook: 'Facebook',
    telegram: 'Telegram',
    instagram: 'Instagram'
};

function renderCommunities(communities, gridId, startIndex = 0) {
    const grid = document.getElementById(gridId);
    grid.innerHTML = '';

    communities.forEach((community, index) => {
        const card = document.createElement('div');
        card.className = 'community-card fade-in-up';
        card.style.animationDelay = `${(startIndex + index) * 0.1}s`;

        let linksHtml = '';
        if (community.links) {
            for (const [type, url] of Object.entries(community.links)) {
                const linkText = linkLabels[type] || type;
                linksHtml += `<a href="${url}" class="community-link" target="_blank" rel="noopener noreferrer">🔗 ${linkText}</a>`;
            }
        }

        card.innerHTML = `
            <div class="community-logo">
                <img src="${community.logo}" alt="${community.name}" onerror="this.src='./images/placeholder.png'">
            </div>
            <h3 class="community-name">${community.name}</h3>
            <p class="community-description">${community.description}</p>
            <div class="community-links">
                ${linksHtml}
            </div>
        `;

        grid.appendChild(card);
    });
}

function loadCommunities() {
    renderCommunities(communitiesData.government, 'governmentGrid', 0);
    renderCommunities(communitiesData.international, 'internationalGrid', communitiesData.government.length);
    renderCommunities(communitiesData.education, 'educationGrid', communitiesData.government.length + communitiesData.international.length);
    renderCommunities(communitiesData.security, 'securityGrid', communitiesData.government.length + communitiesData.international.length + communitiesData.education.length);

    const totalCount = communitiesData.government.length + communitiesData.international.length + communitiesData.education.length + communitiesData.security.length;
    document.getElementById('communityCount').textContent = `${totalCount}+`;
}

// 頁面載入完成後初始化
document.addEventListener('DOMContentLoaded', loadCommunities);
