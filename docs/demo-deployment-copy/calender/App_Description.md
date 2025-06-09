---
draft: false
title: App Description
hide_title: true
---

<!-- # Build and run your apps with lightning speed and flexible -->
<div class="avatar " style={{ padding: '1rem',  backgroundColor: '#f1f2f35e',  margin: '1rem',
  border: '1px solid #f1f2f3'}}>
  <img    class="avatar__photo avatar__photo--xl"   src="https://cdn.scaleinfinite.fr/app-images-webp/alpine.webp" />
  <div class="avatar__intro">
    <div class="avatar__name-title">Alphine</div>  
  </div>


<!-- <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'flex-end', paddingBottom: '0.5rem' }}> -->
<div style={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  paddingBottom: '0.5rem',
  gap:'5px'
}}>
  <div><strong>4.3<span style={{ color: "#face1b" }} >★★★★</span></strong> (5.8K reviews)</div>
  <div><strong>10L+</strong> Downloads</div>
  <div><strong>Rated for</strong> 3+</div>
  <div><strong><a 
      href="#" 
      style={{ 
        padding: '0.5rem', 
        backgroundColor: "#7b81e0", 
        color: "#fff", 
        borderRadius: '5px', 
        textDecoration: 'none' 
      }}
    > Install App</a></strong></div>

</div>
</div>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.


---

## WebCode – HTML, CSS, JS IDE


### About this App

Discover quality products across fashion, home essentials, beauty, and more at affordable prices. For Indian businesses, Meesho provides a platform to reach millions of customers nationwide with easy order management and secure payments.

---

### Data Safety

- This app may share these data types with third parties: Location, Personal info, and others
- Data is encrypted in transit
- You can request that data be deleted

---

### Ratings and Reviews

**4.5★** · 68.7 lakh reviews

---

## Similar Apps


---
<!--  STATIC IMAGE

<div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'flex-start', paddingBottom: '0.5rem' }}>
  <div>
  <img    class="avatar__photo avatar__photo--xl" style= {{ borderRadius: '0' }}   src="https://cdn.scaleinfinite.fr/app-images-webp/alpine.webp" />
  <strong><span style={{ textAlign: 'center', display: 'block' }}>Alphine</span>4.3 <span style={{ color: "#face1b" }} >★★★★ </span></strong> <br/>(5.8K reviews)
  </div>
  <div>
  <img    class="avatar__photo avatar__photo--xl" style= {{ borderRadius: '0' }}   src="https://cdn.scaleinfinite.fr/app-images-webp/ubuntu.webp" />
  <strong><span style={{ textAlign: 'center', display: 'block' }}>Ubundu</span>4.8 <span style={{ color: "#face1b" }} >★★★★ </span></strong> <br/>(5.8K reviews)
  </div>
  <div>
  <img    class="avatar__photo avatar__photo--xl" style= {{ borderRadius: '0' }}   src="https://cdn.scaleinfinite.fr/app-images-webp/busybox.webp" />
  <strong><span style={{ textAlign: 'center', display: 'block' }}>Busybox</span>4.7 <span style={{ color: "#face1b" }} >★★★★ </span></strong> <br/>(5.8K reviews)
  </div>
  <div>
  <img    class="avatar__photo avatar__photo--xl" style= {{ borderRadius: '0' }}   src="https://cdn.scaleinfinite.fr/app-images-webp/python.webp" />
  <strong><span style={{ textAlign: 'center', display: 'block' }}>Python</span>4.3 <span style={{ color: "#face1b" }} >★★★★ </span></strong> <br/>(5.8K reviews)
  </div>
   <div>
  <img    class="avatar__photo avatar__photo--xl" style= {{ borderRadius: '0' }}   src="https://cdn.scaleinfinite.fr/app-images-webp/traefik.webp" />
  <strong><span style={{ textAlign: 'center', display: 'block' }}>Traefik</span>4.3 <span style={{ color: "#face1b" }} >★★★★ </span></strong> <br/>(5.8K reviews)
  </div>   
   <div>
  <img    class="avatar__photo avatar__photo--xl" style= {{ borderRadius: '0' }}   src="https://cdn.scaleinfinite.fr/app-images-webp/mysql.webp" />
  <strong><span style={{ textAlign: 'center', display: 'block' }}>Mysql</span>4.3 <span style={{ color: "#face1b" }} >★★★★ </span></strong> <br/>(5.8K reviews)
  </div>
</div> -->

<div
  style={{
    overflow: 'hidden',
    width: '100%',
    position: 'relative'
  }}
>
  <div
    id="slider"
    style={{
      display: 'flex',
      gap: '1.5rem',
      animation: 'scroll 20s linear infinite',
      width: 'max-content'
    }}
  >
    {[
      {
        name: 'Alpine',
        img: 'https://cdn.scaleinfinite.fr/app-images-webp/alpine.webp',
        rating: '4.3',
        reviews: '5.8K'
      },
      {
        name: 'Ubuntu',
        img: 'https://cdn.scaleinfinite.fr/app-images-webp/ubuntu.webp',
        rating: '4.8',
        reviews: '41.8K'
      },
      {
        name: 'Busybox',
        img: 'https://cdn.scaleinfinite.fr/app-images-webp/busybox.webp',
        rating: '4.7',
        reviews: '6.2K'
      },
      {
        name: 'Python',
        img: 'https://cdn.scaleinfinite.fr/app-images-webp/python.webp',
        rating: '4.3',
        reviews: '3.2K'
      },
      {
        name: 'Traefik',
        img: 'https://cdn.scaleinfinite.fr/app-images-webp/traefik.webp',
        rating: '4.3',
        reviews: '5.8K'
      },
      {
        name: 'MySQL',
        img: 'https://cdn.scaleinfinite.fr/app-images-webp/mysql.webp',
        rating: '4.3',
        reviews: '5.8K'
      }
    ].map((item, idx) => (
      <div key={idx} style={{ minWidth: '120px', textAlign: 'center' }}>
        <img
          src={item.img}
          style={{ width: '100px', borderRadius: '0' }}
          alt={item.name}
        />
        <strong>
          <span style={{ display: 'block' }}>{item.name}</span>
          {item.rating}{' '}
          <span style={{ color: '#face1b' }}>★★★★</span>
        </strong>
        <br />({item.reviews} reviews)
      </div>
    ))}
  </div>


  <style>
    {`
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}
  </style>
</div>

<br />
[Back to Top](#)
