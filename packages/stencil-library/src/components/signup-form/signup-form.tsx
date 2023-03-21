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
  @Watch('data')
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
    const logo = this.data.logo;
    return (
      <div
        style={{ fontFamily: typography.fontFamily, backgroundColor: theme.backgroundColor }}
        class={`flex rounded-xl ${layout.viewPort === 'TABLET' || layout.viewPort === 'MOBILE' ? 'w-fit' : 'w-full'} font-sans  h-full`}
      >
        <PsudoStyles socialButton={socialButton} submitButton={submitButton} inputField={inputField} />
        {/* Layout Condition will come here */}
        {layout.gridLayout === 'SPLIT' && (layout.viewPort === 'FULLSCREEN' || layout.viewPort === 'DESKTOP') && (
          <div style={{ width: `${layout.gridContentWidth}%` }} class="bg-[#070930] rounded-r-lg">
            <div class="flex flex-col gap-20 pt-9 pb-16 px-16 h-full">
              <div class={`${logo.alignment === 'CENTER' ? 'flex justify-center' : logo.alignment === 'RIGHT' ? 'flex justify-end' : null}`}>
                {logo.logoImage ? (
                  <img class="max-w-[100px]" src={logo.logoImage} alt="" />
                ) : (
                  <div class="flex gap-2">
                    <span class="text-[#FAFAFA] leading-6 font-medium">Your Company Logo </span>
                  </div>
                )}
              </div>

              <div class={`flex flex-col ${layout.content.length > 1 ? 'justify-between' : 'justify-center'}  h-full`}>
                {layout.content.map(i => {
                  if (i.type === 'STATEMENTS') {
                    return <statement-component data={i} typography={typography}></statement-component>;
                  }
                  if (i.type === 'TESTIMONALS') {
                    return <testimonal-component data={i} typography={typography}></testimonal-component>;
                  }
                  if (i.type === 'LOGO') {
                    return <logo-component data={i}></logo-component>;
                  }
                })}
              </div>
            </div>
          </div>
        )}
        <div
          style={{ backgroundColor: theme.backgroundColor, width: `${100 - Number(layout.gridContentWidth)}%` }}
          class={`flex-1  ${layout.viewPort === 'TABLET' && 'max-w-[768px]'} ${layout.viewPort === 'MOBILE' ? 'max-w-[375px] p-9' : 'p-20'} flex items-center justify-center`}
        >
          <div class={`flex flex-col gap-8  ${layout.viewPort !== 'MOBILE' && 'w-[480px]'}`}>
            {(layout.viewPort === 'MOBILE' || layout.viewPort === 'TABLET') && (
              <div class="flex items-center justify-center">
                {logo.logoImage ? (
                  <img class="max-w-[100px]" src={logo.logoImage} alt="" />
                ) : (
                  <div class="border items-center px-4  flex flex-col gap-2 rounded-[52px] w-fit py-4">
                    <iconify-icon icon="ant-design:plus-circle-outlined" class="text-black" width="27.09" height="27.41"></iconify-icon>
                    <span>Add Logo</span>
                  </div>
                )}
              </div>
            )}
            <div class="flex flex-col gap-10">
              <h1
                style={{ color: theme.textColor, fontSize: typography.title.fontSize }}
                class={`leading-6 text-xl ${typography.title.Bold ? 'font-bold' : 'font-medium'} ${
                  (layout.viewPort === 'MOBILE' || layout.viewPort === 'TABLET') && 'self-center'
                } `}
              >
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
                    <span style={{ color: theme.secondaryColor }} class="text-center text-sm leading-6">
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
                  {inputField.addInputField?.map(data => {
                    return (
                      <div>
                        {data.name !== 'PHONE_NUMBER' && (
                          <label htmlFor={data.name} class="flex flex-col gap-2">
                            <span style={{ color: theme.labelColor, fontSize: inputField.label.fontSize, fontWeight: inputField.label.fontWeight }} class="leading-3">
                              {data.label}
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
                              name={data.name}
                              class="inputField border-[#D9D9D9] px-3 py-2 leading-6 text-base text-[rgba(0, 0, 0, 0.85)]"
                              placeholder={data.placeholder}
                            />
                          </label>
                        )}
                        {data.name === 'PHONE_NUMBER' && (
                          <label htmlFor={data.name} class="flex flex-col gap-2">
                            <span style={{ color: theme.labelColor, fontSize: inputField.label.fontSize, fontWeight: inputField.label.fontWeight }} class="leading-3">
                              {data.label}
                            </span>
                            <div class="border-[#D9D9D9] inputField border p-2 flex gap-2 items-center">
                              <div>+91</div>
                              <hr class="h-5 w-px bg-[#D9D9D9]" />
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
                                name={data.name}
                                class=" border-none w-full focus:outline-none text-base text-[rgba(0, 0, 0, 0.85)]"
                                placeholder={data.placeholder}
                              />
                            </div>
                          </label>
                        )}
                      </div>
                    );
                  })}
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
                  <span style={{ color: theme.secondaryColor }} class={`text-xs leading-6  font-normal `}>
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
                        {loginTypes.approvals.length > 1 && i !== loginTypes.approvals.length - 1 ? <span style={{ color: theme.secondaryColor }}> and</span> : null}
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
                  <span class="w-32 text-xs text-[#00000073] text-center">OR SIGNUP WITH</span>
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
                <span style={{ color: theme.secondaryColor }} class="text-center  text-sm leading-6">
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
