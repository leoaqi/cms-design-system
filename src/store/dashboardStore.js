import { defineStore } from 'pinia'
import icApplePay from '@/assets/icons/ic_apple_pay.png';
import icBca from '@/assets/icons/ic_bca.png';
import icJago from '@/assets/icons/ic_jago.png';
import icMasterCard from '@/assets/icons/ic_master_card.png';
import icPaypal from '@/assets/icons/ic_paypal.png';
import icStrip from '@/assets/icons/ic_strip.png';
import icVisa from '@/assets/icons/ic_visa.png';
import icProfile1 from '@/assets/icons/ic_profile_1.png';
import icProfile2 from '@/assets/icons/ic_profile_2.png';
import icProfile3 from '@/assets/icons/ic_profile_3.png';
import icProfile4 from '@/assets/icons/ic_profile_4.png';
import icProfile5 from '@/assets/icons/ic_profile_5.png';

export const useDashboardStore = defineStore('dashboard', {
    state: () => ({
        totalCash: 0,
        totalFinance: 0,
        totalUser: 0,
        chartData: {},
        depositData: [],
        dataTopSpending: [],
        isLoading: false
    }),
    actions: {
        async init() {
            this.isLoading = true
            await new Promise(resolve => setTimeout(resolve, 1000))
            this.totalCash = 239000000
            this.totalFinance = 239000000
            this.totalUser = 500
            this.chartData = {
                Jan: [90, 90, 15],
                Feb: [65, 30, 25],
                Mar: [80, 25, 20],
                Apr: [75, 25, 20],
                Mei: [60, 25, 20],
                // Jun: [55, 20, 15],
                // Jul: [85, 20, 15],
                // Aug: [40, 15, 10],
                // Sep: [65, 25, 20],
                // Okt: [45, 20, 15],
                // Nov: [55, 20, 15],
                // Dec: [85, 30, 25],
            }

            this.depositData = [
                {
                    icon: icVisa,
                    title: 'Visa ending in 8495',
                    subtitle: 'Expiry 06/2024',
                    value: 25000,
                    type: 'D',
                },
                {
                    icon: icJago,
                    title: 'Jago ending in 4731',
                    subtitle: 'cynthia@halofigma.com',
                    value: 25000,
                    type: 'D',
                },
                {
                    icon: icApplePay,
                    title: 'Apple Pay',
                    subtitle: 'handi@halofigma.com',
                    value: 25000,
                    type: 'D',
                },
                {
                    icon: icMasterCard,
                    title: 'Mastercard ending in 4829',
                    subtitle: 'Expiry 06/2024',
                    value: 25000,
                    type: 'D',
                },
                {
                    icon: icPaypal,
                    title: 'Paypal deposit',
                    subtitle: 'arka@halofigma.com',
                    value: 25000,
                    type: 'D',
                },
                {
                    icon: icBca,
                    title: 'BCA ending in 1163',
                    subtitle: 'Expiry 03/2025',
                    value: 25000,
                    type: 'D',
                },
                {
                    icon: icStrip,
                    title: 'Stripe deposit',
                    subtitle: 'annisa@halofigma.com',
                    value: 25000,
                    type: 'D',
                },
                {
                    icon: icVisa,
                    title: 'Visa ending in 8495',
                    subtitle: 'Expiry 06/2024',
                    value: 25000,
                    type: 'D',
                },
                {
                    icon: icBca,
                    title: 'BCA ending in 1163',
                    subtitle: 'Expiry 03/2025',
                    value: 25000,
                    type: 'D',
                },
                {
                    icon: icStrip,
                    title: 'Stripe deposit',
                    subtitle: 'annisa@halofigma.com',
                    value: 25000,
                    type: 'D',
                },
            ]

            this.dataTopSpending = [
                {
                    img: icProfile1,
                    name: 'Alex Buckmaster',
                    position: 'Speech writer',
                    action: 'normal',
                },
                {
                    img: icProfile2,
                    name: 'Alex Buckmaster',
                    position: 'Speech writer',
                    action: 'up',
                },
                {
                    img: icProfile3,
                    name: 'Alex Buckmaster',
                    position: 'Speech writer',
                    action: 'up',
                },
                {
                    img: icProfile4,
                    name: 'Alex Buckmaster',
                    position: 'Speech writer',
                    action: 'up',
                },
                {
                    img: icProfile5,
                    name: 'Alex Buckmaster',
                    position: 'Speech writer',
                    action: 'up',
                },
                {
                    img: icProfile5,
                    name: 'Alex Buckmaster',
                    position: 'Speech writer',
                    action: 'up',
                },
            ]

            this.chartData = {
                ...this.chartData,
                ...{
                    Jun: [55, 20, 15],
                    Jul: [85, 20, 15],
                    Aug: [40, 15, 10],
                    Sep: [65, 25, 20],
                    Okt: [45, 20, 15],
                    Nov: [55, 20, 15],
                    Dec: [85, 30, 25],
                }
            }

            this.isLoading = false
        }
    }
})