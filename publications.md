---
title: Publications
description: Publications and academic work by Jordan Dowdy.
permalink: /publications/
---

<header class="page-header">
  <p class="eyebrow">Research record</p>
  <h1>Publications</h1>
  <p>Research papers, preprints, and related academic work, with Google Scholar as the canonical public record.</p>
</header>

{% if site.data.publications.size > 0 %}
  <section class="publication-list section--rule">
    {% for publication in site.data.publications %}
      <article class="publication">
        <p class="publication__year">{{ publication.year }}</p>
        <div>
          <h2><a href="{{ publication.url }}">{{ publication.title }}</a></h2>
          <p>{{ publication.authors }}</p>
          <p class="publication__venue">{{ publication.venue }}</p>
        </div>
      </article>
    {% endfor %}
  </section>
{% else %}
  <section class="record-panel section--rule">
    <div class="record-panel__mark" aria-hidden="true">¶</div>
    <div class="record-panel__copy">
      <p class="eyebrow">Canonical record</p>
      <h2>Google Scholar</h2>
      <p>Use the Scholar profile for the most current publication list, citation information, and author record.</p>
      <div class="record-actions">
        <a class="button button--primary" href="https://scholar.google.com/citations?user=HWy_m9cAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer" aria-label="Open Google Scholar (opens in a new tab)">Open Google Scholar <span aria-hidden="true">↗</span></a>
        <a class="button button--secondary" href="{{ '/current-work/' | relative_url }}">Current research</a>
      </div>
    </div>
  </section>

  <section class="output-grid" aria-label="Related research outputs">
    <a href="{{ '/current-work/' | relative_url }}"><span>01</span><strong>Research directions</strong><small>Questions and active themes</small></a>
    <a href="{{ '/projects/' | relative_url }}"><span>02</span><strong>Projects</strong><small>Robotics systems and experiments</small></a>
    <a href="https://github.com/Jdowdy05" target="_blank" rel="noopener noreferrer" aria-label="GitHub repositories (opens in a new tab)"><span>03</span><strong>Code</strong><small>Public repositories on GitHub</small></a>
  </section>
{% endif %}
