db.productos.find(
    {
        $and: [
            {
                precio:{$gt:15}
            },
            {
                nombre:"producto 2"
            }
        ]
    }
);