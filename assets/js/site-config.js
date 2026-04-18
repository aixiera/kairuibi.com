window.siteConfig = {
  ownerName: "Kairui Bi",
  roleLabel: "AI agent builder",
  roleTagline: "IB student focused on AI agent implementation, data science, and practical workflow tools developed by Kairui Bi.",
  location: "BC, Canada",
  contactEmail: "bia446635@gmail.com",
  founderImage: "images/about_selfie.jpg",
  hiringStatus: "Open to internships, engineering roles, and collaboration in AI agents, automation, and data science.",
  resumeUrl: "",
  resumePlaceholder: "Add your resume URL in assets/js/site-config.js.",
  linkedInUrl: "https://www.linkedin.com/in/kairui-bi-9913ab377/",
  routes: {
    home: "index.html",
    about: "About.html",
    publications: "publications.html",
    genpromptly: "genpromptly.html",
    projects: "projects.html",
    contact: "contact.html",
    privacy: "legal/privacy.html",
    terms: "legal/terms.html",
    refund: "legal/refund.html"
  },
  portfolioNav: [
    { key: "intro", label: "Intro", href: "index.html#intro" },
    { key: "demos", label: "Demos", href: "index.html#demos" },
    { key: "publication", label: "Publication", href: "publications.html" },
    { key: "xulan", label: "XuLan", href: "index.html#xulan" },
    { key: "thinking", label: "AI Agent Thinking", href: "index.html#thinking" },
    { key: "about", label: "About / Resume", href: "index.html#about" },
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
      problem: "Useful AI signal is scattered across YouTube, podcasts, and other sources, so important updates are easy to miss.",
      flow: "Collect multi-source inputs, filter and organize what matters, format a compact digest, and send the result by email every day.",
      stack: "n8n, multi-source collection, ranking logic, LLM summarization, Gmail delivery",
      output: "A daily AI scratch email that turns noisy sources into a readable set of links, takeaways, and thumbnails.",
      impact: "Shows multi-source orchestration, useful signal curation, and automatic delivery instead of one-off automation."
    },
    {
      key: "sales-copilot",
      title: "AI sales copilot",
      status: "Research briefing",
      image: "images/sale_summary_agent_new.png",
      imageAlt: "AI sales copilot that prepares a pre-call report from research inputs.",
      tags: ["Research", "Summaries", "Call prep"],
      problem: "Sales conversations lose quality when reps start calls without context or research.",
      flow: "Pull public context, summarize the prospect, and assemble a structured pre-call briefing.",
      stack: "Web research, prompt structuring, report generation, workflow orchestration",
      output: "A pre-call report with usable background, context, and talking points.",
      impact: "Demonstrates retrieval, summarization, and professional output formatting."
    },
    {
      key: "asmr-generator",
      title: "n8n ASMR video generator",
      status: "Content automation",
      image: "images/n8n-asmr-screenshot.jpg",
      imageAlt: "n8n workflow for automated ASMR video generation and publishing.",
      tags: ["n8n", "Video pipeline", "Auto publishing"],
      problem: "Short-form ASMR content is slow to produce when topic planning, asset generation, assembly, and posting all stay manual.",
      flow: "Choose a topic, build the plan, generate scenes and clips, assemble the final video, and distribute it through the publishing workflow.",
      stack: "n8n, AI planning, image and clip generation, video assembly, Telegram, YouTube",
      output: "A repeatable multi-step content system for generating and shipping ASMR videos with less manual work.",
      impact: "Shows end-to-end workflow orchestration from idea selection to published output."
    },
    {
      key: "precall-briefing",
      title: "AI pre-call briefing",
      status: "Meeting preparation",
      image: "images/precall 1 cover.png",
      imageAlt: "Pre-call briefing visual with meeting preparation notes.",
      tags: ["Onboarding", "Expectation setting", "Workflow messaging"],
      problem: "Calls go better when the other side arrives with the right context and expectations.",
      flow: "Package key context before the meeting, explain the workflow clearly, and prepare the user for the conversation.",
      stack: "AI-agent messaging, onboarding design, visual communication, workflow framing",
      output: "A cleaner handoff into meetings with stronger context and less confusion.",
      impact: "Shows that Kairui Bi builds the communication layer around AI workflows, not just the automation."
    },
    {
      key: "phosphene-simulator",
      title: "Phosphene vision simulator",
      status: "Accessible vision demo",
      visualType: "phosphene",
      imageAlt: "Stylized visual for the Phosphene Vision Simulator.",
      tags: ["Pulse2Percept", "Assistive tech", "Vision simulation"],
      problem: "Retinal implant perception is difficult to explain clearly with text alone.",
      flow: "Upload a small JPG or PNG, generate AlphaAMS, ArgusII, and PRIMA simulations, and compare the outputs in the browser.",
      stack: "Pulse2Percept, browser UI, image upload handling, prosthetic vision simulation",
      output: "A small live demo that makes prosthetic vision concepts easier to explore and communicate.",
      impact: "Shows scientific-tool thinking, accessible interface design, and practical demo building beyond business workflows.",
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
      problem: "Rough prompts often need a clearer structure before they are useful in practice.",
      flow: "Start with messy input, reshape it into a reusable prompt, and keep the interface focused.",
      stack: "Prompt design, product framing, structured output, clean interface work",
      output: "A lightweight prompt-refinement product with a narrow job to be done.",
      impact: "Represents product-thinking and interface discipline within the portfolio.",
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
