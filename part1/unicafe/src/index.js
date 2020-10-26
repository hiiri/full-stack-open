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

const Statistic = ({ text, value }) => {
	if (text === "positive")
		return (
			<>
			<tr>
				<td>{text} {value} %</td>
			</tr>
			</>
		)
	return (
		<>
		<tr>
			<td>{text} {value}</td>
		</tr>
		</>
	)
}

const Stats = ({ good, neutral, bad }) => {
	const all = good + neutral + bad
	return (
		<div>
			<table>
				<tbody>
					<Statistic text="good" value={good} />
					<Statistic text="neutral" value={neutral} />
					<Statistic text="bad" value={bad} />
					<Statistic text="all" value={all} />
					<Statistic text="average" value={(good - bad) / all} />
					<Statistic text="positive" value={(good / (all)) * 100} />
				</tbody>
			</table>
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
