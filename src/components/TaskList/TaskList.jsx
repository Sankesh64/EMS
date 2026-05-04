import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  const tasks = data?.tasks || []

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-sm" style={{ color: '#FFFEEC' }}>My Tasks</h3>
        <span className="text-xs font-medium" style={{ color: 'rgba(255,254,236,0.3)' }}>
          {tasks.length} task{tasks.length !== 1 ? 's' : ''} total
        </span>
      </div>

      {tasks.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16" style={{ color: 'rgba(255,254,236,0.2)' }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round" className="mb-3 opacity-50">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          <p className="text-sm">No tasks assigned yet</p>
        </div>
      ) : (
        <div className="flex gap-4 overflow-x-auto pb-3"
          style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(168,138,237,0.25) transparent' }}>
          {tasks.map((task, idx) => {
            if (task.newTask)   return <NewTask      key={task.id || idx} data={task} />
            if (task.active)    return <AcceptTask   key={task.id || idx} data={task} />
            if (task.completed) return <CompleteTask key={task.id || idx} data={task} />
            if (task.failed)    return <FailedTask   key={task.id || idx} data={task} />
            return null
          })}
        </div>
      )}
    </div>
  )
}

export default TaskList
