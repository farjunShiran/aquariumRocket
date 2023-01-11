import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-box-button',
  templateUrl: './box-button.component.html',
  styleUrls: ['./box-button.component.scss'],
})
export class BoxButtonComponent {
  
  colors = ['Red', 'Blue', 'Green'];
  @Output() selectedColor = new EventEmitter<any>();

  pickColor(color: any): void {
    this.selectedColor.emit(color);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
