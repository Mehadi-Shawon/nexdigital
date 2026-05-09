import { Linkedin, Globe, Code2, PenTool, TrendingUp, Megaphone, ArrowRight, Star, Zap, Coffee, Music, BookOpen } from 'lucide-react'
import Badge from '../components/Badge'
import { NavLink } from 'react-router-dom'
import { Reveal, StaggerReveal } from '../hooks/useInView'

const team = [
  {
    initials: 'MH', name: 'Mehad Hossain', role: 'Founder & Creative Director',
    color: '#00f0ff', grad: 'linear-gradient(135deg,#0070f3,#00f0ff)',
    bio: 'Obsessed with the intersection of strategy and craft. Has led design and brand work for startups and established businesses across South Asia and beyond.',
    longBio: 'Started NexbeeLabs after years of watching businesses settle for generic work from agencies that treated them like ticket numbers. Believes great design is invisible and great brands are felt before they are read.',
    skills: ['Brand Strategy','UI/UX','Creative Direction','Figma','Webflow'],
    facts: [{ Icon: Coffee, text: '4 espressos/day' },{ Icon: Music, text: 'Jazz while designing' },{ Icon: BookOpen, text: 'Reads 30 books/yr' }],
    Icon: PenTool, links: { linkedin: '#', portfolio: '#' },
    stats: [{ v: '120+', l: 'Brands built' },{ v: '6yr', l: 'Experience' }],
  },
  {
    initials: 'FK', name: 'Farhan Khan', role: 'Lead Developer',
    color: '#7928ca', grad: 'linear-gradient(135deg,#7928ca,#ff0080)',
    bio: 'Full-stack developer with a frontend heart. Writes clean, well-documented code that developers actually enjoy reading.',
    longBio: 'Spent years at product companies before joining NexbeeLabs at founding. Believes that performance is a feature, and that code you can\'t understand in 6 months shouldn\'t ship.',
    skills: ['Next.js','TypeScript','Node.js','PostgreSQL','Tailwind'],
    facts: [{ Icon: Zap, text: 'Speed obsessed' },{ Icon: Coffee, text: 'Mechanical keyboards' },{ Icon: BookOpen, text: 'OSS contributor' }],
    Icon: Code2, links: { linkedin: '#', portfolio: '#' },
    stats: [{ v: '98', l: 'Avg Lighthouse' },{ v: '5yr', l: 'Experience' }],
  },
  {
    initials: 'SI', name: 'Sanjida Islam', role: 'Growth & SEO Strategist',
    color: '#ff0080', grad: 'linear-gradient(135deg,#ff0080,#ffb86c)',
    bio: 'Data-driven marketer with a creative streak. Specialises in technical SEO, content strategy, and paid campaigns that actually convert.',
    longBio: 'Has managed 6-figure ad budgets and built content systems that outlast campaigns. Thinks most SEO advice is outdated by 2 years and that most agencies are still following it.',
    skills: ['Technical SEO','Google Ads','Content Strategy','Analytics','Ahrefs'],
    facts: [{ Icon: TrendingUp, text: 'Data before opinions' },{ Icon: Coffee, text: 'Matcha, not coffee' },{ Icon: Star, text: 'Speaker at 3 events' }],
    Icon: TrendingUp, links: { linkedin: '#', portfolio: '#' },
    stats: [{ v: 'Page 1', l: 'Avg ranking' },{ v: '4yr', l: 'Experience' }],
  },
  {
    initials: 'NR', name: 'Nadia Rahman', role: 'Social Media Lead',
    color: '#ffb86c', grad: 'linear-gradient(135deg,#ffb86c,#ff0080)',
    bio: 'Storyteller turned social strategist. Builds content systems that scale and communities that actually stick.',
    longBio: 'Grew up online and turned that into a career. Has grown brand accounts from 0 to 50K+ across fashion, food, and tech. Believes in content that earns attention rather than buying it.',
    skills: ['Instagram','Content Creation','Community Mgmt','CapCut','Notion'],
    facts: [{ Icon: Star, text: '50K+ followers grown' },{ Icon: Music, text: 'Trend-spotter' },{ Icon: Coffee, text: 'Shoots all own reels' }],
    Icon: Megaphone, links: { linkedin: '#', portfolio: '#' },
    stats: [{ v: '6×', l: 'Avg engagement' },{ v: '3yr', l: 'Experience' }],
  },
]

function PageHero() {
  return (
    <section className="nb-page-hero">
      <div className="nb-orb nb-orb-purple" style={{width:500,height:500,top:-150,left:-100}}/>
      <div className="nb-orb nb-orb-blue"   style={{width:400,height:400,bottom:0,right:-100}}/>
      <div className="nb-container" style={{position:'relative',zIndex:10}}>
        <Reveal><Badge>The Team</Badge></Reveal>
        <Reveal delay="0.1s">
          <h1 className="nb-page-h1">Small team.<br/><span className="nb-grad">Serious craft.</span></h1>
        </Reveal>
        <Reveal delay="0.2s">
          <p className="nb-page-sub">Four specialists who've chosen depth over breadth. You work directly with the people doing the work — always.</p>
        </Reveal>
      </div>
    </section>
  )
}

