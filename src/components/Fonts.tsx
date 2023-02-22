import { Global } from '@emotion/react'

export const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Lora';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/Lora/static/Lora-Regular.ttf') format('truetype');
      }
      
      /* latin */
      @font-face {
        font-family: 'Lora';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('/fonts/Lora/static/Lora-Medium.ttf') format('truetype');
      }
      
      /* latin */
      @font-face {
        font-family: 'Lora';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url('/fonts/Lora/static/Lora-SemiBold.ttf') format('truetype');
      }
      
      /* latin */
      @font-face {
        font-family: 'Lora';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/Lora/static/Lora-Bold.ttf') format('truetype');
      }
      
      /* ===== Roboto ===== */
      /* latin */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/Roboto/Roboto-Regular.ttf') format('truetype');
      }
      
      /* latin */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('/fonts/Roboto/Roboto-Medium.ttf') format('truetype');
      }
      
      /* latin */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/Roboto/Roboto-Bold.ttf') format('truetype');
      }
      
      /* latin */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url('/fonts/Roboto/Roboto-Black.ttf') format('truetype');
      }
    `}
  />
)
