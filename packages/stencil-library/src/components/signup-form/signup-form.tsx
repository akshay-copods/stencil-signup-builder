import { Component, Event, EventEmitter, h, Prop, State, Watch } from '@stencil/core';
import 'iconify-icon';
import { SignupBuilderProps } from './interface';
import { PsudoStyles } from './psudoStyles';

//@ts-ignore
@Component({
  tag: 'signup-component',
  shadow: true,
  styleUrl: 'form.css',
})
export class SignupComponent {
  @Event() myChange: EventEmitter;
  divElement: HTMLDivElement;
  @Prop() data: SignupBuilderProps;
  @State() showPassword = false;
  @State() email: string = '';
  @State() editTitle = false;
  @Watch('data')
  handleDivInput() {
    const value = this.divElement.innerText;
    this.myChange.emit(value);
  }
  handleChange(event) {
    this.email = event?.target?.value;
  }

  render() {
    const theme = this.data.theme;
    const socialButton = this.data.socialButton;
    const submitButton = this.data.submitButton;
    const inputField = this.data.inputField;
    const typography = this.data.typography;
    const loginTypes = this.data.loginTypes;
    const layout = this.data.layout;

    document.addEventListener('click', e => {
      console.log('FIRST IF', e.composedPath()[0]);
      if (e.composedPath()[0] !== this.divElement) {
        this.editTitle = false;
      }
    });
    console.log({ typography });
    console.log(this.email);
    return (
      <div
        style={{ fontFamily: typography.fontFamily, backgroundColor: theme.backgroundColor }}
        class={`flex rounded-xl ${layout.viewPort === 'TABLET' || layout.viewPort === 'MOBILE' ? 'w-fit' : 'w-full'} font-sans  h-[645px]`}
      >
        <PsudoStyles socialButton={socialButton} submitButton={submitButton} inputField={inputField} />
        {/* Layout Condition will come here */}
        {layout.gridLayout === 'SPLIT' && (layout.viewPort === 'FULLSCREEN' || layout.viewPort === 'DESKTOP') && (
          <div style={{ width: `${layout.gridContentWidth}%` }} class="bg-[#070930] rounded-r-lg">
            <div class="flex flex-col gap-20 pt-9 pb-16 px-16 h-full">
              <div class="flex gap-2">
                {/* <iconify-icon icon="ant-design:plus-circle-outlined" class="text-white" width="27.09" height="27.41"></iconify-icon> */}
                <span class="text-[#FAFAFA] leading-6 font-medium">Company Logo</span>
              </div>
              <div class="flex flex-col justify-between h-full">
                <div class="flex flex-col gap-2">
                  <h1
                    onClick={() => {
                      this.editTitle = true;
                      this.divElement.focus();
                    }}
                    ref={el => (this.divElement = el)}
                    onInput={() => this.handleDivInput()}
                    contentEditable
                    style={{ fontSize: typography.title.fontSize, fontWeight: typography.title.Bold ? '700' : '400' }}
                    class="title font-medium text-[#FAFAFA] leading-10 text-3xl"
                  >
                    {typography.titleText}
                    {!this.editTitle && (
                      <span>
                        <iconify-icon icon="ant-design:edit-outlined" class="text-[#1890ff] cursor-pointer" width="16" height="16"></iconify-icon>
                      </span>
                    )}
                  </h1>
                  <span style={{ fontSize: typography.subTitle.fontSize, fontWeight: typography.subTitle.Bold ? '700' : '400' }} class="text-sm text-[#FAFAFA] leading-5">
                    Discover the world's best community of freelancers ad business owners.{' '}
                    {/* <iconify-icon icon="ant-design:edit-outlined" class="text-[#1890ff] mb-[-4px]" width="16" height="16"></iconify-icon> */}
                  </span>
                </div>
                <div class="flex flex-col">
                  <div class="rounded-lg bg-[#0B0E49] text-[#FAFAFA] px-8 pt-7 pb-16 text-xs leading-5">
                    <span class="inline-block">Discover the world's best community of freelancers ad business owners.</span>
                  </div>
                  <div class="flex ml-auto gap-1">
                    <iconify-icon icon="ant-design:star-outlined" class="text-[#FAFAFA]" width="12" height="12"></iconify-icon>
                    <span class="text-[#FAFAFA] text-xs leading-3 font-normal opacity-80">View Custom Layouts</span>
                  </div>
                </div>

                {}
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
        )}
        <div
          style={{ backgroundColor: theme.backgroundColor, width: `${100 - Number(layout.gridContentWidth)}%` }}
          class={`flex-1  ${layout.viewPort === 'TABLET' && 'max-w-[768px]'} ${layout.viewPort === 'MOBILE' ? 'max-w-[375px] p-9' : 'p-20'} flex items-center justify-center`}
        >
          <div class={`flex flex-col gap-8  ${layout.viewPort !== 'MOBILE' && 'min-w-[480px]'} max-w-[480px]`}>
            <div class="flex flex-col gap-10">
              <h1 style={{ color: theme.textColor }} class="leading-6 text-xl font-medium">
                Welcome to Company Name!
                {/* --<iconify-icon icon="ant-design:edit-outlined" class="text-[#1890ff]" width="16" height="16"></iconify-icon> */}
              </h1>
              {socialButton.position === 'TOP' && loginTypes.socialLoginTypes.length !== 0 && (
                <div class="flex flex-col-reverse gap-7">
                  <div class="flex items-center justify-center gap-2">
                    <hr class="flex-1 border-[#D8D8D8]" />
                    <span class="w-32 text-xs text-center text-[#00000073]">OR SIGNUP WITH</span>
                    <hr class="flex-1 border-[#D8D8D8]" />
                  </div>
                  <div class="flex flex-col-reverse gap-3">
                    {socialButton.layout === 'EQUAL_SPLIT' && (
                      <div class="flex items-center gap-3">
                        {/* social login array will come here */}
                        {loginTypes.socialLoginTypes.map(socialLogin => (
                          <button
                            style={{
                              backgroundColor: socialButton.styles.defaultState.backgroundColor,
                              color: socialButton.styles.defaultState.fontColor,
                              borderRadius: `${socialButton.styles.defaultState.borderRadius.toString()}px`,
                              fontWeight: socialButton.styles.defaultState.fontWeight,
                              fontSize: socialButton.styles.defaultState.fontSize,
                            }}
                            class="socialBtn flex flex-1 h-9 items-center justify-center gap-3 border border-none shadow-[0px_2px_8px_rgba(0,0,0,0.15)] px-4 py-2"
                          >
                            <iconify-icon icon={socialLogin.icon}></iconify-icon>
                            {loginTypes.socialLoginTypes.length > 3 ? null : socialLogin.name}
                          </button>
                        ))}
                      </div>
                    )}
                    {/* One primary other logos */}
                    {socialButton.layout === 'ONE_PRIMARY' && (
                      <div class="flex items-center gap-3">
                        {loginTypes.socialLoginTypes.map((socialLogin, i) =>
                          i == 0 ? (
                            <button
                              style={{
                                backgroundColor: socialButton.styles.defaultState.backgroundColor,
                                color: socialButton.styles.defaultState.fontColor,
                                borderRadius: `${socialButton.styles.defaultState.borderRadius.toString()}px`,
                                fontWeight: socialButton.styles.defaultState.fontWeight,
                                fontSize: socialButton.styles.defaultState.fontSize,
                              }}
                              class="socialBtn flex flex-1 h-9 items-center justify-center gap-3 border border-none shadow-[0px_2px_8px_rgba(0,0,0,0.15)] px-4 py-2"
                            >
                              <iconify-icon icon={socialLogin.icon}></iconify-icon>
                              {socialLogin.name}
                            </button>
                          ) : (
                            <iconify-icon class="text-lg" icon={socialLogin.icon}></iconify-icon>
                          ),
                        )}
                      </div>
                    )}
                    <span class="text-center text-sm leading-6">
                      Already have an account?{' '}
                      <span
                        style={{
                          fontSize: typography.links.fontSize,
                          fontWeight: typography.links.Bold ? '700' : '400',
                          textDecoration: typography.links.style,
                          color: theme.primaryColor,
                        }}
                        class="rounded "
                      >
                        Log in
                      </span>
                    </span>
                  </div>
                </div>
              )}
              <div class="flex flex-col gap-9">
                <div class="flex flex-col gap-6">
                  <label htmlFor="email" class="flex flex-col gap-2">
                    <span style={{ color: theme.labelColor, fontSize: inputField.label.fontSize, fontWeight: inputField.label.fontWeight }} class="leading-3">
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
                      class="inputField border-[#D9D9D9] px-3 py-2 leading-6 text-base text-[rgba(0, 0, 0, 0.85)]"
                      onInput={event => this.handleChange(event)}
                    />
                    {!this.email?.includes('@') && this.email?.length > 0 && <span style={{ color: theme.errorColor }}>please enter a valid email</span>}
                  </label>

                  {loginTypes.loginMethods === 'password' && (
                    <label htmlFor="passowrd" class="flex flex-col gap-2">
                      <span style={{ color: theme.labelColor, fontSize: inputField.label.fontSize, fontWeight: inputField.label.fontWeight }} class="leading-3">
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
                          type={this.showPassword ? 'text' : 'password'}
                          class="inputField w-full border-[#D9D9D9] px-3 py-2 leading-6 text-base text-[rgba(0, 0, 0, 0.85)]"
                        />
                        <iconify-icon
                          onClick={() => {
                            this.showPassword = !this.showPassword;
                          }}
                          icon="ant-design:eye-outlined"
                          class="absolute right-3 top-3 cursor-pointer text-[#00000073]"
                          width="16"
                          height="16"
                        ></iconify-icon>
                      </div>
                    </label>
                  )}
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
                    class="submitButton border border-[#9254DE] px-4 py-2"
                  >
                    Continue
                  </button>
                  <span style={{ color: theme.textColor }} class="text-xs leading-6 ">
                    By continuing, you agree to the
                    {loginTypes.approvals.map((approval, i) => (
                      <span>
                        <span
                          style={{
                            fontSize: typography.links.fontSize,
                            fontWeight: typography.links.Bold ? '700' : '400',
                            textDecoration: typography.links.style,
                            color: theme.primaryColor,
                          }}
                          class=" opacity-100"
                        >
                          {' ' + approval.name}
                        </span>
                        {loginTypes.approvals.length > 1 && i !== loginTypes.approvals.length - 1 ? ' and ' : null}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            </div>
            {socialButton.position === 'BOTTOM' && loginTypes.socialLoginTypes.length !== 0 && (
              <div class="flex flex-col gap-7">
                <div class="flex items-center justify-center gap-2">
                  <hr class="flex-1 border-[#D8D8D8]" />
                  <span style={{ color: theme.textColor }} class="w-32 text-xs text-center">
                    OR SIGNUP WITH
                  </span>
                  <hr class="flex-1 border-[#D8D8D8]" />
                </div>
                <div class="flex flex-col gap-3">
                  {socialButton.layout === 'EQUAL_SPLIT' && (
                    <div class="flex items-center gap-3">
                      {/* social login array will come here */}
                      {loginTypes.socialLoginTypes.map(socialLogin => (
                        <button
                          style={{
                            backgroundColor: socialButton.styles.defaultState.backgroundColor,
                            color: socialButton.styles.defaultState.fontColor,
                            borderRadius: `${socialButton.styles.defaultState.borderRadius.toString()}px`,
                            fontWeight: socialButton.styles.defaultState.fontWeight,
                            fontSize: socialButton.styles.defaultState.fontSize,
                          }}
                          class="socialBtn flex flex-1 h-9 items-center justify-center gap-3 border border-none shadow-[0px_2px_8px_rgba(0,0,0,0.15)] px-4 py-2"
                        >
                          <iconify-icon icon={socialLogin.icon}></iconify-icon>
                          {loginTypes.socialLoginTypes.length > 3 ? null : socialLogin.name}
                        </button>
                      ))}
                    </div>
                  )}
                  {/* One primary other logos */}
                  {socialButton.layout === 'ONE_PRIMARY' && (
                    <div class="flex items-center gap-3">
                      {loginTypes.socialLoginTypes.map((socialLogin, i) =>
                        i == 0 ? (
                          <button
                            style={{
                              backgroundColor: socialButton.styles.defaultState.backgroundColor,
                              color: socialButton.styles.defaultState.fontColor,
                              borderRadius: `${socialButton.styles.defaultState.borderRadius.toString()}px`,
                              fontWeight: socialButton.styles.defaultState.fontWeight,
                              fontSize: socialButton.styles.defaultState.fontSize,
                            }}
                            class="socialBtn flex flex-1 h-9 items-center justify-center gap-3 border border-none shadow-[0px_2px_8px_rgba(0,0,0,0.15)] px-4 py-2"
                          >
                            <iconify-icon icon={socialLogin.icon}></iconify-icon>
                            {socialLogin.name}
                          </button>
                        ) : (
                          <iconify-icon class="text-lg" icon="logos:google-icon"></iconify-icon>
                        ),
                      )}
                    </div>
                  )}
                </div>
                <span style={{ color: theme.textColor }} class="text-center text-sm leading-6">
                  Already have an account?{' '}
                  <span
                    style={{
                      fontSize: typography.links.fontSize,
                      fontWeight: typography.links.Bold ? '700' : '400',
                      textDecoration: typography.links.style,
                      color: theme.primaryColor,
                    }}
                    class="rounded"
                  >
                    Log in
                  </span>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
