import { css } from '@microsoft/fast-element';

export const styles = css`
:host {
    --button-fill-color: #40527c;
    --button-text-color: white;
    --button-border-radius: 10rem;
    --border-color: #40527c;
    --border-size: 2px;
    --specialColor: #40527c;
    --custom-property-name: #40527c;
    background: {--custom-property-name};
  }
    .top-div {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }
    .info{
        font-size: 0.99rem;
        margin-bottom: 30px;
    }
    .search {
        display: flex;
        gap: 10px;
    }
`