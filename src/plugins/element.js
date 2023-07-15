import Vue from 'vue'
import {
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Button,
    Avatar,
    Table,
    TableColumn,
    Form,
    FormItem,
    Input,
    Select,
    Option,
    Switch,
    Dialog,
    Message,
    MessageBox,
    Pagination,
    Breadcrumb,
    BreadcrumbItem,

} from 'element-ui'


Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Button)
Vue.use(Avatar)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Dialog)
Vue.use(Select)
Vue.use(Option)
Vue.use(Switch)
Vue.use(Pagination)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)


Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;