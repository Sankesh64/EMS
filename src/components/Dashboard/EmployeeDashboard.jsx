import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ changeUser, data }) => {
  if (!data) return null
  const total = data.taskCounts.active + data.taskCounts.completed + data.taskCounts.failed + data.taskCounts.newTask
  const progress = total > 0 ? Math.round((data.taskCounts.completed / total) * 100) : 0

  return (
    <div className="min-h-screen" style={{ background: '#0C0B12', fontFamily: "'Outfit', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');`}</style>
      <div className="max-w-5xl mx-auto px-6 py-8">
        <Header changeUser={changeUser} data={data} />

        {/* Progress banner */}
        <div className="rounded-2xl p-5 mb-2 flex items-center justify-between"
          style={{ background: 'linear-gradient(135deg, rgba(168,138,237,0.12), rgba(255,254,236,0.04))', border: '1px solid rgba(168,138,237,0.2)' }}>
          <div>
            <p className="text-xs font-medium mb-1" style={{ color: 'rgba(255,254,236,0.4)' }}>Overall Progress</p>
            <h2 className="font-bold text-2xl" style={{ color: '#FFFEEC' }}>
              {progress}% <span className="text-sm font-normal" style={{ color: 'rgba(255,254,236,0.35)' }}>completed</span>
            </h2>
          </div>
          <div className="flex-1 mx-8">
            <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,254,236,0.08)' }}>
              <div className="h-full rounded-full transition-all duration-700"
                style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #A88AED, #C4B5FD)' }} />
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs font-medium mb-1" style={{ color: 'rgba(255,254,236,0.4)' }}>Total Tasks</p>
            <p className="font-bold text-2xl" style={{ color: '#FFFEEC' }}>{total}</p>
          </div>
        </div>

        <TaskListNumbers data={data} />
        <TaskList data={data} />
      </div>
    </div>
  )
}

export default EmployeeDashboard
