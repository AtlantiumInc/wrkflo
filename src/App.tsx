import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-border">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xl text-white" style={{ textShadow: '0 0 12px rgba(124,58,237,0.5)' }}>wrkflo</span>
          <span className="font-mono text-[9px] text-accent tracking-[2px] uppercase mt-1">.ai</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#how" className="font-mono text-xs text-text-muted hover:text-white transition-colors">How it works</a>
          <a href="#use-cases" className="font-mono text-xs text-text-muted hover:text-white transition-colors">Use cases</a>
          <a href="https://github.com/AtlantiumInc" className="font-mono text-xs text-text-muted hover:text-white transition-colors">GitHub</a>
          <button className="font-mono text-xs bg-accent/15 border border-accent text-accent-light px-4 py-2 hover:bg-accent/30 hover:text-white transition-all">
            Request access
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center pt-32 pb-24 px-8">
        <div className="font-mono text-[10px] text-accent tracking-[4px] uppercase mb-6">From Atlantium Inc</div>
        <h1 className="text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6" style={{ textShadow: '0 0 40px rgba(124,58,237,0.15)' }}>
          Your data works<br />while you sleep
        </h1>
        <p className="font-mono text-text-muted text-sm max-w-[520px] leading-relaxed mb-10">
          Autonomous agents that watch your data, discover what changed,
          decide what matters, and take action. Powered by{' '}
          <a href="https://www.npmjs.com/package/durag" className="text-accent-light hover:text-white transition-colors underline underline-offset-2">durag.js</a>{' '}
          pattern recognition. No AI keys required.
        </p>
        <div className="flex gap-4">
          <button className="font-mono text-sm bg-accent/15 border border-accent text-accent-light px-6 py-3 hover:bg-accent/30 hover:text-white transition-all">
            Request early access
          </button>
          <a href="https://www.npmjs.com/package/durag" className="font-mono text-sm border border-border text-text-muted px-6 py-3 hover:border-border-hover hover:text-white transition-all">
            Try durag.js (open source)
          </a>
        </div>
      </section>

      {/* Architecture diagram */}
      <section className="max-w-[900px] mx-auto px-8 pb-24">
        <div className="border border-border bg-surface p-8">
          <div className="font-mono text-[10px] text-text-dim tracking-[2px] uppercase mb-6">Architecture</div>
          <div className="flex items-center justify-between gap-4">
            {[
              { label: 'Your data', sub: 'Postgres, Stripe, CSV', color: 'text-text-muted' },
              { label: '', sub: '', arrow: true },
              { label: 'durag.js', sub: 'Pattern detection', color: 'text-accent-light' },
              { label: '', sub: '', arrow: true },
              { label: 'wrkflo', sub: 'Agent layer', color: 'text-white' },
              { label: '', sub: '', arrow: true },
              { label: 'Actions', sub: 'Email, Slack, CRM, API', color: 'text-green' },
            ].map((item, i) =>
              item.arrow ? (
                <div key={i} className="font-mono text-text-dim text-lg">&#8594;</div>
              ) : (
                <div key={i} className="text-center flex-1">
                  <div className={`font-mono text-sm font-medium ${item.color}`}>{item.label}</div>
                  <div className="font-mono text-[10px] text-text-dim mt-1">{item.sub}</div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="max-w-[900px] mx-auto px-8 pb-24">
        <div className="font-mono text-[10px] text-text-dim tracking-[2px] uppercase mb-8">How it works</div>
        <div className="grid grid-cols-3 gap-4">
          {[
            {
              step: '01',
              title: 'Detect',
              desc: 'durag.js runs on your data nightly. Normalizes, reduces, clusters. Finds segments you didn\'t know existed. Generates plain-text insights from the math.',
            },
            {
              step: '02',
              title: 'Decide',
              desc: 'wrkflo compares this week\'s patterns to last week\'s. Who moved clusters? What shifted? It generates objectives automatically or works from yours.',
            },
            {
              step: '03',
              title: 'Act',
              desc: 'Sends emails, posts to Slack, creates CRM tasks, triggers webhooks. Then watches if the actions worked. Closed loop. No human required unless flagged.',
            },
          ].map((item) => (
            <div key={item.step} className="border border-border bg-surface p-6 hover:border-border-hover transition-colors">
              <div className="font-mono text-accent text-xs mb-3">{item.step}</div>
              <div className="text-white font-medium text-lg mb-3">{item.title}</div>
              <div className="font-mono text-text-muted text-xs leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section id="use-cases" className="max-w-[900px] mx-auto px-8 pb-24">
        <div className="font-mono text-[10px] text-text-dim tracking-[2px] uppercase mb-8">Use cases</div>
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              title: 'Churn prevention',
              desc: 'Detects at-risk segments before they cancel. Auto-triggers win-back sequences. Measures if they worked.',
              tag: 'SaaS',
            },
            {
              title: 'Revenue expansion',
              desc: 'Finds customers with high NPS + low product usage. Flags upsell opportunities. Creates tasks for account managers.',
              tag: 'Sales',
            },
            {
              title: 'Donor engagement',
              desc: 'Segments donors by giving patterns. Identifies lapsed donors early. Triggers personalized re-engagement.',
              tag: 'Nonprofit',
            },
            {
              title: 'Fraud detection',
              desc: 'Scores every transaction against normal patterns. Flags anomalies in real-time. Escalates to review queue.',
              tag: 'Fintech',
            },
          ].map((item) => (
            <div key={item.title} className="border border-border bg-surface p-6 hover:border-border-hover transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="text-white font-medium">{item.title}</div>
                <div className="font-mono text-[10px] text-text-dim border border-border px-2 py-0.5">{item.tag}</div>
              </div>
              <div className="font-mono text-text-muted text-xs leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Code example */}
      <section className="max-w-[900px] mx-auto px-8 pb-24">
        <div className="font-mono text-[10px] text-text-dim tracking-[2px] uppercase mb-8">Integration</div>
        <div className="border border-border bg-surface p-6">
          <pre className="font-mono text-xs leading-relaxed overflow-x-auto">
            <code>
              <span className="text-text-dim">// wrkflo watches your data and acts on what it finds</span>{'\n'}
              <span className="text-accent-light">import</span> <span className="text-white">{'{ watch }'}</span> <span className="text-accent-light">from</span> <span className="text-green">'wrkflo'</span>{'\n\n'}
              <span className="text-white">watch</span>(<span className="text-green">'postgres://your-db'</span>, {'{\n'}
              {'  '}<span className="text-text-muted">schedule:</span> <span className="text-green">'every night at 2am'</span>,{'\n'}
              {'  '}<span className="text-text-muted">onRisk:</span> <span className="text-accent-light">async</span> (segment) {'=> {\n'}
              {'    '}<span className="text-text-dim">// durag detected at-risk customers</span>{'\n'}
              {'    '}<span className="text-accent-light">await</span> <span className="text-white">slack.post</span>(<span className="text-green">'#cs-alerts'</span>, segment.insights[0]){'\n'}
              {'    '}<span className="text-accent-light">await</span> <span className="text-white">email.sequence</span>(<span className="text-green">'win-back'</span>, segment.members){'\n'}
              {'  }'},{'\n'}
              {'  '}<span className="text-text-muted">onShift:</span> <span className="text-accent-light">async</span> (from, to, members) {'=> {\n'}
              {'    '}<span className="text-text-dim">// customers moved between segments</span>{'\n'}
              {'    '}<span className="text-accent-light">await</span> <span className="text-white">crm.createTasks</span>(members, to.insights){'\n'}
              {'  }'}{'\n'}
              {'}'})
            </code>
          </pre>
        </div>
      </section>

      {/* CTA */}
      <section className="flex flex-col items-center text-center py-24 border-t border-border">
        <div className="font-mono text-2xl text-white mb-3" style={{ textShadow: '0 0 20px rgba(124,58,237,0.3)' }}>
          Stop watching dashboards.
        </div>
        <div className="font-mono text-text-muted text-sm mb-8">Let your data do the work.</div>
        <button className="font-mono text-sm bg-accent/15 border border-accent text-accent-light px-8 py-3 hover:bg-accent/30 hover:text-white transition-all">
          Request early access
        </button>
      </section>

      {/* Footer */}
      <footer className="flex items-center justify-between px-8 py-6 border-t border-border">
        <div className="font-mono text-[10px] text-text-dim">
          wrkflo.ai &middot; Atlantium Inc &middot; 2026
        </div>
        <div className="flex items-center gap-6">
          <a href="https://www.npmjs.com/package/durag" className="font-mono text-[10px] text-text-dim hover:text-text-muted transition-colors">durag.js</a>
          <a href="https://github.com/AtlantiumInc" className="font-mono text-[10px] text-text-dim hover:text-text-muted transition-colors">GitHub</a>
        </div>
      </footer>
    </div>
  )
}

export default App
