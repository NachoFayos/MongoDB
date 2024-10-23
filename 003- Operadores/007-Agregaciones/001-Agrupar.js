db.productos.aggregate(
    [
        {
            $group:{
                _id:"$precio"
            }
        }
    ]
);

//_id para hacer referencia al campo que queremos seleccionar NO al id del registro//