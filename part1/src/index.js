import ReactDOM from 'react-dom'

const Header = (props) => {
	return (
		<>
			<h1>{props.course}</h1>
		</>
	)
}

const Part = (props) => {
	return (
		<p>
			{props.name} {props.count}
		</p>
	)
}

const Content = (props) => {
	return (
		<div>
			<Part name={props.partNames[0]} count={props.exerciseCount[0]}/>
			<Part name={props.partNames[1]} count={props.exerciseCount[1]}/>
			<Part name={props.partNames[2]} count={props.exerciseCount[2]}/>
		</div>
	)
}

const Total = (props) => {
	return (
		<p>Number of exercices {props.totalNum}</p>
	)
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content partNames={[part1, part2, part3]} exerciseCount={[exercises1, exercises2, exercises3]} />
      <Total totalNum={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
