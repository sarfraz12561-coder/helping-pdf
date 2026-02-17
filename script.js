// script.js – Enhanced with per-tool SEO and detail view

document.addEventListener('DOMContentLoaded', function() {
    // Set site-wide meta from config
    updateMeta(CONFIG.site.metaTitle, CONFIG.site.metaDescription);

    // Render core instructions
    renderInstructions();

    // Render tool grid
    renderToolGrid();

    // Handle back button
    document.getElementById('back-to-tools').addEventListener('click', function(e) {
        e.preventDefault();
        showToolsSection();
    });

    // Logo click also returns to tools
    document.getElementById('logo-link').addEventListener('click', function(e) {
        e.preventDefault();
        showToolsSection();
    });

    // Navigation "Tools" link
    document.getElementById('nav-tools').addEventListener('click', function(e) {
        e.preventDefault();
        showToolsSection();
    });
});

function renderInstructions() {
    const container = document.getElementById('core-instructions');
    if (!container) return;
    container.innerHTML = CONFIG.instructions.map(inst => `
        <div class="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white/20">
            <div class="text-4xl mb-3">${inst.icon}</div>
            <h3 class="font-bold text-lg mb-1">${inst.text}</h3>
            <p class="text-sm text-gray-500">${inst.description}</p>
        </div>
    `).join('');
}

function renderToolGrid() {
    const grid = document.getElementById('tools-grid');
    if (!grid) return;
    const activeTools = CONFIG.tools.filter(t => t.active);
    grid.innerHTML = activeTools.map(tool => {
        let gradientClass = 'from-blue-50 to-indigo-100';
        if (tool.color === 'green') gradientClass = 'from-green-50 to-emerald-100';
        if (tool.color === 'purple') gradientClass = 'from-purple-50 to-violet-100';
        if (tool.color === 'amber') gradientClass = 'from-amber-50 to-orange-100';

        return `
            <div class="tool-card group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-transparent cursor-pointer" data-tool-id="${tool.id}">
                <div class="h-2 bg-gradient-to-r ${gradientClass}"></div>
                <div class="p-6">
                    <div class="text-5xl mb-4">${tool.icon}</div>
                    <h3 class="text-2xl font-bold mb-2">${tool.title}</h3>
                    <p class="text-gray-600 mb-4">${tool.description}</p>
                    <p class="text-xs text-gray-400 mb-4">${tool.tags.slice(0, 3).join(', ')}…</p>
                    <span class="inline-flex items-center text-blue-600 font-medium group-hover:underline">
                        Use tool <span class="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                </div>
            </div>
        `;
    }).join('');

    // Attach click event to each tool card
    document.querySelectorAll('.tool-card').forEach(card => {
        card.addEventListener('click', function() {
            const toolId = this.dataset.toolId;
            const tool = CONFIG.tools.find(t => t.id === toolId);
            if (tool) showToolDetail(tool);
        });
    });
}

function showToolDetail(tool) {
    // Hide tools section, show detail section
    document.getElementById('tools-section').classList.add('hidden');
    document.getElementById('tool-detail-section').classList.remove('hidden');

    // Update meta tags for this tool
    updateMeta(tool.title + ' - Helping PDF Tool', tool.metaDescription);

    // Build tool detail HTML
    const detailContainer = document.getElementById('tool-detail-content');
    const featureList = tool.features.map(f => `<li class="flex items-start gap-2"><span class="text-green-500 text-xl">✓</span> ${f}</li>`).join('');

    detailContainer.innerHTML = `
        <div class="mb-8 flex items-center gap-4">
            <span class="text-6xl">${tool.icon}</span>
            <h1 class="text-4xl font-bold">${tool.title}</h1>
        </div>
        <p class="text-xl text-gray-600 mb-8">${tool.description}</p>
        
        <h2 class="text-2xl font-semibold mb-4">Key Features</h2>
        <ul class="mb-8 space-y-2">
            ${featureList}
        </ul>
        
        <h2 class="text-2xl font-semibold mb-4">How it works</h2>
        <p class="text-gray-600 mb-8">Your files never leave your device. All processing happens locally in your browser, ensuring complete privacy.</p>
        
        <div class="bg-gray-50 p-6 rounded-xl">
            <h2 class="text-xl font-semibold mb-3">Popular uses</h2>
            <p class="text-gray-600">${tool.tags.slice(0, 5).join(' • ')}</p>
        </div>
    `;

    // Inject JSON-LD schema
    injectSchema(tool);

    // Scroll to top for better UX
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showToolsSection() {
    document.getElementById('tools-section').classList.remove('hidden');
    document.getElementById('tool-detail-section').classList.add('hidden');
    // Restore site-wide meta
    updateMeta(CONFIG.site.metaTitle, CONFIG.site.metaDescription);
    // Clear schema
    document.getElementById('tool-schema').innerHTML = '';
}

function updateMeta(title, description) {
    document.title = title;
    document.getElementById('meta-title').textContent = title;
    document.getElementById('meta-description').setAttribute('content', description);
}

function injectSchema(tool) {
    const schemaContainer = document.getElementById('tool-schema');
    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": tool.title,
        "description": tool.metaDescription,
        "applicationCategory": "Utility",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "featureList": tool.features.join(', '),
        "keywords": tool.tags.join(', ')
    };
    schemaContainer.innerHTML = `<script type="application/ld+json">${JSON.stringify(schema, null, 2)}<\/script>`;
}
