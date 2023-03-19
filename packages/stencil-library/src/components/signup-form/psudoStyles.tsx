import { h } from '@stencil/core';
import { SignupBuilderProps } from './interface';

export const PsudoStyles = ({
  inputField,
  socialButton,
  submitButton,
}: {
  inputField: SignupBuilderProps['inputField'];
  socialButton: SignupBuilderProps['socialButton'];
  submitButton: SignupBuilderProps['submitButton'];
}) => {

  return (
    <style>
      {/* Social Button Psudo Styles */}
      {`
            .socialBtn:hover {
              background-color: ${socialButton.styles.hoverState.backgroundColor} !important;
              border-radius: ${socialButton.styles.hoverState.borderRadius}px !important;
              color: ${socialButton.styles.hoverState.fontColor} !important;
              font-size: ${socialButton.styles.hoverState.fontSize} !important;
              font-weight: ${socialButton.styles.hoverState.fontWeight} !important;
            }
            .socialBtn:active {
              background-color: ${socialButton.styles.activeState.backgroundColor} !important;
              border-radius: ${socialButton.styles.activeState.borderRadius}px !important;
              color: ${socialButton.styles.activeState.fontColor} !important;
              font-size: ${socialButton.styles.activeState.fontSize} !important;
              font-weight: ${socialButton.styles.activeState.fontWeight} !important;
            }
            .socialBtn:disabled {
              background-color: ${socialButton.styles.disabledState.backgroundColor} !important;
              border-radius: ${socialButton.styles.disabledState.borderRadius}px !important;
              color: ${socialButton.styles.disabledState.fontColor} !important;
              font-size: ${socialButton.styles.disabledState.fontSize} !important;
              font-weight: ${socialButton.styles.disabledState.fontWeight} !important;
            }
        `}

      {/* Submit Button Psudo Styles */}
      {`
            .submitButton:hover {
              background-color: ${submitButton.styles.hoverState.backgroundColor} !important;
              border-radius: ${submitButton.styles.hoverState.borderRadius}px !important;
              color: ${submitButton.styles.hoverState.fontColor} !important;
              font-size: ${submitButton.styles.hoverState.fontSize} !important;
              font-weight: ${submitButton.styles.hoverState.fontWeight} !important;
            }
            .submitButton:active {
              background-color: ${submitButton.styles.activeState.backgroundColor} !important;
              border-radius: ${submitButton.styles.activeState.borderRadius}px !important;
              color: ${submitButton.styles.activeState.fontColor} !important;
              font-size: ${submitButton.styles.activeState.fontSize} !important;
              font-weight: ${submitButton.styles.activeState.fontWeight} !important;
            }
            .submitButton:disabled {
              background-color: ${submitButton.styles.disabledState.backgroundColor} !important;
              border-radius: ${submitButton.styles.disabledState.borderRadius}px !important;
              color: ${submitButton.styles.disabledState.fontColor} !important;
              font-size: ${submitButton.styles.disabledState.fontSize} !important;
              font-weight: ${submitButton.styles.disabledState.fontWeight} !important;
            }
        `}

      {/* Input Field Psudo Styles */}
      {`
            .inputField:hover {
              background-color: ${inputField.hoverState.backgroundColor} !important;
              border-radius: ${inputField.hoverState.box.borderRadius}px !important;
              border-width: ${inputField.hoverState.box.borderSize}px !important;
              color: ${inputField.hoverState.fontColor} !important;
              font-size: ${inputField.hoverState.fontSize} !important;
              font-weight: ${inputField.hoverState.fontWeight} !important;
            }
            .inputField:focus {
              background-color: ${inputField.activeState.backgroundColor} !important;
              border-radius: ${inputField.activeState.box.borderRadius}px !important;
              border-width: ${inputField.activeState.box.borderSize}px !important;
              color: ${inputField.activeState.fontColor} !important;
              font-size: ${inputField.activeState.fontSize} !important;
              font-weight: ${inputField.activeState.fontWeight} !important;
            }
            .inputField:disabled {
              background-color: ${inputField.disabledState.backgroundColor} !important;
              border-radius: ${inputField.disabledState.box.borderRadius}px !important;
              border-width: ${inputField.disabledState.box.borderSize}px !important;
              color: ${inputField.disabledState.fontColor} !important;
              font-size: ${inputField.disabledState.fontSize} !important;
              font-weight: ${inputField.disabledState.fontWeight} !important;
            }
        `}
    </style>
  );
};
