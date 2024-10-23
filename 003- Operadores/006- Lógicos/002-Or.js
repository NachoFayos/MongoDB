db.productos.find(
    {
        $or: [
            {
                precio:{$gt:15}
            },
            {
                nombre:"producto 1"
            }
        ]
    }
);