import { Component, h } from '@stencil/core';
import 'iconify-icon';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  // /**
  //  * The first name
  //  */
  // @Prop() first: string;

  // /**
  //  * The middle name
  //  */
  // @Prop() middle: string;

  // /**
  //  * The last name
  //  */
  // @Prop() last: string;

  // private getText(): string {
  //   return format(this.first, this.middle, this.last);
  // }

  render() {
    // return <div class='bg-red-600 text-2xl'>Hello, World! I'm {this.getText()}</div>;
    return (
      <div class="flex rounded-xl font-sans w-[1044px] h-[652px]">
        <div class="bg-[#120338] w-[424px] rounded-r-lg">
          <div class="flex flex-col gap-40 pt-9 pb-16 px-16">
            <div class="flex flex-col gap-20">
              <div class="flex gap-2">
                <iconify-icon icon="ant-design:plus-circle-outlined" class="text-white" width="27.09" height="27.41"></iconify-icon>
                <span class="text-[#FAFAFA] leading-6 font-medium">Add Company Logo</span>
              </div>
              <div class="flex flex-col gap-2">
                <h1 class="font-medium text-[#FAFAFA] leading-10 text-3xl">
                  Start your journey with us. <iconify-icon icon="ant-design:edit-outlined" class="text-[#1890ff]" width="16" height="16"></iconify-icon>
                </h1>
                <span class="text-sm text-[#FAFAFA] leading-5">
                  Discover the world's best community of freelancers ad business owners.{' '}
                  <iconify-icon icon="ant-design:edit-outlined" class="text-[#1890ff] mb-[-4px]" width="16" height="16"></iconify-icon>
                </span>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <div class="rounded-lg bg-[#0B0E49] text-[#FAFAFA] px-8 pt-7 pb-16 text-xs leading-5">
                <span class="inline-block">Discover the world's best community of freelancers ad business owners.</span>
              </div>
              <div class="flex ml-auto gap-1">
                <iconify-icon icon="ant-design:star-outlined" class="text-[#FAFAFA]" width="12" height="12"></iconify-icon>
                <span class="text-[#FAFAFA] text-xs leading-3 font-normal opacity-80">View Custom Layouts</span>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white flex-1 p-20">
          <div class="flex flex-col gap-8">
            <div class="flex flex-col gap-10">
              <h1 class="leading-6 text-xl font-medium">
                Welcome to Company Name! <iconify-icon icon="ant-design:edit-outlined" class="text-[#1890ff]" width="16" height="16"></iconify-icon>
              </h1>
              <div class="flex flex-col gap-9">
                <div class="flex flex-col gap-6">
                  <label htmlFor="email" class="flex flex-col gap-2">
                    <span class="text-sm leading-3 text-[#00000099]">Email</span>
                    <input type="text" name="email" class="border border-[#D9D9D9] px-3 py-2 rounded-sm leading-6 text-base text-[rgba(0, 0, 0, 0.85)]" />
                  </label>
                  <label htmlFor="passowrd" class="flex flex-col gap-2">
                    <span class="text-sm leading-3 text-[#00000099]">Password</span>
                    <div class="flex relative">
                      <input type="text" class="border w-full border-[#D9D9D9] px-3 py-2 rounded-sm leading-6 text-base text-[rgba(0, 0, 0, 0.85)]" />
                      <iconify-icon icon="ant-design:eye-outlined" class="absolute right-3 top-3 text-[#00000073]" width="16" height="16"></iconify-icon>
                    </div>
                  </label>
                </div>
                <div class="flex flex-col gap-1">
                  <button class="bg-[#141414] text-white border border-[#9254DE] px-4 py-2 rounded-sm">Continue</button>
                  <span class="text-xs leading-6 text-[#00000073]">
                    By continuing, you agree to the <span class="text-[#2f54eb] opacity-100">Terms of Service</span> and <span class="text-[#2f54eb]">Privacy Policy</span>
                  </span>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-7">
              <div class="flex items-center justify-center gap-2">
                <hr class="flex-1 border-[#D8D8D8]" />
                <span class="w-32 text-xs text-center text-[#00000073]">OR SIGNUP WITH</span>
                <hr class="flex-1 border-[#D8D8D8]" />
              </div>
              <div class="flex flex-col gap-3">
                <button class="bg-white flex items-center justify-center gap-3 text-black border border-none shadow-[0px_2px_8px_rgba(0,0,0,0.15)]  px-4 py-2 rounded-sm">
                  <iconify-icon icon="logos:google-icon"></iconify-icon>Google
                </button>
                <span class="text-center text-sm leading-6">
                  Already have an account? <span class="rounded text-[#2F54EB]">Log in</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
