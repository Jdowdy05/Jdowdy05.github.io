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

<section class="snapshot-grid section--rule" aria-label="Academic snapshot">
  <article><span>01</span><p>Current role</p><h2>PhD candidate</h2></article>
  <article><span>02</span><p>Institution</p><h2>University of Louisville</h2></article>
  <article><span>03</span><p>Research focus</p><h2>Reinforcement learning for robotics</h2></article>
  <article><span>04</span><p>Research lab</p><h2><a href="{{ site.data.profile.lab.url | escape }}" target="_blank" rel="noopener noreferrer">{{ site.data.profile.lab.name }}</a></h2></article>
</section>

<section class="cv-document section--rule" aria-labelledby="cv-document-heading">
  <div class="cv-document__header">
    <div>
      <p class="eyebrow">Embedded document</p>
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
