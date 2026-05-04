import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => (
  <div className="min-h-screen" style={{ background: '#0C0B12', fontFamily: "'Outfit', sans-serif" }}>
    <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');`}</style>
    <div className="max-w-5xl mx-auto px-6 py-8">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  </div>
)

export default AdminDashboard
