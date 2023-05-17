//   /* header */
//   --header-background: #222629;

//   /* common */
//   --main-container-background: #222629;

//   /* text */
//   --primary-text: #ffffff;
//   --secondary-text: #6b6e70;
//   --disabled-text: #474b4f;
//   --accent-text: #86c232;
//   --accent-disabled-text: #61892f;


type Colors = 'primary-text' 
    |   'secondary-text'
    |   'disabled-text'
    |   'accent-text'
    |   'accent-disabled-text'
    |   'accent-disabled-text'
    |   'header-background'
    |   'main-container-background'
;

export const colors : Record<Colors, string> = {
    'primary-text' : '#ffffff',
    'secondary-text': '#6b6e70',
    'disabled-text': '#474b4f',
    'accent-text': '#86c232',
    'accent-disabled-text': '#61892f',
    'main-container-background': '#222629',
    'header-background': '#222629'
}