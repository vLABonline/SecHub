// 社群資料 - 按分類組織
const communitiesData = {
    government: [
        {
            name: 'ACW SOUTH 數位產業署沙崙資安服務基地',
            description: '數位發展部數位產業署所屬沙崙資安服務基地，提供資安產業發展所需的場域、設備與服務，促進資安產業聚落形成與發展。',
            logo: 'https://via.placeholder.com/300x180/2d4a54/ffffff?text=ACW+SOUTH',
            links: { homepage: '#' }
        }
    ],
    international: [
        {
            name: 'Cloud Security Alliance (CSA) Taiwan Chapter',
            description: 'CSA 台灣分會致力於推廣雲端安全最佳實踐，提供雲端安全研究、教育訓練與認證服務。',
            logo: 'https://via.placeholder.com/300x180/0066cc/ffffff?text=CSA+Taiwan',
            links: { homepage: '#' }
        },
        {
            name: 'Open Web Application Security Project (OWASP) Taiwan Chapter',
            description: 'OWASP 台灣分會，致力於提升網路應用程式安全，推廣資安最佳實踐，定期舉辦技術研討會與工作坊。',
            logo: 'https://via.placeholder.com/300x180/000000/ffffff?text=OWASP',
            links: { homepage: 'https://owasp.org' }
        },
        {
            name: 'The Honeynet Project Taiwan Chapter',
            description: 'Honeynet Project 台灣分會，專注於蜜罐技術研究與威脅情報分析，提升資安防護能力。',
            logo: 'https://via.placeholder.com/300x180/ff6600/ffffff?text=Honeynet',
            links: { homepage: '#' }
        }
    ],
    education: [
        {
            name: 'Hack The Box',
            description: '全球知名線上資安學習平台，提供實戰演練環境、CTF 競賽與資安技能認證，培育資安專業人才。',
            logo: 'https://via.placeholder.com/300x180/9fef00/000000?text=Hack+The+Box',
            links: { homepage: 'https://www.hackthebox.com' }
        }
    ],
    security: [
        // ...（以下略，依原本 HTML script 內容全數複製貼入）...
    ]
};

const linkLabels = {
  homepage: '官網',
  facebook: 'Facebook',
  telegram: 'Telegram',
  instagram: 'Instagram'
};

// 渲染社群卡片
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
                <img src="${community.logo}" alt="${community.name}" onerror="this.src='https://via.placeholder.com/300x180/cccccc/666666?text=${encodeURIComponent(community.name)}'">
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

// 載入所有社群資料
function loadCommunities() {
    renderCommunities(communitiesData.government, 'governmentGrid', 0);
    renderCommunities(communitiesData.international, 'internationalGrid', communitiesData.government.length);
    renderCommunities(communitiesData.education, 'educationGrid', communitiesData.government.length + communitiesData.international.length);
    renderCommunities(communitiesData.security, 'securityGrid', communitiesData.government.length + communitiesData.international.length + communitiesData.education.length);
    const totalCount = communitiesData.government.length + communitiesData.international.length + communitiesData.education.length + communitiesData.security.length;
    document.getElementById('communityCount').textContent = `${totalCount}+`;
}
document.addEventListener('DOMContentLoaded', loadCommunities);
