---
title: About
description: About Jordan Dowdy and his work in robotics research.
permalink: /about/
---

<header class="page-header">
  <p class="eyebrow">Background</p>
  <h1>About</h1>
</header>

<section class="about-layout section--rule">
  <div class="about-monogram" aria-hidden="true">JD</div>
  <div class="about-copy">
    <p class="about-lede">I’m a PhD candidate at the University of Louisville researching reinforcement learning in robotics.</p>
    <p>I’m interested in learning-based methods that help robots adapt, act autonomously, and make better use of the signals available to them.</p>
    <p>This site brings together my current research directions, selected public code, academic record, and professional background.</p>

    <div class="interest-list" aria-label="Research themes">
      <p class="eyebrow">Research themes</p>
      <ul>
        <li>Robot learning</li>
        <li>Reinforcement learning</li>
        <li>Simulation and evaluation</li>
        <li>Force and tactile sensing</li>
        <li>Embodied systems</li>
      </ul>
    </div>

    <div class="about-links">
      {% for social in site.data.profile.social %}
        <a href="{{ social.url | escape }}" target="_blank" rel="noopener noreferrer" aria-label="{{ social.label | escape }} (opens in a new tab)">
          <span class="about-links__icon">{% include icon.html name=social.icon %}</span>
          <span>{{ social.label }}</span>
          <span aria-hidden="true">↗</span>
        </a>
      {% endfor %}
    </div>
  </div>
</section>
