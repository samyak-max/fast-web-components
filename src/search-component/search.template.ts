import { html, ref } from '@microsoft/fast-element';
import { ToolSearch } from './search';

export const template = html<ToolSearch>`
    <div class="top-div">
    <div class="search">
    <div>
        ${x => x.label}
        <input type="search" ${ref('searchInput')} @search="${x => x.searchHandler()}" />
    </div>
    <button @click="${x => x.buttonClickHandler()}">
        <slot>${x => x.default}</slot>
    </button>
    </div>
    <slot class=info>${x => x.infoHead}</slot>
    </div>
    `;