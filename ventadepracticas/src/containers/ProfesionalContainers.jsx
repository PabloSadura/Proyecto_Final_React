import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemsListProfesional from "../components/ItemsList/ItemsListProfesional";

function ProfesionalContainers() {
  const [profesional, setProfesional] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();

  // EXTRAIGO LA BASE COMPLETA DE PROFESIONALES

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "profesionales");
    const queryCollectionFilter = query(
      queryCollection,
      where("categoria", "==", `${categoria}`)
    );
    getDocs(queryCollectionFilter)
      .then((resp) =>
        setProfesional(resp.docs.map((el) => ({ id: el.id, ...el.data() })))
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <div className="text-center mt-4">
      <Spinner animation="border" role="status" variant="info" />
    </div>
  ) : (
    <ItemsListProfesional profesion={profesional} />
  );
}

export default ProfesionalContainers;
