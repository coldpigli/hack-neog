import { useLeaderboard } from 'contexts'
import React, { useEffect, useState } from 'react'

const Rankings = () => {


  const {leaderboard, setLeaderBoard} = useLeaderboard()
  const [descendingOrder, setDescendingOrder] = useState([]);
  useEffect(()=>{
    const temp = leaderboard.sort((a,b)=>b.avgScore-a.avgScore);
    setDescendingOrder(temp);
  },[leaderboard])

  return (
    <div>
        <h2>See how your website fares against others</h2>
        <div>
            {
              descendingOrder && descendingOrder.map((website)=>{
                return <div>
                  <h3>{website.url}</h3>
                  <h3>{website.avgScore}</h3>
                </div>
              })
            }
        </div>
    </div>
  )
}

export default Rankings