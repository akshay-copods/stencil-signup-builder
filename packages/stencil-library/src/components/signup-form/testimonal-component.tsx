import { Component, h, Prop, State } from '@stencil/core';
import 'iconify-icon';
import avtar from '../../assessts/Avatar.svg';

@Component({
  tag: 'testimonal-component',
  shadow: true,
  styleUrl: 'form.css',
})
export class TestimonalComponent {
  @Prop() data: any;
  @Prop() typography: any;
  @State() currentIndex: number = 0;

  gotToSlide(slideIndex) {
    this.currentIndex = slideIndex;
  }
  render() {
    const dotStyle = {
      margin: '0 3px',
      cursor: 'pointer',
      fontSize: '20px',
    };
    const content = this.data.content[this.currentIndex];
    console.log(this.data.content, 'data');
    console.log(content, 'c');
    return (
      <div>
        <div class="flex flex-col-reverse  gap-1">
          <div class=" p-5 rounded-lg bg-[#0B0E49]">
            <div class="flex flex-col gap-6  ">
              <span class=" text-[#FAFAFA] text-xs">{content?.personQuote}</span>
              <div class="flex gap-2 w-full">
                <img src={avtar} alt="" />
                <div>
                  <h4 style={{ fontSize: this.typography.subTitle.fontSize }} class="text-white">
                    {content.personName}{' '}
                  </h4>
                  <span style={{ fontSize: this.typography.normalText.fontSize }} class="text-white">
                    {content.personDesignation} @{content.personCompany}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-2 justify-center items-center">
          {this.data.content.map((slide, slideIndex) => (
            <div
              id={slide}
              style={dotStyle}
              key={slideIndex}
              onClick={() => {
                this.gotToSlide(slideIndex);
              }}
            >
              <iconify-icon icon="carbon:dot-mark" class={`w-[5px] h-[5px] ${slideIndex === this.currentIndex ? 'text-white' : 'text-gray-400'}`}></iconify-icon>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
