import { useEffect, useState } from 'react'
import styles from './App.module.css'
import {io} from 'socket.io-client'
function App() {

  useEffect(() => {
    const socket = io('http://localhost:4000')
    socket.on('connect', () => {
      console.log('connected')
    })

  },[])

  return (
    <div className={styles.app}>
      <div className={styles.sidebar}>
        <h3>Users</h3>
        <ul>
          <li>ProEvilz</li>
          <li>Gamesmad</li>
        </ul>
      </div>
      <div className={styles.messages}>
          <div className={styles.message}>
            <p>ProEvilz</p>
            <p>Hello World!</p>
          </div>
      </div>
    </div>
  )
}

export default App
