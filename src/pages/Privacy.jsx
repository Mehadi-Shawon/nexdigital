import { NavLink } from 'react-router-dom'
import { ArrowLeft, Shield } from 'lucide-react'
import { Reveal } from '../hooks/useInView'

const sections = [
  {
    title: '1. Information We Collect',
    body: [
      'We collect information you provide directly to us when you fill out our contact form, book a discovery call, or communicate with us by email. This includes your name, email address, company name, and the details of your project inquiry.',
      'We may also collect certain technical data automatically when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages viewed. This data is collected via standard web server logs and analytics tools.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    body: [
      'We use the information we collect to: respond to your inquiries and provide the services you request; send you project updates, invoices, and relevant communications; improve our website and services; and comply with legal obligations.',
      'We do not use your personal information for unsolicited marketing. If you receive a message from us it is because you initiated contact or are an active client.',
    ],
  },
  {
    title: '3. Sharing Your Information',
    body: [
      'We do not sell, trade, or rent your personal information to third parties. We may share your data with trusted service providers who assist us in operating our business — such as email platforms, project management tools, and payment processors — under strict confidentiality agreements.',
      'We may disclose your information if required by law, court order, or government authority, or if we believe disclosure is necessary to protect our rights or the safety of others.',
    ],
  },
  {
    title: '4. Cookies and Tracking',
    body: [
      'Our website uses cookies and similar tracking technologies to enhance your browsing experience and understand how visitors use our site. Cookies are small text files stored on your device.',
      'You can control cookies through your browser settings. Disabling cookies may affect certain functionality of our website. We use analytics cookies (such as Google Analytics) to measure site performance — this data is aggregated and anonymised.',
    ],
  },
  {
    title: '5. Third-Party Services',
    body: [
      'Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to read their privacy policies.',
      'We use third-party tools including Formspree (contact forms), Calendly (meeting scheduling), and Google Analytics (website analytics). Each of these services has its own privacy policy governing the data they process on our behalf.',
    ],
  },
  {
    title: '6. Data Retention',
    body: [
      'We retain personal information for as long as necessary to fulfil the purposes for which it was collected, including legal, accounting, or reporting requirements. Inquiry data from non-clients is typically retained for 12 months.',
      'Client project data, including contracts and communications, is retained for a minimum of 5 years following project completion for legal and accounting purposes.',
    ],
  },
  {
    title: '7. Your Rights',
    body: [
      'Depending on your location, you may have the following rights regarding your personal data: the right to access the personal information we hold about you; the right to correct inaccurate or incomplete data; the right to request deletion of your data; and the right to object to or restrict certain processing.',
      'To exercise any of these rights, please contact us at hello@nexbeelabs.com. We will respond to your request within 30 days.',
    ],
  },
  {
    title: '8. Security',
    body: [
      'We take reasonable technical and organisational measures to protect your personal information from unauthorised access, disclosure, alteration, or destruction. These measures include encrypted communications (HTTPS), secure data storage, and limited access controls.',
      'No method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.',
    ],
  },
  {
    title: '9. Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. We encourage you to review this policy periodically to stay informed about how we protect your information.',
    ],
  },
  {
    title: '10. Contact Us',
    body: [
      'If you have any questions about this Privacy Policy or our privacy practices, please contact us at hello@nexbeelabs.com or via our contact form. We are happy to address any concerns you may have.',
    ],
  },
]

export default function Privacy() {
  return (
    <>
      {/* Hero */}
      <section className="nb-legal-hero">
        <div className="nb-orb nb-orb-blue"   style={{width:500,height:500,top:-200,right:-100,opacity:.06,pointerEvents:'none'}}/>
        <div className="nb-orb nb-orb-purple" style={{width:400,height:400,bottom:-100,left:-100,opacity:.05,pointerEvents:'none'}}/>
        <div className="nb-container" style={{position:'relative',zIndex:2}}>
          <Reveal>
            <NavLink to="/" className="nb-legal-back"><ArrowLeft size={14}/> Back to site</NavLink>
            <div className="nb-legal-hero-icon"><Shield size={28}/></div>
            <h1 className="nb-page-h1" style={{marginBottom:12}}>Privacy <span className="nb-grad">Policy</span></h1>
            <p className="nb-legal-meta">Effective date: 1 January 2025 · Last updated: 1 May 2025</p>
            <p className="nb-legal-intro">
              At NexbeeLabs, your privacy matters to us. This policy explains what personal information we collect, how we use it, and your rights regarding that information. We keep it plain — no legal maze.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section style={{padding:'0 0 100px'}}>
        <div className="nb-container nb-legal-layout">
          <Reveal>
            <div className="nb-legal-body">
              {sections.map(s => (
                <div key={s.title} className="nb-legal-section">
                  <h2 className="nb-legal-h2">{s.title}</h2>
                  {s.body.map((p, i) => <p key={i} className="nb-legal-p">{p}</p>)}
                </div>
              ))}
              <div className="nb-legal-footer-note">
                <p>Questions? Email us at <a href="mailto:hello@nexbeelabs.com" className="nb-legal-link">hello@nexbeelabs.com</a> — we'll reply within 2 business days.</p>
                <NavLink to="/contact" className="nb-btn nb-btn-grad" style={{marginTop:24,display:'inline-flex'}}>Get in touch</NavLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
