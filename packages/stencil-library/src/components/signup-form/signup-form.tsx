import { Component, h, Prop, State, Watch } from '@stencil/core';
import 'iconify-icon';
// import addCircleOutline from '../../AddCircleOutline.svg';
// import addLogo from '../../addLogo.svg';
// import avtar from '../../Avatar.svg';
// import editIcon from '../../Edit.svg';
// import starLogo from '../../star.svg';
//@ts-ignore
@Component({
  tag: 'signup-component',
  shadow: true,
  styleUrl:'form.css'
})
export class SignupComponent {
  @Prop() data: any;
  @State() email: string = '';
  @Watch('data')
 

  render() {

    
    return (
      <div
        class={`flex  rounded-xl bg-white  border-text-[#8C8C8C] border 'bg-white' `}
      >
          <div class={`bg-[#070930] min-w-[424px] rounded-lg  px-[50px] pb-[80px] pt-[30px]`}>
            <div class="flex justify-between flex-col gap-20 ">
              <div class="flex flex-col gap-20 ">
                <div class={` flex justify-center right`}>
                 
                    <div class="flex items-center gap-2">
                      <span class="font-medium text-white">Add Company Logo</span>
                    </div>
                </div>
                <div class="max-w-[280px] gap-2 flex flex-col">
                  <h1
                    class={`text-3xl font-medium  text-white `}
                
                  >
                    Start your journey with us.
                  </h1>

                  <span
                 
                    class={`text-white  'underline underline-offset-8 outline-none transition-all duration-300 ease-in-out'}`}
                  
                  >
                    Discover the world's best community of freelancers ad business owners.{' '}
                  </span>
                </div>
              </div>

              <div class="flex flex-col gap-1 max-w-[390px]">
                <div class="flex justify-end  gap-1">
                  {/* <img src={starLogo} alt="" /> */}
                  <span class="text-[#1890FF]  text-xs ">View Custom Layouts</span>
                </div>

                <div class="border-text-none rounded-2xl bg-[#252BA9] flex flex-col gap-6 p-5">
                  <span class={`text-white text-xs`}>
                    "This SAAS product has made my life so much easier! It's intuitive, efficient, and has all the features I need to run my business smoothly."
                  </span>
                  <div class="flex gap-2 items-center">
                    {/* <img src={avtar} alt="" /> */}
                    <div>
                      <h4 class="text-white">
                        Arun Raj
                      </h4>
                      <span  class="text-white">
                        Senior Product Manger @ABSoftwares
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div
          class={`flex rounded-lg p-5 flex-col py-20 gap-10  `}
        >
          <div class="flex  gap-[35px] flex-col">
            
                    <span>Add Logo</span>

            <div class="flex items-center gap-1.5">
              <h3
                class={`font-medium 'text-black'  $ `}
                id="login-box-heading"
                tabIndex={0}
              >
                Welcome to Company Name!
               
              </h3>
            </div>
          </div>

          <div class="flex flex-col gap-9">
            <div class={`flex gap-8 flex-col`}>
              <div class={`flex flex-col gap-7`}>
                <div class="flex flex-col gap-2">
                  <label
                 
                    htmlFor=""
                  >
                    Email
                  </label>
                  <input
                   
                    class={`border-[#D9D9D9] border-2 px-3 py-2 rounded-sm`}
                    placeholder="Enter Your Email"
                    type="text"
                    required={true}
                  />
                </div>
                  <div class="flex flex-col gap-2">
                    <label
                     
                      htmlFor=""
                    >
                      Password
                    </label>
                    <div class="relative">
                      <input
                       
                        class={`border-[#D9D9D9] w-full border-2 px-3 py-2  rounded-sm`}
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        class="absolute text-[#00000073] right-3 top-[11px]"
                     
                      >
                      </button>
                    </div>
                  </div>
                <button
                 
                  tabIndex={0}
                  type="submit"
                  class={`bg-[#070930] max-h-12 rounded-sm py-2 text-center items-center text-white`}
                >
                  Continue
                </button>
                <div class="flex flex-col gap-1">
                 
                    <span
                      class={` flex-wrap flex items-center gap-1 text-[#00000073] text-black`}
                    >
                      <span>By continuing, you agree to the</span>
                        <a
                          href="/"
                        >
                          Terms of Service
                        </a>
                        <span
                          class="text-[#00000073] text-xs"
                        >
                          and
                        </span>
                      {''}
                        <a
                         
                          href="/"
                        >
                          Privacy Policy
                        </a>
                    </span>
                </div>
              </div>
              <div class={`flex gap-9 flex-col`}>
                  <div class="flex justify-between items-center gap-2">
                    <hr class="h-px w-full bg-gray-300" /> <div class={`text-xs w-full text-gray-600 text-center  `}>OR SIGNUP WITH</div> <hr class="h-px w-full bg-gray-300" />
                  </div>

                <div
                  class={`flex flex-row-reverse gap-3 justify-center items-center`}
                >
                  
                </div>
              </div>
            </div>

            <div class="flex items-center justify-center gap-0.5">
              <span class={`text-sm text-black `}>Already have an account?</span>
              <a  href="/">
                Log In
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
