import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'strongsidefrontend';

  constructor(private meta: Meta, private titleService: Title) {
  }
  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.titleService.setTitle('Strongside');

    // Standard Meta Tags
    this.meta.addTag({ name: 'description', content: 'Welcome to Strongside.' });
    this.meta.addTag({ name: 'keywords', content: 'StrongSide, Football Program, Free Version' });

    // Open Graph Meta Tags
    this.meta.addTag({ property: 'og:title', content: 'Strongside' });
    this.meta.addTag({
      property: 'og:description', content: 'Our Team Values Improving Constantly culture is bigger than one player, coach, or team We needed to Improve our tools If You are Always Getting Better Then Youare Our Culture Too Welcome to Our Football Program'
    });
    this.meta.addTag({ property: 'og:image', content: '../../../assets/images/logo/logo-icon.png' });
  };
}
