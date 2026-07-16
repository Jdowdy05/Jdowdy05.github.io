---
title: Home
description: Jordan Dowdy is a PhD candidate researching reinforcement learning in robotics at the University of Louisville.
permalink: /
---

<header class="academic-intro">
  <p class="academic-intro__kicker">Robotics · Reinforcement learning · Human-robot interaction</p>
  <h1>Jordan Dowdy</h1>
  <p class="academic-intro__role">PhD candidate at the University of Louisville</p>

  <div class="profile-actions" role="group" aria-label="Profile links">
    <a class="profile-actions__cv" href="{{ '/cv/' | relative_url }}">CV</a>
    {% for social in site.data.profile.social %}
      <a class="profile-actions__social" href="{{ social.url | escape }}" target="_blank" rel="noopener noreferrer" aria-label="{{ social.label | escape }} (opens in a new tab)" title="{{ social.label | escape }}">
        {% include icon.html name=social.icon %}
      </a>
    {% endfor %}
  </div>

  <div class="academic-intro__copy">
    <p>I research reinforcement learning for embodied robots, with a focus on legged locomotion, sim-to-real transfer, and control that remains useful beyond a single training environment.</p>
    <p>My work also explores tactile sensing and physical human-robot interaction—connecting learning algorithms with the practical realities of sensing, evaluation, and deployment.</p>
  </div>
</header>

<section class="home-section" aria-labelledby="publications-heading">
  <div class="minimal-heading">
    <div>
      <p class="eyebrow">Research record</p>
      <h2 id="publications-heading">Publications</h2>
    </div>
    <a class="text-link" href="{{ '/publications/' | relative_url }}">View publication page <span aria-hidden="true">→</span></a>
  </div>

  <div class="publication-cards">
    {% assign featured_publications = site.data.publications | where: "featured", true %}
    {% for publication in featured_publications %}
      {% include publication-card.html publication=publication heading_level=3 %}
    {% endfor %}
  </div>
</section>

<section class="home-section" aria-labelledby="current-heading">
  <div class="minimal-heading">
    <div>
      <p class="eyebrow">Research now</p>
      <h2 id="current-heading">Current directions</h2>
    </div>
    <a class="text-link" href="{{ '/current-work/' | relative_url }}">More about the work <span aria-hidden="true">→</span></a>
  </div>

  <div class="research-strip">
    {% for item in site.data.current_work %}
      <article>
        <span>0{{ forloop.index }}</span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.summary }}</p>
      </article>
    {% endfor %}
  </div>
</section>

<section class="home-section" aria-labelledby="projects-heading">
  <div class="minimal-heading">
    <div>
      <p class="eyebrow">Selected code</p>
      <h2 id="projects-heading">Projects</h2>
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
