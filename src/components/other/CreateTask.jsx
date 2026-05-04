import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const inputCls = `w-full border text-sm rounded-xl px-4 py-2.5 outline-none transition-colors`
const inputStyle = { background: '#0C0B12', borderColor: 'rgba(255,254,236,0.08)', color: '#FFFEEC' }

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext)
  const [form, setForm] = useState({ taskTitle: '', taskDescription: '', taskDate: '', asignTo: '', category: '' })
  const [feedback, setFeedback] = useState('')

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  const submitHandler = (e) => {
    e.preventDefault()
    const newTask = { id: 't' + Date.now(), taskTitle: form.taskTitle, taskDescription: form.taskDescription, taskDate: form.taskDate, category: form.category, active: false, newTask: true, failed: false, completed: false }
    const data = [...userData]
    const target = data.find(emp => emp.firstName.toLowerCase() === form.asignTo.toLowerCase())
    if (!target) { setFeedback('error:Employee not found. Check the name and try again.'); return }
    target.tasks.push(newTask)
    target.taskCounts.newTask += 1
    setUserData(data)
    localStorage.setItem('employees', JSON.stringify(data))
    setForm({ taskTitle: '', taskDescription: '', taskDate: '', asignTo: '', category: '' })
    setFeedback('success:Task assigned successfully!')
    setTimeout(() => setFeedback(''), 3000)
  }

  const fields = [
    { label: 'Task Title', key: 'taskTitle', type: 'text', ph: 'e.g. Redesign login page', list: null },
    { label: 'Assign To', key: 'asignTo', type: 'text', ph: 'Employee name', list: 'emp-list' },
    { label: 'Due Date', key: 'taskDate', type: 'date', ph: '', list: null },
    { label: 'Category', key: 'category', type: 'text', ph: 'e.g. Design, Dev, QA', list: 'cat-list' },
  ]

  return (
    <div className="rounded-2xl p-6 mb-6" style={{ background: '#13111E', border: '1px solid rgba(255,254,236,0.07)' }}>
      <div className="flex items-center gap-2 mb-5">
        <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(168,138,237,0.15)' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A88AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14"/>
          </svg>
        </div>
        <h2 className="font-semibold text-base" style={{ color: '#FFFEEC' }}>Assign New Task</h2>
      </div>

      <form onSubmit={submitHandler}>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-4">
          {fields.map(f => (
            <div key={f.key}>
              <label className="block text-xs font-medium mb-1.5" style={{ color: 'rgba(255,254,236,0.4)' }}>{f.label}</label>
              <input value={form[f.key]} onChange={set(f.key)} required={f.key !== 'category'} type={f.type}
                placeholder={f.ph} list={f.list || undefined}
                className={inputCls}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#A88AED'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,254,236,0.08)'} />
              {f.key === 'asignTo' && (
                <datalist id="emp-list">{userData?.map(emp => <option key={emp.id} value={emp.firstName} />)}</datalist>
              )}
              {f.key === 'category' && (
                <datalist id="cat-list">{['Design','Development','QA','DevOps','Documentation','Meeting','Research','Support'].map(c => <option key={c} value={c} />)}</datalist>
              )}
            </div>
          ))}
        </div>

        <div className="mb-4">
          <label className="block text-xs font-medium mb-1.5" style={{ color: 'rgba(255,254,236,0.4)' }}>Description</label>
          <textarea value={form.taskDescription} onChange={set('taskDescription')} required
            placeholder="Describe what needs to be done…"
            className={`${inputCls} h-20 resize-none`}
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = '#A88AED'}
            onBlur={e => e.target.style.borderColor = 'rgba(255,254,236,0.08)'} />
        </div>

        {feedback && (
          <p className="text-xs rounded-lg px-3 py-2 mb-3"
            style={feedback.startsWith('error:')
              ? { background: 'rgba(239,68,68,0.1)', color: '#f87171', border: '1px solid rgba(239,68,68,0.2)' }
              : { background: 'rgba(168,138,237,0.1)', color: '#A88AED', border: '1px solid rgba(168,138,237,0.2)' }}>
            {feedback.split(':').slice(1).join(':')}
          </p>
        )}

        <button type="submit" className="text-sm font-semibold px-6 py-2.5 rounded-xl transition-all"
          style={{ background: '#A88AED', color: '#FFFEEC' }}
          onMouseEnter={e => e.currentTarget.style.background = '#B99EF0'}
          onMouseLeave={e => e.currentTarget.style.background = '#A88AED'}>
          Assign Task
        </button>
      </form>
    </div>
  )
}

export default CreateTask
