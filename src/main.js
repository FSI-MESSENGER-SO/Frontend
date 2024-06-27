import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primevue/resources/themes/aura-light-green/theme.css";

import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import Card from "primevue/card";
import Panel from "primevue/panel";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import Fieldset from "primevue/fieldset";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import FloatLabel from "primevue/floatlabel";
import InputMask from "primevue/inputmask";
import Toolbar from "primevue/toolbar";
import Sidebar from "primevue/sidebar";
import InputText from "primevue/inputtext";
import PrimeVue from "primevue/config";
import Password from "primevue/password";
import InputGroup from "primevue/inputgroup";
import Image from "primevue/image"
createApp(App)
    .use(PrimeVue, { ripple: true })
    .use(router)
    .component("pv-input-text", InputText)
    .component("pv-dropdown", Dropdown)
    .component("pv-button", Button)
    .component("pv-card", Card)
    .component("pv-panel", Panel)
    .component("pv-icon-field", IconField)
    .component("pv-icon", InputIcon)
    .component("pv-fieldset", Fieldset)
    .component("pv-data-table", DataTable)
    .component("pv-column", Column)
    .component("pv-float-label", FloatLabel)
    .component("pv-input-mask", InputMask)
    .component('pv-toolbar', Toolbar)
    .component('pv-sidebar',Sidebar)
    .component('pv-password',Password)
    .component('pv-input-group', InputGroup)
    .component('pv-image', Image)
    .mount('#app');
