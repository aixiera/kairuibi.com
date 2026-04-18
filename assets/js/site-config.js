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
      key: "qualification",
      title: "AI lead qualification",
      status: "Sales routing",
      image: "images/qualification_agent_new.png",
      imageAlt: "Lead qualification workflow showing qualified and disqualified routing.",
      tags: ["Lead scoring", "Auto replies", "Branch logic"],
      problem: "Inbound leads need fast triage without wasting human review on low-fit contacts.",
      flow: "Capture inquiry, analyze fit signals, branch qualified leads, and send disqualification replies automatically.",
      stack: "LLM workflow, routing logic, email automation, qualification prompts",
      output: "A clearer sales pipeline with response speed and consistent qualification decisions.",
      impact: "Shows judgment, branching logic, and practical business automation."
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
      image: "images/(n8n tutorial) less2MB appointment record automation cover.jpg",
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
      key: "genpromptly",
      title: "GenPromptly",
      status: "Product experiment",
      image: "images/customer_agent.png",
      imageAlt: "GenPromptly support image.",
      tags: ["Prompt design", "Product UI", "Structured output"],
      problem: "Rough prompts often need a clearer structure before they are useful in practice.",
      flow: "Start with messy input, reshape it into a reusable prompt, and keep the interface focused.",
      stack: "Prompt design, product framing, structured output, clean interface work",
      output: "A lightweight prompt-refinement product with a narrow job to be done.",
      impact: "Represents product-thinking and interface discipline within the portfolio."
    }
  ],
  genPromptly: {
    tryUrl: "",
    subscribeUrl: "",
    manageBillingUrl: "",
    paymentMode: "payment-links-first",
    tryPlaceholder: "https://genpromptly.app/",
    subscribePlaceholder: "Add your Stripe Payment Link in assets/js/site-config.js.",
    billingPlaceholder: "Add your Stripe Customer Portal or billing route in assets/js/site-config.js."
  }
};
