import { LightningElement } from 'lwc';

export default class LightningExampleAccordionBasic extends LightningElement {
    activeSectionMessage = '';

    handleToggleSection(event) {
        this.activeSectionMessage =
            'Abrir la seccion:  ' + event.detail.openSections;
    }

    handleSetActiveSectionC() {
        const accordion = this.template.querySelector('.example-accordion');

        accordion.activeSectionName = 'C';
    }

    handleSetActiveSectionB() {
        const accordion = this.template.querySelector('.example-accordion');

        accordion.activeSectionName = 'B';
    }

    handleSetActiveSectionA() {
        const accordion = this.template.querySelector('.example-accordion');

        accordion.activeSectionName = 'A';
    }
}