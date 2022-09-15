# Record user data 

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
    "id": "ADAW54234JDJAD"
}
```

2. Enviar via ``GET`` no endpoint ``/user/`` e recebe um ``200`` com a seguinte resposta:
```
[
    {
        "_id": "ADAW54234JDJAD"
        "name": "João Vitor Olsen",
        "email": "joao.vitor@olsendev.com",
        "phone": "11998133499",
        "birthDate": '2000-04-25'
    },
    {
        "_id": "NDAW54234JDJAD"
        "name": "João Vitor Fernandes",
        "email": "joao.vitor+2@olsendev.com",
        "phone": "11998133499",
        "birthDate": '2000-04-25'
    }
]
```
