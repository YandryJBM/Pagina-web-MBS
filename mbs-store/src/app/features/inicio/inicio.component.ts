import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
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

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.slides.length;
  }

  goTo(index: number) {
    this.activeIndex = index;
  }

  onMouseEnter() { this.isPaused = true; }
  onMouseLeave() { this.isPaused = false; }

  scrollLeft(refName: string) {
  const el = (this as any)[refName]?.nativeElement || document.querySelector(`#${refName}`);
  el?.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight(refName: string) {
    const el = (this as any)[refName]?.nativeElement || document.querySelector(`#${refName}`);
    el?.scrollBy({ left: 300, behavior: 'smooth' });
  }
}