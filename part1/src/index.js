import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ text }) => {
	return (
		<h1>
			{text}
		</h1>
	)
}

const Button = ({ text, onClick }) => {
	return (
		<button onClick={onClick}>
			{text}
		</button>
	)
}

const Stats = ({ good, neutral, bad }) => {
	const all = good + neutral + bad
	return (
		<div>
			good {good}
			<br />
			neutral {neutral}
			<br />
			bad {bad}
			<br />
			all {all}
			<br />
			average {(good - bad) / all}
			<br />
			positive {(good / (all)) * 100} %
			<br />
		</div>
	)
}

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const incrementNeutral = () => {
		setNeutral(neutral + 1)
	}

	const incrementBad = () => {
		setBad(bad + 1)
	}

	const incrementGood = () => {
		console.log(good)
		setGood(good + 1)
	}

	return (
		<div>
			<Header text="give feedback" />
			<Button text="good" onClick={incrementGood}/>
			<Button text="neutral" onClick={incrementNeutral}/>
			<Button text="bad" onClick={incrementBad}/>
			<Header text="statistics" />
			<Stats good={good} bad={bad} neutral={neutral} />
		</div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
