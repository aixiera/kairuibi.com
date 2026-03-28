import { siteConfig } from "./site-config.js";

const navItems = [
  { key: "home", label: "Home", href: siteConfig.routes.home },
  { key: "about", label: "About", href: siteConfig.routes.about },
  { key: "genpromptly", label: "GenPromptly", href: siteConfig.routes.genpromptly },
  { key: "projects", label: "Projects", href: siteConfig.routes.projects },
  { key: "contact", label: "Contact", href: siteConfig.routes.contact }
];

function escapeHtml(value = "") {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildButton({
  label,
  href,
  variant = "",
  disabledMessage = ""
}) {
  const className = ["btn", variant].filter(Boolean).join(" ");

  if (href) {
    return `<a class="${className}" href="${escapeHtml(href)}">${escapeHtml(label)}</a>`;
  }

  return `<span class="${className} is-disabled" role="link" aria-disabled="true" title="${escapeHtml(
    disabledMessage
  )}">${escapeHtml(label)}</span>`;
}

function renderSocialLinks() {
  if (!siteConfig.socialLinks.length) {
    return "";
  }

  return siteConfig.socialLinks
    .map(
      (link) =>
        `<a href="${escapeHtml(link.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(
          link.label
        )}</a>`
    )
    .join("");
}

function renderNav(current = "") {
  const links = navItems
    .map((item) => {
      const activeClass = item.key === current ? " is-active" : "";
      return `<a class="nav-link${activeClass}" href="${item.href}">${item.label}</a>`;
    })
    .join("");

  return `
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand-link" href="${siteConfig.routes.home}">
          <span class="brand-mark">KB</span>
          <span class="brand-copy">
            <span class="brand-name">${siteConfig.ownerName}</span>
            <span class="brand-tag">Practical AI tools</span>
          </span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-label="Toggle navigation">Menu</button>
        <nav class="site-nav" aria-label="Main navigation">
          ${links}
          <a class="btn btn-primary" href="${siteConfig.routes.genpromptly}">Try GenPromptly</a>
        </nav>
      </div>
    </header>
  `;
}

function renderFooter() {
  const socialLinks = renderSocialLinks();
  const socialPanel = socialLinks
    ? `
      <div>
        <p class="footer-brand">Social</p>
        <div class="social-links">${socialLinks}</div>
      </div>
    `
    : "";

  return `
    <footer class="site-footer">
      <div class="container footer-inner">
        <div class="footer-panel">
          <div class="footer-grid">
            <div>
              <p class="footer-brand">${siteConfig.ownerName}</p>
              <p class="footer-small">Building practical AI tools and workflow-driven software.</p>
            </div>
            <div>
              <p class="footer-brand">Contact</p>
              <p class="footer-small"><a data-contact-link href="#"></a></p>
              <p class="footer-small"><span data-location></span></p>
            </div>
            <div>
              <p class="footer-brand">Legal</p>
              <nav class="footer-links" aria-label="Legal links">
                <a href="${siteConfig.routes.privacy}">Privacy Policy</a>
                <a href="${siteConfig.routes.terms}">Terms of Service</a>
                <a href="${siteConfig.routes.refund}">Refund / Cancellation Policy</a>
              </nav>
            </div>
          </div>
          ${socialPanel}
        </div>
      </div>
    </footer>
  `;
}

function renderProductActions(mode = "full") {
  const actions = [];

  if (mode === "full") {
    actions.push(
      buildButton({
        label: "Try GenPromptly",
        href: siteConfig.genPromptly.tryUrl,
        variant: "btn-primary",
        disabledMessage: siteConfig.genPromptly.tryPlaceholder
      })
    );
  }

  actions.push(
    buildButton({
      label: "Subscribe with Stripe",
      href: siteConfig.genPromptly.subscribeUrl,
      disabledMessage: siteConfig.genPromptly.subscribePlaceholder
    })
  );

  actions.push(
    buildButton({
      label: "Manage Billing",
      href: siteConfig.genPromptly.manageBillingUrl,
      variant: "btn-ghost",
      disabledMessage: siteConfig.genPromptly.billingPlaceholder
    })
  );

  return `
    <div class="cta-row">
      <div class="button-row">${actions.join("")}</div>
      <p class="integration-note">
        Billing URLs are configured in <span class="inline-path">assets/js/site-config.js</span>. The layout is ready for Stripe Payment Links first, and can later point to Stripe Checkout or a Customer Portal route without changing the page structure.
      </p>
    </div>
  `;
}

class SiteNavbar extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready === "true") {
      return;
    }

    this.dataset.ready = "true";
    this.classList.add("site-navbar");
    this.innerHTML = renderNav(this.getAttribute("current") || "");

    const toggle = this.querySelector(".nav-toggle");

    toggle?.addEventListener("click", () => {
      const isOpen = this.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready === "true") {
      return;
    }

    this.dataset.ready = "true";
    this.innerHTML = renderFooter();
  }
}

