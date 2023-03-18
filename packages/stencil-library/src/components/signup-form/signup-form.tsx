import { Component, h, Prop, Watch } from '@stencil/core';
import 'iconify-icon';
import { SignupBuilderProps } from './interface';

//@ts-ignore
@Component({
  tag: 'signup-component',
  shadow: true,
  styleUrl: 'form.css',
})
export class SignupComponent {
  @Prop() data: SignupBuilderProps;
  @Watch('data')
  render() {
    const theme = this.data.theme;
    const socialButton = this.data.socialButton;
    const submitButton = this.data.submitButton;
    const inputField = this.data.inputField;
    console.log({ inputField });
    return (
      <div class="flex rounded-xl font-sans w-full h-full">
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
        <div style={{ backgroundColor: theme.backgroundColor }} class="flex-1 p-20">
          <div class="flex flex-col gap-8">
            <div class="flex flex-col gap-10">
              <h1 style={{ color: theme.textColor }} class="leading-6 text-xl font-medium">
                Welcome to Company Name! <iconify-icon icon="ant-design:edit-outlined" class="text-[#1890ff]" width="16" height="16"></iconify-icon>
              </h1>
              <div class="flex flex-col gap-9">
                <div class="flex flex-col gap-6">
                  <label htmlFor="email" class="flex flex-col gap-2">
                    <span style={{ color: inputField.label.fontColor, fontSize: inputField.label.fontSize, fontWeight: inputField.label.fontWeight }} class="leading-3">
                      Email
                    </span>
                    <input
                      style={{
                        borderRadius: `${inputField.defaultState.box.borderRadius.toString()}px`,
                        borderWidth: `${inputField.defaultState.box.borderSize.toString()}px`,
                        backgroundColor: inputField.defaultState.backgroundColor,
                        color: inputField.defaultState.fontColor,
                        fontSize: inputField.defaultState.fontSize,
                        fontWeight: inputField.defaultState.fontWeight,
                      }}
                      type="text"
                      name="email"
                      class="border-[#D9D9D9] px-3 py-2 leading-6 text-base text-[rgba(0, 0, 0, 0.85)]"
                    />
                  </label>
                  <label htmlFor="passowrd" class="flex flex-col gap-2">
                    <span style={{ color: inputField.label.fontColor, fontSize: inputField.label.fontSize, fontWeight: inputField.label.fontWeight }} class="leading-3">
                      Password
                    </span>
                    <div class="flex relative">
                      <input
                        style={{
                          borderRadius: `${inputField.defaultState.box.borderRadius.toString()}px`,
                          borderWidth: `${inputField.defaultState.box.borderSize.toString()}px`,
                          backgroundColor: inputField.defaultState.backgroundColor,
                          color: inputField.defaultState.fontColor,
                          fontSize: inputField.defaultState.fontSize,
                          fontWeight: inputField.defaultState.fontWeight,
                        }}
                        type="text"
                        class="w-full border-[#D9D9D9] px-3 py-2 leading-6 text-base text-[rgba(0, 0, 0, 0.85)]"
                      />
                      <iconify-icon icon="ant-design:eye-outlined" class="absolute right-3 top-3 text-[#00000073]" width="16" height="16"></iconify-icon>
                    </div>
                  </label>
                </div>

                <div class="flex flex-col gap-1">
                  <button
                    style={{
                      backgroundColor: submitButton.styles.defaultState.backgroundColor,
                      color: submitButton.styles.defaultState.fontColor,
                      borderRadius: `${submitButton.styles.defaultState.borderRadius.toString()}px`,
                      fontWeight: submitButton.styles.defaultState.fontWeight,
                      fontSize: submitButton.styles.defaultState.fontSize,
                    }}
                    class=" text-white border border-[#9254DE] px-4 py-2 rounded-sm"
                  >
                    Continue
                  </button>
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
                <button
                  style={{
                    backgroundColor: socialButton.styles.defaultState.backgroundColor,
                    color: socialButton.styles.defaultState.fontColor,
                    borderRadius: `${socialButton.styles.defaultState.borderRadius.toString()}px`,
                    fontWeight: socialButton.styles.defaultState.fontWeight,
                    fontSize: socialButton.styles.defaultState.fontSize,
                  }}
                  class="flex items-center justify-center gap-3 border border-none shadow-[0px_2px_8px_rgba(0,0,0,0.15)] px-4 py-2"
                >
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
