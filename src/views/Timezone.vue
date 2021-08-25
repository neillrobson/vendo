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
            <fieldset class="border p-2" :disabled="!activeDayCountEnabled || null">
                <legend class="px-2 py-1 border">
                    <input id="active-day-count" type="checkbox" v-model="activeDayCountEnabled" class="inline w-auto m-0 mr-1">
                    <label for="active-day-count" class="inline">Active Day Count</label>
                </legend>
                <label for="active-day-count-first">First</label>
                <DatePicker v-model="activeDayCountFirst">
                    <template v-slot="{ inputValue, inputEvents }">
                        <input
                            id="active-day-count-first"
                            :value="inputValue"
                            v-on="inputEvents" />
                    </template>
                </DatePicker>
                <label for="active-day-count-period">Count</label>
                <input
                    id="active-day-count-period"
                    v-model="activeDayCountCount"
                    type="number" />
                <label for="active-day-count-stride">Stride</label>
                <input
                    id="active-day-count-stride"
                    v-model="activeDayCountStride"
                    type="number" />
                <label for="active-day-count-window">Window</label>
                <input
                    id="active-day-count-window"
                    v-model="activeDayCountWindow"
                    type="number" />
            </fieldset>
        </div>
        <Calendar
            class="mx-auto"
            :attributes="attributes"
            @dayclick="onDayClick" />
    </div>
</template>

<script>
import { Calendar, DatePicker } from 'v-calendar';

function daysBetween(to, from) {
    return Math.round((to - from) / 86400000);
}

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
            acc = acc.concat(Array(daysBetween(curr, prev) - 1).fill(0));
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
            activeDayReference: new Date(new Date().toDateString()),
            activeDayMask: '',
            activeDayCountEnabled: false,
            activeDayCountFirst: new Date(new Date().toDateString()),
            activeDayCountCount: 5,
            activeDayCountStride: 2,
            activeDayCountWindow: 4
        };
    },
    computed: {
        rawMask() {
            try {
                return atob(this.activeDayMask).split('').flatMap(
                    c => c.charCodeAt(0).toString(2).padStart(8, '0').split('').reverse().map(d => parseInt(d))
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
                if (curr) {
                    const newDate = new Date(this.activeDayReference);
                    newDate.setDate(newDate.getDate() + idx);
                    acc.push(newDate);
                }
                return acc;
            }, []);
        },
        activeDayCountList() {
            if (!this.activeDayCountEnabled || this.activeDayCountStride < 0) {
                return [];
            }

            let startIndex = daysBetween(this.activeDayCountFirst, this.activeDayReference);
            let endIndex = startIndex + this.activeDayCountCount * this.activeDayCountStride;
            if (startIndex > endIndex) { // Accounting for negative counts (taking windows from before the first date)
                [startIndex, endIndex] = [endIndex, startIndex];
            }

            const acc = [];

            for (
                let maskIndex = startIndex;
                maskIndex < endIndex;
                maskIndex += this.activeDayCountStride
            ) {
                let sliceEnd = Math.min(maskIndex + 1, this.rawMask.length);
                let sliceStart = Math.max(maskIndex + 1 - this.activeDayCountWindow, 0);
                if (sliceStart > sliceEnd) { // Accounting for negative window sizes (forward-looking windows)
                    [sliceStart, sliceEnd] = [sliceEnd, sliceStart];
                }
                if (sliceEnd <= 0 || sliceStart >= this.rawMask.length) {
                    continue;
                }

                const activeCount = this.rawMask.slice(sliceStart, sliceEnd).reduce((a, b) => a + b, 0);
                if (activeCount) {
                    const newDate = new Date(this.activeDayReference);
                    newDate.setDate(newDate.getDate() + maskIndex);
                    acc.push(newDate);
                }
            }

            return acc;
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
                    key: 'dates',
                    highlight: 'pink',
                    dates: this.activeDayList
                },
                {
                    key: 'count-agg',
                    dot: 'gray',
                    dates: this.activeDayCountList
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