class HeroSection extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready === "true") {
      return;
    }

    this.dataset.ready = "true";

    const extraContent = this.innerHTML.trim();
    const eyebrow = this.getAttribute("eyebrow") || "";
    const title = this.getAttribute("title") || "";
    const subtitle = this.getAttribute("subtitle") || "";
    const description = this.getAttribute("description") || "";
    const primaryLabel = this.getAttribute("primary-label") || "";
    const primaryHref = this.getAttribute("primary-href") || "";
    const secondaryLabel = this.getAttribute("secondary-label") || "";
    const secondaryHref = this.getAttribute("secondary-href") || "";
    const image = this.getAttribute("image") || "";
    const imageAlt = this.getAttribute("image-alt") || "";
    const note = this.getAttribute("note") || "";

    const actions = [primaryLabel && primaryHref
      ? buildButton({ label: primaryLabel, href: primaryHref, variant: "btn-primary" })
      : "",
    secondaryLabel && secondaryHref
      ? buildButton({ label: secondaryLabel, href: secondaryHref })
      : ""]
      .filter(Boolean)
      .join("");

    const media = image
      ? `
        <figure class="founder-panel">
          <img src="${escapeHtml(image)}" alt="${escapeHtml(imageAlt)}" />
          <figcaption>
            <strong>${escapeHtml(note || siteConfig.ownerName)}</strong>
            <p class="surface-copy">${escapeHtml(
              note ? siteConfig.roleLabel : "Product builder"
            )}</p>
          </figcaption>
        </figure>
      `
      : "";

    this.innerHTML = `
      <section class="hero-shell">
        <div class="hero-content">
          ${eyebrow ? `<span class="eyebrow">${escapeHtml(eyebrow)}</span>` : ""}
          <h1 class="hero-title">${escapeHtml(title)}</h1>
          ${subtitle ? `<p class="hero-subtitle">${escapeHtml(subtitle)}</p>` : ""}
          ${description ? `<p class="hero-description">${escapeHtml(description)}</p>` : ""}
          ${actions ? `<div class="button-row">${actions}</div>` : ""}
        </div>
        <div class="hero-side">
          ${media}
          ${extraContent}
        </div>
      </section>
    `;
  }
}

class SectionShell extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready === "true") {
      return;
    }

    this.dataset.ready = "true";

    const content = this.innerHTML.trim();
    const eyebrow = this.getAttribute("eyebrow") || "";
    const heading = this.getAttribute("heading") || "";
    const intro = this.getAttribute("intro") || "";

    this.innerHTML = `
      <section class="section-shell">
        <div class="section-header">
          ${eyebrow ? `<span class="eyebrow">${escapeHtml(eyebrow)}</span>` : ""}
          ${heading ? `<h2 class="section-heading">${escapeHtml(heading)}</h2>` : ""}
          ${intro ? `<p class="section-intro">${escapeHtml(intro)}</p>` : ""}
        </div>
        ${content}
      </section>
    `;
  }
}

class ProjectCard extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready === "true") {
      return;
    }

    this.dataset.ready = "true";

    const eyebrow = this.getAttribute("eyebrow") || "";
    const heading = this.getAttribute("heading") || "";
    const description = this.getAttribute("description") || "";
    const status = this.getAttribute("status") || "";
    const href = this.getAttribute("href") || "";
    const cta = this.getAttribute("cta") || "";
    const featured = this.getAttribute("featured") === "true";

    this.innerHTML = `
      <article class="project-card${featured ? " is-featured" : ""}">
        <div class="project-meta">
          ${eyebrow ? `<span class="eyebrow">${escapeHtml(eyebrow)}</span>` : ""}
          ${status ? `<span class="project-status">${escapeHtml(status)}</span>` : ""}
        </div>
        <div class="project-copy">
          <h3>${escapeHtml(heading)}</h3>
          <p>${escapeHtml(description)}</p>
        </div>
        ${href && cta ? `<div class="button-row">${buildButton({ label: cta, href })}</div>` : ""}
      </article>
    `;
  }
}

function applySiteTokens() {
  document.querySelectorAll("[data-contact-link]").forEach((element) => {
    if (!(element instanceof HTMLAnchorElement)) {
      return;
    }

    element.href = `mailto:${siteConfig.contactEmail}`;
    element.textContent = siteConfig.contactEmail;
  });

  document.querySelectorAll("[data-location]").forEach((element) => {
    element.textContent = siteConfig.location;
  });

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  document.querySelectorAll("[data-social-links]").forEach((element) => {
    const markup = renderSocialLinks();

    if (!markup) {
      element.closest("[data-hide-if-empty]")?.classList.add("hide");
      return;
    }

    element.innerHTML = markup;
  });

  document.querySelectorAll("[data-product-actions]").forEach((element) => {
    const mode = element.getAttribute("data-product-actions") || "full";
    element.innerHTML = renderProductActions(mode);
  });
}

customElements.define("site-navbar", SiteNavbar);
customElements.define("site-footer", SiteFooter);
customElements.define("hero-section", HeroSection);
customElements.define("section-shell", SectionShell);
customElements.define("project-card", ProjectCard);

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", applySiteTokens);
} else {
  applySiteTokens();
}
