db.productos.aggregate(
    [
        {
            $sort:{"precio":-1}
        }
    ]
);

//Ordenación de mayor a menor con el símbolo -//