import React, { useState } from 'react';
import './Calculadora.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';


function Calculadora() {

  const [txtNumeros, setTxtNumeros] = useState('0');
  function adicionarNumeros(numero) {
    setTxtNumeros(txtNumeros + numero);
  }
  function definirOperacao(op) {
    setTxtNumeros(op);
  }

  return (
  <div class="jumbotron m-3">
    <Container>
      <Row>
        <Col xs="3">
          <Button variant= "danger">C</Button>
        </Col>
        <Col xs="9">
          <Form.Control type="text"
            name="txtNumeros"
            className="text-center"
            readOnly="readonly"
            value={txtNumeros}/>
        
        </Col>
      </Row>

      <Row>
        <Col>
          <Button variant="light"
          onClick={() => adicionarNumeros('7')}>7</Button>
        </Col>
        <Col>
          <Button variant="light"
          onClick={() => adicionarNumeros('8')}>8</Button>
        </Col>
        <Col>
          <Button variant="light"
          onClick={() => adicionarNumeros('9')}>9</Button>
        </Col>
        <Col>
          <Button variant="warning"
          onClick={() => definirOperacao('/')}>/</Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button variant="light"
          onClick={() => adicionarNumeros('4')}>4</Button>
        </Col>
        <Col>
          <Button variant="light"
          onClick={() => adicionarNumeros('5')}>5</Button>
        </Col>
        <Col>
          <Button variant="light"
          onClick={() => adicionarNumeros('6')}>6</Button>
        </Col>
        <Col>
          <Button variant="warning"
          onClick={() => definirOperacao('*')}>*</Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button variant="light"
          onClick={() => adicionarNumeros('1')}>1</Button>
        </Col>
        <Col>
          <Button variant="light"
          onClick={() => adicionarNumeros('2')}>2</Button>
        </Col>
        <Col>
          <Button variant="light"
          onClick={() => adicionarNumeros('3')}>3</Button>
        </Col>
        <Col>
          <Button variant="warning"
          onClick={() => definirOperacao('-')}>-</Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button variant="light"
          onClick={() => adicionarNumeros('0')}>0</Button>
        </Col>
        <Col>
          <Button variant="light">.</Button>
        </Col>
        <Col>
          <Button variant="success">=</Button>
        </Col>
        <Col>
          <Button variant="warning"
          onClick={() => definirOperacao('+')}>+</Button>
        </Col>
      </Row>
    </Container>
  </div>

  );
}

export default Calculadora;
