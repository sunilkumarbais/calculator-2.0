
export const Display = ({inputValue, setInputValue}) => {
  return (
    <input type="text" name="" id="" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
  )
}
