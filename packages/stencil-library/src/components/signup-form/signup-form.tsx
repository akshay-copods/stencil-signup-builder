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
  styleUrl: 'form.css',
})
export class SignupComponent {
  @Prop() data: any;
  @State() email: string = '';
  @Watch('data')
  render() {
    // const logos = [
    //   {
    //     icon: 'fluent:image-28-filled',
    //     link: '',
    //   },
    //   {
    //     icon: 'fluent:image-28-filled',
    //     link: '',
    //   },
    //   {
    //     icon: 'fluent:image-28-filled',
    //     link: '',
    //   },
    //   {
    //     icon: 'fluent:image-28-filled',
    //     link: '',
    //   },
    //   {
    //     icon: 'fluent:image-28-filled',
    //     link: '',
    //   },
    //   {
    //     icon: 'fluent:image-28-filled',
    //     link: '',
    //   },
    // ];
    return (
      <div class={`flex  rounded-xl bg-white w-fit font  border-text-[#8C8C8C] border  `}>
        <div class={`bg-[#070930] min-w-[424px] rounded-lg  px-[50px] pb-[80px] pt-[30px]`}>
          <div class="flex gap-20 flex-col h-full ">
            <div class="flex items-center gap-2">
              <iconify-icon class="text-white" icon="material-symbols:add-circle-outline" width="28" height="28"></iconify-icon>
              <span class="font-medium text-white">Add Company Logo</span>
            </div>
            <div class={`flex flex-col h-full justify-between`}>
              <div class="max-w-[280px] gap-2 flex flex-col">
                <div>
                  <h1 class={`text-3xl font-medium  text-white `}>Start your journey with us.</h1>{' '}
                  <iconify-icon class="text-blue-600" icon="carbon:edit" width="15" height="15"></iconify-icon>
                </div>
                <div>
                  <span class={`text-white  'underline underline-offset-8 outline-none transition-all duration-300 ease-in-out'}`}>
                    Discover the world's best community of freelancers ad business owners.{' '}
                  </span>
                  <iconify-icon class="text-blue-600" icon="carbon:edit" width="15" height="15"></iconify-icon>
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
                      <h4 class="text-white">Arun Raj</h4>
                      <span class="text-white">Senior Product Manger @ABSoftwares</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* {logos section will be shown as per layout selection} */}
              {/* <div class='grid gap-8 grid-cols-6'>{logos.map((data)=>{
                return(
                  <div class='grid justify-center col-span-2'>
                    <iconify-icon class="text-white" icon={data.icon} width="50" height="50"></iconify-icon>
                  </div>
                )
              })}</div> */}
            </div>
          </div>
        </div>
        <div class={`flex rounded-lg  flex-col pl-20 pr-[60px] pt-20 pb-24 gap-10  `}>
          <div class="flex  gap-[35px] flex-col">
            {/* <span>Add Logo</span> */}

            <div class="flex items-center gap-1.5">
              <h3 class="font-medium text-black text-xl" id="login-box-heading" contentEditable={true} tabIndex={0}>
                Welcome to Company Name!
              </h3>
              <iconify-icon class="text-blue-600" icon="carbon:edit" width="15" height="15"></iconify-icon>
            </div>
          </div>

          <div class="flex flex-col gap-9">
            <div class={`flex gap-8 flex-col`}>
              <div class={`flex flex-col gap-7`}>
                <div class="flex flex-col gap-2">
                  <label class="text-sm text-customBlack-500" htmlFor="">
                    Email
                  </label>
                  <input class={`border-[#D9D9D9] border-2 px-3 py-2 rounded-sm`} placeholder="Enter Your Email" type="text" required={true} />
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm text-customBlack-500" htmlFor="">
                    Password
                  </label>
                  <div class="relative">
                    <input class={`border-[#D9D9D9] w-full border-2 px-3 py-2  rounded-sm`} placeholder="Enter your password" />
                    <button type="button" class="absolute text-customBlack-400 right-3 top-[11px]"></button>
                  </div>
                </div>
                <button tabIndex={0} type="submit" class={`bg-[#070930] max-h-12 rounded-sm py-2 text-center items-center text-white`}>
                  Continue
                </button>
                <div class="flex flex-col gap-1">
                  <span class={` flex-wrap flex items-center gap-1  text-black`}>
                    <span class="text-xs text-customBlack-400 ">By continuing, you agree to the</span>
                    <a class="text-blue-600 text-xs" href="/">
                      Terms of Service
                    </a>
                    <span class="text-customBlack-400 text-xs">and</span>
                    {''}
                    <a class="text-blue-600 text-xs" href="/">
                      Privacy Policy
                    </a>
                  </span>
                </div>
              </div>
              <div class={`flex gap-9 flex-col`}>
                <div class="flex justify-between items-center gap-2">
                  <hr class="h-px w-full bg-gray-300" /> <div class={`text-xs w-full text-gray-600 text-center  `}>OR SIGNUP WITH</div> <hr class="h-px w-full bg-gray-300" />
                </div>

                <div class={`flex flex-row-reverse gap-3 justify-center items-center`}></div>
              </div>
            </div>

            <div class="flex items-center justify-center gap-0.5">
              <span class={`text-sm text-black `}>Already have an account?</span>
              <a class="text-sm text-blue-600" href="/">
                Log In
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
