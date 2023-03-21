import { Component, h, Prop, State } from '@stencil/core';
import 'iconify-icon';

@Component({
  tag: 'carousel-component',
  shadow: true,
})
export class CarouselComponent {
  /**
   * The first name
   */
  @Prop() first: string;
  @Prop() content: any = [
    {
      order: 1,
      personName: "John Doe",
      personImage: "xyz",
      personDesignation: "Engineer",
      personCompany: "Company Name",
      personQuote: "This is wonderful"
    },
    {
      order: 1,
      personName: "Salman Khan",
      personImage: "xyz",
      personDesignation: "Engineer",
      personCompany: "Company Name",
      personQuote: "This is wonderful"
    }
  ]
  @State() currentIndex: number = 0;

  gotToSlide(slideIndex) {
    this.currentIndex = slideIndex;
  }

  render() {
    const dotStyle = {
        margin: "0 3px",
        cursor: "pointer",
        fontSize: "20px"
      };
    const person = this.content[this.currentIndex];
    return (
      <div >
        <div>{person.personName}</div>
        <div >
          {this.content.map((slide, slideIndex) => (
            <div id={slide} style={dotStyle} key={slideIndex} onClick={() => this.gotToSlide(slideIndex)}>
              ●
            </div>
          ))}
        </div>
      </div>
    );
  }
}
