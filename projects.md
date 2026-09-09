---
title: Projects
description: Software and hardware projects by Jordan Dowdy in XR robot simulation, tactile sensing, and robotic hardware.
permalink: /projects/
---

<header class="page-header">
  <p class="eyebrow">Software and hardware</p>
  <h1>Projects</h1>
  <p>Projects in robot simulation, tactile sensing, and robot mechanisms. Explore the repositories for source code, design files, and documentation.</p>
</header>

<section class="project-grid" aria-label="Selected projects">
  {% for project in site.data.projects %}
    <a class="project-card" href="{{ project.url | escape }}" target="_blank" rel="noopener noreferrer" aria-label="{{ project.title | escape }} on GitHub (opens in a new tab)">
      <div class="project-card__top">
        <span>{{ project.category | escape }}</span>
        <span class="project-card__arrow" aria-hidden="true">↗</span>
      </div>
      <div>
        <h2>{{ project.title | escape }}</h2>
        <p>{{ project.summary | escape }}</p>
      </div>
      <p>View on GitHub</p>
    </a>
  {% endfor %}
</section>

<section class="note-panel" aria-label="Related research">
  <p class="eyebrow">Research record</p>
  <h2>Publications</h2>
  <p>Explore the publication record for research papers and related work.</p>
  <div class="projects-empty__actions">
    {% comment %}Temporarily hidden while current-work.md is unpublished.
    <a class="button button--secondary" href="{{ '/current-work/' | relative_url }}">Current work</a>
    {% endcomment %}
    <a class="button button--primary" href="{{ '/publications/' | relative_url }}">Publications</a>
  </div>
</section>
