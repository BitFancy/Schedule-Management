import colors from 'tailwindcss/colors'

// import { generate } from '@ant-design/colors'
// log_colors('#FFBA12')

// https://meyerweb.com/eric/tools/color-blend/#0D2CDA:00134D:1:hex

export default {
    colors: {
        transparent: 'transparent',
        current:     'currentColor',
        white:       '#ffffff',
        border:      '#E5E5EE',

        primary: {
            50:      "#e6effe",
            100:     "#ADC9F6",
            200:     "#74a2ed", // soft
            300:     "#5783EF",
            400:     "#3A65F1",
            500:     "#1D46F3", // default
            600:     "#1539E7",
            700:     "#0D2CDA", // dark
            800:     "#072094",
            900:     "#00134d",
            DEFAULT: "#1D46F3"
        },
        black: {
            50:      "#616161",
            100:     "#545454",
            200:     "#474747",
            300:     "#3b3b3b",
            400:     "#2e2e2e",
            500:     "#212121",
            600:     "#151515",
            700:     "#161616",
            800:     "#0d0d0d",
            900:     "#0B0817",
            DEFAULT: "#212121"
        },
        yellow: {
            50:      "#fffce6",
            100:     "#fff4b5",
            200:     "#ffea8c",
            300:     "#ffdd63",
            400:     "#ffce3b",
            500:     "#ffba12",
            600:     "#d99504",
            700:     "#b37400",
            800:     "#8c5600",
            900:     "#663c00",
            DEFAULT: "#FFBA12"
        },
        red: {
            50:      "#f9eeee",
            100:     "#F5CAC9",
            200:     "#F1A6A4",
            300:     "#ED817F",
            400:     "#E95D5A",
            500:     "#E53935",
            600:     "#D63632",
            700:     "#C6332E",
            800:     "#B7312B",
            900:     "#A72E27",
            DEFAULT: "#CA3A3A",
        },
        green: {
            50:      "#f0f8ef",
            100:     "#9AD99A",
            200:     "#44ba44",
            300:     "#2DA72D",
            400:     "#179317",
            500:     "#008000",
            600:     "#0B790B",
            700:     "#167317",
            800:     "#206C22",
            900:     "#2b652d",
            DEFAULT: "#008000"
        },
        gray: {
            50:      '#f9fafb',
            100:     '#f3f4f6',
            200:     '#e5e7eb',
            300:     '#d1d5db',
            400:     '#9ca3af',
            500:     '#6b7280',
            600:     '#4b5563',
            700:     '#374151',
            800:     '#1f2937',
            900:     '#111827',
            950:     '#030712',
            DEFAULT: '#4b5563',
        },
    },
}

// function log_colors(color) {
//     const colors = generate(color)
//     const obj = {
//         DEFAULT: color,
//     }
  
//     for(var i in colors) {
//         const n = i == 0 ? 50 : i * 100
//         obj[n] = colors[i]
//     }
    
//     console.log(JSON.stringify(obj, null, 4))
// }


// $gray_dark:             #607d8a;
// $gray_white:            #607d8a;

// $blue:                  #4189FF;
// $blue_light:            #2296f3;
// $purple:                #6670FF;

// $grey:                  #8e9e9e;
// $grey_dark:             #515a5a;
// $grey_light:            #C5C5C5;
// $grey_background:       #ededed;
// $grey_zero:             #f0f0f0;
// $white:                 #ffffff;
// $white_dark:            #efefef;

// $transparent:           rgba(0, 0, 0, 0.044);
// $transparent_dark:      rgba(0, 0, 0, 0.077);
// $transparent_light:     rgba(255, 255, 255, 0.17);
// $transparent_lighter:   rgba(255, 255, 255, 0.27);
// $popup:                 rgba(0, 0, 0, 0.27);

// $accent:                #82B1FF;
// $info:                  #2196F3;
// $border:                #E5E5EE;

// $light_to_dark_grey: #F6F8FC;
// $light_to_dark_grey2: #e8e8e8;

// $dark_to_black_grey: #F8F9FC;