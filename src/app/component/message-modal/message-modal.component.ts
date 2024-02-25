import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss']
})
export class MessageModalComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();
  @Input() isSuccess = false;
  @Input() isLoading = false;
  @Input() isFailure = false;
  @Input() message = '';
  constructor() { }

  ngOnInit(): void {
  }

  cancelModal() {
    this.onClose.emit(); // Emit an event to signal closure
  }
}
