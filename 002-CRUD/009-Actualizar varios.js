db.clientes.updateMany(
    {email:"nachofayosg@gmail.com"},
    {
        $set:{telefono:"111111111"}
    }
)