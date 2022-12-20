
# Floid api backend

Consulta la sandbox de la API de Floid (santander):
https://sandbox.floid.app/cl/banco_santander_personas/products
y devuelve los productos.



## API Reference

#### Get all items

```http
  POST /get
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `barer token` | `string` | **Required** |
| `id` | `string` | **Required** cliente id |
| `password` | `number` | **Required** cliente password |


## Instalacion

Instalar FloidApi con npm

```bash
  git clone  
  npm install 
  npm run dev para servidor de desarrollo
  npm run start para encenderlo
```
    
## Tech Stack

**Server:** Node, Express, Typescript, Eslint

