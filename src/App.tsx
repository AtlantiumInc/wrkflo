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
          <button className="font-mono text-xs bg-accent/15 border border-accent text-accent-light px-4 py-2 hover:bg-accent/30 hover:text-white transition-all">
            Request access
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center pt-32 pb-24 px-8">
        <h1 className="text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6" style={{ textShadow: '0 0 40px rgba(124,58,237,0.15)' }}>
          Your data works<br />while you sleep
        </h1>
        <p className="font-mono text-text-muted text-sm max-w-[520px] leading-relaxed mb-10">
          An autonomous business agent that connects to your data,
          understands your objectives, and takes action to reach them.
          No dashboards to watch. No reports to read. Just outcomes.
        </p>
        <div className="flex gap-4">
          <button className="font-mono text-sm bg-accent/15 border border-accent text-accent-light px-6 py-3 hover:bg-accent/30 hover:text-white transition-all">
            Request early access
          </button>
        </div>
      </section>

      {/* Architecture diagram */}
      <section className="max-w-[900px] mx-auto px-8 pb-24">
        <div className="border border-border bg-surface p-8">
          <div className="font-mono text-[10px] text-text-dim tracking-[2px] uppercase mb-6">How wrkflo thinks</div>
          <div className="flex items-center justify-between gap-4">
            {[
              { label: 'Your data', sub: 'Postgres, Stripe, HubSpot', color: 'text-text-muted' },
              { label: '', sub: '', arrow: true },
              { label: 'Understand', sub: 'Patterns, risks, opportunities', color: 'text-accent-light' },
              { label: '', sub: '', arrow: true },
              { label: 'Decide', sub: 'Objectives, priorities, plans', color: 'text-white' },
              { label: '', sub: '', arrow: true },
              { label: 'Act', sub: 'Email, Slack, CRM, webhooks', color: 'text-green' },
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
              title: 'Connect',
              desc: 'Point wrkflo at your database, CRM, or payment processor. It reads the shape of your data and learns what normal looks like.',
            },
            {
              step: '02',
              title: 'Set objectives',
              desc: '"Reduce churn by 20%." "Increase expansion revenue." Or let wrkflo generate objectives from what it sees in the data. Either way works.',
            },
            {
              step: '03',
              title: 'It runs',
              desc: 'Monitors your data continuously. Detects shifts. Decides what to do. Sends emails, creates tasks, fires webhooks. Reports back what worked.',
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

      {/* What it does */}
      <section className="max-w-[900px] mx-auto px-8 pb-24">
        <div className="font-mono text-[10px] text-text-dim tracking-[2px] uppercase mb-8">What wrkflo does that you currently do manually</div>
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              before: 'Export CSV, open spreadsheet, build pivot table, squint at numbers',
              after: 'wrkflo reads your data and tells you what changed, in plain language, every morning',
            },
            {
              before: 'Notice a customer went quiet, forget to follow up for 3 weeks',
              after: 'wrkflo detects disengagement the day it starts and triggers outreach automatically',
            },
            {
              before: 'Quarterly business review reveals churn you could have prevented',
              after: 'wrkflo flags at-risk accounts in real-time with the exact reason and recommended action',
            },
            {
              before: 'Ask your data team "who should we upsell?" and wait 2 weeks for an answer',
              after: 'wrkflo identifies expansion candidates continuously and creates tasks for your sales team',
            },
          ].map((item, i) => (
            <div key={i} className="border border-border bg-surface p-6 hover:border-border-hover transition-colors">
              <div className="font-mono text-red text-[10px] uppercase tracking-[1px] mb-2">Before</div>
              <div className="font-mono text-text-muted text-xs leading-relaxed mb-4">{item.before}</div>
              <div className="font-mono text-green text-[10px] uppercase tracking-[1px] mb-2">With wrkflo</div>
              <div className="font-mono text-text-muted text-xs leading-relaxed">{item.after}</div>
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
              desc: 'Detects at-risk patterns before customers cancel. Auto-triggers win-back sequences. Measures if they worked. Adjusts approach if they didn\'t.',
              tag: 'SaaS',
            },
            {
              title: 'Revenue expansion',
              desc: 'Finds customers with strong engagement but low spend. Flags upsell timing. Creates tasks for account managers with specific talking points.',
              tag: 'Sales',
            },
            {
              title: 'Donor retention',
              desc: 'Identifies lapsed donors early by behavioral shifts. Triggers personalized re-engagement at the right moment. Tracks giving pattern recovery.',
              tag: 'Nonprofit',
            },
            {
              title: 'Fraud & anomaly detection',
              desc: 'Scores every transaction against normal patterns. Flags anomalies instantly. Escalates to review queue with context on why it\'s unusual.',
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
        <div className="font-mono text-[10px] text-text-dim tracking-[2px] uppercase mb-8">For developers</div>
        <div className="border border-border bg-surface p-6">
          <pre className="font-mono text-xs leading-relaxed overflow-x-auto">
            <code>
              <span className="text-text-dim">// connect wrkflo to your data, set an objective, let it run</span>{'\n'}
              <span className="text-accent-light">import</span> <span className="text-white">{'{ agent }'}</span> <span className="text-accent-light">from</span> <span className="text-green">'wrkflo'</span>{'\n\n'}
              <span className="text-accent-light">const</span> <span className="text-white">w</span> = <span className="text-white">agent</span>(<span className="text-green">'postgres://your-db'</span>){'\n\n'}
              <span className="text-text-dim">// set an objective — wrkflo figures out the rest</span>{'\n'}
              <span className="text-white">w</span>.<span className="text-white">objective</span>(<span className="text-green">'reduce churn by 20% this quarter'</span>){'\n\n'}
              <span className="text-text-dim">// or react to what it finds</span>{'\n'}
              <span className="text-white">w</span>.<span className="text-white">on</span>(<span className="text-green">'risk-detected'</span>, <span className="text-accent-light">async</span> (group) {'=> {\n'}
              {'  '}<span className="text-accent-light">await</span> <span className="text-white">slack.post</span>(<span className="text-green">'#alerts'</span>, group.insight){'\n'}
              {'  '}<span className="text-accent-light">await</span> <span className="text-white">email.send</span>(group.members, <span className="text-green">'win-back'</span>){'\n'}
              {'}'}){'\n\n'}
              <span className="text-white">w</span>.<span className="text-white">on</span>(<span className="text-green">'opportunity'</span>, <span className="text-accent-light">async</span> (group) {'=> {\n'}
              {'  '}<span className="text-accent-light">await</span> <span className="text-white">crm.createTasks</span>(group.members, group.insight){'\n'}
              {'}'}){'\n\n'}
              <span className="text-white">w</span>.<span className="text-white">start</span>() <span className="text-text-dim">// runs continuously</span>
            </code>
          </pre>
        </div>
      </section>

      {/* CTA */}
      <section className="flex flex-col items-center text-center py-24 border-t border-border">
        <div className="font-mono text-2xl text-white mb-3" style={{ textShadow: '0 0 20px rgba(124,58,237,0.3)' }}>
          Stop watching dashboards.
        </div>
        <div className="font-mono text-text-muted text-sm mb-8">Give your data an objective and let it work.</div>
        <button className="font-mono text-sm bg-accent/15 border border-accent text-accent-light px-8 py-3 hover:bg-accent/30 hover:text-white transition-all">
          Request early access
        </button>
      </section>

      {/* Footer */}
      <footer className="flex items-center justify-between px-8 py-6 border-t border-border">
        <div className="font-mono text-[10px] text-text-dim">
          wrkflo.ai &middot; Atlantium Inc &middot; 2026
        </div>
      </footer>
    </div>
  )
}

export default App
