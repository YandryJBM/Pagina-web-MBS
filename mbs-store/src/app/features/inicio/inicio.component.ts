import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 IMPORTANTE

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule], // 👈 AGREGA ESTO
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, OnDestroy {
  slides = [
    { src: 'assets/img/banner1.jpg', alt: 'Promoción 1' },
    { src: 'assets/img/banner2.png', alt: 'Producto nuevo' },
    { src: 'assets/img/banner3.jpg', alt: 'Accesorios destacados' }
  ];

  activeIndex = 0;
  intervalMs = 5000;
  private timerId: any = null;
  isPaused = false;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.stopAutoSlide();
    this.timerId = setInterval(() => {
      if (!this.isPaused) this.next();
    }, this.intervalMs);
  }

  stopAutoSlide() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  prev() {
    this.activeIndex = (this.activeIndex - 1 + this.slides.length) % this.slides.length;
  }

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.slides.length;
  }

  goTo(index: number) {
    this.activeIndex = index;
  }

  onMouseEnter() { this.isPaused = true; }
  onMouseLeave() { this.isPaused = false; }
}
