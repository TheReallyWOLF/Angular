import { ToDo } from "./todo";

export interface EventPing {
  label: string;                  // Name bzw. Titel des ToDo Punktes
  object: ToDo;                // Ist der ToDo Punkt AKtiv oder Inaktiv
}
