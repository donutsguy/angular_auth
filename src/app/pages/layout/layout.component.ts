import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  constructor(private authService: AuthService, private router: Router) { }

  onLogout() {
    this.authService.logout().subscribe({
      next: () => {
        localStorage.removeItem('token_angular');
        console.log("Deslogado!")
        this.router.navigateByUrl('/login')
      },
      error: (res) => {
        alert(res.error)
      }
    })
  }
}
