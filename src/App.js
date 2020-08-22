import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EndingCards from './components/ending-cards'
import { Container, Row, Col } from 'react-bootstrap'
import endings from './data/endings'
import swal from 'sweetalert'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import src from '*.bmp';

const randomEnding = (history) => {
  while (true) {
    const randomIndex = Math.floor(Math.random() * endings.length)
    if ( !history.some(historyCard => historyCard.name === endings[randomIndex].name)) {
      console.log('history', history, 'the endings last chosen', endings[randomIndex])
      return endings[randomIndex]
    }
  }
}
toast.configure()
function App() {
  const [card, setCard] = useState({})
  const [history, setHistory] = useState([])
  const randomCard = () => {
    if (history.length >= endings.length - 1) {
      toast.warn('All cards have already been dealt, please reset', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000
      })
    }
    else {
      setCard(randomEnding([...history, card]))
    }
  }
  useEffect(() => {
    setCard(randomEnding(history))
  }, [])
  useEffect(() => {
    endings.forEach(({url}) => {
      new Promise(function(resolve, reject) {
        const img = new Image()
        img.src = url
        img.onload = resolve()
        img.onerror = reject()
      })
    })
  }, [])
  const accept = () => {
    if (history.length >= endings.length - 1) {
      toast.warn('All cards have already been dealt, please reset', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000
      })
    } else {
    setHistory([...history, card])
    setCard(randomEnding([...history, card]))
  }
  }
  const getSwalOptions = card => {
    const swalOptions = {
      button: false
    }
    if (card.rules === '') {
      swalOptions.icon = card.url
      swalOptions.customClass = 'voitko-toimia'
    }
    else {
      swalOptions.text = card.rules
      swalOptions.icon = 'info'
    }
    return swalOptions
  }
  const onRules = (card) => {
    swal(getSwalOptions(card))
  }
  const reset = () => {
    setCard(randomEnding(history))
    setHistory([])
  }
  return (
    <Container style={{ maxWidth: '100%', height: '70%' }} className='justify-content-center Testi'>
      <Row style={{ padding: '1rem' }}>
        <Col md={3} />
        <Col xs={12} md={6}>
          <EndingCards card={card} randomCard={randomCard} accept={accept} isHistory={false} onRules={(card) => onRules(card)} reset={reset} />
        </Col>
      </Row>
    <Row>
      <Col md={2} />
      <Col xs={12} md={8} align='center'>
        <h1>History</h1>
      </Col>
    </Row>
    <Row style={{ padding: '2rem' }} className="justify-content-md-center">
    {history.map((historycard, index) => {
      return (
      <Col xs={6} key={index} md={3}>
        <EndingCards card={historycard} isHistory={true} buttons={false} onRules={(card) => onRules(card)} />
      </Col>
      )
      })}
    </Row>
    </Container>
  );
}

export default App;
