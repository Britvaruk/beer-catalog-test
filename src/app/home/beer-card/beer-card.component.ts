import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BeerItem } from 'src/app/core/interfaces/beer-item';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
})
export class BeerCardComponent  implements OnInit {
  @Input() beer!: BeerItem;
  
  @Output() clickToCard: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {}
  
  triggerCardClick(): void {
    this.clickToCard.emit();
  }
}
