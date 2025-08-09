import { LoginValidType, RegisterValidType } from "../validators"

export interface AuthDto {
  type: "login" | "registration"
  data: RegisterValidType | LoginValidType
}
