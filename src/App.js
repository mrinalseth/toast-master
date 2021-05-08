import React from 'react'
import Card from './component/Card'

const App = () => {

  const grid = {
    fontFamily: "cursive",
    display: 'inline-grid',
    gridTemplateColumns: 'auto auto auto',
    backgroundColor: '#014052',
    width: '100%',
    justifyContent: 'space-around',
    padding: '25px'
  }

  return (
    <div style={grid}>
      <Card
        index="1"
        answer="Alone we can do so little;Together we can conquer anything"
      />
      <Card
        index="2"
        answer="You cannot be a winner without consistency"
      />
      <Card
        index="3"
        answer="Decide. Commit. Succeed."
      />
      <Card
        index="4"
        answer="There is a no 'I' in a team"
      />
      <Card
        index="5"
        answer="A little progress each day adds up to big results"
      />
      <Card
        index="6"
        answer="None of us is as smart as all of us"
      />
      <Card
        index="7"
        answer="You cannot conquer what you are not committed to."
      />
      <Card
        index="8"
        answer="You don’t get results with partial commitments"
      />
      <Card
        index="9"
        answer="Consistent action creates consistent results"
      />
      <Card
        index="10"
        answer="Talent wins’ games, but teamwork wins championships"
      />
    </div>
  )
}

export default App