db.productos.aggregate(
    [
        //Fase 1 de la agregación.
        {
            $group:{
                _id:"$precio"
            }
        },
        //Fase 2 de la agregación.
        {
            $limit:1
        }
    ]
);