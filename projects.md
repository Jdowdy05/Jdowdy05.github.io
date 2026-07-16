---
title: Projects
description: Selected public robotics and software projects by Jordan Dowdy.
permalink: /projects/
---

<header class="page-header">
  <p class="eyebrow">Selected code</p>
  <h1>Projects</h1>
  <p>Public work spanning robot learning, simulation, sensing, and robotics software.</p>
</header>

<section class="project-grid section--rule">
  {% for project in site.data.projects %}
    <a class="project-card" href="{{ project.url | escape }}" target="_blank" rel="noopener noreferrer" aria-label="{{ project.name | escape }} (opens in a new tab)">
      <div class="project-card__top">
        <span class="project-card__number">0{{ forloop.index }}</span>
        <span class="project-card__arrow" aria-hidden="true">↗</span>
      </div>
      <div>
        <h2>{{ project.name }}</h2>
        <p>{{ project.summary }}</p>
      </div>
      <span class="tag">{{ project.language }}</span>
    </a>
  {% endfor %}
</section>

<section class="note-panel note-panel--row">
  <div>
    <p class="eyebrow">More code</p>
    <h2>Explore the full GitHub profile.</h2>
  </div>
  <a class="button button--secondary" href="https://github.com/Jdowdy05?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="All repositories (opens in a new tab)">All repositories <span aria-hidden="true">↗</span></a>
</section>
