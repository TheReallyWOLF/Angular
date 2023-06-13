import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
/**
 * Сервис который управляет UiDropdown элементами
 * и следит за тем что бы невозможно было развернуть больше 1 списка одновременно
 * в открытом состоянии может быть только 1 список
 * */
@Injectable({
  providedIn: 'root'
})
export class UiDropdownService {
  private openDropdown: BehaviorSubject<string> = new BehaviorSubject<string>('');

  get openDropdown$(): Observable<string> {
    return this.openDropdown.asObservable();
  }

  setOpenDropdown(id: string): void {
    this.openDropdown.next(id);
  }

  closeAll(): void {
    this.openDropdown.next('');
  }
}
