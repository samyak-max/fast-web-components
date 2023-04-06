import { FASTElement, attr, customElement, html, ref, css } from '@microsoft/fast-element';
import { template } from './search.template';
import { styles } from './search.styles';
import { DesignToken } from '@microsoft/fast-foundation';
import { fastButton, provideFASTDesignSystem } from '@microsoft/fast-components';
import axios from 'axios';
/**
 * @tag my-search
 * 
 * @summary This is a search component
 *
 * @attr {string} label - the label associated with the search field
 * 
 * @slot default - content displayed in the search button
 * 
 */

const root = document.querySelector("#root")! as HTMLDivElement;
DesignToken.registerRoot(root);

export const specialColor = DesignToken.create<string>({
    name:"special-color",
    cssCustomPropertyName: "custom-property-name"
}).withDefault('#FFFFFF');
specialColor.setValueFor(root, "red");



// provideFASTDesignSystem()
// .withPrefix("tool")
// .register(fastButton())

@customElement({
    name: 'tool-search',
    template,
    styles
})

export class ToolSearch extends FASTElement {
    @attr label: string = 'Search Tools';
    @attr default: string = 'search';
    @attr infoHead: string = '*Result object is logged in actions tab as detail';
    'searchInput': HTMLInputElement ;
    data = {};
    
    async connectedCallback() {
        super.connectedCallback();
    }

    private async apiCall() {
        let toolName = this.searchInput.value;
        const url = `https://dockstore.org/api/ga4gh/trs/v2/tools?toolname=${toolName}`;
        const res = await axios.get(url);
        this.data = res.data;
        console.log(this.data);
        this.$emit('search', this.data);
        return this.data;
    }

    async searchHandler() {
        this.apiCall();
    }

    async buttonClickHandler() {
        this.apiCall();
    }
}


