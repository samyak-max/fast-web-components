import { html, ref } from '@microsoft/fast-element';
import { ToolSearch } from './search.search';

export const template = html<ToolSearch>`
    <label>
        ${x => x.label}
        <input type="search" ${ref('searchInput')} @search="${x => x.searchHandler()}" />
    </label>
    <button @click="${x => x.buttonClickHandler()}">
        <slot>${x => x.default}</slot>
    </button>
    `;