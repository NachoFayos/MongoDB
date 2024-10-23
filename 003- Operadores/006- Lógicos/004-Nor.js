db.productos.find(
    {
        $nor: [
            {
                nombre:"producto 1"
            },
            {
                precio:45
            }
        ]
    }
);