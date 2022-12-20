import { FloidResponse, userBody } from '../types/useCase.types'
import { FieldValidateError, InvalidArgumentError } from '../const/errors';
import axios from 'axios';

export class FloidApiService {
  constructor(protected body: userBody) { }

  private assertNotEmpty = (fields: string | string[], input: Record<string, any>): void => {
    const fieldsArray = typeof fields === 'string' ? [fields] : fields;

    fieldsArray.forEach((field) => {
      const path = field.split('.');
      const value = path.reduce((value, currentField) => {
        if (!value || !(currentField in value)) {
          throw new Error(`No existe el campo "${field}" en el objeto`);
        }
        return value[currentField];
      }, input);

      if (!value) {
        throw new InvalidArgumentError(`El campo "${field}" es requerido`);
      }

      if (typeof value === undefined || null) {
        console.log(value)
        throw new FieldValidateError(field, `El campo "${field}" no puede estar vacío`, value);
      }
    });
  };

  /**
   * Extrae cuenta Santander de Floid.
   *
   * @param id id de personas Santander
   * @param password contrasena de inicio de sesion
   */
  public async getSantanderAccounts(id: string, password: number): Promise<FloidResponse | unknown > {

    try {
      this.assertNotEmpty(["id", "password"], this.body);
      const response: FloidResponse = await axios.post('https://sandbox.floid.app/cl/banco_santander_personas/products',
      {
      "id": id,
      "password": password,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.SANTANDERTOKEN
      },
    }
    );
  return response.data.products?.accounts;
  
} catch (error) {
console.log(error)
return error;
}
  }
}
