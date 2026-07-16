---
title: Home
description: Jordan Dowdy is a PhD student researching reinforcement learning in robotics at the University of Louisville.
permalink: /
---

<section class="hero">
  <p class="eyebrow">Robot learning · Reinforcement learning · Embodied systems</p>
  <h1>Building robots that learn,<br><span>adapt, and act.</span></h1>
  <p class="hero__lede">I’m Jordan Dowdy, a PhD student at the University of Louisville researching reinforcement learning in robotics.</p>
  <div class="hero__actions">
    <a class="button button--primary" href="{{ '/current-work/' | relative_url }}">See my current work <span aria-hidden="true">→</span></a>
    <a class="button button--secondary" href="{{ '/projects/' | relative_url }}">Browse projects</a>
  </div>
  <dl class="hero__facts" aria-label="Profile at a glance">
    <div>
      <dt>Current role</dt>
      <dd>PhD researcher</dd>
    </div>
    <div>
      <dt>Institution</dt>
      <dd>University of Louisville</dd>
    </div>
    <div>
      <dt>Primary field</dt>
      <dd>Robot learning</dd>
    </div>
  </dl>
</section>

<section class="section section--rule research-directions">
  <div class="section-heading">
    <div>
      <p class="eyebrow">Research directions</p>
      <h2>Learning systems for robots in the real world.</h2>
    </div>
    <a class="text-link" href="{{ '/current-work/' | relative_url }}">Current work <span aria-hidden="true">→</span></a>
  </div>

  <div class="direction-grid">
    {% for item in site.data.current_work %}
      <article class="direction-card">
        <div class="direction-card__top">
          <span>0{{ forloop.index }}</span>
          <span>{{ item.status }}</span>
        </div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.summary }}</p>
      </article>
    {% endfor %}
  </div>
</section>

<aside class="question-panel" aria-labelledby="question-title">
  <div>
    <p class="eyebrow">Question in focus</p>
    <h2 id="question-title">How can learned behavior stay useful when the world changes?</h2>
    <p>The work connects learning algorithms with careful simulation, evaluation, and embodied sensing.</p>
  </div>
  <a class="text-link" href="{{ '/current-work/' | relative_url }}">Explore the research <span aria-hidden="true">↗</span></a>
</aside>

<section class="section section--rule">
  <div class="section-heading">
    <div>
      <p class="eyebrow">Selected projects</p>
      <h2>Recent work in robotics</h2>
    </div>
    <a class="text-link" href="{{ '/projects/' | relative_url }}">All projects <span aria-hidden="true">→</span></a>
  </div>

  <div class="project-list project-list--compact">
    {% assign featured = site.data.projects | where: "featured", true %}
    {% for project in featured %}
      <a class="project-row" href="{{ project.url | escape }}" target="_blank" rel="noopener noreferrer" aria-label="{{ project.name | escape }} (opens in a new tab)">
        <span class="project-row__index">0{{ forloop.index }}</span>
        <span class="project-row__body">
          <strong>{{ project.name }}</strong>
          <span>{{ project.summary }}</span>
        </span>
        <span class="project-row__meta">{{ project.language }}</span>
        <span class="project-row__arrow" aria-hidden="true">↗</span>
      </a>
    {% endfor %}
  </div>
</section>

<section class="cta-band">
  <div>
    <p class="eyebrow">Follow the work</p>
    <h2>Research record and professional updates</h2>
    <p>Google Scholar holds the current academic record, while LinkedIn carries broader professional updates.</p>
  </div>
  <div class="cta-band__actions">
    <a class="button button--light" href="{{ site.data.profile.social[3].url | escape }}" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar (opens in a new tab)">Google Scholar <span aria-hidden="true">↗</span></a>
    <a class="button button--ghost-light" href="{{ site.data.profile.social[2].url | escape }}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)">LinkedIn <span aria-hidden="true">↗</span></a>
  </div>
</section>
