export const siteConfig = {
  ownerName: "Kairui Bi",
  roleLabel: "AI workflow builder",
  roleTagline: "Job-seeking engineer building practical AI agents, automation demos, and usable interfaces.",
  location: "British Columbia, Canada",
  contactEmail: "contact@kairuibi.com",
  founderImage: "/images/about_selfie.jpg",
  hiringStatus: "Open to engineering roles and practical AI product work.",
  resumeUrl: "",
  resumePlaceholder: "Add your resume URL in assets/js/site-config.js.",
  linkedInUrl: "https://www.linkedin.com/in/kairui-bi-9913ab377/",
  routes: {
    home: "/index.html",
    about: "/About.html",
    genpromptly: "/genpromptly.html",
    projects: "/projects.html",
    contact: "/contact.html",
    privacy: "/legal/privacy.html",
    terms: "/legal/terms.html",
    refund: "/legal/refund.html"
  },
  portfolioNav: [
    { key: "intro", label: "Intro", href: "/index.html#intro" },
    { key: "demos", label: "Demos", href: "/index.html#demos" },
    { key: "thinking", label: "AI Agent Thinking", href: "/index.html#thinking" },
    { key: "about", label: "About / Resume", href: "/index.html#about" },
    { key: "contact", label: "Contact", href: "/index.html#contact" }
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
      image: "/images/qualification_agent_new.png",
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
      image: "/images/sale_summary_agent_new.png",
      imageAlt: "AI sales copilot that prepares a pre-call report from research inputs.",
      tags: ["Research", "Summaries", "Call prep"],
      problem: "Sales conversations lose quality when reps start calls without context or research.",
      flow: "Pull public context, summarize the prospect, and assemble a structured pre-call briefing.",
      stack: "Web research, prompt structuring, report generation, workflow orchestration",
      output: "A pre-call report with usable background, context, and talking points.",
      impact: "Demonstrates retrieval, summarization, and professional output formatting."
    },
    {
      key: "appointment-automation",
      title: "Appointment record automation",
      status: "Operations workflow",
      image: "/images/(n8n tutorial) less2MB appointment record automation cover.jpg",
      imageAlt: "Appointment record automation cover featuring calendar and spreadsheet workflow tools.",
      tags: ["n8n", "Calendar sync", "Structured records"],
      problem: "Manual appointment logging is repetitive and error-prone across calendars and spreadsheets.",
      flow: "Connect scheduling events to structured records and push updates into the tracking system.",
      stack: "n8n, calendar integrations, spreadsheets, OpenAI-assisted field handling",
      output: "A repeatable back-office automation flow that reduces manual admin work.",
      impact: "Shows practical operations automation rather than demo-only experimentation."
    },
    {
      key: "opsforlocal",
      title: "OpsForLocal pre-call onboarding",
      status: "Client enablement",
      image: "/images/precall 1 cover.png",
      imageAlt: "Pre-call onboarding graphic for OpsForLocal with meeting prep notes.",
      tags: ["Onboarding", "Expectation setting", "Workflow messaging"],
      problem: "Prospects show up to calls with low context, which weakens discovery and follow-through.",
      flow: "Send pre-call context, explain the automation process, and frame the meeting before it starts.",
      stack: "Video explainers, onboarding design, AI-agent positioning, workflow messaging",
      output: "A cleaner handoff into calls with better expectation-setting.",
      impact: "Shows product communication and system design thinking, not just code."
    },
    {
      key: "genpromptly",
      title: "GenPromptly",
      status: "Product experiment",
      image: "/images/customer_agent.png",
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
