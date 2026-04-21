window.siteConfig = {
  ownerName: "Kairui Bi",
  roleLabel: "AI agent builder",
  roleTagline: "IB student focused on AI agents, data science, and practical workflow tools.",
  location: "BC, Canada",
  contactEmail: "bia446635@gmail.com",
  founderImage: "images/about_selfie.jpg",
  hiringStatus: "Open to internships, engineering roles, and AI automation collaboration.",
  resumeUrl: "",
  resumePlaceholder: "Add your resume URL in assets/js/site-config.js.",
  linkedInUrl: "https://www.linkedin.com/in/kairui-bi-9913ab377/",
  routes: {
    home: "index.html",
    about: "About.html",
    publications: "publications.html",
    genpromptly: "genpromptly.html",
    projects: "projects.html",
    booking: "booking.html",
    contact: "contact.html",
    privacy: "legal/privacy.html",
    terms: "legal/terms.html",
    refund: "legal/refund.html"
  },
  portfolioNav: [
    { key: "intro", label: "Intro", href: "index.html#intro" },
    { key: "demos", label: "Demos", href: "index.html#intro" },
    { key: "publication", label: "Publication", href: "publications.html" },
    { key: "xulan", label: "XuLan", href: "index.html#xulan" },
    { key: "thinking", label: "AI Agent Thinking", href: "index.html#thinking" },
    { key: "about", label: "About / Resume", href: "index.html#about" },
    { key: "booking", label: "Booking", href: "booking.html" },
    { key: "contact", label: "Contact", href: "index.html#contact" }
  ],
  socialLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kairui-bi-9913ab377/"
    }
  ],
  demos: [
    {
      key: "ai-digest",
      title: "n8n AI scratch daily digest",
      status: "Multi-source AI signal",
      visualType: "digest",
      image: "images/ai-digest-workflow.jpg",
      imageAlt: "n8n workflow that collects AI information from multiple sources and sends a daily email digest.",
      images: [
        {
          src: "images/ai-digest-workflow.jpg",
          alt: "Workflow view of the AI information digest automation."
        },
        {
          src: "images/ai-digest-email-1.jpg",
          alt: "Daily AI digest email with linked source highlights."
        },
        {
          src: "images/ai-digest-email-2.jpg",
          alt: "Another AI digest email showing curated video and news links."
        }
      ],
      tags: ["n8n", "Daily email", "YouTube + podcasts"],
      problem: "Useful AI signal is scattered across YouTube, podcasts, and other sources.",
      flow: "Collect sources, rank what matters, format a digest, and email it daily.",
      stack: "n8n, multi-source collection, ranking logic, LLM summarization, Gmail delivery",
      output: "A daily AI email with links, takeaways, and thumbnails.",
      impact: "Shows multi-source curation and automatic delivery."
    },
    {
      key: "sales-copilot",
      title: "AI sales copilot",
      status: "Research briefing",
      image: "images/sale_summary_agent_new.png",
      imageAlt: "AI sales copilot that prepares a pre-call report from research inputs.",
      tags: ["Research", "Summaries", "Call prep"],
      problem: "Sales calls suffer when reps lack context.",
      flow: "Pull public context, summarize the prospect, and assemble a pre-call brief.",
      stack: "Web research, prompt structuring, report generation, workflow orchestration",
      output: "A pre-call report with background and talking points.",
      impact: "Demonstrates retrieval, summarization, and polished reporting."
    },
    {
      key: "asmr-generator",
      title: "n8n ASMR video generator",
      status: "Content automation",
      image: "images/n8n-asmr-screenshot.jpg",
      imageAlt: "n8n workflow for automated ASMR video generation and publishing.",
      tags: ["n8n", "Video pipeline", "Auto publishing"],
      problem: "ASMR shorts are slow when planning, assets, assembly, and posting stay manual.",
      flow: "Choose a topic, plan scenes, generate clips, assemble the video, and publish.",
      stack: "n8n, AI planning, image and clip generation, video assembly, Telegram, YouTube",
      output: "A repeatable system for generating and shipping ASMR videos.",
      impact: "Shows orchestration from idea to published output."
    },
    {
      key: "precall-briefing",
      title: "AI pre-call briefing",
      status: "Meeting preparation",
      image: "images/precall 1 cover.png",
      imageAlt: "Pre-call briefing visual with meeting preparation notes.",
      tags: ["Onboarding", "Expectation setting", "Workflow messaging"],
      problem: "Calls go better when both sides arrive prepared.",
      flow: "Package context, explain the workflow, and prepare the user for the conversation.",
      stack: "AI-agent messaging, onboarding design, visual communication, workflow framing",
      output: "A cleaner meeting handoff with less confusion.",
      impact: "Shows communication design around AI workflows."
    },
    {
      key: "phosphene-simulator",
      title: "Phosphene vision simulator",
      status: "Accessible vision demo",
      visualType: "phosphene",
      imageAlt: "Stylized visual for the Phosphene Vision Simulator.",
      tags: ["Pulse2Percept", "Assistive tech", "Vision simulation"],
      problem: "Retinal implant perception is hard to explain with text alone.",
      flow: "Upload an image, generate AlphaAMS, ArgusII, and PRIMA simulations, and compare outputs.",
      stack: "Pulse2Percept, browser UI, image upload handling, prosthetic vision simulation",
      output: "A live demo for exploring prosthetic vision concepts.",
      impact: "Shows scientific tooling and accessible interface design.",
      actionLabel: "Open live demo",
      actionUrl: "https://aixiera.github.io/phosphene-web/",
      actionExternal: true
    },
    {
      key: "genpromptly",
      title: "GenPromptly",
      status: "Product experiment",
      visualType: "genpromptly",
      imageAlt: "GenPromptly web app preview.",
      tags: ["Prompt design", "Product UI", "Structured output"],
      problem: "Rough prompts need structure before they are useful.",
      flow: "Start with messy input, reshape it into a reusable prompt, and keep the interface focused.",
      stack: "Prompt design, product framing, structured output, clean interface work",
      output: "A lightweight prompt-refinement product with one clear job.",
      impact: "Shows product thinking and interface discipline.",
      actionLabel: "Open GenPromptly.app",
      actionUrl: "https://genpromptly.app/",
      actionExternal: true
    }
  ],
  genPromptly: {
    tryUrl: "https://genpromptly.app/",
    subscribeUrl: "",
    manageBillingUrl: "",
    paymentMode: "payment-links-first",
    tryPlaceholder: "https://genpromptly.app/",
    subscribePlaceholder: "Add your Stripe Payment Link in assets/js/site-config.js.",
    billingPlaceholder: "Add your Stripe Customer Portal or billing route in assets/js/site-config.js."
  }
};
