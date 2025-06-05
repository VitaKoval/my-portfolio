const handleEvent = (func) => {
  const onClick = (event) => func(event)

  const onKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      func(event)
    }
  }

  return { onClick, onKeyDown }
}

export default handleEvent
