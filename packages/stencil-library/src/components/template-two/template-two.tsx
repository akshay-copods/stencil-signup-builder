import { Component, h } from '@stencil/core';

//@ts-ignore
@Component({
  tag: 'second-template',
  styleUrl: 'two.css',
  shadow: true,
})
export class SecondTemplate {
  render() {
    return (
      <div class="h-[40rem] w-full flex tx">
        <h1 class="tx">HELLO</h1>
        <div class=" bg-white w-[50%] flex flex-col justify-center items-center">
          <div class=" flex flex-col justify-between items-center w-[25rem] gap-5">
            <h1 class="font-bold text-2xl">Let's get started</h1>
            <div class="w-full flex flex-col gap-6">
              <label class="flex flex-col w-full" htmlFor="">
                Full Name
                <input placeholder="Enter your full name" class="border-[#CCCCCC]  border rounded-md h-10 px-1" type="text" />
              </label>
              <label class="flex flex-col w-full" htmlFor="">
                Email
                <input placeholder="Enter your email" class="border-[#CCCCCC] border rounded-md h-10 px-1" type="email" />
              </label>
              <label class="flex flex-col w-full" htmlFor="">
                Password
                <input placeholder="Enter your password" class="border-[#CCCCCC] border rounded-md h-10 px-1" type="password" />
              </label>
            </div>
            <button class="bg-[#27485D] text-white w-full h-10 rounded-md">
              <span>Sign Up</span>
            </button>
            <p>
              Already a user?{' '}
              <a class="text-[#27485D] underline" href="#">
                Login
              </a>
            </p>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center flex-1 bg-gradient-to-r from-[#517879] to-[#1E3E57]">
          <div class="flex justify-center items-center px-24">
            <h1 class="text-white font-bold text-5xl">"Creativity is intelligence having fun"</h1>
          </div>
        </div>
      </div>
    );
  }
}
