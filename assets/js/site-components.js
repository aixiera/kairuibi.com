import { siteConfig } from "./site-config.js";

function escapeHtml(value = "") {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildButton({ label, href, variant = "", disabledMessage = "", external = false }) {
  const className = ["btn", variant].filter(Boolean).join(" ");

  if (href) {
    const externalAttrs = external ? ' target="_blank" rel="noopener noreferrer"' : "";
    return `<a class="${className}" href="${escapeHtml(href)}"${externalAttrs}>${escapeHtml(label)}</a>`;
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
  const links = siteConfig.portfolioNav
    .map((item) => {
      const activeClass = item.key === current ? " is-active" : "";
      return `<a class="nav-link${activeClass}" href="${escapeHtml(item.href)}" data-section-link="${escapeHtml(
        item.key
      )}">${escapeHtml(item.label)}</a>`;
    })
    .join("");

  return `
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand-link" href="${siteConfig.routes.home}">
          <span class="brand-mark">KB</span>
          <span class="brand-copy">
            <span class="brand-name">${siteConfig.ownerName}</span>
            <span class="brand-tag">${escapeHtml(siteConfig.roleLabel)}</span>
          </span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-label="Toggle navigation">Menu</button>
        <nav class="site-nav" aria-label="Main navigation">
          ${links}
          ${buildButton({
            label: "LinkedIn",
            href: siteConfig.linkedInUrl,
            variant: "btn-primary",
            external: true
          })}
        </nav>
      </div>
    </header>
  `;
}

function renderFooter() {
  const socialLinks = renderSocialLinks();
  const resumeButton = buildButton({
    label: "Resume",
    href: siteConfig.resumeUrl,
    variant: "btn",
    disabledMessage: siteConfig.resumePlaceholder
  });

  return `
    <footer class="site-footer">
      <div class="container footer-inner">
        <div class="footer-panel reveal">
          <div class="footer-grid">
            <div>
              <p class="footer-brand">${siteConfig.ownerName}</p>
              <p class="footer-small">${escapeHtml(siteConfig.roleTagline)}</p>
              <p class="footer-small">${escapeHtml(siteConfig.hiringStatus)}</p>
            </div>
            <div>
              <p class="footer-brand">Contact</p>
              <p class="footer-small"><a data-contact-link href="#"></a></p>
              <p class="footer-small"><span data-location></span></p>
            </div>
            <div>
              <p class="footer-brand">Links</p>
              <div class="footer-links">
                <a href="${siteConfig.routes.home}#demos">Demos</a>
                <a href="${escapeHtml(siteConfig.linkedInUrl)}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="${siteConfig.routes.genpromptly}">GenPromptly</a>
                <a href="${siteConfig.routes.privacy}">Privacy</a>
              </div>
            </div>
          </div>
          <div class="footer-actions">
            ${resumeButton}
            ${socialLinks ? `<div class="social-links">${socialLinks}</div>` : ""}
          </div>
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
        Billing URLs are configured in <span class="inline-path">assets/js/site-config.js</span>. The layout is ready for Stripe Payment Links first and can later point to Checkout or a customer portal.
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

    this.querySelectorAll(".site-nav a").forEach((link) => {
      link.addEventListener("click", () => {
        this.classList.remove("is-open");
        toggle?.setAttribute("aria-expanded", "false");
      });
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

function renderDemoCards() {
  return siteConfig.demos
    .map(
      (demo, index) => `
        <article class="demo-card reveal${index === 0 ? " is-featured" : ""}" style="--reveal-delay:${index * 120}ms">
          <div class="demo-frame">
            <img src="${escapeHtml(demo.image)}" alt="${escapeHtml(demo.imageAlt)}" />
            <div class="demo-visual-meta">
              <span class="demo-visual-label">System ${String(index + 1).padStart(2, "0")}</span>
              <span class="demo-visual-status">${escapeHtml(demo.status || demo.title)}</span>
            </div>
          </div>
          <div class="demo-copy">
            <div class="project-meta">
              <span class="eyebrow">Demo ${String(index + 1).padStart(2, "0")}</span>
              <span class="project-status">${escapeHtml(demo.status || demo.title)}</span>
            </div>
            <div class="demo-heading">
              <h3>${escapeHtml(demo.title)}</h3>
              <p class="demo-summary">${escapeHtml(demo.impact)}</p>
            </div>
            <div class="demo-chip-row">
              ${(demo.tags || [])
                .map((tag) => `<span class="demo-chip">${escapeHtml(tag)}</span>`)
                .join("")}
            </div>
            <div class="demo-list">
              <div class="demo-detail">
                <span class="detail-label">Problem</span>
                <p>${escapeHtml(demo.problem)}</p>
              </div>
              <div class="demo-detail">
                <span class="detail-label">Flow</span>
                <p>${escapeHtml(demo.flow)}</p>
              </div>
              <div class="demo-detail">
                <span class="detail-label">Stack</span>
                <p>${escapeHtml(demo.stack)}</p>
              </div>
              <div class="demo-detail is-output">
                <span class="detail-label">Outcome</span>
                <p>${escapeHtml(demo.output)}</p>
              </div>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function applySiteTokens() {
  document.querySelectorAll("[data-contact-link]").forEach((element) => {
    if (element instanceof HTMLAnchorElement) {
      element.href = `mailto:${siteConfig.contactEmail}`;
      element.textContent = siteConfig.contactEmail;
    }
  });

  document.querySelectorAll("[data-contact-button]").forEach((element) => {
    if (element instanceof HTMLAnchorElement) {
      element.href = `mailto:${siteConfig.contactEmail}`;
    }
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

  document.querySelectorAll("[data-resume-button]").forEach((element) => {
    element.innerHTML = buildButton({
      label: "Resume",
      href: siteConfig.resumeUrl,
      disabledMessage: siteConfig.resumePlaceholder
    });
  });

  document.querySelectorAll("[data-linkedin-button]").forEach((element) => {
    element.innerHTML = buildButton({
      label: "LinkedIn",
      href: siteConfig.linkedInUrl,
      variant: element.getAttribute("data-variant") || "",
      external: true
    });
  });

  document.querySelectorAll("[data-hiring-status]").forEach((element) => {
    element.textContent = siteConfig.hiringStatus;
  });

  document.querySelectorAll("[data-role-tagline]").forEach((element) => {
    element.textContent = siteConfig.roleTagline;
  });

  document.querySelectorAll("[data-demo-grid]").forEach((element) => {
    element.innerHTML = renderDemoCards();
  });
}

function setupSectionObserver() {
  const links = Array.from(document.querySelectorAll("[data-section-link]"));
  const sections = Array.from(document.querySelectorAll("[data-section]"));

  if (!links.length || !sections.length || !("IntersectionObserver" in window)) {
    return;
  }

  const linkBySection = new Map(
    links.map((link) => [link.getAttribute("data-section-link"), link])
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        links.forEach((link) => link.classList.remove("is-active"));
        linkBySection.get(entry.target.id)?.classList.add("is-active");
      });
    },
    { rootMargin: "-40% 0px -45% 0px", threshold: 0.05 }
  );

  sections.forEach((section) => observer.observe(section));
}

function setupRevealObserver() {
  const items = Array.from(document.querySelectorAll(".reveal"));
  if (!items.length) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.16 }
  );

  items.forEach((item) => observer.observe(item));
}

customElements.define("site-navbar", SiteNavbar);
customElements.define("site-footer", SiteFooter);

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    applySiteTokens();
    setupSectionObserver();
    setupRevealObserver();
  });
} else {
  applySiteTokens();
  setupSectionObserver();
  setupRevealObserver();
}
