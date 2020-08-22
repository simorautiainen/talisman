import React, { useState, useEffect } from 'react'
import endings from '../data/endings'
import { Button, ButtonGroup, Container, Row, Col } from 'react-bootstrap'
import { Shake } from 'reshake'

const buttonStyle = {
  backgroundImage: "url('https://www.talismanisland.com/tour_4re_en_toad_back.jpg')",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
  color: 'rgb(238, 91, 83)',
  fontSize: '160%',
  border: 'solid 2px black',
  margin: '0.4rem'
}
const EndingCard = ({ card, randomCard, reset, isHistory, onRules, accept }) => {
  const [isShown, setIsShown] = useState(isHistory)
  const [isShaking, setIsShaking] = useState(false)
  const backSideUrl = 'https://www.talismanisland.com/tour_4re_character_back.jpg'
  const setShaking = () => {
    setIsShaking(true)
    const timer = setTimeout(() => {
      setIsShaking(false)
      clearTimeout(timer)
    }, 300)
  }
  return (
    <Container style={{ marginTop: '5vh', padding: '2rem', border: 'solid 3px black', borderRadius: '1rem', cursor: isHistory ? 'pointer' : 'default' }} onClick={isHistory ? () => onRules(card) : null}>
      <Row className='justify-content-center'>
          <h1 style={{ fontSize: isHistory ? '3vw' : '5vw'}}>{isShown ? card.name : 'Title'}</h1>
      </Row>
      <Row className='justify-content-center'>
        <Col>
        { !isShaking
        ? <img style={{maxHeight: '70vh', width: '100%', borderRadius: '1rem' }} src={ isShown ? card.url : backSideUrl } className='img-fluid'/>
        : <Shake
          h={14}
          v={5}
          r={3}
          dur={10}
          int={10}
          max={100}
          fixed={true}
          fixedStop={false}
          freez={false}>
          <img style={{maxHeight: '70vh', width: '100%', borderRadius: '1rem' }} src={ isShown ? card.url : backSideUrl } className='img-fluid'/></Shake>}</Col>
      </Row>
      { !isHistory &&
      <>
      <Row className='justify-content-center' style={{ marginTop: '10px' }}>
        <Button style={buttonStyle} variant="dark" onClick={() => setIsShown(!isShown)}>{isShown ? 'Hide' : 'Show'}</Button>
        <Button style={buttonStyle} variant="dark" onClick={() => {
          randomCard()
          setShaking()
          }}>Random</Button>
        <Button style={buttonStyle} variant="dark" onClick={() => {
          reset()
          setIsShown(false)
          setShaking()
        }}>Reset</Button>
        <Button style={buttonStyle} variant="dark" onClick={() => {
          accept()
          setIsShown(false)
          setShaking()
          }}>Accept</Button>
        </Row>
        <Row className='justify-content-center'>
        {isShown ? <Button style={buttonStyle} variant="dark" onClick={() => onRules(card)}>Rules</Button>
        : <Button style={buttonStyle} variant="dark" disabled onClick={() => onRules(card)}>Rules</Button>}
      </Row>
      </>}
    </Container>
  )
}

export default EndingCard