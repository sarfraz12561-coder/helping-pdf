// config.js – Master configuration with full SEO per tool
const CONFIG = {
    site: {
        name: "Helping PDF Tool",
        url: "https://helpingpdf.com",
        metaTitle: "Helping PDF Tool - Compress, Fill, Sign PDFs Securely",
        metaDescription: "Free online PDF tools: compress PDFs without losing quality, fill forms, and add digital signatures. No account, no watermark, 100% local processing."
    },
    instructions: [
        { text: "No Account", icon: "🔓", description: "No sign-up, no email – just use." },
        { text: "No Hidden Charges", icon: "💰", description: "100% free, forever." },
        { text: "No Watermark", icon: "🚫", description: "Your files stay pristine." },
        { text: "100% Safe", icon: "🛡️", description: "Local processing, files never leave your device." }
    ],
    tools: [
        {
            active: true,
            id: "compressor",
            title: "PDF Compressor",
            description: "High‑quality compression that reduces file size while keeping text sharp and images clear. Ideal for email or sharing.",
            metaDescription: "Free secure PDF compressor: reduce file size without losing quality. Compress PDF to 100kb, 200kb – no watermark, local processing.",
            tags: [
                "shrink pdf size",
                "compress pdf 100kb",
                "secure pdf reducer",
                "reduce pdf file size",
                "optimize pdf for email",
                "small pdf compressor",
                "pdf size reducer online",
                "compress scanned pdf",
                "lossless pdf compression",
                "pdf optimizer"
            ],
            features: [
                "Maintains original quality",
                "Adjustable compression level",
                "Batch compression",
                "Works with scanned documents"
            ],
            icon: "📦",
            color: "blue"
        },
        {
            active: true,
            id: "form-filler",
            title: "PDF Form Filler",
            description: "Type text directly onto any PDF field or anywhere on the page. Perfect for filling applications, contracts, and worksheets.",
            metaDescription: "Fill PDF forms online free – no watermark. Type on any PDF, save and download instantly. No account required, 100% secure.",
            tags: [
                "fill pdf forms online",
                "type on pdf free",
                "pdf form filler no watermark",
                "edit pdf text",
                "complete pdf forms",
                "pdf field filler",
                "fillable pdf creator",
                "add text to pdf",
                "pdf form editor",
                "fill pdf documents"
            ],
            features: [
                "Click anywhere to add text",
                "Auto‑detect form fields",
                "Choose font and size",
                "Download filled PDF"
            ],
            icon: "✍️",
            color: "green"
        },
        {
            active: true,
            id: "signer",
            title: "PDF Signer",
            description: "Add a secure digital signature – draw, type, or upload an image. Legally binding and privacy‑friendly.",
            metaDescription: "Free PDF signer – add digital signatures securely. Draw, type, or upload signature. No watermark, local processing. Legally binding.",
            tags: [
                "add signature to pdf",
                "free pdf signer",
                "digital signature tool",
                "esign pdf",
                "sign pdf online free",
                "draw signature on pdf",
                "insert signature in pdf",
                "pdf signature creator",
                "secure pdf signing",
                "electronic signature"
            ],
            features: [
                "Draw, type, or upload signature",
                "Save signature for later",
                "Position anywhere",
                "Download signed PDF"
            ],
            icon: "🖊️",
            color: "purple"
        },
        {
            active: false,
            id: "merger",
            title: "PDF Merger",
            description: "Combine multiple PDFs into one document in seconds.",
            metaDescription: "Merge PDF files online free – combine multiple PDFs into one. No watermark, no account, secure.",
            tags: [
                "merge pdf files",
                "combine pdf online",
                "pdf merger free",
                "join pdfs",
                "pdf combiner",
                "merge pdf pages",
                "pdf merger no watermark",
                "combine pdf documents",
                "merge multiple pdfs",
                "pdf marge tool"
            ],
            features: [
                "Select multiple files",
                "Reorder pages",
                "Preserve quality",
                "Fast merging"
            ],
            icon: "🔗",
            color: "amber"
        }
    ]
};

window.CONFIG = CONFIG;
