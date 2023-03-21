import { Component, h, Prop } from '@stencil/core';
import 'iconify-icon';

@Component({
  tag: 'statement-component',
  shadow: true,
  styleUrl: 'form.css',
})
export class StatementComponent {
  @Prop() data: any;
  @Prop() typography: any;
  render() {
    return (
      <div class="flex flex-col gap-2">
        <h1 style={{ fontSize: '30px', fontWeight: this.typography.title.Bold ? '700' : '400' }} class="title font-medium text-[#FAFAFA] leading-10 text-3xl">
          {this.typography.titleText}
        </h1>
        <span style={{ fontSize: this.typography.subTitle.fontSize, fontWeight: this.typography.subTitle.Bold ? '700' : '400' }} class={`text-sm text-[#FAFAFA] leading-5`}>
          Discover the world's best community of freelancers ad business owners.{' '}
          {/* <iconify-icon icon="ant-design:edit-outlined" class="text-[#1890ff] mb-[-4px]" width="16" height="16"></iconify-icon> */}
        </span>
      </div>
    );
  }
}
