import { Component, /*OnInit */} from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {NgFor} from '@angular/common';
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  standalone: true,
  styleUrls: ['./tareas.component.css'],
  imports: [CdkDropList, NgFor, CdkDrag]
})
export class TareasComponent/* implements OnInit*/ {

  // constructor() { }

  // ngOnInit() {
  // }
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  doing = ['meet people', 'get a life']
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker',
  ];

  drop1(event: CdkDragDrop<any>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
  drop2(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
