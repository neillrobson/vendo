<template>
    <div class="container grid grid-cols-2 gap-4">
        <div class="config">
            <label for="active-day-reference">Active Day Reference (start)</label>
            <DatePicker v-model="activeDayReference">
                <template v-slot="{ inputValue, inputEvents }">
                    <input
                        id="active-day-reference"
                        :value="inputValue"
                        v-on="inputEvents" />
                </template>
            </DatePicker>
            <label for="active-day-mask">Active Day Mask (base64)</label>
            <input
                id="active-day-mask"
                v-model="activeDayMask"
                type="text" />
        </div>
        <Calendar
            class="mx-auto"
            :attributes="attributes" />
    </div>
</template>

<script>
import { Calendar, DatePicker } from 'v-calendar';

export default {
    components: {
        Calendar,
        DatePicker
    },
    data() {
        return {
            activeDayReference: new Date(),
            activeDayMask: ''
        };
    },
    computed: {
        rawMask() {
            return atob(this.activeDayMask).split('').flatMap(
                c => c.charCodeAt(0).toString(2).padStart(8, '0').split('').reverse()
            );
        },
        activeDayList() {
            return this.rawMask.reduce((acc, curr, idx) => {
                if (curr === '1') {
                    const newDate = new Date(this.activeDayReference);
                    newDate.setDate(newDate.getDate() + idx);
                    acc.push(newDate);
                }
                return acc;
            }, []);
        },
        attributes() {
            if (this.activeDayList.length === 0) return [];
            return [
                {
                    key: 'range',
                    highlight: {
                        color: 'pink',
                        fillMode: 'light'
                    },
                    dates: {
                        start: this.activeDayList[0],
                        end: this.activeDayList[this.activeDayList.length - 1]
                    }
                },
                {
                    key: 'today',
                    highlight: 'pink',
                    dates: this.activeDayList
                }
            ];
        }
    }
};
</script>
