import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({ text, handleClick }) => {
	return (
		<button onClick={handleClick}>
			{text}
		</button>
	)
}

const Header = ({ text }) => {
	return (
		<h1>{text}</h1>
	)
}

const Votes = ({ votes }) => {
	return (
		<p>
			has {votes} votes
		</p>
	)
}

const Anecdote = ({ text }) => {
	return (
		<p>
			{text}
		</p>
	)
}

const anecdotes = [
	'If it hurts, do it more often',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(10))

  let voteAmount = votes[selected];
  const incrementVotes = (votesCopy) => {
	votesCopy[selected]++
	return votesCopy
  }
  console.log(votes, "votes array")
  console.log("max ", Math.max(...votes));
  console.log(votes.indexOf(Math.max(votes)))
  return (
    <div>
	  <Header text="Anecdote of the day" />
      <Anecdote text={props.anecdotes[selected]} />
	  <Votes votes={voteAmount} />
	  <Button text="vote" handleClick={() =>
		setVotes(incrementVotes([ ...votes ]))} />
	  <Button text="next anecdote" handleClick={() =>
	  	setSelected(Math.floor(Math.random() * anecdotes.length))} />
	  <Header text="Anecdote with most votes" />
	  <Anecdote text={props.anecdotes[votes.indexOf(Math.max(...votes))]} />
	</div>
  )
}



ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
