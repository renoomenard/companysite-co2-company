export default function ArticlePage({ params }: { params: { slug: string } }) {
  return (
    <div style={{ background: 'var(--cream-50)' }}>
      {/* Cream hero with saffron glow */}
      <div style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,210,63,.28), transparent 70%)',
        padding: '72px 0 48px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 32px' }}>
          <nav style={{
            fontSize: 14,
            color: 'var(--ink-500)',
            marginBottom: 24,
            fontFamily: 'var(--font-mono)',
          }}>
            <a href="/" style={{ color: 'var(--ink-500)' }}>Home</a>
            {' › '}
            <a href="/blog/" style={{ color: 'var(--ink-500)' }}>Blog</a>
            {' › '}
            <span>{params.slug.replace(/-/g, ' ')}</span>
          </nav>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            margin: '0 0 16px',
            textWrap: 'balance',
            color: 'var(--ink-900)',
          }}>
            Article Title
          </h1>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 14,
            color: 'var(--ink-500)',
            margin: 0,
          }}>
            Published: {new Date().toISOString().split('T')[0]}
          </p>
        </div>
      </div>
      <div style={{
        maxWidth: 760,
        margin: '0 auto',
        padding: '64px 32px',
        fontFamily: 'var(--font-sans)',
        fontSize: 18,
        lineHeight: 1.7,
        color: 'var(--ink-700)',
      }}>
        <p>Article content goes here.</p>
      </div>
    </div>
  )
}
