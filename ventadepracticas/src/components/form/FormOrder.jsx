import React, { useContext } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../../Context/CartContext";

function FormOrder() {
  const { user, setUser } = useContext(CartContext);

  // FUNCION QUE COMPLETA LOS DATOS DE USUARIO
  const validToUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validData = (e) => {
    setUser({ ...user, checked: e.target.checked });
  };

  return (
    <div className="container mt-3 ms-md-2 p-4 border">
      <h3 className="text-center mb-3">Datos personales</h3>
      <Form>
        <Row>
          <Col>
            <Form.Control
              placeholder="Nombre"
              name="name"
              onChange={(e) => {
                validToUser(e);
              }}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Telefono"
              name="phone"
              onChange={(e) => {
                validToUser(e);
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Control
              className="mt-2"
              placeholder="Email"
              name="email"
              onBlur={(e) => {
                validToUser(e);
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3 mt-3">
              <Form.Check
                type="checkbox"
                label="Aceptar Términos y Condiciones"
                onClick={(e) => {
                  validData(e);
                }}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default FormOrder;
