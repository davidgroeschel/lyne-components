import {
  Component,
  Element,
  h,
  Prop
} from '@stencil/core';
import events from './lyne-cta-button.events';

@Component({
  shadow: true,
  styleUrl: 'lyne-cta-button.css',
  tag: 'lyne-cta-button'
})

export class LyneCtaButton {

  /** Label text to show on the button */
  @Prop() public label = 'Default button text';

  /** Id which is send in the click event payload */
  @Prop() public eventId?: string;

  @Element() private element: HTMLElement;

  private buttonClick = (): void => {

    let eventDetail;

    if (this.eventId) {
      eventDetail = this.eventId;
    }

    const event = new CustomEvent(events.click, {
      bubbles: true,
      composed: true,
      detail: eventDetail
    });

    this.element.dispatchEvent(event);
  };

  public render(): JSX.Element {
    return <button class='button' onClick={this.buttonClick}>{this.label}</button>;
  }
}
