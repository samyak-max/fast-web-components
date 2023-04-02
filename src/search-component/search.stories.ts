import "./search";

export default {
    title: 'Components/My Search',
    component: 'my-search',
    args: {
        label: 'Search Workflow' ,
        default: 'search',
        ['--font-size']: '1rem',
        ['--padding']: '0.25rem'
    },
    parameters: {
        actions: {
            handles: ['search'],
        },
    },
};

const Template = (args: any) => `
    <tool-search label="${args.label}">${args.default}</tool-search>
`;

export const Default: any = Template.bind({});

Default.args = {};