import { Observable } from "rxjs";
import { IallCategories } from "../models/iall-categories";

export abstract class CategotyRepo {
  abstract getAllCategories(): Observable<IallCategories>
}
