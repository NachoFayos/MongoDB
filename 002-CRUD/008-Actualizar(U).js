db.clientes.updateOne(
    {nombre:"Nacho"},
    {
        $set:{email:"nacho@info.com"}
    }
)