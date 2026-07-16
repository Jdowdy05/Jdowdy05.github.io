---
title: CV
description: Curriculum vitae for Jordan Dowdy.
permalink: /cv/
---

<header class="page-header page-header--split">
  <div>
    <p class="eyebrow">Experience and education</p>
    <h1>Curriculum Vitae</h1>
  </div>
  {% if site.cv_pdf != "" %}
    <a class="button button--primary" href="{{ site.cv_pdf | relative_url }}" target="_blank" rel="noopener noreferrer">
      <span class="button__icon" aria-hidden="true">{% include icon.html name="cv" %}</span>
      Open PDF
    </a>
  {% endif %}
</header>

<section class="cv-document section--rule" aria-labelledby="cv-document-heading">
  <div class="cv-document__header">
    <div>
      <h2 id="cv-document-heading">Curriculum Vitae</h2>
      <p>This is a temporary CV placeholder. The complete document will replace it later.</p>
    </div>
    <a class="button button--secondary" href="{{ site.cv_pdf | relative_url }}" target="_blank" rel="noopener noreferrer">
      <span class="button__icon" aria-hidden="true">{% include icon.html name="cv" %}</span>
      Open separately
    </a>
  </div>
  <object class="cv-document__viewer" data="{{ site.cv_pdf | relative_url }}#view=FitH" type="application/pdf" title="Embedded placeholder curriculum vitae for Jordan Dowdy">
    <p>Your browser cannot display the embedded PDF. <a href="{{ site.cv_pdf | relative_url }}">Open the CV PDF</a>.</p>
  </object>
</section>
