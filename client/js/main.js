
/* =====================================================
   POINT D'ENTRÉE DU PORTFOLIO
   Affichage, fiches projets, navigation et formulaire
   ===================================================== */

import { SKILLS, PROJECTS, SOCIAL } from "./data.js";

(function () {
  "use strict";

  /* ---------- Création d'éléments HTML ---------- */

  function el(tag, props = {}, children = []) {
    const node = document.createElement(tag);

    Object.entries(props).forEach(([key, value]) => {
      if (value === null || value === undefined) return;

      if (key === "class") {
        node.className = value;
      } else if (key === "text") {
        node.textContent = value;
      } else {
        node.setAttribute(key, String(value));
      }
    });

    children.forEach(child => {
      if (child) node.appendChild(child);
    });

    return node;
  }

  // Crée une étiquette pour une compétence ou une technologie.
  function tagEl(label, dark = false) {
    return el("span", {
      class: "tag" + (dark ? " d" : ""),
      text: label
    });
  }

  // Crée une étiquette technologique avec son icône éventuelle.
  function techEl(tech) {
    return el("span", { class: "tag tech" }, [
      tech.logo
        ? el("img", {
            src: "assets/icons/" + tech.logo + ".svg",
            alt: "",
            width: "16",
            height: "16"
          })
        : null,
      document.createTextNode(tech.nom)
    ]);
  }

  /* ---------- Affichage des compétences ---------- */

  function renderSkills() {
    const grid = document.getElementById("skills-grid");

    if (!grid) {
      console.error("Élément #skills-grid introuvable.");
      return;
    }

    grid.replaceChildren();

    SKILLS.forEach(skill => {
      const card = el("div", { class: "card" }, [
        el("h3", { text: skill.titre }),
        ...skill.tags.map(tag => tagEl(tag, skill.dark))
      ]);

      grid.appendChild(card);
    });
  }

  /* ---------- Affichage des projets ---------- */

  function renderProjects() {
    const grid = document.getElementById("projects-grid");

    if (!grid) {
      console.error("Élément #projects-grid introuvable.");
      return;
    }

    grid.replaceChildren();

    PROJECTS.forEach(project => {
      const shot = el("div", {
        class: "shot" + (project.sombre ? " k" : "")
      });

      if (project.image) {
        shot.appendChild(
          el("img", {
            src: project.image,
            alt: project.legende || project.titre,
            loading: "lazy"
          })
        );
      } else {
        shot.textContent = project.legende || project.titre;
      }

      const links = el("div", { class: "pl" });

      // Bouton d'ouverture de la fiche détaillée.
      if (project.fiche !== false) {
        
const button = el("button", {
  class: "linkbtn",
  type: "button",
  text: "Voir la fiche"
});

// Précise le nom du projet pour les technologies d'assistance.
button.setAttribute(
  "aria-label",
  `Voir la fiche du projet ${project.titre}`
);

button.addEventListener("click", () => openProject(project));
links.appendChild(button);
      }

      // Certains projets, comme Menu Maker, n'ont pas de lien GitHub.
      if (project.liens?.github) {
        links.appendChild(
          el("a", {
            href: project.liens.github,
            target: "_blank",
            rel: "noopener noreferrer",
            text: "GitHub"
          })
        );
      }

      if (project.liens?.demo) {
        links.appendChild(
          el("a", {
            href: project.liens.demo,
            target: "_blank",
            rel: "noopener noreferrer",
            text: "Démo"
          })
        );
      }

      grid.appendChild(
        el("article", { class: "card proj" }, [
          shot,
          el("div", { class: "pb" }, [
            el("h3", { text: project.titre }),
            el("p", { text: project.description }),
            el("div", { class: "res", text: project.resultat }),
            el("div", {}, project.tags.map(tag => tagEl(tag))),
            links
          ])
        ])
      );
    });
  }

  /* ---------- Fiches détaillées des projets ---------- */

  const dialog = document.getElementById("project-dialog");
  const dialogBody = document.getElementById("dialog-body");

  let lastTrigger = null;

  function section(titre, ...contenu) {
    return el("section", { class: "fiche-sec" }, [
      el("h4", { text: titre }),
      ...contenu.filter(Boolean)
    ]);
  }

  function openProject(project) {
    if (!dialog || !dialogBody) {
      console.error("La fenêtre de fiche projet est introuvable.");
      return;
    }

    lastTrigger = document.activeElement;
    dialogBody.replaceChildren();

    dialogBody.appendChild(
      el("div", {
        class: "eyebrow",
        text: "Fiche projet"
      })
    );

    dialogBody.appendChild(
      el("h3", {
        id: "dialog-title",
        text: project.titre
      })
    );

    dialogBody.appendChild(
      el("p", {
        class: "fiche-sub",
        text: project.sousTitre || ""
      })
    );

    if (project.contexte) {
      dialogBody.appendChild(
        section(
          "Contexte",
          el("p", { text: project.contexte })
        )
      );
    }

    if (project.objectifs) {
      dialogBody.appendChild(
        section(
          "Objectifs",
          el("p", { text: project.objectifs })
        )
      );
    }

    if (project.technologies?.length) {
      dialogBody.appendChild(
        section(
          "Technologies utilisées",
          el("div", {
            class: "tech-row"
          }, project.technologies.map(techEl)),
          project.technoTexte
            ? el("p", { text: project.technoTexte })
            : null
        )
      );
    }

    if (project.competences) {
      dialogBody.appendChild(
        section(
          "Compétences développées",
          el("p", { text: project.competences })
        )
      );
    }

    if (project.resultats) {
      const content = [
        el("p", { text: project.resultats })
      ];

      if (project.scores?.length) {
        content.push(
          el("div", {
            class: "scores"
          }, project.scores.map(score =>
            el("div", { class: "score" }, [
              el("b", { text: String(score.valeur) }),
              el("span", { text: score.label })
            ])
          ))
        );

        content.push(
          el("p", {
            class: "note",
            text: "Scores Lighthouse de l'audit final"
          })
        );
      }

      dialogBody.appendChild(
        section("Résultats et impact", ...content)
      );
    }

    if (project.perspectives) {
      dialogBody.appendChild(
        section(
          "Perspectives d'amélioration",
          el("p", { text: project.perspectives })
        )
      );
    }

    // Affiche les captures si elles existent.
    const captures = project.captures?.length
      ? el("div", {
          class: "caps"
        }, project.captures.map(src =>
          el("img", {
            src,
            alt: "Capture du projet " + project.titre,
            loading: "lazy"
          })
        ))
      : el("p", {
          class: "note",
          text: "Captures d'écran à venir."
        });

    dialogBody.appendChild(
      section("Captures d'écran", captures)
    );

    // Les liens sont facultatifs.
    const links = el("div", { class: "cta" });

    if (project.liens?.github) {
      links.appendChild(
        el("a", {
          class: "btn p",
          href: project.liens.github,
          target: "_blank",
          rel: "noopener noreferrer",
          text: "Voir le dépôt GitHub"
        })
      );
    }

    if (project.liens?.demo) {
      links.appendChild(
        el("a", {
          class: "btn s",
          href: project.liens.demo,
          target: "_blank",
          rel: "noopener noreferrer",
          text: "Voir le projet"
        })
      );
    }

    if (links.children.length) {
      dialogBody.appendChild(
        section("Liens et ressources", links)
      );
    }

    if (!dialog.open) {
      dialog.showModal();
    }

    dialog.scrollTop = 0;
  }

  function initDialog() {
    if (!dialog) return;

    const closeButton = document.getElementById("dialog-close");

    if (closeButton) {
      closeButton.addEventListener("click", () => dialog.close());
    }

    dialog.addEventListener("click", event => {
      if (event.target === dialog) dialog.close();
    });

    dialog.addEventListener("close", () => {
      if (lastTrigger && typeof lastTrigger.focus === "function") {
        lastTrigger.focus();
      }
    });
  }

  /* ---------- Menu de navigation mobile ---------- */

  function initMenu() {
    const burger = document.getElementById("burger");
    const links = document.getElementById("links");

    if (!burger || !links) return;

    function setOpen(open) {
      links.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", String(open));
    }

    burger.addEventListener("click", () => {
      setOpen(!links.classList.contains("open"));
    });

    links.addEventListener("click", event => {
      if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") setOpen(false);
    });
  }

  /* ---------- Mise en évidence du lien actif ---------- */

  function initActiveLink() {
    const navLinks = document.querySelectorAll(
      '.links a[href^="#"]:not(.btn)'
    );

    if (!("IntersectionObserver" in window)) return;

    const sections = [...navLinks]
      .map(link => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        navLinks.forEach(link => {
          link.classList.toggle(
            "on",
            link.getAttribute("href") === "#" + entry.target.id
          );
        });
      });
    }, {
      rootMargin: "-45% 0px -50% 0px"
    });

    sections.forEach(section => observer.observe(section));
  }

  /* ---------- Formulaire de contact ---------- */

  function initForm() {
    const form = document.getElementById("contact-form");
    const msg = document.getElementById("form-msg");

    if (!form || !msg) {
      console.error("Formulaire ou zone de message introuvable.");
      return;
    }

    const submitButton = form.querySelector(
      'button[type="submit"]'
    );

    const fields = [
      {
        id: "n",
        err: "Merci d'indiquer ton nom.",
        ok: value => value.trim().length >= 2
      },
      {
        id: "e",
        err: "Email invalide.",
        ok: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
      },
      {
        id: "m",
        err: "Ton message doit contenir au moins 10 caractères.",
        ok: value => value.trim().length >= 10
      }
    ];

    form.addEventListener("submit", async event => {
      event.preventDefault();

      let valid = true;

      fields.forEach(field => {
        const input = document.getElementById(field.id);
        const errorElement = document.getElementById(field.id + "-err");

        if (!input) {
          valid = false;
          return;
        }

        const good = field.ok(input.value);

        input.setAttribute("aria-invalid", String(!good));

        if (errorElement) {
          errorElement.textContent = good ? "" : field.err;
        }

        if (!good) valid = false;
      });

      if (!valid) {
        msg.textContent = "Merci de corriger les champs indiqués.";
        const firstInvalid=fields.map(
          field=>document.getElementById(field.id)
        ).find(input=>input?.getAttribute("aria-invalid")==="true");
          firstInvalid?.focus();
        return;
      }


      if (submitButton?.disabled) return;

      const nom = document.getElementById("n").value.trim();
      const email = document.getElementById("e").value.trim();
      const message = document.getElementById("m").value.trim();

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Envoi en cours...";
      }

      msg.textContent = "Envoi de ton message...";
      msg.setAttribute("role", "status");
      msg.setAttribute("aria-live", "polite");

      try {
        /*
         * En local, le backend doit fonctionner sur le port 3000.
         * Pour GitHub Pages, remplace cette adresse par l'URL
         * publique de ton backend Node.js hébergé.
         */
        const response = await fetch(
          "https://portfolioelys.onrender.com/api/contact",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ nom, email, message })
          }
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(
            result.message || "L'envoi du message a échoué."
          );
        }

        msg.textContent =
          result.message || "Ton message a bien été envoyé !";

        form.reset();

        fields.forEach(field => {
          const input = document.getElementById(field.id);
          const errorElement = document.getElementById(field.id + "-err");

          if (input) input.setAttribute("aria-invalid", "false");
          if (errorElement) errorElement.textContent = "";
        });

      } catch (error) {
        console.error("Erreur lors de l'envoi :", error);

        msg.textContent =
          "Impossible d'envoyer le message. Vérifie que le serveur est démarré et que l'adresse de l'API est correcte.";

      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = "Envoyer";
        }
      }
    });
  }

  /* ---------- Initialisation générale ---------- */

  // Affiche automatiquement l'année actuelle dans le pied de page.
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Configure les liens vers les réseaux sociaux.
  const github = document.getElementById("link-github");
  const linkedin = document.getElementById("link-linkedin");

  if (github) github.href = SOCIAL.github;
  if (linkedin) linkedin.href = SOCIAL.linkedin;

  // Initialise toutes les fonctionnalités du portfolio.
  renderSkills();
  renderProjects();
  initDialog();
  initMenu();
  initActiveLink();
  initForm();

})();
