import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EndingCard as EndingCards, imageStyle } from './components/ending-cards'
import { Container, Row, Col } from 'react-bootstrap'
import endings from './data/endings'
import swal from 'sweetalert'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {Image} from 'react-native'

const randomEndingIndex = (history) => {
  while (true) {
    const randomIndex = Math.floor(Math.random() * endings.length)
    if ( !history.some(historyCard => historyCard.name === endings[randomIndex].name)) {
      return randomIndex
    }
  }
}
const loadImages = () => {
  return endings.map(({url}, index) => <Image style={imageStyle} src={{uri: url, cache: 'only-if-cached'}} className='img-fluid'/>)
}
toast.configure()
function App() {
  const [cardIndex, setCardIndex] = useState()
  const [history, setHistory] = useState([])
  const images = loadImages()
  const card = endings[cardIndex]
  const endingImage = images[cardIndex]
  const randomCard = () => {
    if (history.length >= endings.length - 1) {
      toast.warn('All cards have already been dealt, please reset', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000
      })
    }
    else {
      setCardIndex(randomEndingIndex([...history, card]))
    }
  }
  useEffect(() => {
    setCardIndex(randomEndingIndex(history))
  }, [])
  const accept = () => {
    if (history.length >= endings.length - 1) {
      toast.warn('All cards have already been dealt, please reset', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000
      })
    } else {
    setHistory([...history, card])
    setCardIndex(randomEndingIndex([...history, card]))
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
    setCardIndex(randomEndingIndex(history))
    setHistory([])
  }
  return (
    <Container style={{ maxWidth: '100%', height: '70%' }} className='justify-content-center Testi'>
      <Row style={{ padding: '1rem' }}>
        <Col md={3} />
        <Col xs={12} md={6}>
          <EndingCards card={card} randomCard={randomCard} endingImage={endingImage} accept={accept} isHistory={false} onRules={(card) => onRules(card)} reset={reset} />
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
        <EndingCards card={historycard} endingImage={endingImage} isHistory={true} buttons={false} onRules={(card) => onRules(card)} />
      </Col>
      )
      })}
    </Row>
    </Container>
  );
}

export default App;
