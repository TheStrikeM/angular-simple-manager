import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FilterService {
  parseAndPush(filterInput: string): void {
    if (filterInput.indexOf("and")) {
      const item = filterInput.split("and")
      
    }
  }
}
