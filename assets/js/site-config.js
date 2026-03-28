export const siteConfig = {
  ownerName: "Kairui Bi",
  roleLabel: "Founder-led product site",
  location: "British Columbia, Canada",
  // Replace this if a different public mailbox should appear on the site.
  contactEmail: "contact@kairuibi.com",
  founderImage: "/images/about_selfie.jpg",
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
  socialLinks: [],
  genPromptly: {
    tryUrl: "",
    subscribeUrl: "",
    manageBillingUrl: "",
    paymentMode: "payment-links-first",
    tryPlaceholder:
      "https://genpromptly.app/",
    subscribePlaceholder:
      "Add your Stripe Payment Link in assets/js/site-config.js.",
    billingPlaceholder:
      "Add your Stripe Customer Portal or billing route in assets/js/site-config.js."
  }
};
