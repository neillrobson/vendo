<template>
    <div class="container">
        <h1>O'Rly Generator</h1>
        <div class="grid grid-cols-2 gap-4">
            <form @submit.prevent="updateImage">
                <label for="title">Title</label>
                <input
                    id="title"
                    v-model="title"
                    type="text"
                    placeholder="Title Goes Here" />
                <label for="topText">Top Text</label>
                <input
                    id="topText"
                    v-model="topText"
                    type="text"
                    placeholder="This is top text." />
                <label for="author">Author</label>
                <input
                    id="author"
                    v-model="author"
                    type="text"
                    placeholder="Kanye West" />
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
                <input
                    id="guideText"
                    v-model="guideText"
                    type="text"
                    placeholder="The Definitive Guide" />
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
                <button class="button primary" :disabled="loading">
                    Generate
                </button>
            </form>
            <div class="flex justify-center items-center">
                <div class="preview">
                    <img
                        class="preview-img"
                        :class="{
                            'opacity-50': loading
                        }"
                        :src="imgUrl"
                        alt="" />
                    <div
                        v-if="loading"
                        role="status"
                        class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                        <svg
                            aria-hidden="true"
                            class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor" />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill" />
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div class="animals text-center">
            <h2>Animal Codes</h2>
            <p>
                <i>
                    The animal images are from the
                    <a
                        href="https://etc.usf.edu/clipart"
                        target="_blank"
                        rel="noopener">
                        USF ClipArt ETC
                    </a>
                    project. They are used in this O RLY Cover Generator for the
                    purposes of parody.
                </i>
            </p>
            <br />
            <div class="flex flex-wrap justify-center gap-x-10 gap-y-14">
                <div v-for="i in 40" :key="i" class="animal">
                    <img :src="require(`@/assets/animals/${i}.png`)" alt="" />
                    <span>{{ i }}</span>
                </div>
            </div>
        </div>
        <div class="colors text-center">
            <h2>Color Codes</h2>
            <div class="flex flex-wrap justify-center gap-5">
                <div
                    v-for="(code, i) in COLOR_CODES"
                    :key="i"
                    class="color"
                    :style="{ 'background-color': code }">
                    {{ i }}
                </div>
            </div>
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
            animalCode: 2,
            colorCode: 1,
            guideText: '',
            guideTextPlacement: 'bottom_right',
            imgUrl: require('@/assets/sample.png'),
            loading: false
        };
    },
    created() {
        this.PLACEMENT_OPTIONS = [
            { value: 'top_left', text: 'Top Left' },
            { value: 'top_right', text: 'Top Right' },
            { value: 'bottom_left', text: 'Bottom Left' },
            { value: 'bottom_right', text: 'Bottom Right' }
        ];

        this.COLOR_CODES = [
            'rgba(85, 19, 93, 255)',
            'rgba(113, 112, 110, 255)',
            'rgba(128, 27, 42, 255)',
            'rgba(184, 7, 33, 255)',
            'rgba(101, 22, 28, 255)',
            'rgba(80, 61, 189, 255)',
            'rgba(225, 17, 5, 255)',
            'rgba(6, 123, 176, 255)',
            'rgba(247, 181, 0, 255)',
            'rgba(0, 15, 118, 255)',
            'rgba(168, 0, 155, 255)',
            'rgba(0, 132, 69, 255)',
            'rgba(0, 153, 157, 255)',
            'rgba(1, 66, 132, 255)',
            'rgba(177, 0, 52, 255)',
            'rgba(55, 142, 25, 255)',
            'rgba(133, 152, 0, 255)'
        ];
    },
    methods: {
        async updateImage() {
            this.loading = true;
            const res = await axios.get(BASE_LINK, {
                responseType: 'arraybuffer',
                params: {
                    title: this.title || undefined,
                    top_text: this.topText || undefined,
                    author: this.author || undefined,
                    image_code: this.animalCode,
                    theme: this.colorCode,
                    guide_text: this.guideText || undefined,
                    guide_text_placement: this.guideTextPlacement
                }
            });
            const base64imgstr = Buffer.from(res.data, 'binary').toString(
                'base64'
            );
            this.imgUrl = 'data:image/png;base64,' + base64imgstr;
            this.loading = false;
        }
    }
};
</script>

<style lang="postcss" scoped>
hr {
    margin: 20px 0;
}

.preview {
    position: relative;
    box-shadow: 7px 7px 30px rgba(64, 64, 64, 0.81);
}

.preview-img {
    width: 300px;
    height: 420px;
}

.animals {
    margin-bottom: 50px;
}

.animal {
    position: relative;
    width: 120px;
    font-size: 26px;
    text-align: center;
}

.animal img {
    margin-bottom: 10px;
}

.color {
    width: 90px;
    height: 90px;
    border-radius: 220px;
    color: white;
    font-size: 26px;
    line-height: 90px;
}
</style>
