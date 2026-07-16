---
title: Publications
description: Publications and academic work by Jordan Dowdy.
permalink: /publications/
---

<header class="page-header">
  <p class="eyebrow">Research record</p>
  <h1>Publications</h1>
  <p>Peer-reviewed conference papers, preprints, and graduate thesis work in robot learning, locomotion, sensing, and human-robot interaction.</p>
  <a class="text-link page-header__link" href="https://scholar.google.com/citations?user=HWy_m9cAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar profile (opens in a new tab)">Google Scholar profile <span aria-hidden="true">↗</span></a>
</header>

<section class="publication-cards publication-cards--page" aria-label="Publication list">
  {% for publication in site.data.publications %}
    {% include publication-card.html publication=publication heading_level=2 %}
  {% endfor %}
</section>
