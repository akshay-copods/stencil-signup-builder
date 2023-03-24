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
    const content = this.data.users[this.currentIndex];
    console.log(this.data.styling, 'content');
    return (
      <div>
        <div class="flex flex-col-reverse  gap-1">
          <div style={{ backgroundColor: this.data.styling.backgroundColor }} class=" p-5 rounded-lg">
            <div class={`flex  gap-6 ${this.data.styling.position === 'BOTTOM' ? 'flex-col' : 'flex-col-reverse'}  `}>
              <span style={{ textAlign: this.data.styling.alignment, color: this.data.styling.fontColor }} class="  text-xs">
                " {content?.personQuote} "
              </span>
              <div
                class={`flex gap-2 items-center w-full ${this.data.styling.alignment === 'LEFT' ? 'flex-row' : 'flex-row-reverse'} ${
                  this.data.styling.alignment === 'CENTER' ? 'flex-col' : 'flex-row'
                }`}
              >
       
                <img style={{borderRadius:this.data.styling.imageShape==='CIRCLE'?'50%':'0px'}} class="w-10 h-10"  src={avtar} alt="" />
                <div>
                  <h4 style={{ fontSize: this.typography.subTitle.fontSize, color: this.data.styling.fontColor }}>{content.personDetails} </h4>
                  <span style={{ fontSize: this.typography.normalText.fontSize, color: this.data.styling.fontColor }}>{content.personDesignation}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-2 justify-center items-center">
          {this.data.users.map((slide, slideIndex) => (
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
