import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Home.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutMe = props => {
    const [data, setData] = useState({})
    useEffect(() => {
      fetch('http://localhost:5002/userdata')
        .then(response => response.json())
        .then(data => setData(data))
    }, [])
  return (
    <>
      <h1>{data.name}</h1>
      <img src={data.image} width="200" height="150"></img>
      <p>{data.bio}</p>
    </>
  )
}

// make this component available to be imported into any other file
export default AboutMe