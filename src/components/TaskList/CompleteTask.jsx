import React from 'react'

const CATS = {
  Design:        { color:'#c4b5fd', bg:'rgba(196,181,253,0.1)',  border:'rgba(196,181,253,0.2)'  },
  Development:   { color:'#A88AED', bg:'rgba(168,138,237,0.1)',  border:'rgba(168,138,237,0.2)'  },
  QA:            { color:'#fbbf24', bg:'rgba(251,191,36,0.1)',   border:'rgba(251,191,36,0.2)'   },
  DevOps:        { color:'#fb923c', bg:'rgba(251,146,60,0.1)',   border:'rgba(251,146,60,0.2)'   },
  Documentation: { color:'rgba(255,254,236,0.5)', bg:'rgba(255,254,236,0.06)', border:'rgba(255,254,236,0.12)' },
  Meeting:       { color:'#f9a8d4', bg:'rgba(249,168,212,0.1)',  border:'rgba(249,168,212,0.2)'  },
  Research:      { color:'#818cf8', bg:'rgba(129,140,248,0.1)',  border:'rgba(129,140,248,0.2)'  },
  Default:       { color:'#A88AED', bg:'rgba(168,138,237,0.1)',  border:'rgba(168,138,237,0.2)'  },
}

const CompleteTask = ({ data }) => {
  const c = CATS[data.category] || CATS.Default
  return (
    <div className="flex-shrink-0 w-[272px] rounded-2xl p-5 flex flex-col transition-all duration-200"
      style={{ background:'#13111E', border:'1px solid rgba(255,254,236,0.12)', opacity: 0.82 }}
      onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(255,254,236,0.25)'; e.currentTarget.style.opacity='1' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,254,236,0.12)'; e.currentTarget.style.opacity='0.82' }}>
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-semibold px-2.5 py-1 rounded-lg" style={{ color:c.color, background:c.bg, border:`1px solid ${c.border}` }}>{data.category}</span>
        <span className="text-xs" style={{ color:'rgba(255,254,236,0.3)' }}>{data.taskDate}</span>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-1.5 mb-1">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background:'#FFFEEC' }} />
          <span className="text-xs font-semibold uppercase tracking-wide" style={{ color:'rgba(255,254,236,0.6)' }}>Completed</span>
        </div>
        <h3 className="font-semibold text-base leading-snug mb-2 line-through"
          style={{ color:'rgba(255,254,236,0.45)', textDecorationColor:'rgba(255,254,236,0.2)' }}>
          {data.taskTitle}
        </h3>
        <p className="text-xs leading-relaxed line-clamp-3" style={{ color:'rgba(255,254,236,0.3)' }}>{data.taskDescription}</p>
      </div>
      <div className="mt-4 pt-4" style={{ borderTop:'1px solid rgba(255,254,236,0.06)' }}>
        <div className="flex items-center gap-2 text-xs font-medium" style={{ color:'rgba(255,254,236,0.5)' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          Task completed successfully
        </div>
      </div>
    </div>
  )
}

export default CompleteTask
