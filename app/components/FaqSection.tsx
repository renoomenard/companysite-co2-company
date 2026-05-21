'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'What exactly does a CO2 monitor measure?',
    a: 'A CO2 monitor measures the concentration of carbon dioxide in your indoor air, displayed in parts per million (ppm). It helps you understand whether your space is well-ventilated and safe for occupants. Most models also record temperature and relative humidity alongside CO2 readings.',
  },
  {
    q: 'What are safe CO2 levels indoors?',
    a: 'Outdoor air typically sits around 400–420 ppm. Indoors, below 800 ppm is considered excellent. Between 800–1000 ppm, ventilation improvement is recommended. Above 1000 ppm, occupants may begin to notice fatigue and reduced concentration. Levels above 2000 ppm are considered unhealthy and above 5000 ppm are dangerous.',
  },
  {
    q: 'Which CO2 monitor is right for my home?',
    a: 'For home use, a portable or desktop CO2 monitor with visual display is ideal. Look for NDIR sensor technology (more accurate than cheaper electrochemical alternatives), a clear colour-coded display, and a memory function so you can track trends over time. If you have young children or elderly family members, a model with a sound alarm adds an extra layer of safety.',
  },
  {
    q: 'Do I need a CO2 monitor for my office or workplace?',
    a: 'Yes — studies consistently show that elevated CO2 in workplaces leads to reduced cognitive function, more sick days, and lower productivity. Many building regulations across Australia, the UK, Ireland, and the USA now recommend or require CO2 monitoring in commercial spaces. A network of fixed monitors gives you continuous, building-wide visibility.',
  },
  {
    q: 'What is the difference between a CO2 monitor and a CO2 meter?',
    a: 'A CO2 meter is a handheld device for spot measurements — great for inspections and assessments. A CO2 monitor is designed for continuous, permanent use, often with alerts, data logging, and connectivity features. For ongoing indoor air quality management, a monitor is the better choice; for portable surveys, a meter is more practical.',
  },
  {
    q: 'How accurate are CO2 monitors?',
    a: 'Professional NDIR (non-dispersive infrared) CO2 monitors are highly accurate, typically within ±50 ppm or ±3% of reading — whichever is greater. Accuracy can drift over time, which is why annual calibration against a known reference gas is recommended, especially in regulated environments. All our certified monitors come with full calibration documentation.',
  },
  {
    q: 'Do you offer bulk pricing for schools or businesses ordering multiple units?',
    a: 'Yes — we welcome bulk and enterprise orders from schools, government bodies, healthcare facilities, and businesses. Please reach out directly to our team at theteam@customersupport.care with your requirements. We can accommodate volume pricing, tailored delivery schedules, and installation guidance for larger deployments.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Delivery times vary by country and chosen shipping method. Within Australia, UK, Ireland, and New Zealand, most orders arrive within 3–7 working days. Canada and USA orders typically take 5–10 working days. Expedited options are available at checkout. We deliver worldwide — please check your country store for specific delivery information.',
  },
  {
    q: 'What are your return and refund conditions?',
    a: 'We accept returns within 30 days of delivery for items in original condition and packaging. Faulty items are covered by our warranty policy — please contact our team at theteam@customersupport.care within 14 days of receiving a defective product. Full details are available on our Shipping & Returns page.',
  },
  {
    q: 'Are your products CE and FCC certified?',
    a: 'Yes — our core range of CO2 monitors and meters carries both CE (European conformity) and FCC (US Federal Communications Commission) certifications. These certifications confirm the products meet strict electromagnetic compatibility, safety, and performance standards. Relevant certification documentation is available upon request.',
  },
  {
    q: 'Can I use a CO2 monitor in a school classroom?',
    a: 'Absolutely — CO2 monitors are highly recommended for classrooms. Research shows that elevated CO2 directly impairs cognitive function and attention in children. A wall-mounted monitor with a visible traffic-light display makes it easy for teachers to know when to open windows or improve ventilation, significantly improving student alertness and academic performance.',
  },
  {
    q: 'How do I install a CO2 monitor?',
    a: 'Installation is straightforward for most models. Desktop and portable units simply need to be placed in the area you wish to monitor — ideally away from open windows, vents, and direct sunlight. Wall-mounted models come with drilling templates and mounting hardware. Best practice is to mount at breathing height (1.0–1.5m) in the centre of the room, away from doors and windows.',
  },
  {
    q: 'How often does a CO2 monitor need calibrating?',
    a: 'For general home and office use, annual calibration is typically sufficient. For regulated environments — such as healthcare, laboratories, or food production — bi-annual or quarterly calibration may be required. Many of our models feature automatic self-calibration (ABC) that maintains accuracy without manual intervention in environments with regular access to fresh outdoor air.',
  },
  {
    q: 'Does a CO2 monitor also measure air quality pollutants like PM2.5 or VOCs?',
    a: 'Standard CO2 monitors measure CO2, temperature, and humidity. Our multi-parameter air quality monitors additionally measure PM2.5 (fine particulate matter), PM10, VOCs (volatile organic compounds), formaldehyde, and sometimes ozone. If you want a comprehensive picture of your indoor air, a multi-sensor model is the best choice.',
  },
  {
    q: 'Can high CO2 levels cause headaches?',
    a: 'Yes — elevated CO2 is a well-established cause of headaches, fatigue, difficulty concentrating, and general discomfort indoors. At levels above 1000 ppm, many people report significant cognitive effects. If you frequently experience unexplained headaches at home or in the office, poor air quality — and specifically high CO2 — is a likely contributing factor.',
  },
  {
    q: 'Are CO2 monitors suitable for restaurants and hospitality venues?',
    a: 'Absolutely — restaurants, cafés, hotels, and other hospitality venues benefit enormously from CO2 monitoring. High occupancy creates rapid CO2 buildup, leading to uncomfortable dining experiences and increased health risks. Monitoring allows venue managers to ensure ventilation systems are performing correctly, supporting guest comfort and health compliance.',
  },
  {
    q: 'Do CO2 monitors work with smart home systems?',
    a: 'Many of our smart CO2 monitors offer Wi-Fi connectivity and integrate with platforms like Apple HomeKit, Google Home, and Amazon Alexa, as well as Zigbee or Z-Wave protocols. This allows you to receive CO2 alerts on your phone, automate ventilation systems, and view historical data via an app — giving you intelligent, connected air quality management.',
  },
  {
    q: 'What is the difference between NDIR and electrochemical CO2 sensors?',
    a: 'NDIR (non-dispersive infrared) sensors use light absorption technology to directly measure CO2 concentration — they are accurate, stable, and long-lasting (10+ years). Electrochemical sensors estimate CO2 indirectly and are less accurate, more prone to drift, and degrade more quickly. We recommend NDIR-based monitors for any serious air quality monitoring application.',
  },
  {
    q: 'Is a CO2 monitor the same as a carbon monoxide detector?',
    a: 'No — these are entirely different devices. Carbon dioxide (CO2) is a natural byproduct of breathing and combustion, and while high levels cause discomfort and cognitive impairment, it is not immediately lethal at typical indoor concentrations. Carbon monoxide (CO) is a highly toxic gas produced by incomplete combustion that can be fatal. You need separate detectors for each gas; they cannot substitute for each other.',
  },
  {
    q: 'Can I use a CO2 monitor to improve sleep quality?',
    a: 'Yes — bedroom CO2 levels can climb significantly during sleep with doors and windows closed, contributing to restless sleep, morning grogginess, and fatigue. A CO2 monitor in the bedroom helps you find the optimal ventilation balance that keeps CO2 low without letting in noise or cold air. Many customers report marked improvements in sleep quality after optimising their bedroom ventilation.',
  },
  {
    q: 'What is the warranty on your CO2 monitors?',
    a: 'Most of our CO2 monitors carry a minimum 12-month manufacturer\'s warranty. Some professional and commercial models include extended 24-month warranties. Please check the individual product listing on your country store for specific warranty terms. Our team is also available to help with any post-purchase warranty claims.',
  },
  {
    q: 'Do you ship to countries outside your main 7 markets?',
    a: 'Yes — we deliver worldwide. While our dedicated stores serve Australia, Canada, Europe, Ireland, New Zealand, UK, and USA, we are happy to ship to many other countries. Please contact us at theteam@customersupport.care with your delivery location and the product you\'re interested in, and we\'ll arrange a custom quote for you.',
  },
  {
    q: 'Can a CO2 monitor help with energy efficiency?',
    a: 'Absolutely — CO2-based demand-controlled ventilation (DCV) uses CO2 sensor data to modulate HVAC systems, ventilating only as much as needed based on actual occupancy and CO2 levels. This can reduce building energy consumption by 20–40% compared to constant ventilation, while actually improving air quality. It\'s one of the most cost-effective building efficiency improvements available.',
  },
  {
    q: 'How do I care for and maintain my CO2 monitor?',
    a: 'CO2 monitors require minimal maintenance. Keep the sensor inlet free from dust and debris. Avoid placing the device near strong air currents, direct sunlight, or extreme temperature fluctuations. Clean the outer casing with a dry or slightly damp cloth only. Annual calibration verification is recommended. Most NDIR sensors have a lifespan of 10–15 years with proper care.',
  },
  {
    q: 'Are CO2 monitors suitable for gymnasiums and fitness centres?',
    a: 'Gyms and fitness centres are among the environments where CO2 monitoring is most important. Exercise dramatically increases CO2 output per person, meaning a busy gym can experience rapid and dangerous CO2 buildup. Monitoring allows gym managers to adjust ventilation based on real occupancy data, protecting members\' health and performance during workouts.',
  },
  {
    q: 'Can CO2 monitors be used in warehouses and industrial facilities?',
    a: 'Yes — industrial CO2 monitors are designed for rugged environments, including warehouses, production facilities, server rooms, and cold stores. CO2 can accumulate in large enclosed spaces, leading to worker fatigue and, in extreme cases, oxygen displacement. Fixed industrial monitors with relay outputs for alarm systems and ventilation control are the recommended solution for these applications.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'Our country stores accept all major credit and debit cards (Visa, Mastercard, American Express), as well as PayPal and local payment methods relevant to each country. All transactions are processed through secure, encrypted payment gateways — you can shop with full confidence knowing your payment details are protected.',
  },
  {
    q: 'How can I track my order after purchase?',
    a: "Once your order is dispatched, you'll receive a confirmation email with a tracking number. You can use this to track your delivery in real time via the courier's website. If you have any issues locating your order or need an update, our support team is available 7 days a week at theteam@customersupport.care.",
  },
  {
    q: 'Is CO2 Company a legitimate business?',
    a: 'Yes — CO2 Company is a division of Caruso Consulting Co Ltd, a registered company with VAT ID 0765554000332, headquartered at Suite 22, 47 Moo 1, T. Nawoong, Meaung, Phetchaburi, 76000, Thailand. We operate dedicated, localised storefronts across 7 countries and have served thousands of customers. All our company details, legal pages, and contact information are fully transparent.',
  },
  {
    q: 'How do I contact your customer support team?',
    a: 'You can reach our customer support team by email at theteam@customersupport.care, or by phone at +66 098 391 3877. We are available 7 days a week and aim to respond to all enquiries within 24 hours. For urgent matters, calling is the fastest option. We\'re always happy to help with product advice, order questions, or technical support.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" style={{ padding: '96px 0', background: 'var(--cream-50)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
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
            Got Questions?
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 4vw, 44px)',
            fontWeight: 500,
            color: 'var(--ink-900)',
            margin: '0 0 16px',
          }}>
            Frequently Asked Questions
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 18,
            color: 'var(--ink-700)',
            maxWidth: 560,
            margin: '0 auto',
          }}>
            Everything you need to know about CO2 monitors, air quality, ordering, and more.
          </p>
        </div>

        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} style={{
                background: 'white',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border)',
                overflow: 'hidden',
              }}>
                <button
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 16,
                    padding: '18px 20px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <h3 style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 16.5,
                    fontWeight: 500,
                    color: 'var(--ink-900)',
                    margin: 0,
                    lineHeight: 1.4,
                  }}>
                    {faq.q}
                  </h3>
                  <span style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: isOpen ? 'var(--saffron-500)' : 'var(--cream-100)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'background var(--dur-micro)',
                  }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transition: 'transform var(--dur-base) var(--ease)',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        color: isOpen ? 'var(--ink-900)' : 'var(--ink-700)',
                      }}
                    >
                      <line x1="12" y1="5" x2="12" y2="19"/>
                      <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div style={{
                    padding: '0 20px 20px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: 16,
                    lineHeight: 1.7,
                    color: 'var(--ink-700)',
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          #faq { padding: 64px 0 !important; }
        }
      `}</style>
    </section>
  )
}
