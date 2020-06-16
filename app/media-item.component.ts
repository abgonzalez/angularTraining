import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
  // for non native dom events - @input/@output
  @Input() mediaItem; // when you use "mediaItem" in template, data bind mediaItem, if there is a parameter (an alias for mediaItem), data-bind when that alias is used
  @Output() delete = new EventEmitter(); //exposing an even that can be subscribed to on a custom element

  onDelete() {
    this.delete.emit(this.mediaItem);
  }
}
