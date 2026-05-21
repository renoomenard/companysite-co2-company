const reviews = [
  {
    initials: 'SR',
    name: 'Sarah R.',
    location: 'Secondary School Teacher — Dublin, Ireland',
    quote: 'Finally I can actually measure the air quality in my classroom. My students are noticeably more alert since we started managing CO2 levels. Brilliant product and super fast shipping.',
  },
  {
    initials: 'MK',
    name: 'Mike K.',
    location: 'Facilities Manager — Sydney, Australia',
    quote: 'We installed CO2 monitors across our entire office building. The data was eye-opening — our afternoon productivity slump was entirely driven by poor ventilation. Fixed now!',
  },
  {
    initials: 'JP',
    name: 'Jennifer P.',
    location: 'Restaurant Owner — Vancouver, Canada',
    quote: 'Outstanding quality monitor and the customer service team answered all my questions within hours. Delivered to Vancouver in 3 days. Will absolutely order again for my second location.',
  },
  {
    initials: 'AT',
    name: 'Amy T.',
    location: 'Parent — Auckland, New Zealand',
    quote: "My baby's nursery CO2 levels were way higher than I expected. This monitor gave me peace of mind and helped me figure out the exact ventilation changes needed. Worth every cent.",
  },
  {
    initials: 'DL',
    name: 'David L.',
    location: 'Remote Worker — London, UK',
    quote: 'Used to feel exhausted by 2pm every day working from home. Turns out my CO2 was through the roof. A monitor and proper ventilation routine has completely transformed my workday.',
  },
  {
    initials: 'RC',
    name: 'Roberto C.',
    location: 'Gym Owner — Denver, USA',
    quote: 'We bought 12 units for our gym. Customer support helped us work out the best placement strategy. Our clients have noticed the difference and our retention has improved. Highly recommend.',
  },
]

export default function ReviewsSection() {
  return (
    <section id="reviews" style={{ padding: '96px 0', background: 'var(--charcoal-800)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--saffron-500)',
            margin: '0 0 12px',
          }}>
            What Customers Say
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 4vw, 44px)',
            fontWeight: 500,
            color: 'white',
            margin: '0 0 16px',
          }}>
            Trusted by Thousands Worldwide
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 18,
            color: 'rgba(255,255,255,0.6)',
            maxWidth: 580,
            margin: '0 auto',
          }}>
            From home offices in Auckland to warehouses in Toronto, customers rely on CO2 Company for accurate air quality monitoring.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
        }} className="reviews-grid">
          {reviews.map(review => (
            <div key={review.initials} style={{
              background: 'rgba(255,255,255,0.06)',
              borderRadius: 'var(--radius-xl)',
              padding: '28px 24px',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
              <div style={{
                color: 'var(--saffron-400)',
                fontSize: 18,
                letterSpacing: 2,
                marginBottom: 16,
              }}>
                ★★★★★
              </div>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 16,
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.8)',
                margin: '0 0 20px',
                fontStyle: 'italic',
              }}>
                &ldquo;{review.quote}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'var(--saffron-500)',
                  color: 'var(--ink-900)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 13,
                  fontWeight: 700,
                  flexShrink: 0,
                }}>
                  {review.initials}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 600, color: 'white' }}>
                    {review.name}
                  </div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>
                    {review.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .reviews-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .reviews-grid { grid-template-columns: 1fr !important; }
          #reviews { padding: 64px 0 !important; }
        }
      `}</style>
    </section>
  )
}
