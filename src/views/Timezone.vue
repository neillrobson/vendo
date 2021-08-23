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
            <label
                for="active-day-mask"
                :class="{ 'text-red-500': rawMaskParseError }">Active Day Mask (base64)</label>
            <input
                id="active-day-mask"
                v-model="activeDayMask"
                @input="onMaskInput"
                :class="{ 'border-red-500': rawMaskParseError }"
                type="text" />
        </div>
        <Calendar
            class="mx-auto"
            :attributes="attributes"
            @dayclick="onDayClick" />
    </div>
</template>

<script>
import { Calendar, DatePicker } from 'v-calendar';

function sortedIndex(array, date) {
    let low = 0;
    let high = array.length;

    while (low < high) {
        const mid = (low + high) >>> 1;
        if (array[mid].getTime() < date.getTime()) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
}

function convertListToMask(list) {
    const rawMask = list.reduce((acc, curr, idx, arr) => {
        if (idx !== 0) {
            const prev = arr[idx - 1];
            const dayCount = Math.round((curr - prev) / 86400000);
            acc = acc.concat(Array(dayCount - 1).fill(0));
        }
        acc.push(1);
        return acc;
    }, []);

    let str = '';
    for (let i = 0; i < rawMask.length; i += 8) {
        str += String.fromCharCode(parseInt(rawMask.slice(i, i + 8).reverse().join(''), 2));
    }

    return btoa(str);
}

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
            try {
                return atob(this.activeDayMask).split('').flatMap(
                    c => c.charCodeAt(0).toString(2).padStart(8, '0').split('').reverse()
                );
            } catch (error) {
                return [];
            }
        },
        rawMaskParseError() {
            try {
                atob(this.activeDayMask);
                return false;
            } catch (error) {
                return true;
            }
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
    },
    methods: {
        onDayClick(day) {
            const dateList = this.activeDayList;
            const { date } = day;
            const idx = sortedIndex(dateList, date);
            if (dateList[idx] && dateList[idx].getTime() === date.getTime()) {
                dateList.splice(idx, 1);
            } else {
                dateList.splice(idx, 0, date);
            }

            if (dateList.length && idx === 0) {
                this.activeDayReference = dateList[0];
            }

            this.activeDayMask = convertListToMask(dateList);
        },
        onMaskInput() {
            try {
                atob(this.activeDayMask);
                this.rawMaskParseError = false;
            } catch (error) {
                this.rawMaskParseError = true;
            }
        }
    }
};
</script>
