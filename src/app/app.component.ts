import { Component } from '@angular/core';
import { Character } from './charGen/character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tour-of-zeros';
  public character?: Character;
  public setChar(newChar: Character) {
    this.character = newChar;
  }
  public getChar(): Character | undefined {
    return this.character ?? undefined;
  }
}
