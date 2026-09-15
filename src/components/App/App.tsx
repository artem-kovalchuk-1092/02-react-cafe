import css from './App.module.css'
import { CafeInfo } from '../CafeInfo/CafeInfo'
import { VoteOptions } from '../VoteOptions/VoteOptions'
import type { Votes } from '../../types/votes'
import type { VoteType } from '../../types/votes'


function handleVote(votes: VoteType) {
  votes[vote] +=1
}

function resetVotes() {
  votes.good = 0;
  votes.neutral = 0;
  votes.bad = 0;
}

function App() {


  return (
<div className={css.app}>
  <CafeInfo />
  <VoteOptions/>


</div>

  )
}

export default App
