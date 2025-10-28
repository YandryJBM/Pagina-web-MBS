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
  accesorios = [
    { src: 'assets/img/a1.jpg', nombre: 'Gafas' },
    { src: 'assets/img/a2.jpg', nombre: 'Gafas' },
    { src: 'assets/img/a3.jpg', nombre: 'Cobertor' },
    { src: 'assets/img/a4.jpg', nombre: 'Maletero' },
    { src: 'assets/img/a5.jpg', nombre: 'Mochilas' },
    { src: 'assets/img/a6.jpg', nombre: 'Botas' },
    { src: 'assets/img/a7.jpg', nombre: 'Casco' }
  ];

  repuestos = [
    { src: 'assets/img/r1.jpg', nombre: 'Carenaje' },
    { src: 'assets/img/r2.jpg', nombre: 'Piston' },
    { src: 'assets/img/r3.jpg', nombre: 'Faro' },
    { src: 'assets/img/r4.jpg', nombre: 'Switch' },
    { src: 'assets/img/r5.jpg', nombre: 'Embrague' },
    { src: 'assets/img/r6.jpg', nombre: 'Cilindro' },
    { src: 'assets/img/r7.jpg', nombre: 'Velocimetro' }
  ];

  motos = [
    { src: 'assets/img/moto1.png', nombre: 'Deportivas' },
    { src: 'assets/img/moto2.jpg', nombre: 'Scooters' },
    { src: 'assets/img/moto3.jpg', nombre: 'Utilitarias' },
    { src: 'assets/img/moto4.jpg', nombre: 'Street' },
    { src: 'assets/img/moto6.png', nombre: 'Cross/Offroad' },
    { src: 'assets/img/moto7.png', nombre: 'Eléctrica' }
  ];

  bicicletas = [
    { src: 'assets/img/bici1.jpg', nombre: 'Montaña' },
    { src: 'assets/img/bici2.jpg', nombre: 'Ruta' },
    { src: 'assets/img/bici3.jpg', nombre: 'Urbana' },
    { src: 'assets/img/bici4.jpg', nombre: 'Bmx' },
    { src: 'assets/img/bici5.jpg', nombre: 'Niños' },
    { src: 'assets/img/bici6.jpg', nombre: 'Hibridas' }
  ];

  @ViewChild('accesoriosCarousel') accesoriosCarousel!: ElementRef<HTMLDivElement>;
  @ViewChild('repuestosCarousel') repuestosCarousel!: ElementRef<HTMLDivElement>;
  
  @ViewChild('motosCarousel') motosCarousel!: ElementRef<HTMLDivElement>;
  @ViewChild('bicisCarousel') bicisCarousel!: ElementRef<HTMLDivElement>;

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