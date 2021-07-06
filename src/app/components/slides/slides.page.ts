import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
  // aqui se describen las opciones diponibles para los slices
  optionsSlides = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 500,
  };
  // creamos los slides dinamicos para no escribir tanto html
  slides: any[] = [
    {
      img: 'assets/img/slides/angular.png',
      title: 'Escucha tu musica',
      subtitle: 'Escucha tu musica',
      description: 'Escucha tu musica',
      icon: 'play',
    },
    {
      img: 'assets/img/slides/angular.png',
      title: 'Escucha tu musica',
      subtitle: 'Escucha tu musica',
      description: 'Escucha tu musica',
      icon: 'videocam',
    },
    {
      img: 'assets/img/slides/angular.png',
      title: 'Escucha tu musica',
      subtitle: 'Escucha tu musica',
      description: 'Escucha tu musica',
      icon: 'bicycle',
    },
  ];

  constructor(private router: Router, private storage: Storage) {}

  closeSlides = () => {
    // para hacer uso del ion stogare se debe primeto crear y despues mandar el dato, de lo contrario
    // no se guardara nada o se manda un error en consola
    this.storage.create();
    this.storage.set('slideShowed', true);
    this.router.navigateByUrl('/home');
  };

  ngOnInit() {}
}
