import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlasmidTitlePhraseService {

  private plasmidTitlePhraseSubject = new BehaviorSubject<string>('');
  plasmidTitlePhrase$ = this.plasmidTitlePhraseSubject.asObservable();      // For asynchronous bindings.

  constructor() {}

  resetPlasmidTitlePhrase() {
    this.plasmidTitlePhraseSubject.next('');
  }

  getPlasmidTitlePhrase(): Observable<string> {
    return this.plasmidTitlePhrase$;
  }

  setPlasmidTitlePhrase(phrase: string): void {
    this.plasmidTitlePhraseSubject.next(phrase);
  }

}
