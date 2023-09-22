import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-search-field-example',
  templateUrl: './search-field-example.component.html',
  styleUrls: ['./search-field-example.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFieldExampleComponent {
  /**
   * пример поиска со списком подсказок с сервера
   * distinctUntilChanged - удаляет пробелы и не отправляет дополнительный запрос если сообщение тоже самое
   * switchMap - отменяет прошлый запрос и начинает новый
   * */
  readonly searchField: FormControl = new FormControl<string>('');
  helpList: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.searchField.valueChanges.pipe(
      debounceTime(350),
      distinctUntilChanged(),
      switchMap(newText => this.getHelpList(newText)),
    ).subscribe(res => {
      this.helpList = res.res;
    })
  }

  getHelpList(newText: string): Observable<{res: string[]}> {
    return this.http.get<{res: string[]}>(`/assets/testSearchHelpList.json/?newText=${newText}`)
  }
}
