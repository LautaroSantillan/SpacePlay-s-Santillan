//IMPORTS
import React, { useState, useEffect } from 'react';
import axios from "axios";
//Componente
import ItemList from "../ItemList/ItemList"; 
import { getProducts } from '../../productos';
//React-Router-DOM
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
        axios(`https://62aa950c371180affbd78121.mockapi.io/api/prod-ps5/articulos`).then((res) =>
            setArticles(res.data),
        );
    }, []);

	console.log('Productos:', articles);

	let { category } = useParams;

	useEffect(() => {
        getProducts(category)
            .then(res => {
                setArticles(res)
            }
            )
    }, [category])

	console.log('Productos:', articles);

	return (
		<ItemList articles={articles}/>
	);

};

export default ItemListContainer;