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
</section>

<section class="home-grid" aria-label="Research overview">
  <article class="statement-card statement-card--dark">
    <p class="card-kicker">Current focus</p>
    <h2>Reinforcement learning for robotics</h2>
    <p>Exploring learning-based methods that can improve robotic behavior, adaptation, and autonomy.</p>
    <a href="{{ '/current-work/' | relative_url }}">Research updates <span aria-hidden="true">↗</span></a>
  </article>

  <article class="statement-card">
    <p class="card-kicker">Selected code</p>
    <h2>Tools, systems, and experiments</h2>
    <p>A selection of public robotics projects spanning simulation, sensing, and robot-learning infrastructure.</p>
    <a href="{{ '/projects/' | relative_url }}">View projects <span aria-hidden="true">↗</span></a>
  </article>
</section>

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
    <p class="eyebrow">Research record</p>
    <h2>Publications and academic work</h2>
    <p>Follow the publication record on Google Scholar while this site’s publication archive is being assembled.</p>
  </div>
  <a class="button button--light" href="{{ site.data.profile.social[3].url | escape }}" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar (opens in a new tab)">Google Scholar <span aria-hidden="true">↗</span></a>
</section>
