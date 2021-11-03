import React, { useState } from 'react';
import './Calculadora.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import CalculadoraService from "./Calculadora.service";

function Calculadora() {

  const [calcular, concatenarNumero, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO] = CalculadoraService();
  
  const [txtNumeros, setTxtNumeros] = useState('0');
  const [numero1, setNumero1] = useState('0');
  const [numero2, setNumero2] = useState(null);
  const [operacao, setOperacao] = useState(null);

  function adicionarNumeros(numero) {
    let resultado;
    if (operacao === null) {
      resultado = concatenarNumero(numero1, numero);
      setNumero1(resultado);
    }else {
      resultado = concatenarNumero(numero2, numero);
      setNumero2(resultado);
    }
    setTxtNumeros(resultado);
  }
  function definirOperacao(op) {
    // define a operação caso não exista 
    if (operacao === null) {
      setOperacao(op);
      return;
    }
    // caso a operação estiver definida e nº2 selecionado, realiza o cálculo
    if (numero2 !== null) {
      const resultado = calcular(parseFloat(numero1), parseFloat(numero2), operacao);
      setOperacao(op);
      setNumero1(resultado.toString());
      setNumero2(null);
      setTxtNumeros(resultado.toString());
    }

  }

  function acaoCalcular() {
    if (numero2 === null){
      return;
    }
    const resultado = calcular(parseFloat(numero1), parseFloat(numero2), operacao)
    setTxtNumeros(resultado);
  }

  function limpar() {
    setTxtNumeros('0');
    setNumero1('0');
    setNumero2(null);
    setOperacao(null);
  }
  return (
  <div class="jumbotron m-3">
    <Container>
      <Row>
        <Col xs="3">
          <Button variant= "danger"
          onClick={limpar}>C</Button>
        </Col>
        <Col xs="9">
          <Form.Control type="text"
            name="txtNumeros"
            className="m-auto"
            readOnly="readonly"
            value={txtNumeros}
            data-testid="txtNumeros" />
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
          onClick={() => definirOperacao(DIVISAO)}>/</Button>
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
          onClick={() => definirOperacao(MULTIPLICACAO)}>*</Button>
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
          onClick={() => definirOperacao(SUBTRACAO)}>-</Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button variant="light"
          onClick={() => adicionarNumeros('0')}>0</Button>
        </Col>
        <Col>
          <Button variant="light"
          onClick={() => adicionarNumeros('.')}>.</Button>
        </Col>
        <Col>
          <Button variant="success"
          onClick={(acaoCalcular)}>=</Button>
        </Col>
        <Col>
          <Button variant="warning"
          onClick={() => definirOperacao(SOMA)}>+</Button>
        </Col>
      </Row>
    </Container>
  </div>

  );
}

export default Calculadora;