function TeamCards() {
  return (
    <section style={{padding:'60px 0 80px',position:'relative'}}>
      <div className="nb-container">
        <div className="nb-team-profile-grid">
          {team.map((m, i) => (
            <Reveal key={m.initials} delay={`${i * 0.1}s`}>
              <div className="nb-profile-card">
                {/* Top glow strip */}
                <div className="nb-profile-glow-strip" style={{background:`linear-gradient(90deg,${m.color},transparent)`}}/>

                {/* Header */}
                <div className="nb-profile-header">
                  <div className="nb-profile-avatar" style={{background:m.grad}}>
                    <span className="nb-profile-initials">{m.initials}</span>
                    <div className="nb-profile-role-icon" style={{background:`${m.color}20`,border:`1px solid ${m.color}40`,color:m.color}}>
                      <m.Icon size={12}/>
                    </div>
                  </div>
                  <div className="nb-profile-title-wrap">
                    <h3 className="nb-profile-name">{m.name}</h3>
                    <p className="nb-profile-role" style={{color:m.color}}>{m.role}</p>
                  </div>
                </div>

                {/* Stats row */}
                <div className="nb-profile-stats">
                  {m.stats.map(s => (
                    <div key={s.l} className="nb-profile-stat">
                      <span className="nb-profile-stat-v" style={{color:m.color}}>{s.v}</span>
                      <span className="nb-profile-stat-l">{s.l}</span>
                    </div>
                  ))}
                  <div className="nb-profile-stat-divider"/>
                  <div className="nb-profile-stat">
                    <span className="nb-profile-stat-v" style={{color:m.color}}>{m.skills.length}+</span>
                    <span className="nb-profile-stat-l">Skills</span>
                  </div>
                </div>

                {/* Bio */}
                <p className="nb-profile-bio">{m.bio}</p>
                <p className="nb-profile-long-bio">{m.longBio}</p>

                {/* Skills */}
                <div className="nb-profile-skills">
                  {m.skills.map(s => (
                    <span key={s} className="nb-profile-skill-tag" style={{borderColor:`${m.color}30`,color:`${m.color}dd`}}>{s}</span>
                  ))}
                </div>

                {/* Fun facts */}
                <div className="nb-profile-facts">
                  {m.facts.map(f => (
                    <div key={f.text} className="nb-profile-fact" style={{background:`${m.color}08`,border:`1px solid ${m.color}18`}}>
                      <f.Icon size={12} style={{color:m.color,flexShrink:0}}/>
                      <span>{f.text}</span>
                    </div>
                  ))}
                </div>

                {/* Footer links */}
                <div className="nb-profile-footer">
                  <a href={m.links.linkedin} className="nb-profile-link" style={{'--c':m.color}}>
                    <Linkedin size={14}/> LinkedIn
                  </a>
                  <a href={m.links.portfolio} className="nb-profile-link" style={{'--c':m.color}}>
                    <Globe size={14}/> Portfolio
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Culture() {
  const items = [
    { emoji:'🎯', title:'Skin in the game',  body:'We only take projects we believe in. If we don\'t think something will work, we\'ll tell you.' },
    { emoji:'💬', title:'Radical honesty',    body:'No sugar-coating. We share what we think and expect the same back.' },
    { emoji:'🏗️', title:'Build to last',      body:'Every project is something we\'d be proud to put our name on publicly.' },
    { emoji:'🌍', title:'Remote-first',       body:'Based in Dhaka, collaborating globally. Async done right.' },
  ]
  return (
    <section style={{padding:'0 0 80px',background:'radial-gradient(ellipse at top,rgba(121,40,202,.06),transparent 60%)'}}>
      <div className="nb-container">
        <Reveal>
          <div className="nb-section-head" style={{marginBottom:40}}>
            <Badge>How we operate</Badge>
            <h2 className="nb-h2">Culture isn't a poster.<br/><span className="nb-grad">It's how we work.</span></h2>
          </div>
        </Reveal>
        <StaggerReveal className="nb-culture-grid" step={0.1}>
          {items.map(c => (
            <div key={c.title} className="nb-culture-card">
              <div className="nb-culture-emoji">{c.emoji}</div>
              <h3 style={{fontWeight:700,fontSize:'1.05rem',marginBottom:8}}>{c.title}</h3>
              <p style={{color:'rgba(255,255,255,.55)',lineHeight:1.65,fontSize:'.88rem'}}>{c.body}</p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}

function Hiring() {
  return (
    <section style={{padding:'0 0 100px'}}>
      <div className="nb-container nb-container-narrow">
        <Reveal>
          <div className="nb-hiring-card">
            <div className="nb-hiring-glow"/>
            <div style={{position:'relative',zIndex:2,textAlign:'center'}}>
              <Badge>We're growing</Badge>
              <h2 className="nb-h2" style={{marginTop:16}}>Think you belong <span className="nb-grad">on this team?</span></h2>
              <p className="nb-section-sub" style={{margin:'16px auto 32px',maxWidth:480}}>
                No open roles right now, but we always want to hear from exceptional designers and developers who care about craft.
              </p>
              <NavLink to="/contact" className="nb-btn nb-btn-grad">Introduce yourself <ArrowRight size={16}/></NavLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function Team() {
  return (
    <>
      <PageHero/>
      <TeamCards/>
      <Culture/>
      <Hiring/>
    </>
  )
}
