---
title: CV
description: Curriculum vitae for Jordan Dowdy.
permalink: /cv/
---

{% assign cv_url = site.cv_pdf | relative_url | append: '?v=' | append: site.cv_version %}

<header class="page-header page-header--split">
  <div>
    <p class="eyebrow">Experience and education</p>
    <h1>Curriculum Vitae</h1>
    <p class="cv-page-header__summary">Academic profile, research interests, and selected publications.</p>
  </div>
  {% if site.cv_pdf != "" %}
    <a class="button button--primary" href="{{ cv_url }}" target="_blank" rel="noopener noreferrer" aria-label="Open Jordan Dowdy's curriculum vitae PDF in a new tab">
      <span class="button__icon" aria-hidden="true">{% include icon.html name="cv" %}</span>
      Open PDF
    </a>
  {% endif %}
</header>

<section class="cv-document section--rule" aria-label="Curriculum vitae preview">
  <object class="cv-document__viewer" data="{{ cv_url }}#view=Fit&amp;navpanes=0" type="application/pdf" title="Curriculum vitae for Jordan Dowdy">
    <p>Your browser cannot display the embedded PDF. <a href="{{ cv_url }}">Open the CV PDF</a>.</p>
  </object>
  <figure class="cv-document__mobile-preview">
    <img src="{{ '/assets/images/cv/jordan-dowdy-cv-preview.png' | relative_url }}?v={{ site.cv_version }}" alt="First-page preview of Jordan Dowdy's curriculum vitae" width="1020" height="1320">
    <figcaption>PDF preview</figcaption>
  </figure>
</section>
