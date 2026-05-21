'use client'

import { useState } from 'react'

const countries = [
  { name: 'Australia', domain: 'co2meter.net.au', href: 'https://co2meter.net.au', flag: '🇦🇺', key: 'australia' },
  { name: 'Canada', domain: 'co2meter.shop', href: 'https://co2meter.shop', flag: '🇨🇦', key: 'canada' },
  { name: 'Europe', domain: 'co2meter.eu.com', href: 'https://co2meter.eu.com', flag: '🇪🇺', key: 'europe' },
  { name: 'Ireland', domain: 'co2meter.irish', href: 'https://co2meter.irish', flag: '🇮🇪', key: 'ireland' },
  { name: 'New Zealand', domain: 'co2meter.co.nz', href: 'https://co2meter.co.nz', flag: '🇳🇿', key: 'new zealand' },
  { name: 'United Kingdom', domain: 'co2monitor.uk', href: 'https://co2monitor.uk', flag: '🇬🇧', key: 'uk united kingdom' },
  { name: 'USA', domain: 'co2monitor.store', href: 'https://co2monitor.store', flag: '🇺🇸', key: 'usa united states america', featured: true },
]

export default function CountryGrid() {
  const [search, setSearch] = useState('')

  const filtered = search.trim()
    ? countries.filter(c =>
        c.key.includes(search.toLowerCase()) ||
        c.name.toLowerCase().includes(search.toLowerCase())
      )
    : countries

  return (
    <section id="shop-by-country" style={{
      padding: '96px 0',
      background: 'var(--cream-50)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--ink-500)',
            margin: '0 0 12px',
          }}>
            Choose Your Store
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 4vw, 44px)',
            fontWeight: 500,
            color: 'var(--ink-900)',
            margin: '0 0 16px',
          }}>
            Which country would you like to shop in?
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 18,
            color: 'var(--ink-700)',
            maxWidth: 600,
            margin: '0 auto 32px',
          }}>
            We operate local CO2 monitor stores across 7 countries, each tailored to local delivery, pricing, and product availability.
          </p>

          {/* Search */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: 'white',
            borderRadius: 'var(--radius-pill)',
            padding: '12px 20px',
            boxShadow: 'var(--shadow-sm)',
            border: '1px solid var(--border)',
            maxWidth: 360,
            width: '100%',
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--ink-300)', flexShrink: 0 }}>
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search your country…"
              aria-label="Search country"
              style={{
                border: 'none',
                background: 'transparent',
                fontFamily: 'var(--font-sans)',
                fontSize: 16,
                color: 'var(--ink-900)',
                outline: 'none',
                width: '100%',
              }}
            />
          </div>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 18,
        }}>
          {filtered.map(country => (
            <a
              key={country.key}
              href={country.href}
              target="_blank"
              rel="noopener"
              aria-label={`Shop CO2 monitors in ${country.name}`}
              style={{
                display: 'block',
                background: country.featured ? 'var(--ink-900)' : 'white',
                borderRadius: 'var(--radius-xl)',
                padding: '28px 24px',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--border)',
                textDecoration: 'none',
                transition: 'transform var(--dur-base) var(--ease), box-shadow var(--dur-base) var(--ease)',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(255,210,63,0.25), var(--shadow-md)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
              }}
            >
              <span style={{ fontSize: 40, display: 'block', marginBottom: 12 }}>
                {country.flag}
              </span>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 24,
                fontWeight: 500,
                color: country.featured ? 'white' : 'var(--ink-900)',
                marginBottom: 6,
              }}>
                {country.name}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 13,
                color: country.featured ? 'var(--saffron-400)' : 'var(--ink-500)',
              }}>
                {country.domain}
              </div>
              {country.featured && (
                <div style={{
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  background: 'var(--saffron-500)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              )}
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--ink-500)', fontFamily: 'var(--font-sans)', padding: '32px 0' }}>
            No countries found. <button onClick={() => setSearch('')} style={{ color: 'var(--saffron-700)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 'inherit' }}>Clear search</button>
          </p>
        )}
      </div>

      <style>{`
        @media (max-width: 720px) {
          #shop-by-country { padding: 64px 0 !important; }
        }
      `}</style>
    </section>
  )
}
