import React from 'react'

const stats = [
  {
    key: 'newTask', label: 'New Tasks',
    color: { border: 'rgba(168,138,237,0.25)', bg: 'rgba(168,138,237,0.08)', iconBg: 'rgba(168,138,237,0.18)', text: '#A88AED', glow: 'rgba(168,138,237,0.15)' },
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#A88AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
  },
  {
    key: 'active', label: 'In Progress',
    color: { border: 'rgba(251,191,36,0.25)', bg: 'rgba(251,191,36,0.08)', iconBg: 'rgba(251,191,36,0.18)', text: '#fbbf24', glow: 'rgba(251,191,36,0.15)' },
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  },
  {
    key: 'completed', label: 'Completed',
    color: { border: 'rgba(255,254,236,0.2)', bg: 'rgba(255,254,236,0.06)', iconBg: 'rgba(255,254,236,0.12)', text: '#FFFEEC', glow: 'rgba(255,254,236,0.1)' },
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFEEC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  },
  {
    key: 'failed', label: 'Failed',
    color: { border: 'rgba(248,113,113,0.25)', bg: 'rgba(248,113,113,0.08)', iconBg: 'rgba(248,113,113,0.18)', text: '#f87171', glow: 'rgba(248,113,113,0.15)' },
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
  },
]

const TaskListNumbers = ({ data }) => (
  <div className="flex gap-4 mt-6">
    {stats.map(({ key, label, color, icon }) => (
      <div key={key} className="flex-1 rounded-2xl p-5 relative overflow-hidden"
        style={{ background: color.bg, border: `1px solid ${color.border}` }}>
        <div className="absolute top-0 right-0 w-20 h-20 rounded-full -translate-y-4 translate-x-4"
          style={{ background: `radial-gradient(circle, ${color.glow} 0%, transparent 70%)` }} />
        <div className="w-8 h-8 rounded-xl flex items-center justify-center mb-3"
          style={{ background: color.iconBg }}>
          {icon}
        </div>
        <h2 className="text-3xl font-bold leading-none" style={{ color: color.text }}>
          {data.taskCounts[key]}
        </h2>
        <p className="text-xs font-medium mt-1.5" style={{ color: 'rgba(255,254,236,0.4)' }}>{label}</p>
      </div>
    ))}
  </div>
)

export default TaskListNumbers
