import { ArrowRight, Globe, PenTool, Layers, TrendingUp, MessageCircle, ShoppingBag, CheckCircle, ChevronRight } from 'lucide-react'
import Badge from '../components/Badge'
import { Reveal, StaggerReveal } from '../hooks/useInView'
import { NavLink } from 'react-router-dom'

const services = [
  {
    Icon: Globe, accent: '#00f0ff', num: '01',
    title: 'Web Design & Development',
    tagline: 'Websites that convert visitors into customers.',
    body: 'We build fast, beautiful websites from scratch — no templates, no page builders. Every project starts with strategy and ends with a site that actually works for your business.',
    includes: ['Custom design from scratch','Next.js or Webflow build','Mobile-first responsive','Performance optimised (Lighthouse 95+)','CMS integration','30-day post-launch support'],
    tags: ['Next.js','TypeScript','Webflow','Framer','Tailwind'],
    price: 'From $800',
    timeline: '4–6 weeks',
  },
  {
    Icon: PenTool, accent: '#7928ca', num: '02',
    title: 'Brand Identity & Strategy',
    tagline: 'A brand system that holds together everywhere.',
    body: 'Logo, colour palette, typography, tone of voice, and full brand guidelines. We don\'t just make things look nice — we create a visual language that communicates who you are.',
    includes: ['Logo design (3 concepts)','Full colour system','Typography pairing','Brand guidelines PDF','Social media kit','Business card & letterhead'],
    tags: ['Figma','Illustrator','Brand Strategy','Identity'],
    price: 'From $500',
    timeline: '2–3 weeks',
  },
  {
    Icon: Layers, accent: '#ff0080', num: '03',
    title: 'UI/UX Design',
    tagline: 'Interfaces that make sense the first time.',
    body: 'From user research to polished prototypes. We design digital products that are intuitive, accessible, and genuinely delightful to use — then hand off specs that developers actually want to work with.',
    includes: ['User research & personas','Information architecture','Wireframes & user flows','High-fidelity UI design','Interactive prototype','Developer handoff (Figma)'],
    tags: ['Figma','FigJam','Maze','Prototyping','A/B Testing'],
    price: 'From $1,200',
    timeline: '3–5 weeks',
  },
  {
    Icon: TrendingUp, accent: '#00f0ff', num: '04',
    title: 'SEO & Digital Marketing',
    tagline: 'Get found. Get clicked. Get customers.',
    body: 'Technical SEO, content strategy, and paid campaigns that work together. We focus on strategies that compound over time — building assets, not just burning budget.',
    includes: ['Technical SEO audit','On-page optimisation','Google Ads management','Content strategy','Monthly reporting','Competitor analysis'],
    tags: ['Google Ads','Search Console','Ahrefs','Analytics','Content'],
    price: 'From $600/mo',
    timeline: 'Ongoing',
  },
  {
    Icon: MessageCircle, accent: '#7928ca', num: '05',
    title: 'Social Media Management',
    tagline: 'Content that builds a real audience.',
    body: 'Strategy, creation, and community management across Instagram, LinkedIn, and Facebook. We make content that fits your brand and actually resonates with your audience.',
    includes: ['Monthly content calendar','12–20 posts/month','Story & reel creation','Community management','Monthly analytics report','Hashtag & growth strategy'],
    tags: ['Instagram','LinkedIn','Facebook','Canva','CapCut'],
    price: 'From $450/mo',
    timeline: 'Ongoing',
  },
  {
    Icon: ShoppingBag, accent: '#ff0080', num: '06',
    title: 'E-Commerce Solutions',
    tagline: 'Online stores built to sell.',
    body: 'Shopify or WooCommerce stores designed for conversion. From product pages to checkout flows, every detail is optimised to turn browsers into buyers.',
    includes: ['Custom store design','Product page optimisation','Checkout flow design','Payment gateway setup','Inventory & shipping setup','Conversion rate optimisation'],
    tags: ['Shopify','WooCommerce','Stripe','Analytics','CRO'],
    price: 'From $1,500',
    timeline: '4–6 weeks',
  },
]

function PageHero() {
  return (
    <section className="nb-page-hero">
      <div className="nb-orb nb-orb-blue"   style={{width:500,height:500,top:-150,left:-100}} />
      <div className="nb-orb nb-orb-purple" style={{width:400,height:400,bottom:-100,right:-100}} />
      <div className="nb-container" style={{position:'relative',zIndex:10}}>
        <Badge>What We Do</Badge>
        <h1 className="nb-page-h1">Services built for <span className="nb-grad">real results</span></h1>
        <p className="nb-page-sub">Everything your digital presence needs — from the first sketch to ongoing growth. Priced transparently, delivered properly.</p>
      </div>
    </section>
  )
}

function ServiceList() {
  return (
    <section className="nb-section">
      <div className="nb-container">
        <div className="nb-svc-full-list">
          {services.map((s, i) => (
            <div key={s.num} className="nb-svc-full-card" style={{'--accent': s.accent}}>
              <div className="nb-svc-full-left">
                <div className="nb-svc-full-head">
                  <div className="nb-svc-full-icon" style={{background:`${s.accent}15`,color:s.accent,border:`1px solid ${s.accent}30`}}>
                    <s.Icon size={26}/>
                  </div>
                  <span className="nb-svc-full-num">{s.num}</span>
                </div>
                <h2 className="nb-svc-full-title">{s.title}</h2>
                <p className="nb-svc-full-tagline" style={{color:s.accent}}>{s.tagline}</p>
                <p className="nb-svc-full-body">{s.body}</p>
                <div className="nb-svc-full-tags">
                  {s.tags.map(t => <span key={t} className="nb-svc-tag">{t}</span>)}
                </div>
                <div className="nb-svc-full-meta">
                  <div className="nb-svc-full-meta-item">
                    <span className="nb-svc-full-meta-l">Starting from</span>
                    <span className="nb-svc-full-meta-v" style={{color:s.accent}}>{s.price}</span>
                  </div>
                  <div className="nb-svc-full-divider"/>
                  <div className="nb-svc-full-meta-item">
                    <span className="nb-svc-full-meta-l">Timeline</span>
                    <span className="nb-svc-full-meta-v">{s.timeline}</span>
                  </div>
                </div>
              </div>
              <div className="nb-svc-full-right">
                <div className="nb-svc-includes">
                  <h4 className="nb-svc-includes-title">What's included</h4>
                  <ul className="nb-svc-includes-list">
                    {s.includes.map(item => (
                      <li key={item} className="nb-svc-includes-item">
                        <CheckCircle size={14} style={{color:s.accent,flexShrink:0}}/>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <NavLink to="/contact" className="nb-btn nb-btn-ghost" style={{marginTop:24,width:'100%',justifyContent:'center'}}>
                    Get a quote <ChevronRight size={16}/>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="nb-section">
      <div className="nb-container nb-container-narrow" style={{textAlign:'center'}}>
        <Badge>Not sure where to start?</Badge>
        <h2 className="nb-h2" style={{marginTop:16}}>Let's figure it out <span className="nb-grad">together</span></h2>
        <p className="nb-section-sub" style={{margin:'20px auto 40px',maxWidth:520}}>Tell us about your project and we'll recommend the right services — no pressure, no sales pitch.</p>
        <NavLink to="/contact" className="nb-btn nb-btn-grad">Book a free call <ArrowRight size={16}/></NavLink>
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <>
      <PageHero />
      <ServiceList />
      <CTA />
    </>
  )
}
