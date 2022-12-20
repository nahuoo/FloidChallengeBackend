import { FloidResponse, userBody } from "../types/useCase.types";
import { FloidApiService } from "./api.useCase";

export class FloidApiController {
    /**
     * Lista de cuentas del cliente en Santander
     * @param body recibe id y password del cliente
     */ 
    public async accountList(body: userBody): Promise<FloidResponse | unknown> {
      const floidApi = new FloidApiService(body);
      return floidApi.getSantanderAccounts(`${body.id}`, body.password);
    }
}