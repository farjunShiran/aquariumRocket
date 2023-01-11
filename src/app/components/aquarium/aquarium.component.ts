import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-aquarium',
  templateUrl: './aquarium.component.html',
  styleUrls: ['./aquarium.component.scss'],
})
export class AquariumComponent {
  @ViewChild('rocketImage') public img?: ElementRef;
  @Input() backgroundColor?: string;

  directions = {
    up: {
      cssPosition: 'bottom',
      limit: '490px',
      limitElement: 700,
      operator: 'lte',
    },
    down: {
      cssPosition: 'bottom',
      limit: '0px',
      operator: 'gte',
    },
    left: {
      cssPosition: 'left',
      limit: '-20px',
      operator: 'lte',
    },
    right: {
      cssPosition: 'left',
      limit: '510px',
      operator: 'gte',
    },
  };
  side: 'up' | 'down' | 'left' | 'right' = 'right';

  movement: string = '250px';
  hitsBorder: boolean = false;
  myInterval: any;

  onImageLoad() {
    const image: HTMLImageElement = this.img?.nativeElement;
    this.myInterval = setInterval(() => {
      this.moveRocket(image);
    }, 100);
  }

  getDirection() {
    let index = this.getRandomIndex();
    return Object.keys(this.directions)[index];
  }

  getRandomIndex() {
    return Math.floor(Math.random() * Object.keys(this.directions).length);
  }

  moveRocket(rocketImage: HTMLImageElement) {
    let direction = this.directions[this.side];
    let movementWithoutPX = parseInt(this.movement.slice(0, -2));
    let directionWithoutPX = parseInt(direction.limit.slice(0, -2));

    if (
      (this.side === 'left' && movementWithoutPX <= directionWithoutPX) ||
      (this.side === 'right' && movementWithoutPX >= directionWithoutPX) ||
      (this.side === 'down' && movementWithoutPX <= directionWithoutPX) ||
      (this.side === 'up' && movementWithoutPX >= directionWithoutPX)
    ) {
      let getSide = this.getDirection() as any;
      while (this.side === getSide) {
        getSide = this.getDirection() as any;
      }
      this.side = getSide;
      if (this.side === 'down') this.movement = '250px';
    }
    this.calculation(rocketImage, direction.cssPosition);
  }

  calculation(el: any, cssPosition: string) {
    let direction = el.style[cssPosition];
    if (this.side == 'left' || this.side == 'down')
      this.movement = parseInt(direction) - 10 + 'px';
    else {
      this.movement = parseInt(direction) + 10 + 'px';
    }
    el.style[cssPosition] = this.movement;
  }
  ngOnDestroy(): void {
    clearInterval(this.myInterval);
  }
}
