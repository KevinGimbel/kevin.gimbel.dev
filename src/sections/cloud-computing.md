---
title: "Cloud Computing"
styles: []
icon: "🌩"
sub_heading: |
  Computers! Computers! Computers! <a href="https://www.youtube.com/watch?v=Vhh_GeBPOhs">👏</a>
position: 100
accent_id: 1
skills:
  - Elastic Container Services (ECS)
  - Elastic Compute Cloud (EC2)
  - Auto-scaling Groups
  - Intensive, automatic resource tagging to monitor budgets
  - Security Groups and Ingress Control
  - AWS Load Balancers and Traefik Edge Proxy
  - VPC and subnet management
---

I've worked with _Amazon Web Services_ intensively between 2018 and 2021 and was a AWS Certified Developer from May 2019, but my certificate has expired.</p>

Between 2018 and 2021 I was invloved in planning and provisioning infrastructure for a microservice-based product called [Konekti](https://synoa.de/konekti/). During this time I gained extensive knowledge of:

<section id="cloud-computing" class="[ f-ultra bg-accent-1 stack ] [ gr-auto gc-full ] [ c-full-width c-full-height ]" style="--spacing: 4rem;" data-icon="{{ page.icon }}">
    <hgroup>
      <h3 class="f-heading-big">{{ page.title }} {{ page.icon }}</h3>
      <h4>{{ page.sub_heading | safeHTML }}</h4>
    </hgroup>
    <div class="content">
      {{ content }}
      <ul class="[ d-grid ] [ c-skill-list ] list-accent" style="--grid-columns: 3;">
        {% for skill in page.skills %}
        <li class="[ c-skill-list__item ]">{{ skill | safeHTML }}</li>
        {% endfor %}
      </ul>
    </div>
  </section>
