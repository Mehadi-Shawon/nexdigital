import { Linkedin, Instagram, Facebook, Dribbble, ChevronRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="nb-footer">
      <div className="nb-footer-orb nb-footer-orb-1"/>
      <div className="nb-footer-orb nb-footer-orb-2"/>
      <div className="nb-footer-orb nb-footer-orb-3"/>
      <div className="nb-footer-wordmark" aria-hidden="true">NEXBEE</div>
      <div className="nb-container" style={{position:'relative',zIndex:2}}>
        <div className="nb-footer-top">
          <div className="nb-footer-brand">
            <NavLink to="/" className="nb-logo nb-footer-logo"><span className="nb-grad">Nexbee</span>Labs</NavLink>
            <p className="nb-footer-desc">Building digital products that actually work. Based in Dhaka. Working globally.</p>
            <div className="nb-footer-socials">
              {[Linkedin, Instagram, Facebook, Dribbble].map((Icon, i) => (
                <a key={i} href="#" className="nb-soc"><Icon size={16} /></a>
              ))}
            </div>
          </div>
          <div className="nb-footer-cols">
            <div>
              <h4>Services</h4>
              {[
                ['Web Design & Development','/services'],
                ['Brand Identity & Strategy','/services'],
                ['UI/UX Design','/services'],
                ['SEO & Digital Marketing','/services'],
                ['E-Commerce Solutions','/services'],
              ].map(([l,to]) => <NavLink key={l} to={to}>{l}</NavLink>)}
            </div>
            <div>
              <h4>Company</h4>
              {[
                ['About Us','/about'],
                ['Our Work','/portfolio'],
                ['Team','/team'],
                ['Process','/process'],
                ['Contact','/contact'],
              ].map(([l,to]) => <NavLink key={l} to={to}>{l}</NavLink>)}
            </div>
            <div className="nb-footer-card">
              <h4>Partner with us</h4>
              <p>Ready to build something worth talking about?</p>
              <NavLink to="/contact" className="nb-svc-link">Book a consultation <ChevronRight size={14} /></NavLink>
            </div>
          </div>
        </div>
        <div className="nb-footer-bot">
          <p>© 2025 NexbeeLabs. All rights reserved.</p>
          <div><NavLink to="/privacy">Privacy Policy</NavLink> · <NavLink to="/terms">Terms of Service</NavLink></div>
        </div>
      </div>
    </footer>
  )
}
