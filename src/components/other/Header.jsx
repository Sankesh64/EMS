import React from 'react'

const Header = ({ changeUser, data }) => {
  const displayName = data ? data.firstName : 'Admin'
  const avatar = data ? (data.avatar || data.firstName.slice(0, 2).toUpperCase()) : 'AD'
  const role = data ? (data.role || 'Employee') : 'Administrator'
  const today = new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center text-sm font-bold shadow-lg flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #A88AED, #8B6FD4)', color: '#FFFEEC' }}>
          {avatar}
        </div>
        <div>
          <p className="text-xs mb-0.5" style={{ color: 'rgba(255,254,236,0.35)' }}>{today}</p>
          <h1 className="font-semibold text-lg leading-tight" style={{ color: '#FFFEEC' }}>
            Hello, {displayName} 👋
          </h1>
          <span className="text-xs font-medium" style={{ color: '#A88AED' }}>{role}</span>
        </div>
      </div>

      <button onClick={changeUser}
        className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl transition-all duration-200"
        style={{ background: 'rgba(255,254,236,0.05)', border: '1px solid rgba(255,254,236,0.08)', color: 'rgba(255,254,236,0.45)' }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(239,68,68,0.12)'; e.currentTarget.style.color = '#f87171'; e.currentTarget.style.borderColor = 'rgba(239,68,68,0.25)' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,254,236,0.05)'; e.currentTarget.style.color = 'rgba(255,254,236,0.45)'; e.currentTarget.style.borderColor = 'rgba(255,254,236,0.08)' }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
        </svg>
        Log Out
      </button>
    </div>
  )
}

export default Header
