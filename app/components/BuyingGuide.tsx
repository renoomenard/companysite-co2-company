export default function BuyingGuide() {
  const h2Style = {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(22px, 2.5vw, 32px)',
    fontWeight: 500,
    color: 'var(--ink-900)',
    margin: '40px 0 16px',
    paddingTop: 32,
    borderTop: '1px solid var(--border)',
    lineHeight: 1.15,
  }

  const h3Style = {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(18px, 2vw, 24px)',
    fontWeight: 500,
    color: 'var(--ink-900)',
    margin: '28px 0 12px',
    lineHeight: 1.2,
  }

  const h4Style = {
    fontFamily: 'var(--font-sans)',
    fontSize: 13,
    fontWeight: 700,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.08em',
    color: 'var(--ink-500)',
    margin: '24px 0 10px',
  }

  const pStyle = {
    fontFamily: 'var(--font-sans)',
    fontSize: 17,
    lineHeight: 1.7,
    color: 'var(--ink-700)',
    margin: '0 0 16px',
  }

  const listItems = [
    'NDIR sensor technology for indoor and outdoor environments',
    'Appropriate measurement range for your environment',
    'Clear display with colour-coded alerts and audible alarm',
    'Data logging and export function',
    'Connectivity for your specific use case',
    'CE and FCC certification',
    'Warranty and local support availability',
  ]

  return (
    <section id="buying-guide" style={{ padding: '96px 0', background: 'var(--cream-50)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{
          maxWidth: 980,
          margin: '0 auto',
          background: 'white',
          borderRadius: 'var(--radius-xl)',
          padding: 'clamp(32px, 5vw, 72px)',
          boxShadow: 'var(--shadow-sm)',
          border: '1px solid var(--border)',
        }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--ink-500)',
            margin: '0 0 16px',
          }}>
            Buyer&apos;s Resource
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(34px, 4vw, 48px)',
            fontWeight: 500,
            color: 'var(--ink-900)',
            margin: '0 0 20px',
            lineHeight: 1.1,
          }}>
            The Complete CO2 Monitor Buying Guide
          </h2>
          <p style={{ ...pStyle, fontSize: 20 }}>
            Choosing the right CO2 monitor can feel overwhelming with so many options available. This guide will help you understand what to look for, what to avoid, and how to match the right air quality monitor to your specific environment.
          </p>

          <h2 style={{ ...h2Style, marginTop: 32, borderTop: 'none', paddingTop: 0 }}>
            Understanding CO2 Monitoring: Why It Matters
          </h2>
          <p style={pStyle}>
            Carbon dioxide is produced by every breath we exhale. In well-ventilated spaces, CO2 disperses quickly and poses no issue. But in enclosed rooms with limited fresh air supply — classrooms, offices, bedrooms, conference rooms, restaurants — CO2 can build to levels that measurably impair cognitive function, cause fatigue, and increase susceptibility to airborne illness.
          </p>
          <p style={pStyle}>
            A quality CO2 monitor gives you objective, real-time data that takes the guesswork out of ventilation management. Instead of waiting until occupants feel uncomfortable, you can proactively adjust airflow the moment CO2 begins to climb.
          </p>

          <h2 style={h2Style}>Key Features to Look for in a CO2 Monitor</h2>

          <h4 style={h4Style}>Sensor Technology: NDIR vs Electrochemical</h4>
          <p style={pStyle}>
            The most important distinction in CO2 monitor quality is the sensor type. Non-dispersive infrared (NDIR) sensors use light absorption to directly measure CO2 concentration. They are accurate (typically ±50 ppm), stable over time, and have operational lifespans exceeding 10 years. Electrochemical sensors, found in cheaper devices, are less accurate, prone to drift, and need replacing more frequently. For any serious monitoring application, always choose NDIR.
          </p>

          <h4 style={h4Style}>Measurement Range and Resolution</h4>
          <p style={pStyle}>
            For general indoor use, a range of 400–5000 ppm is adequate. Industrial or research applications may require ranges up to 10,000 ppm or beyond. Resolution should be at least 1 ppm for precise readings. Higher resolution becomes important when monitoring small fluctuations in environments where very tight CO2 control is required.
          </p>

          <h4 style={h4Style}>Display and Alert Functions</h4>
          <p style={pStyle}>
            Look for a large, easy-to-read display with colour coding — typically green for safe, amber for caution, and red for action required. Audible and visual alarms are important for environments where occupants cannot constantly monitor a display. Multi-level alarm thresholds allow you to set early warning and critical alert levels independently.
          </p>

          <h4 style={h4Style}>Data Logging and Connectivity</h4>
          <p style={pStyle}>
            For commercial, educational, and regulatory purposes, data logging is essential. Look for internal memory with sufficient capacity for your monitoring period, plus easy data export via USB, SD card, or wireless connectivity. Smart monitors with Wi-Fi, Bluetooth, Zigbee, or Z-Wave connectivity allow integration with building management systems and smartphone monitoring apps.
          </p>

          <h2 style={h2Style}>Choosing the Right Monitor for Your Environment</h2>

          <h4 style={h4Style}>Home Use</h4>
          <p style={pStyle}>
            For home monitoring, a compact desktop or wall-mounted unit with a colour display is ideal. Prioritise ease of use, a clean aesthetic, and Wi-Fi connectivity if you want smartphone integration. Bedroom monitoring is particularly valuable — overnight CO2 buildup is a common but overlooked cause of poor sleep quality.
          </p>

          <h4 style={h4Style}>Offices and Commercial Spaces</h4>
          <p style={pStyle}>
            Open-plan offices require multiple monitors positioned throughout the floor to capture CO2 gradients. Network-connected monitors that feed into a central dashboard allow facilities managers to monitor an entire building from one interface. CO2-based demand-controlled ventilation (DCV) systems can automate HVAC response, saving significant energy costs while maintaining air quality.
          </p>

          <h4 style={h4Style}>Schools and Classrooms</h4>
          <p style={pStyle}>
            Classrooms benefit enormously from visible, traffic-light style CO2 displays that allow teachers to take immediate action. Studies have demonstrated that reducing classroom CO2 from 2000 ppm to below 800 ppm can improve student test scores by up to 15%. Portable units allow monitoring across multiple classrooms, while fixed units provide continuous data for a single room.
          </p>

          <h4 style={h4Style}>Restaurants, Cafés, and Hospitality</h4>
          <p style={pStyle}>
            High-density dining environments see rapid CO2 buildup, especially during peak service. CO2 monitoring helps hospitality operators maintain safe, comfortable environments that improve the dining experience and demonstrate responsible management of indoor air quality to customers and inspectors alike.
          </p>

          <h4 style={h4Style}>Healthcare and Aged Care Facilities</h4>
          <p style={pStyle}>
            Vulnerable populations are more sensitive to air quality impacts. CO2 monitoring in hospitals, clinics, aged care homes, and nurseries provides an additional layer of protection, ensuring that even at high occupancy, air quality remains within safe parameters. Medical-grade units with calibration certificates may be required for regulated environments.
          </p>

          <h4 style={h4Style}>Gyms and Fitness Studios</h4>
          <p style={pStyle}>
            Exercise significantly increases CO2 output per person. A gym at moderate occupancy can see CO2 levels climb to uncomfortable levels within minutes without adequate ventilation. Real-time CO2 monitoring allows gym staff to adjust ventilation dynamically, protecting member health and enhancing workout performance.
          </p>

          <h4 style={h4Style}>Industrial and Warehouse Settings</h4>
          <p style={pStyle}>
            CO2 can accumulate in enclosed industrial spaces, particularly in cold stores, server rooms, and areas with CO2 fire suppression systems. Industrial monitors must be robust, accurate at higher concentration ranges, and capable of triggering relay outputs for safety alarms and automated ventilation control.
          </p>

          <h2 style={h2Style}>Installation Best Practices</h2>
          <p style={pStyle}>
            Correct placement is crucial for accurate readings. Mount CO2 monitors at breathing height — typically 1.0–1.5 metres from the floor. Position away from doorways, windows, air supply vents, and direct sunlight. For large spaces, multiple monitors may be required to capture the CO2 distribution across the room. Allow monitors a 30-minute stabilisation period when first powered on, especially after repositioning.
          </p>

          <h2 style={h2Style}>Calibration and Maintenance</h2>
          <p style={pStyle}>
            Regular calibration ensures your data remains trustworthy. For general use, annual factory calibration verification is recommended. Monitors with automatic baseline correction (ABC) simplify maintenance in environments with regular exposure to fresh outdoor air. Keep sensor inlets clean, free from dust and particulates, and ensure firmware updates are applied to maintain software-based accuracy improvements.
          </p>

          <h2 style={h2Style}>What to Avoid When Buying a CO2 Monitor</h2>
          <p style={pStyle}>
            Avoid monitors that do not clearly specify their sensor technology — devices with unlisted or &quot;proprietary&quot; sensors often use cheaper, less accurate alternatives to NDIR. Be wary of exceptionally low-priced units; a reliable NDIR-based monitor requires quality components that cannot be produced at bargain prices. Check that the device comes with a calibration certificate if required for compliance purposes, and confirm the availability of local support and replacement parts before purchasing.
          </p>

          <h2 style={h2Style}>Summary: The Smart Buyer&apos;s Checklist</h2>
          <p style={pStyle}>Before purchasing a CO2 monitor, verify:</p>
          <ul style={{
            margin: '0 0 16px',
            padding: 0,
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}>
            {listItems.map((item, i) => (
              <li key={i} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 12,
                background: 'var(--cream-50)',
                borderRadius: 10,
                padding: '12px 16px',
                borderLeft: '3px solid var(--saffron-500)',
                fontFamily: 'var(--font-sans)',
                fontSize: 16,
                lineHeight: 1.5,
                color: 'var(--ink-700)',
              }}>
                <span style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: 'var(--saffron-500)',
                  flexShrink: 0,
                  marginTop: 6,
                }} />
                {item}
              </li>
            ))}
          </ul>
          <p style={pStyle}>
            Our team is available to help you match the right product to your needs — contact us at{' '}
            <a href="mailto:theteam@customersupport.care" style={{ color: 'var(--ink-900)', borderBottom: '1px solid var(--border-strong)' }}>
              theteam@customersupport.care
            </a>{' '}
            or visit your country store below.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          #buying-guide { padding: 64px 0 !important; }
        }
      `}</style>
    </section>
  )
}
