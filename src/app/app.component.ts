import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HdWalletMultiButtonComponent } from '@heavy-duty/wallet-adapter-material';

@Component({
  standalone: true,
  imports: [ RouterModule, HdWalletMultiButtonComponent],
  selector: 'bootcamp-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'bootcamp';
}
