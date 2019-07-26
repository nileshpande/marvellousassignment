import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<input type="text" name="inputfeild" style="width: 60%;margin:auto;height:50px;padding: 10px;" />

  <br>
  
  <span>
    MarvellousInfosystems
  </span>
  
  `,
  styles: [`span {
    color:#00f;
    font-size: 20px;
}`]
})
export class AppComponent {
  title = 'assignment5';
}
