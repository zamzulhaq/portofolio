/* ============================================
   PROJECT DATA — My Portfolio
   Edit this file to add, remove, or update projects.
   Presentation lives in script.js; content lives here.
   ============================================ */

window.PORTFOLIO_GITHUB = 'https://github.com/zamzulhaq';

window.PORTFOLIO_PROJECTS = [
  {
    id: 'smartgate',
    title: 'SmartGate',
    subtitle: 'Residential Access Management System',
    slug: 'smartgate',
    category: 'fullstack',
    categoryLabel: 'Full-Stack',
    description:
      'A residential access management system for residents, access credentials, visitor registration, and security workflows, with NFC integration in progress.',
    preview: 'dashboard',
    previewNote: 'Interface schematic — screenshot pending',
    accent: 'gold',
    techStack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    status: 'In Development',
    featured: true,
    problem:
      'Residential security teams need one dependable place to manage residents, access credentials, visitor check-ins, and access logs without losing track of who is allowed where.',
    solution:
      'SmartGate brings resident records, credentials, visitor registration, and security workflows into one role-aware system. NFC-based access integration is still under development.',
    features: [
      'Role-based access control for administrators and security personnel.',
      'Residential and resident management.',
      'Access credential management.',
      'Access logging for security review.',
      'Visitor registration and check-in workflows.',
      'Database access policies and security controls.',
      'NFC scanner integration under development.'
    ],
    architecture:
      'Built with Next.js, React, TypeScript, PostgreSQL, and Tailwind CSS. Administrative and security roles work through permission-scoped workflows, while PostgreSQL stores residents, credentials, visitors, and access logs.',
    challenges: [
      'Keeping administrator and security responsibilities clearly separated in the data model and interface.',
      'Designing access logs that stay useful for auditing as the system grows.',
      'Integrating NFC hardware without presenting the integration as complete before it is ready.'
    ],
    screenshots: [],
    githubUrl: 'https://github.com/zamzulhaq/smartgate',
    demoUrl: null
  },
  {
    id: 'fallmely',
    title: 'Fallmely',
    subtitle: 'Smart Family Management App',
    slug: 'fallmely',
    category: 'fullstack',
    categoryLabel: 'Full-Stack',
    description:
      'A real-time family management app for schedules, rewards, and daily activities, with push notifications and a TV display mode.',
    preview: 'dashboard',
    previewNote: 'Interface schematic',
    accent: 'terracotta',
    techStack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Firebase', 'Capacitor'],
    status: null,
    featured: false,
    problem:
      'Parents need a shared, real-time view of their children’s schedules, tasks, and rewards without stitching together separate calendars, chats, and note-taking tools.',
    solution:
      'Fallmely combines schedule tracking, a points-based reward system, family roles, push notifications, and a TV display in one app.',
    features: [
      'Daily activity schedules with real-time statuses.',
      'Points-based reward system for completed tasks.',
      'Cross-device push notifications through Firebase Cloud Messaging.',
      'TV display mode for schedules, countdowns, and announcements.',
      'Prayer schedule and weather information.',
      'Family member management with parent and child roles.',
      'Emergency alert and QR-based family joining.'
    ],
    architecture:
      'React 19 and TypeScript frontend with Zustand state, Firebase Firestore for real-time data, Firebase Auth and FCM for access and notifications, a Vercel serverless push API, and Capacitor for Android packaging.',
    challenges: [
      'Keeping real-time Firestore listeners and push notifications consistent across web and Android.',
      'Separating parent and child permissions while sharing one family workspace.'
    ],
    screenshots: [],
    githubUrl: 'https://github.com/zamzulhaq/famly-smart',
    demoUrl: null
  },
  {
    id: 'flowly',
    title: 'Flowly',
    subtitle: 'AI Personal Finance Assistant',
    slug: 'flowly',
    category: 'ai',
    categoryLabel: 'AI / ML',
    description:
      'A chat-based personal finance app that records transactions through an AI assistant, with a local parser fallback when no API key is available.',
    preview: 'ai',
    previewNote: 'Interface schematic',
    accent: 'gold',
    techStack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Google Gemini', 'Capacitor'],
    status: null,
    featured: false,
    problem:
      'Manual expense tracking is easy to abandon when every transaction requires opening a form, choosing categories, and filling in fields.',
    solution:
      'Flowly turns plain chat messages into structured transactions, then organizes them into a 50/30/20 budget with history, debt carry-over, and data export.',
    features: [
      'Transaction logging through a conversational AI assistant.',
      '50/30/20 budgeting for needs, wants, and future goals.',
      'History filters, search, and per-transaction location.',
      'Debt carry-over and recovery across periods.',
      'JSON and Markdown import/export.',
      'Local parser fallback that works without an API key.'
    ],
    architecture:
      'React 19, TypeScript, Vite, and Tailwind CSS frontend, with Google Gemini through @google/genai for chat understanding and a local parser as the offline fallback. Capacitor packages the app for Android.',
    challenges: [
      'Keeping the assistant useful when no API key is present by pairing Gemini with a local parser.',
      'Mapping free-form chat messages into consistent transaction records.'
    ],
    screenshots: [],
    githubUrl: 'https://github.com/zamzulhaq/flowly-aplikasi-management-saku',
    demoUrl: null
  },
  {
    id: 'tracky',
    title: 'Tracky',
    subtitle: 'Receipt & Shipment Management',
    slug: 'tracky',
    category: 'fullstack',
    categoryLabel: 'Full-Stack',
    description:
      'An Android app for managing order receipts and shipment status, integrated with the WooCommerce REST API.',
    preview: 'dashboard',
    previewNote: 'Interface schematic',
    accent: 'navy',
    techStack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Capacitor', 'ML Kit', 'WooCommerce API'],
    status: null,
    featured: false,
    problem:
      'Updating order and courier-receipt status by hand is slow and error-prone when a store processes many shipments.',
    solution:
      'Tracky scans order and receipt barcodes with native Android ML Kit, confirms the scan, and updates WooCommerce order status and receipt metadata.',
    features: [
      'Order sync from the WooCommerce REST API.',
      'Order and receipt barcode scanning through native ML Kit.',
      'Duplicate protection once an order changes status.',
      'Shipment filters, search, and a local scan history.',
      'Automatic cleanup of scan history older than 30 days.',
      'Bottom navigation with dedicated scanning workspaces.'
    ],
    architecture:
      'React 19, TypeScript, Vite, and Tailwind CSS packaged with Capacitor for Android. Barcode scanning uses @capacitor-mlkit/barcode-scanning, and order data comes from the WooCommerce REST API v3.',
    challenges: [
      'Preventing duplicate scans after an order has already changed status.',
      'Preserving raw courier receipt numbers instead of normalizing varied store formats.'
    ],
    screenshots: [],
    githubUrl: 'https://github.com/zamzulhaq/Tracky---aplikasi-management-resi',
    demoUrl: null
  },
  {
    id: 'sellory',
    title: 'Sellory',
    subtitle: 'Multi-Tenant E-Commerce SaaS',
    slug: 'sellory',
    category: 'backend',
    categoryLabel: 'Backend & API',
    description:
      'A multi-tenant e-commerce platform with a Laravel API, Vue dashboard, and containerized development infrastructure.',
    preview: 'architecture',
    previewNote: 'System diagram',
    accent: 'navy',
    techStack: ['Laravel', 'PHP', 'Vue 3', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
    status: null,
    featured: false,
    problem:
      'Running multiple storefronts from one platform requires strict tenant boundaries across authentication, catalog data, inventory, and permissions.',
    solution:
      'Sellory provides a tenant-scoped Laravel API and Vue dashboard, with shared infrastructure for catalog, inventory, roles, and permissions.',
    features: [
      'Tenant scoping through tenant_id across a single PostgreSQL database.',
      'Sanctum token authentication and role/permission management.',
      'Catalog, product, variant, and inventory APIs.',
      'Redis-backed cache and queue support.',
      'S3-compatible storage for product media.',
      'Docker Compose infrastructure and GitHub Actions CI.'
    ],
    architecture:
      'Laravel 12 API with Sanctum tokens, a Vue 3 and TypeScript SPA, PostgreSQL 16 with tenant_id scoping, Redis 7 for cache and queues, S3-compatible storage, and Docker Compose for local infrastructure.',
    challenges: [
      'Keeping tenant boundaries consistent across every API resource.',
      'Coordinating catalog, inventory, and authorization concerns in one backend.'
    ],
    screenshots: [],
    githubUrl: 'https://github.com/zamzulhaq/selloryV2',
    demoUrl: null
  },
  {
    id: 'ktp-nfc-scanner',
    title: 'KTP NFC Scanner',
    subtitle: 'e-KTP Reader & NIK Parser',
    slug: 'ktp-nfc-scanner',
    category: 'experiments',
    categoryLabel: 'Experiments',
    description:
      'A web and Android NFC reader that reads e-KTP chip UIDs and parses NIK metadata without a regional database.',
    preview: 'workflow',
    previewNote: 'Workflow schematic',
    accent: 'terracotta',
    techStack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Capacitor', 'NFC'],
    status: 'Foundation layer',
    featured: false,
    problem:
      'Reading e-KTP data usually depends on hardware readers, while useful NIK metadata is locked behind manual lookup.',
    solution:
      'This project reads NFC chip UIDs through native or browser APIs and derives province, city, gender, and birth date directly from the 16-digit NIK.',
    features: [
      'NFC UID reading through Capacitor or Web NFC.',
      'NIK metadata parsing without a remote region database.',
      'NFC simulator with preset and custom card data.',
      'Visual e-KTP card and per-session scan history.',
      'Android build through Capacitor.',
      'Foundation for attendance, login, and identity verification flows.'
    ],
    architecture:
      'React 19, TypeScript, Tailwind CSS 4, and Vite, packaged with Capacitor 8. NFC access uses @capgo/capacitor-nfc with a Web NFC fallback, and region data ships locally with the app.',
    challenges: [
      'Supporting native NFC and browser Web NFC through one consistent flow.',
      'Parsing NIK metadata locally without relying on a region API.'
    ],
    screenshots: [],
    githubUrl: 'https://github.com/zamzulhaq/ktp-nfc-scanner',
    demoUrl: null
  },
  {
    id: 'employa',
    title: 'Employa',
    subtitle: 'Employee Management System',
    slug: 'employa',
    category: 'fullstack',
    categoryLabel: 'Full-Stack',
    description:
      'An employee management system built with a typed Next.js App Router stack and a PostgreSQL data layer.',
    preview: 'dashboard',
    previewNote: 'Interface schematic',
    accent: 'gold-deep',
    techStack: ['Next.js 16', 'React 19', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    status: null,
    featured: false,
    problem:
      'Employee records and management workflows need a structured application layer instead of scattered spreadsheets and ad-hoc tools.',
    solution:
      'Employa provides an employee management foundation with a feature-based Next.js structure, typed data access, and a PostgreSQL database managed through Prisma.',
    features: [
      'Feature-based App Router organization.',
      'Repository and service layers for data access and business logic.',
      'PostgreSQL schema managed with Prisma.',
      'Shared UI components through shadcn/ui.',
      'Typed utilities and domain types across the application.',
      'Linting and formatting scripts for consistent development.'
    ],
    architecture:
      'Next.js 16 App Router with React 19 and TypeScript, PostgreSQL accessed through Prisma 7, and a component layer built with shadcn/ui and Tailwind CSS 4.',
    challenges: [
      'Organizing domain code around features, repositories, services, and shared types.',
      'Keeping database access behind a Prisma-backed repository layer as the app grows.'
    ],
    screenshots: [],
    githubUrl: 'https://github.com/zamzulhaq/employa',
    demoUrl: null
  }
];
