// script.js – Renders UI based on CONFIG

document.addEventListener('DOMContentLoaded', function() {
    // Update meta tags from config
    if (CONFIG.site.metaTitle) {
        document.getElementById('meta-title').textContent = CONFIG.site.metaTitle;
        document.title = CONFIG.site.metaTitle; // also set <title>
    }
    if (CONFIG.site.metaDescription) {
        document.getElementById('meta-description').setAttribute('content', CONFIG.site.metaDescription);
    }

    // Render core instructions (hero section)
    const instructionsContainer = document.getElementById('core-instructions');
    if (instructionsContainer && CONFIG.instructions) {
        instructionsContainer.innerHTML = CONFIG.instructions.map(inst => `
            <div class="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white/20">
                <div class="text-4xl mb-3">${inst.icon}</div>
                <h3 class="font-bold text-lg mb-1">${inst.text}</h3>
                <p class="text-sm text-gray-500">${inst.description}</p>
            </div>
        `).join('');
    }

    // Render active tools grid
    const toolsGrid = document.getElementById('tools-grid');
    if (toolsGrid && CONFIG.tools) {
        const activeTools = CONFIG.tools.filter(tool => tool.active === true);
        toolsGrid.innerHTML = activeTools.map(tool => {
            // Choose gradient based on color
            let gradientClass = 'from-blue-50 to-indigo-100';
            if (tool.color === 'green') gradientClass = 'from-green-50 to-emerald-100';
            if (tool.color === 'purple') gradientClass = 'from-purple-50 to-violet-100';
            if (tool.color === 'amber') gradientClass = 'from-amber-50 to-orange-100';

            return `
                <div class="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-transparent">
                    <div class="h-2 bg-gradient-to-r ${gradientClass}"></div>
                    <div class="p-6">
                        <div class="text-5xl mb-4">${tool.icon}</div>
                        <h3 class="text-2xl font-bold mb-2">${tool.title}</h3>
                        <p class="text-gray-600 mb-4">${tool.description}</p>
                        <p class="text-xs text-gray-400 mb-4">${tool.seo_keywords}</p>
                        <a href="#" class="inline-flex items-center text-blue-600 font-medium group-hover:underline">
                            Use tool <span class="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Optional: Add active class to current year in footer
    const yearSpan = document.querySelector('.current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
