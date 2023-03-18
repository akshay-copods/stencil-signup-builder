import { Component, h, Prop } from '@stencil/core';
import 'iconify-icon';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  render() {
    return <div class="bg-red-600 text-2xl">Hello, World! I'm {this.first}</div>;
  }
}
