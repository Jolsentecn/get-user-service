# Serviço para registro de usuarios

## Funcionalidades
- Recebe informações do usuario em um ``JSON`` via ``POST``
- Salva as informações do usuario no banco (MongoDb)
- Envia via comunicação assincrona para outros serviços (Redis) 

## Como utilizar??

1. Enviar via ``POST`` no endpoint ``/user`` o seguinte ``JSON``:
```
{
    "name": "João Vitor Olsen",
    "email": "joao.vitor@olsendev.com",
    "phone": "11998133499",
    "birthDate": '2000-04-25'
}
```

Recebe um ``200`` com a seguinte resposta:
```
{
    "id": "632355b9168e32f9a3304a4b"
}
```

2. Enviar via ``GET`` no endpoint ``/user/`` e recebe um ``200`` com a seguinte resposta:
```
[
    {
        "_id": "632355b9168e32f9a3304a4b",
        "name": "João Vitor Olsen",
        "email": "joao.vitor@olsendev.com",
        "phone": "11998133499",
        "birthDate": "2000-04-25T00:00:00.000Z"
    },
    {
        "_id": "632355d848e7dcd009bb78d0",
        "name": "João Vitor Olsen",
        "email": "joao.vitor+2@olsendev.com",
        "phone": "11998133499",
        "birthDate": "2000-04-25T00:00:00.000Z"
    },
    {
        "_id": "632355f5a11afa7991c65a79",
        "name": "João Vitor Olsen",
        "email": "joao.vitor+3@olsendev.com",
        "phone": "11998133499",
        "birthDate": "2000-04-25T00:00:00.000Z"
    }
]
```
