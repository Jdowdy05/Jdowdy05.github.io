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
    <p class="about-lede">Jordan Dowdy is a PhD student at the University of Louisville researching reinforcement learning in robotics.</p>
    <p>His work focuses on learning-based methods for robotic behavior, adaptation, and autonomy. This site brings together current research, publications, selected public projects, and professional background.</p>
    <p>For the latest code and academic record, follow the profiles below.</p>

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
