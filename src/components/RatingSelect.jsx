import { useState } from 'react'
// import PropTypes from 'prop-types'

function RatingSelect({select}) {
  const [selected, setSelected] = useState(10)

  const handleChange = event => {
    //console.log(typeof +event.currentTarget.value);
    setSelected(+event.currentTarget.value);
    select(+event.currentTarget.value);
  };
 
  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
        <li key={num}>
          <input
            type="radio"
            name="rating"
            id={`num${num}`}
            checked={selected === num}
            value={num}
            onChange={handleChange}
          />
          <label htmlFor={`num${num}`}>{num}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelect