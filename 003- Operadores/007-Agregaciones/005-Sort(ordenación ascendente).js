db.productos.aggregate(
    [
        {
            $sort:{"precio":1}
        }
    ]
);

//Ordenación de menor a mayor//