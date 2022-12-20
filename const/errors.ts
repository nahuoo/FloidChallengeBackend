 /**
 * Error en la validación de los argumentos.
 */
export class InvalidArgumentError extends Error {
    constructor(public message: string) {
        super(message);
    }
}

/**
 * Error en la validación de un campo en la solicitud.
 */
export type FieldValidateErrorDetails = { [x: string]: { message: string; value?: unknown } };
  const message = 'Field Validation Error';
  
export class FieldValidateError extends Error {
  public message = message;

  constructor(public field: string, public fieldMessage: string, public fieldValue?: unknown) {
    super(message);
  }

  get fields(): FieldValidateErrorDetails {
    return {
      [`body.${this.field}`]: { message: this.fieldMessage, value: this.fieldValue },
    };
  }
}