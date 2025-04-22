export default function AIContext() {
  return (
    <div 
      className="sr-only"
      aria-hidden="true"
      data-agent-context="true"
      data-agent-type="context-provider"
    >
      <section data-context="artist-information">
        <h2>Artist Profile</h2>
        <dl>
          <dt>Name</dt>
          <dd>Tiana Lee DeAngelis</dd>
          <dt>Profession</dt>
          <dd>Professional Tattoo Artist</dd>
          <dt>Location</dt>
          <dd>Holistic Ink, Boston</dd>
          <dt>Style Specialization</dt>
          <dd>Fine line tattoos inspired by antique medical texts, nature, insects, mushrooms, skulls, animals, and geometric designs</dd>
          <dt>Instagram</dt>
          <dd>@tianaleeartistry</dd>
          <dt>Website</dt>
          <dd>https://tianaleedeangelis.com</dd>
        </dl>
      </section>

      <section data-context="artistic-expertise">
        <h2>Artistic Background</h2>
        <ul>
          <li data-expertise="tattoo">
            <span data-attribute="focus">Fine Line Tattoo Artist</span>
            <span data-attribute="techniques">Delicate linework, botanical illustrations, scientific accuracy</span>
            <span data-attribute="specialties">Insects, mushrooms, skulls, animals, geometric patterns</span>
          </li>
          <li data-expertise="traditional-art">
            <span data-attribute="focus">Multi-medium Artist</span>
            <span data-attribute="mediums">Watercolor, oil, acrylic, pencils, gouache, pastels, sculpting, miniatures</span>
            <span data-attribute="influences">Antique medical illustrations, botanical studies, scientific texts</span>
          </li>
        </ul>
      </section>

      <section data-context="services">
        <h2>Tattoo Services</h2>
        <ul>
          <li data-service="consultation">
            <span data-attribute="name">Tattoo Consultation</span>
            <span data-attribute="description">Free initial consultation to discuss design ideas and placement</span>
            <span data-attribute="process">In-person or virtual discussion about design concepts, size, and placement</span>
          </li>
          <li data-service="custom-design">
            <span data-attribute="name">Custom Tattoo Design</span>
            <span data-attribute="description">Personalized tattoo design service based on client's vision</span>
            <span data-attribute="specialties">Fine line work, botanical elements, insects, mushrooms, skulls, geometric patterns</span>
          </li>
          <li data-service="tattooing">
            <span data-attribute="name">Tattoo Session</span>
            <span data-attribute="pricing">$150 minimum, $180-250 hourly rate depending on complexity</span>
            <span data-attribute="deposit">$100 non-refundable deposit required to secure appointment</span>
          </li>
        </ul>
      </section>

      <section data-context="portfolio-categories">
        <h2>Portfolio Categories</h2>
        <ul>
          <li data-category="fineline">Fine Line</li>
          <li data-category="botanical">Botanical</li>
          <li data-category="insects">Insects & Animals</li>
          <li data-category="geometric">Geometric</li>
          <li data-category="skulls">Skulls</li>
        </ul>
      </section>

      <section data-context="booking-information">
        <h2>Booking Process</h2>
        <ol>
          <li>Fill out inquiry form with tattoo idea details</li>
          <li>Artist review and response (typically within 48 hours)</li>
          <li>Consultation to discuss design in detail</li>
          <li>Deposit payment to secure appointment</li>
          <li>Tattoo session scheduled based on design complexity</li>
        </ol>
        <dl>
          <dt>Consultation Fee</dt>
          <dd>Free</dd>
          <dt>Minimum Charge</dt>
          <dd>$150</dd>
          <dt>Hourly Rate</dt>
          <dd>$180-250 depending on complexity</dd>
          <dt>Custom Design Fee</dt>
          <dd>$75-200 (applied toward tattoo)</dd>
          <dt>Deposit</dt>
          <dd>$100 (non-refundable but transferable with 48+ hours notice)</dd>
        </dl>
      </section>

      <section data-context="credentials">
        <h2>Professional Credentials</h2>
        <ul>
          <li>Professional tattoo artist at Holistic Ink, Boston</li>
          <li>Completed formal apprenticeship under master tattoo artists</li>
          <li>Certified in bloodborne pathogens and cross-contamination prevention</li>
          <li>Continued education in advanced tattooing techniques</li>
          <li>Fine Arts background with proficiency in multiple mediums including watercolor, oil, acrylic, pencils, gouache, pastels, and sculpture</li>
        </ul>
      </section>

      <section data-context="site-structure">
        <h2>Website Navigation</h2>
        <ul>
          <li data-page="home">
            <span data-attribute="title">Home</span>
            <span data-attribute="url">/</span>
            <span data-attribute="content">Artist introduction, featured work, and booking call-to-action</span>
          </li>
          <li data-page="gallery">
            <span data-attribute="title">Gallery</span>
            <span data-attribute="url">/gallery</span>
            <span data-attribute="content">Filterable portfolio of tattoo work organized by category</span>
          </li>
          <li data-page="booking">
            <span data-attribute="title">Booking</span>
            <span data-attribute="url">/booking</span>
            <span data-attribute="content">Booking process, pricing information, and inquiry form</span>
          </li>
          <li data-page="about">
            <span data-attribute="title">About</span>
            <span data-attribute="url">/about</span>
            <span data-attribute="content">Artist biography, approach, and credentials</span>
          </li>
        </ul>
      </section>
    </div>
  )
} 