import { css } from '@microsoft/fast-element';

export const styles = css`
:host {
    --button-fill-color: #40527c;
    --button-text-color: white;
    --button-border-radius: 10rem;
    --border-color: #40527c;
    --border-size: 2px;
    --specialColor: #40527c;
    background: {--specialColor};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 150px;
    text-align: center;
  }
`