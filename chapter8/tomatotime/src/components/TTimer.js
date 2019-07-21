import React, { useEffect, useState } from 'react';

export default ({ totalTime=100, isPause=false }) => {
  const[time, setTime] = useState(totalTime)
  useEffect(() => {
    const timer = !isPause && setInterval(() => {
      setTime(time - 1)
    }, 1000) //cdm
    return () => {
      clearInterval(timer)
    } //cwum
  }, [time])
  //
  return (
    <div>
      <h2>{ getHourMin(time).hour } : <span>{ getHourMin(time).min }</span></h2>
    </div>
  )
}

const getHourMin = (time) => {
  const hour = Math.ceil(time / 60)
  const min = time % 60
  return { hour, min }
}
