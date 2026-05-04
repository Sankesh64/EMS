import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const DEPT_COLOR = {
  Engineering:    { text: '#A88AED', bg: 'rgba(168,138,237,0.12)' },
  Design:         { text: '#c4b5fd', bg: 'rgba(196,181,253,0.12)' },
  Infrastructure: { text: '#fbbf24', bg: 'rgba(251,191,36,0.12)' },
  Product:        { text: '#f9a8d4', bg: 'rgba(249,168,212,0.12)' },
  General:        { text: 'rgba(255,254,236,0.45)', bg: 'rgba(255,254,236,0.06)' },
}

const AllTask = () => {
  const [userData] = useContext(AuthContext)

  return (
    <div className="rounded-2xl p-6" style={{ background: '#13111E', border: '1px solid rgba(255,254,236,0.07)' }}>
      <div className="flex items-center gap-2 mb-5">
        <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(168,138,237,0.15)' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A88AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/>
            <line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
          </svg>
        </div>
        <h2 className="font-semibold text-base" style={{ color: '#FFFEEC' }}>Team Overview</h2>
        <span className="ml-auto text-xs font-medium" style={{ color: 'rgba(255,254,236,0.3)' }}>{userData?.length || 0} members</span>
      </div>

      <table className="w-full">
        <thead>
          <tr style={{ borderBottom: '1px solid rgba(255,254,236,0.06)' }}>
            {['Employee', 'New', 'Active', 'Done', 'Failed', 'Progress'].map((h, i) => (
              <th key={h} className={`text-xs font-medium pb-3 ${i === 0 ? 'text-left pr-4' : i === 5 ? 'text-center' : 'text-center px-3'}`}
                style={{ color: 'rgba(255,254,236,0.3)' }}>
                {i > 0 && i < 5 ? (
                  <span className="flex items-center justify-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: ['','#A88AED','#fbbf24','#FFFEEC','#f87171'][i] }} />
                    {h}
                  </span>
                ) : h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {userData?.map((emp, idx) => {
            const total = emp.taskCounts.active + emp.taskCounts.completed + emp.taskCounts.failed + emp.taskCounts.newTask
            const progress = total > 0 ? Math.round((emp.taskCounts.completed / total) * 100) : 0
            const dc = DEPT_COLOR[emp.department] || DEPT_COLOR.General
            return (
              <tr key={idx} style={{ borderBottom: '1px solid rgba(255,254,236,0.04)' }}
                className="transition-colors"
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(168,138,237,0.04)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                <td className="py-3.5 pr-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #A88AED, #8B6FD4)', color: '#FFFEEC' }}>
                      {emp.avatar || emp.firstName.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-medium leading-tight" style={{ color: '#FFFEEC' }}>{emp.firstName}</p>
                      <span className="text-xs font-medium px-1.5 py-0.5 rounded" style={{ color: dc.text, background: dc.bg }}>{emp.department || 'General'}</span>
                    </div>
                  </div>
                </td>
                {[emp.taskCounts.newTask, emp.taskCounts.active, emp.taskCounts.completed, emp.taskCounts.failed].map((c, i) => (
                  <td key={i} className="py-3.5 px-3 text-center">
                    <span className="font-semibold text-sm" style={{ color: ['#A88AED','#fbbf24','#FFFEEC','#f87171'][i] }}>{c}</span>
                  </td>
                ))}
                <td className="py-3.5 pl-3">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,254,236,0.08)' }}>
                      <div className="h-full rounded-full transition-all" style={{ width: `${progress}%`, background: '#A88AED' }} />
                    </div>
                    <span className="text-xs w-8 text-right" style={{ color: 'rgba(255,254,236,0.35)' }}>{progress}%</span>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AllTask
