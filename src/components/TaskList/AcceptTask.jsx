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

const AcceptTask = ({ data }) => {
  const c = CATS[data.category] || CATS.Default
  return (
    <div className="flex-shrink-0 w-[272px] rounded-2xl p-5 flex flex-col transition-all duration-200"
      style={{ background:'#13111E', border:'1px solid rgba(251,191,36,0.22)' }}
      onMouseEnter={e => e.currentTarget.style.borderColor='rgba(251,191,36,0.45)'}
      onMouseLeave={e => e.currentTarget.style.borderColor='rgba(251,191,36,0.22)'}>
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-semibold px-2.5 py-1 rounded-lg" style={{ color:c.color, background:c.bg, border:`1px solid ${c.border}` }}>{data.category}</span>
        <span className="text-xs" style={{ color:'rgba(255,254,236,0.3)' }}>{data.taskDate}</span>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-1.5 mb-1">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background:'#fbbf24' }} />
          <span className="text-xs font-semibold uppercase tracking-wide" style={{ color:'#fbbf24' }}>In Progress</span>
        </div>
        <h3 className="font-semibold text-base leading-snug mb-2" style={{ color:'#FFFEEC' }}>{data.taskTitle}</h3>
        <p className="text-xs leading-relaxed line-clamp-3" style={{ color:'rgba(255,254,236,0.4)' }}>{data.taskDescription}</p>
      </div>
      <div className="mt-4 pt-4 flex gap-2" style={{ borderTop:'1px solid rgba(255,254,236,0.06)' }}>
        <button className="flex-1 text-xs font-semibold py-2 rounded-xl transition-all"
          style={{ background:'rgba(255,254,236,0.08)', color:'#FFFEEC', border:'1px solid rgba(255,254,236,0.15)' }}
          onMouseEnter={e => e.currentTarget.style.background='rgba(255,254,236,0.15)'}
          onMouseLeave={e => e.currentTarget.style.background='rgba(255,254,236,0.08)'}>
          ✓ Complete
        </button>
        <button className="flex-1 text-xs font-semibold py-2 rounded-xl transition-all"
          style={{ background:'rgba(239,68,68,0.1)', color:'#f87171', border:'1px solid rgba(239,68,68,0.2)' }}
          onMouseEnter={e => e.currentTarget.style.background='rgba(239,68,68,0.2)'}
          onMouseLeave={e => e.currentTarget.style.background='rgba(239,68,68,0.1)'}>
          ✕ Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask
