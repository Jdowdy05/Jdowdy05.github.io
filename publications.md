---
title: Publications
description: Publications and academic work by Jordan Dowdy.
permalink: /publications/
---

<header class="page-header">
  <p class="eyebrow">Research record</p>
  <h1>Publications</h1>
  <p>Papers, preprints, and other academic work will be collected here as the publication archive is completed.</p>
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
  <section class="empty-state empty-state--scholar">
    <div class="empty-state__mark" aria-hidden="true">¶</div>
    <div>
      <p class="eyebrow">Full record</p>
      <h2>Visit Google Scholar</h2>
      <p>Google Scholar has the latest public citation record while this page is being assembled.</p>
      <a class="button button--primary" href="https://scholar.google.com/citations?user=HWy_m9cAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer" aria-label="Open Google Scholar (opens in a new tab)">Open Google Scholar <span aria-hidden="true">↗</span></a>
    </div>
  </section>
{% endif %}
