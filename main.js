// 本地佔位圖路徑
const fallbackLogo = './images/placeholder.png';

// 四大分類資料
const communitiesData = {
  government: [
    {
      name: 'ACW SOUTH 數位產業署沙崙資安服務基地',
      description: '數位發展部數位產業署所屬沙崙資安服務基地，提供資安產業發展所需的場域、設備與服務，促進資安產業聚落形成與發展。',
      logo: fallbackLogo,
      links: { homepage: '#' }
    }
  ],
  international: [
    {
      name: 'Cloud Security Alliance (CSA) Taiwan Chapter',
      description: 'CSA 台灣分會致力於推廣雲端安全最佳實踐，提供雲端安全研究、教育訓練與認證服務。',
      logo: fallbackLogo,
      links: { homepage: '#' }
    },
    {
      name: 'Open Web Application Security Project (OWASP) Taiwan Chapter',
      description: 'OWASP 台灣分會，致力於提升網路應用程式安全，推廣資安最佳實踐，定期舉辦技術研討會與工作坊。',
      logo: fallbackLogo,
      links: { homepage: 'https://owasp.org' }
    },
    {
      name: 'The Honeynet Project Taiwan Chapter',
      description: 'Honeynet Project 台灣分會，專注於蜜罐技術研究與威脅情報分析，提升資安防護能力。',
      logo: fallbackLogo,
      links: { homepage: '#' }
    }
  ],
  education: [
    {
      name: 'Hack The Box',
      description: '全球知名線上資安學習平台，提供實戰演練環境、CTF 競賽與資安技能認證，培育資安專業人才。',
      logo: fallbackLogo,
      links: { homepage: 'https://www.hackthebox.com' }
    }
  ],
  security: [
    { name: 'Agile HR', description: 'Agile HR 社群，推廣敏捷人資管理概念，結合科技與人力資源管理。', logo: fallbackLogo, links: { homepage: '#' } },
    { name: 'AWS User Group Taiwan', description: 'AWS 台灣使用者社群與 AWS 開發者社群，分享 AWS 雲端技術與最佳實踐。', logo: fallbackLogo, links: { homepage: '#' } },
    { name: 'DevSecOps Taiwan', description: '推廣 Dev+Sec+Ops 文化與實踐，提升軟體開發安全性。', logo: fallbackLogo, links: { homepage: '#' } },
    { name: 'GDG Kaohsiung', description: 'GDG 高雄分會，專注於 Google 技術生態系統。', logo: fallbackLogo, links: { homepage: 'https://gdg.community.dev/gdg-kaohsiung/' } },
    { name: 'TAT 台灣敏捷部落', description: '推廣敏捷開發方法與社群交流。', logo: fallbackLogo, links: { homepage: '#' } },
    { name: 'TWCSA 台灣數位安全聯盟', description: '匯聚產官學研力量，推動資安產業與人才培育。', logo: fallbackLogo, links: { homepage: '#' } },
    { name: 'OCF 開放文化基金會', description: '推廣開源文化、數位人權與公民科技。', logo: fallbackLogo, links: { homepage: 'https://ocf.tw' } },
    { name: 'vLAB Online 台灣路由網路實驗中心', description: '專注網路安全技術研究與實作，提供線上學習與實驗環境。', logo: fallbackLogo, links: { homepage: 'https://vlab.online' } },
    { name: 'SmartEraNewLife', description: '探討 AI 與資安應用，打造科技玩家交流平台。', logo: fallbackLogo, links: { homepage: '#' } },
    { name: '網通人（專管網路通不通）', description: '專注網路通訊技術、架構與維運實務。', logo: fallbackLogo, links: { homepage: '#' } }
  ]
};

const linkLabels = { homepage: '官網', facebook: 'Facebook', telegram: 'Telegram', instagram: 'Instagram' };

function renderCommunities(communities, gridId, startIndex = 0) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = '';
  communities.forEach((c, idx) => {
    const card = document.createElement('div');
    card.className = 'community-card';
    card.style.animation = 'fadeInUp .6s ease-out forwards';
    card.style.animationDelay = `${(startIndex + idx) * 0.1}s`;

    let linksHtml = '';
    if (c.links) {
      for (const [type, url] of Object.entries(c.links)) {
        const text = linkLabels[type] || type;
        linksHtml += `<a href="${url}" class="community-link" target="_blank" rel="noopener noreferrer">🔗 ${text}</a>`;
      }
    }

    card.innerHTML = `
      <div class="community-logo">
        <img src="${c.logo}" alt="${c.name}" onerror="this.src='${fallbackLogo}'" />
      </div>
      <h3 class="community-name">${c.name}</h3>
      <p class="community-description">${c.description}</p>
      <div class="community-links">${linksHtml}</div>
    `;
    grid.appendChild(card);
  });
}

function loadCommunities() {
  renderCommunities(communitiesData.government, 'governmentGrid', 0);
  renderCommunities(communitiesData.international, 'internationalGrid', communitiesData.government.length);
  renderCommunities(communitiesData.education, 'educationGrid', communitiesData.government.length + communitiesData.international.length);
  renderCommunities(communitiesData.security, 'securityGrid',
    communitiesData.government.length + communitiesData.international.length + communitiesData.education.length);
  const total = communitiesData.government.length + communitiesData.international.length + communitiesData.education.length + communitiesData.security.length;
  const el = document.getElementById('communityCount'); if (el) el.textContent = `${total}+`;
}

document.addEventListener('DOMContentLoaded', loadCommunities);
