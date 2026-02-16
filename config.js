// config.js – Master configuration for Helping PDF Tool
const CONFIG = {
    site: {
        name: "Helping PDF Tool",
        url: "https://helpingpdf.com",
        metaTitle: "Helping PDF Tool - Compress, Fill, Sign PDFs Securely",
        metaDescription: "Free online PDF tools: compress PDFs without losing quality, fill forms, and add digital signatures. No account, no watermark, 100% local processing."
    },
    // Core safety instructions (displayed in hero)
    instructions: [
        { text: "No Account", icon: "🔓", description: "No sign-up, no email – just use." },
        { text: "No Hidden Charges", icon: "💰", description: "100% free, forever." },
        { text: "No Watermark", icon: "🚫", description: "Your files stay pristine." },
        { text: "100% Safe", icon: "🛡️", description: "Local processing, files never leave your device." }
    ],
    // Tool definitions – set active: true/false to show/hide in grid
    tools: [
        {
            active: true,
            title: "PDF Compressor",
            description: "High‑quality compression that reduces file size while keeping text sharp and images clear. Ideal for email or sharing.",
            seo_keywords: "Secure PDF Compressor, reduce PDF size, compress PDF without losing quality",
            icon: "📦",
            color: "blue"
        },
        {
            active: true,
            title: "PDF Form Filler",
            description: "Type text directly onto any PDF field or anywhere on the page. Perfect for filling applications, contracts, and worksheets.",
            seo_keywords: "Online Form Filler no watermark, fill PDF forms, type on PDF",
            icon: "✍️",
            color: "green"
        },
        {
            active: true,
            title: "PDF Signer",
            description: "Add a secure digital signature – draw, type, or upload an image. Legally binding and privacy‑friendly.",
            seo_keywords: "Free PDF Signer, add signature to PDF, digital signature tool",
            icon: "🖊️",
            color: "purple"
        },
        {
            // Example of an inactive tool (can be enabled later)
            active: false,
            title: "PDF Merger",
            description: "Combine multiple PDFs into one document in seconds.",
            seo_keywords: "merge PDF, combine PDF",
            icon: "🔗",
            color: "amber"
        }
    ]
};

// Expose globally
window.CONFIG = CONFIG;
