export const Buttons = ({handleClick}) => {

  const buttons = ["1", "2", "3", "4", "+", "5", "6", "7", "8", "-", "9", "0", "00", ".", "*", "^", "%", "(", ")", "/", "sin", "cos", "C", "⌫", "=" ]

  return (
    <div className="btn-container">
      {buttons.map((btn, index) => (
        <button className="btn" onClick={(e) => handleClick(e)} key={index}>{btn}</button>
      ))}
    </div>
  )
}
