import React, { useState } from 'react'
import { registerEmployee } from '../../utils/localStorage'

const Login = ({ handleLogin }) => {
  const [tab, setTab] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const [regName, setRegName] = useState('')
  const [regEmail, setRegEmail] = useState('')
  const [regPassword, setRegPassword] = useState('')
  const [regConfirm, setRegConfirm] = useState('')
  const [regRole, setRegRole] = useState('')
  const [regDept, setRegDept] = useState('')
  const [regSuccess, setRegSuccess] = useState('')

  const inp = `w-full border text-sm rounded-xl px-4 py-3 outline-none transition-colors placeholder:text-[rgba(255,254,236,0.2)]`
  const inpIdle = `bg-[#0C0B12] border-[rgba(255,254,236,0.08)] text-[#FFFEEC] focus:border-[#A88AED]`

  const loginSubmit = (e) => {
    e.preventDefault(); setError('')
    const r = handleLogin(email.toLowerCase().trim(), password)
    if (!r.success) setError(r.message)
  }

  const registerSubmit = (e) => {
    e.preventDefault(); setError(''); setRegSuccess('')
    if (regPassword !== regConfirm) return setError('Passwords do not match.')
    if (regPassword.length < 6) return setError('Password must be at least 6 characters.')
    const r = registerEmployee({ firstName: regName, email: regEmail.toLowerCase().trim(), password: regPassword, role: regRole, department: regDept })
    if (r.success) {
      setRegSuccess('Account created! Redirecting to sign in…')
      setRegName(''); setRegEmail(''); setRegPassword(''); setRegConfirm(''); setRegRole(''); setRegDept('')
      setTimeout(() => { setTab('login'); setRegSuccess('') }, 1800)
    } else setError(r.message)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: '#0C0B12', fontFamily: "'Outfit', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');`}</style>

      {/* Background glow blob */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(168,138,237,0.12) 0%, transparent 70%)' }} />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2.5 mb-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#A88AED' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFEEC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight" style={{ color: '#FFFEEC' }}>WorkHub</span>
          </div>
          <p style={{ color: 'rgba(255,254,236,0.35)' }} className="text-sm">Employee Management System</p>
        </div>

        {/* Card */}
        <div className="rounded-2xl p-8 shadow-2xl" style={{ background: '#13111E', border: '1px solid rgba(255,254,236,0.07)' }}>
          {/* Tabs */}
          <div className="flex rounded-xl p-1 mb-7" style={{ background: '#0C0B12' }}>
            {['login', 'register'].map(t => (
              <button key={t} onClick={() => { setTab(t); setError(''); setRegSuccess('') }}
                className="flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200 capitalize"
                style={tab === t
                  ? { background: '#A88AED', color: '#FFFEEC' }
                  : { color: 'rgba(255,254,236,0.35)' }}>
                {t === 'login' ? 'Sign In' : 'Register'}
              </button>
            ))}
          </div>

          {tab === 'login' ? (
            <form onSubmit={loginSubmit} className="space-y-4">
              {[
                { label: 'Email Address', val: email, set: setEmail, type: 'email', ph: 'you@company.com' },
                { label: 'Password', val: password, set: setPassword, type: 'password', ph: 'Enter your password' },
              ].map(f => (
                <div key={f.label}>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: 'rgba(255,254,236,0.45)' }}>{f.label}</label>
                  <input value={f.val} onChange={e => f.set(e.target.value)} required type={f.type} placeholder={f.ph} className={`${inp} ${inpIdle}`} />
                </div>
              ))}
              {error && <p className="text-xs rounded-lg px-3 py-2" style={{ background: 'rgba(239,68,68,0.1)', color: '#f87171', border: '1px solid rgba(239,68,68,0.2)' }}>{error}</p>}
              <button type="submit" className="w-full font-semibold py-3 rounded-xl transition-all text-sm mt-1"
                style={{ background: '#A88AED', color: '#FFFEEC' }}>
                Sign In
              </button>
              <div className="mt-4 p-3 rounded-xl" style={{ background: 'rgba(255,254,236,0.04)', border: '1px solid rgba(255,254,236,0.06)' }}>
                <p className="text-xs text-center mb-2 font-medium" style={{ color: 'rgba(255,254,236,0.3)' }}>Demo Credentials</p>
                <div className="space-y-1 text-xs" style={{ color: 'rgba(255,254,236,0.35)' }}>
                  <div className="flex justify-between"><span>Admin:</span><span style={{ color: 'rgba(255,254,236,0.6)' }}>admin@company.com / admin123</span></div>
                  <div className="flex justify-between"><span>Employee:</span><span style={{ color: 'rgba(255,254,236,0.6)' }}>arjun@company.com / arjun123</span></div>
                </div>
              </div>
            </form>
          ) : (
            <form onSubmit={registerSubmit} className="space-y-4">
              {[
                { label: 'Full Name', val: regName, set: setRegName, type: 'text', ph: 'e.g. Arjun Sharma' },
                { label: 'Work Email', val: regEmail, set: setRegEmail, type: 'email', ph: 'you@company.com' },
              ].map(f => (
                <div key={f.label}>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: 'rgba(255,254,236,0.45)' }}>{f.label}</label>
                  <input value={f.val} onChange={e => f.set(e.target.value)} required type={f.type} placeholder={f.ph} className={`${inp} ${inpIdle}`} />
                </div>
              ))}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Job Title', val: regRole, set: setRegRole, ph: 'e.g. Developer' },
                  { label: 'Department', val: regDept, set: setRegDept, ph: 'e.g. Engineering' },
                ].map(f => (
                  <div key={f.label}>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: 'rgba(255,254,236,0.45)' }}>{f.label}</label>
                    <input value={f.val} onChange={e => f.set(e.target.value)} type="text" placeholder={f.ph} className={`${inp} ${inpIdle}`} />
                  </div>
                ))}
              </div>
              {[
                { label: 'Password', val: regPassword, set: setRegPassword, ph: 'Min. 6 characters' },
                { label: 'Confirm Password', val: regConfirm, set: setRegConfirm, ph: 'Re-enter password' },
              ].map(f => (
                <div key={f.label}>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: 'rgba(255,254,236,0.45)' }}>{f.label}</label>
                  <input value={f.val} onChange={e => f.set(e.target.value)} required type="password" placeholder={f.ph} className={`${inp} ${inpIdle}`} />
                </div>
              ))}
              {error && <p className="text-xs rounded-lg px-3 py-2" style={{ background: 'rgba(239,68,68,0.1)', color: '#f87171', border: '1px solid rgba(239,68,68,0.2)' }}>{error}</p>}
              {regSuccess && <p className="text-xs rounded-lg px-3 py-2" style={{ background: 'rgba(168,138,237,0.1)', color: '#A88AED', border: '1px solid rgba(168,138,237,0.2)' }}>{regSuccess}</p>}
              <button type="submit" className="w-full font-semibold py-3 rounded-xl transition-all text-sm mt-1"
                style={{ background: '#A88AED', color: '#FFFEEC' }}>
                Create Account
              </button>
              <p className="text-xs text-center" style={{ color: 'rgba(255,254,236,0.25)' }}>Admin accounts are managed by the system administrator.</p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
