import React from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

import ItemsListProfesional from "../ItemsList/ItemsListProfesional";

function ProfesionalContainers() {
  const [profesional, setProfesional] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();

  // useEffect(() => {
  //   gFetchProfesional
  //     .then((resp) => {
  //       setProfesional(resp.filter((item) => item.categoria === categoria));
  //     })
  //     .catch((rej) => console.log(rej))
  //     .finally(() => setLoading(false));
  // }, []);

  // Traigo todo!!
  // useEffect(() => {
  //   const db = getFirestore();
  //   const queryProfesionales = collection(db, "profesionales");
  //   getDocs(queryProfesionales)
  //     .then((resp) =>
  //       setProfesional(resp.docs.map((el) => ({ id: el.id, ...el.data() })))
  //     )
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, []);

  // Aplico Filtros

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

  console.log(profesional);

  return loading ? (
    <div className="text-center mt-4">
      <Spinner animation="border" role="status" variant="info" />
    </div>
  ) : (
    <ItemsListProfesional profesion={profesional} />
  );
}

export default ProfesionalContainers;
