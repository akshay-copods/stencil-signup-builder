import { Component, h, Prop } from '@stencil/core';
import 'iconify-icon';

@Component({
  tag: 'logo-component',
  styleUrl: 'form.css',
  shadow: true,
})
export class LogoComponent {
  @Prop() data: any;

  render() {
    console.log(this.data,'this')
    return (
      <div class="grid gap-8 grid-cols-6">
        {this.data.map(contentData => {
          return (
            <div class="grid justify-center col-span-2">
              <img class="w-12 " src={contentData.imageUrl} alt="" />
            </div>
          );
        })}
      </div>
    );
  }
}
