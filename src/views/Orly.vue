<template>
    <div class="container">
        <h2>O'Rly Generator</h2>
        <div class="grid grid-cols-2 gap-4">
            <form @submit.prevent="updateImage">
                <label for="title">Title</label>
                <input id="title" v-model="title" type="text" />
                <label for="topText">Top Text</label>
                <input id="topText" v-model="topText" type="text" />
                <label for="author">Author</label>
                <input id="author" v-model="author" type="text" />
                <label for="animalCode">Animal Code</label>
                <input
                    id="animalCode"
                    v-model="animalCode"
                    type="number"
                    min="1"
                    max="40" />
                <label for="colorCode">Color Code</label>
                <input
                    id="colorCode"
                    v-model="colorCode"
                    type="number"
                    min="0"
                    max="16" />
                <label for="guideText">Guide Text</label>
                <input id="guideText" v-model="guideText" type="text" />
                <label for="guideTextPlacement">Guide Text Placement</label>
                <select
                    id="guideTextPlacement"
                    v-model="guideTextPlacement"
                    name="guideTextPlacement">
                    <option
                        v-for="{ value, text } in PLACEMENT_OPTIONS"
                        :key="value"
                        :value="value">
                        {{ text }}
                    </option>
                </select>
                <button class="button primary">Generate</button>
            </form>
            <div><img :src="imgUrl" alt="" /></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
const BASE_LINK =
    'https://faas-nyc1-2ef2e6cc.doserverless.co/api/v1/web/fn-a628dc7f-5ceb-49d3-a207-10052ef6bac5/orly/generate';

export default {
    data() {
        return {
            title: '',
            topText: '',
            author: '',
            animalCode: 1,
            colorCode: 0,
            guideText: '',
            guideTextPlacement: 'bottom_right',
            imgUrl: ''
        };
    },
    created() {
        this.PLACEMENT_OPTIONS = [
            { value: 'top_left', text: 'Top Left' },
            { value: 'top_right', text: 'Top Right' },
            { value: 'bottom_left', text: 'Bottom Left' },
            { value: 'bottom_right', text: 'Bottom Right' }
        ];
    },
    methods: {
        async updateImage() {
            const res = await axios.get(BASE_LINK, {
                responseType: 'arraybuffer',
                params: {
                    title: this.title,
                    top_text: this.topText,
                    author: this.author,
                    image_code: this.animalCode,
                    theme: this.colorCode,
                    guide_text: this.guideText,
                    guide_text_placement: this.guideTextPlacement
                }
            });
            const base64imgstr = Buffer.from(res.data, 'binary').toString(
                'base64'
            );
            this.imgUrl = 'data:image/png;base64,' + base64imgstr;
        }
    }
};
</script>

<style lang="postcss" scoped>
iframe {
    margin: auto;
    width: 80%;
    height: 50vh;
    border: 1px solid black;
}
</style>
