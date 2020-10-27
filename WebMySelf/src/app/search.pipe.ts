import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'search'
})
// механика своего пайпа с логикой поиска по инпуту
export class SearchPipe implements PipeTransform {
  transform(users, value): any {
    return users.filter(user => {
      return user.name.includes(value)
    })
  }
}
