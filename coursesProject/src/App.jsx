import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './component/Header'
import { courses } from './data'
import Course from './component/Course'
import './css/Course.css';

function App() {

  return (
    <>
      <Header />
      <div className="course-main row px-4">
        {
          courses?.map((course) => (
            <Course key={course.id} course={course} />
          ))
        }
      </div>
    </>
  )
}

export default App
