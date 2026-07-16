---
title: Current Work
description: Current research interests and work by Jordan Dowdy.
permalink: /current-work/
---

<header class="page-header">
  <p class="eyebrow">Research now</p>
  <h1>Current Work</h1>
  <p>I study reinforcement learning in robotics, with an interest in how learned behavior can help robots adapt and operate more autonomously.</p>
</header>

<section class="section section--rule">
  <div class="research-list">
    {% for item in site.data.current_work %}
      <article class="research-card">
        <div class="research-card__marker" aria-hidden="true">0{{ forloop.index }}</div>
        <div>
          <p class="status"><span></span>{{ item.status }}</p>
          <h2>{{ item.title }}</h2>
          <p class="research-card__summary">{{ item.summary }}</p>
          <p class="research-card__question"><strong>Current question</strong>{{ item.question }}</p>
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="note-panel">
  <p class="eyebrow">Through line</p>
  <h2>Learning is only useful when behavior holds up under change.</h2>
  <p>These directions connect algorithm design with the practical questions of evaluation, sensing, and eventual deployment.</p>
</section>
