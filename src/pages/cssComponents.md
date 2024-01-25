---
draft: false
hide_title: false
title: cssComponents
sidebar_label: Document
---
# CSS Components

**Alert**
<div class="alert alert--info" role="alert">
    <p><strong> Alert ! </strong> For your information only.</p>
</div>

<div class="spacing-hr-line"></div>

**Highlight Text Badge** :
<span class="badge badge--warning">yarn.xml</span>
<span class="badge badge--danger">yarn.xml</span>
<span class="badge badge--info">yarn.xml</span>
<span class="badge badge--primary">yarn.xml</span>
<!-- <span class="badge badge--secondary">yarn.xml</span> -->

<div class="spacing-hr-line"></div>

**Highlight Buttons**

<button class="button button--primary button--outline button--lg"> Hover Button </button>
<button class="button button--warning button--outline button--lg"> Hover Button </button>
<button class="button button--danger button--outline button--lg"> Hover Button </button>
<button class="button button--info button--outline button--lg"> Hover Button </button>
<!-- <button class="button button--secondary button--outline button--lg"> Hover Button </button> -->

<div class="spacing-hr-line"></div>

**Bullets**

<span class="badge badge--primary">1</span> Package.json
<span class="badge badge--primary">2</span> Docker-compose.yml
<span class="badge badge--primary">3</span> Readme.md

<span class="badge badge--info ">4</span> Package.json

<span class="badge badge--info">5</span> Docker-compose.yml

<span class="badge badge--info">6</span> Get Started with Doploying media & entertainment applications <span class="badge badge--secondary"> https://github.com/facebook/docusaurus/pull/6599</span>

<div class="spacing-hr-line"></div>

**Small Bullets**
<ul class="square">
<li> Receive project updates, announcements, and feature releases.</li>
<li>Get assistance and support from fellow members and experts.</li>
<li>Share your insights, feedback, and ideas for continuous improvement.</li>
<li>Engage in discussions, ask questions, and stay in the loop.</li>
</ul>

<div class="spacing-hr-line"></div>

**Table 1**
<!-- Table head -->
<div class="row">
    <div class="col col--4  border-bottom-2">
      <div class="col-demo th">Port Type</div>
    </div>
    <div class="col col--4  border-bottom-2">
      <div class="col-demo th">Port Number</div>
    </div>
    <div class="col col--4  border-bottom-2">
      <div class="col-demo th">Description</div>
    </div>
  </div>
  <!-- Table row -->
  <div class="row">
    <div class="col col--4  border-bottom-1">
      <div class="col-demo tr">HTTP</div>
    </div>
    <div class="col col--4  border-bottom-1">
      <div class="col-demo tr">80</div>
    </div>
    <div class="col col--4  border-bottom-1">
      <div class="col-demo tr"><span class="hightlight-word">Christmas Application is on port 80</span></div>
    </div>
  </div>
  <div class="row">
  <div class="col col--4  border-bottom-1">
    <div class="col-demo tr">TCP</div>
  </div>
  <div class="col col--4  border-bottom-1">
    <div class="col-demo tr">-</div>
  </div>
  <div class="col col--4  border-bottom-1">
    <div class="col-demo tr">-</div>
  </div>
</div>

<div class="spacing-hr-line"></div>

**Table 2**

<!-- Table head -->
<div class="row">
    <div class="col col--6  border-bottom-double">
      <div class="col-demo th">Key </div>
    </div>
    <div class="col col--6  border-bottom-double">
      <div class="col-demo th">Value</div>
    </div>
</div>
  <!-- Table row -->
  <div class="row">
    <div class="col col--6  border-bottom-1">
      <div class="col-demo tr">DATABASE URL </div>
    </div>
    <div class="col col--6  border-bottom-1">
      <div class="col-demo tr"> https://github.com/facebook/docusaurus/pull/6599</div>
    </div>     
  </div>
  <div class="row">
  <div class="col col--6  border-bottom-1">
    <div class="col-demo tr">POOL MODE</div>
  </div>
  <div class="col col--6  border-bottom-1">
    <div class="col-demo tr">Transition</div>
  </div>
</div>
<div class="row">
<div class="col col--6  border-bottom-1">
  <div class="col-demo tr">DEFAULT POOL SIZE</div>
</div>
<div class="col col--6  border-bottom-1">
  <div class="col-demo tr">80</div>
</div>
</div>

<div class="spacing-hr-line"></div>

**Pup-up**

<div class="row">
<div class = "col col--6">
<div class="card-demo border">
  <div class="card">
    <div class="card__header border-bottom-1 ">
      <div class="avatar">
        <img
          class="avatar__photo "   src="/img/665.png" />
        <div class="avatar__intro">
          <div class="avatar__name ">Scaleinfinte / Xampp</div>    
            </div>
      </div>
    </div>
    <div class="card__body ">
      <p>Application Name  </p>
      <div class="border p-1">Xampp 1111</div>
      <img  src="/img/slider.jpg"   />
  <span class="small-rext">
  (90% of your allocated resources (CPU, RAM) used for this application) 
  </span>

<input type="checkbox" checked="checked" /> HTTP

<input type="checkbox" checked="" />  TCP / UDP
    </div>    
    <div class="card__footer border-top-1">
      <div class="button-group button-group--block">
        <button class="button button--secondary">Previous</button>
        <button class="button button--warning">Install with default</button>
        <button class="button button--primary">Advance</button>
      </div>
    </div>
  </div>
</div>
</div>

<div class = "col col--6">
<div class="card-demo border">
  <div class="card">
    <div class="card__header border-bottom-1 ">
      <div class="avatar">
        <img
          class="avatar__photo "   src="/img/665.png" />
        <div class="avatar__intro">
          <div class="avatar__name ">Scaleinfinte / Xampp</div>    
            </div>
      </div>
    </div>
    <div class="card__body ">
      <p>ENV Variable  </p>
      <div class="border p-1">Enter variable</div >  
        Working Directory  

<div class="border p-1">Enter Working Directory</div >   
<input type="radio" checked="checked" /> Public
<input type="radio" checked="" />  Private
    </div>    
    <div class="card__footer border-top-1">
      <div class="button-group button-group--block">
         <button class="button button--info">Previous</button>
        <button class="button button--success">Install</button>
      </div>
    </div>
  </div>
</div>
</div>
</div>


