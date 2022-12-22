import CartPage from '~/pages/Cart';
import CheckImei from '~/pages/Checkimei';
import Home from '~/pages/Home';
import InstallmentPolicy from '~/pages/InstallmentPolicy';
import Insurance from '~/pages/Insurance';
import Introduce from '~/pages/Introduce';
import Login from '~/pages/Login';
import NotFound from '~/pages/NotFound';
import Payment from '~/pages/Payment';
import Product from '~/pages/Product';
import Register from '~/pages/Register';
import ShipCodPolicy from '~/pages/ShipCodPolicy';
import Shop from '~/pages/Shop';
import WarrantyPolicy from '~/pages/WarrantyPolicy';
import Survey from './../pages/Survey/index';

export const routes = [
    {
        path: '/',
        name: 'Trang chủ',
        component: Home,
    },
    {
        path: '/not-found',
        name: 'Not Found',
        component: NotFound,
        layout: null,
    },
    {
        path: '/shop/:id',
        name: 'Shop',
        component: Shop,
    },
    {
        path: '/product/:id',
        name: 'Sản phẩm',
        component: Product,
    },
    {
        path: '/gioithieu',
        name: 'Giới thiệu',
        component: Introduce,
    },
    {
        path: '/bao-hanh',
        name: 'Bảo hành',
        component: Insurance,
    },
    {
        path: '/check-imei',
        name: 'Check imei',
        component: CheckImei,
    },
    {
        path: '/phuong-thuc-thanh-toan',
        name: 'Phương thức thanh toán',
        component: Payment,
    },
    {
        path: '/survey',
        name: 'Góp ý/ Khiếu nại',
        component: Survey,
    },
    {
        path: '/tinh-toan-tra-gop',
        name: 'Chính sách trả góp',
        component: InstallmentPolicy,
    },
    {
        path: '/chinh-sach-ship-cod',
        name: 'Chính sách giao hàng',
        component: ShipCodPolicy,
    },
    {
        path: '/chinh-sach-huy-giao-dich-va-hoan-tien',
        name: 'Chính sách hủy giao dịch và hoàn tiền',
        component: ShipCodPolicy,
    },
    {
        path: '/chinh-sach-doi-tra',
        name: 'Chính sách đổi trả',
        component: ShipCodPolicy,
    },
    {
        path: '/chinh-sach-bao-hanh',
        name: 'Chính sách bảo hành',
        component: WarrantyPolicy,
    },
    {
        path: '/chinh-sach-ship-cod',
        name: 'Chính sách giao hàng',
        component: ShipCodPolicy,
    },
    {
        path: '/cart',
        name: 'Cart',
        component: CartPage,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },

];
